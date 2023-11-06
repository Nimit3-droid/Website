import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const windSpeed = 0.5; // Adjust wind speed as needed
  const snowSpeed = 0.5; // Adjust snow speed as needed
  const repelDistance = 100; // Adjust the repel distance as needed

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let particles = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * snowSpeed + 0.5, // Adjust snow speed here
        drift: Math.random() - 0.5,
      };
    };

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        context.fillStyle = 'white';
        context.fill();

        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < repelDistance) {
          const angle = Math.atan2(dy, dx);
          particle.x += Math.cos(angle + Math.PI) * snowSpeed;
          particle.y += Math.sin(angle + Math.PI) * snowSpeed;
        } else {
          if (particle.y + particle.radius >= canvas.height) {
            particle.x += windSpeed; // Apply wind effect to particles at the bottom
          }
          particle.y += particle.speed;
          particle.x += particle.drift;
        }

        // Keep particles within the canvas bounds
        if (particle.x > canvas.width) {
          particle.x = 0;
        } else if (particle.x < 0) {
          particle.x = canvas.width;
        }
        if (particle.y > canvas.height) {
          particle.y = 0;
        } else if (particle.y < 0) {
          particle.y = canvas.height;
        }
      }

      requestAnimationFrame(draw);
    };

    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    draw();

    canvas.addEventListener('mousemove', (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    });
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default CanvasBackground;
