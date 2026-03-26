import { useEffect, useRef } from 'react';

const GalaxyField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        const mouse = { x: -9999, y: -9999 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

        /* ─── Stars ─────────────────────────────────────── */
        const STAR_COUNT = 280;
        const stars = Array.from({ length: STAR_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.6 + 0.2,
            opacity: Math.random() * 0.7 + 0.15,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.007 + 0.002,
            color: ['255,255,255', '196,181,253', '147,197,253', '165,180,252'][Math.floor(Math.random() * 4)],
            vx: (Math.random() - 0.5) * 0.08,
            vy: (Math.random() - 0.5) * 0.08,
        }));

        /* ─── Shooting Stars ────────────────────────────── */
        const shootingStars = [];
        const spawnShootingStar = () => {
            shootingStars.push({
                x: Math.random() * canvas.width * 0.7,
                y: Math.random() * canvas.height * 0.4,
                length: Math.random() * 160 + 80,
                speed: Math.random() * 6 + 5,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
                opacity: 1,
                width: Math.random() * 1.5 + 0.5,
                tail: [],
                life: 0,
                maxLife: Math.floor(Math.random() * 30 + 25),
            });
        };

        /* ─── Nebula "cloud" data ───────────────────────── */
        const nebulae = [
            { x: canvas.width * 0.15, y: canvas.height * 0.25, r: 320, color: '79,70,229', a: 0.04 },
            { x: canvas.width * 0.75, y: canvas.height * 0.55, r: 280, color: '37,99,235', a: 0.035 },
            { x: canvas.width * 0.45, y: canvas.height * 0.75, r: 260, color: '109,40,217', a: 0.03 },
            { x: canvas.width * 0.85, y: canvas.height * 0.15, r: 200, color: '14,116,144', a: 0.025 },
        ];

        /* ─── Asteroids ─────────────────────────────────── */
        const ASTEROID_COUNT = 8;
        const asteroids = Array.from({ length: ASTEROID_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1.5,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            opacity: Math.random() * 0.4 + 0.15,
            color: ['196,181,253', '147,197,253', '255,255,255'][Math.floor(Math.random() * 3)],
        }));

        let frame = 0;
        let nextShoot = 90; // frames until next shooting star

        const drawNebulae = () => {
            nebulae.forEach(n => {
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
                g.addColorStop(0, `rgba(${n.color},${n.a})`);
                g.addColorStop(0.5, `rgba(${n.color},${n.a * 0.5})`);
                g.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const drawStars = () => {
            stars.forEach(s => {
                s.phase += s.speed;
                const twinkle = 0.55 + 0.45 * Math.sin(s.phase);

                // Cursor repulsion
                const dx = s.x - mouse.x, dy = s.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100 && dist > 0) {
                    const f = (100 - dist) / 100 * 0.5;
                    s.vx += (dx / dist) * f;
                    s.vy += (dy / dist) * f;
                }
                s.vx *= 0.97; s.vy *= 0.97;
                s.x += s.vx; s.y += s.vy;
                if (s.x < 0) s.x = canvas.width; if (s.x > canvas.width) s.x = 0;
                if (s.y < 0) s.y = canvas.height; if (s.y > canvas.height) s.y = 0;

                const o = s.opacity * twinkle;

                // Outer glow
                const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3.5);
                g.addColorStop(0, `rgba(${s.color},${o * 0.5})`);
                g.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
                ctx.fillStyle = g; ctx.fill();

                // Core
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${s.color},${o})`; ctx.fill();
            });
        };

        const drawAsteroids = () => {
            asteroids.forEach(a => {
                a.x += a.vx; a.y += a.vy;
                if (a.x < 0) a.x = canvas.width; if (a.x > canvas.width) a.x = 0;
                if (a.y < 0) a.y = canvas.height; if (a.y > canvas.height) a.y = 0;

                // Glow
                const g = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.r * 4);
                g.addColorStop(0, `rgba(${a.color},${a.opacity * 0.6})`);
                g.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath(); ctx.arc(a.x, a.y, a.r * 4, 0, Math.PI * 2);
                ctx.fillStyle = g; ctx.fill();
                ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${a.color},${a.opacity})`; ctx.fill();
            });
        };

        const drawShootingStars = () => {
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const s = shootingStars[i];
                s.life++;
                const progress = s.life / s.maxLife;
                const fade = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;

                const tx = s.x + Math.cos(s.angle) * s.speed;
                const ty = s.y + Math.sin(s.angle) * s.speed;

                // Draw streaking trail
                const grad = ctx.createLinearGradient(
                    s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length,
                    tx, ty
                );
                grad.addColorStop(0, 'rgba(255,255,255,0)');
                grad.addColorStop(0.7, `rgba(200,210,255,${fade * 0.35})`);
                grad.addColorStop(1, `rgba(255,255,255,${fade * 0.9})`);

                ctx.beginPath();
                ctx.moveTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
                ctx.lineTo(tx, ty);
                ctx.strokeStyle = grad;
                ctx.lineWidth = s.width;
                ctx.lineCap = 'round';
                ctx.stroke();

                // Bright head
                ctx.beginPath();
                ctx.arc(tx, ty, s.width * 1.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${fade * 0.95})`;
                ctx.fill();

                s.x = tx; s.y = ty;
                if (s.life >= s.maxLife) shootingStars.splice(i, 1);
            }
        };

        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawNebulae();
            drawStars();
            drawAsteroids();
            drawShootingStars();

            frame++;
            if (frame >= nextShoot) {
                spawnShootingStar();
                nextShoot = frame + Math.floor(Math.random() * 160 + 80);
            }

            animId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
        />
    );
};

export default GalaxyField;
