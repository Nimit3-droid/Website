// import { useEffect, useRef } from 'react';

// const CanvasBackground = () => {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const windSpeed = 0.5; // Adjust wind speed as needed
//   const snowSpeed = 0.5; // Adjust snow speed as needed
//   const repelDistance = 100; // Adjust the repel distance as needed

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     let particles = [];

//     const createParticle = () => {
//       return {
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 4 + 1,
//         speed: Math.random() * snowSpeed + 0.5, // Adjust snow speed here
//         drift: Math.random() - 0.5,
//       };
//     };

//     const draw = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       context.fillStyle = 'black';
//       context.fillRect(0, 0, canvas.width, canvas.height);

//       for (let i = 0; i < particles.length; i++) {
//         const particle = particles[i];
//         context.beginPath();
//         context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
//         context.fillStyle = 'white';
//         context.fill();

//         const dx = particle.x - mouseRef.current.x;
//         const dy = particle.y - mouseRef.current.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         if (distance < repelDistance) {
//           const angle = Math.atan2(dy, dx);
//           particle.x += Math.cos(angle + Math.PI) * snowSpeed;
//           particle.y += Math.sin(angle + Math.PI) * snowSpeed;
//         } else {
//           if (particle.y + particle.radius >= canvas.height) {
//             particle.x += windSpeed; // Apply wind effect to particles at the bottom
//           }
//           particle.y += particle.speed;
//           particle.x += particle.drift;
//         }

//         // Keep particles within the canvas bounds
//         if (particle.x > canvas.width) {
//           particle.x = 0;
//         } else if (particle.x < 0) {
//           particle.x = canvas.width;
//         }
//         if (particle.y > canvas.height) {
//           particle.y = 0;
//         } else if (particle.y < 0) {
//           particle.y = canvas.height;
//         }
//       }

//       requestAnimationFrame(draw);
//     };

//     for (let i = 0; i < 100; i++) {
//       particles.push(createParticle());
//     }

//     draw();

//     canvas.addEventListener('mousemove', (event) => {
//       mouseRef.current.x = event.clientX;
//       mouseRef.current.y = event.clientY;
//     });
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
// };

// export default CanvasBackground;


import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starSpeed = 0.5; // Adjust star speed as needed
  const repelDistance = 100; // Adjust the repel distance as needed

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let stars = [];

    const createStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        opacity: Math.random(),
        direction: Math.random() > 0.5 ? 1 : -1,
      };
    };

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        context.fill();

        star.opacity += star.direction * 0.01;
        if (star.opacity < 0 || star.opacity > 1) {
          star.direction *= -1;
        }

        const dx = star.x - mouseRef.current.x;
        const dy = star.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < repelDistance) {
          const angle = Math.atan2(dy, dx);
          star.x += Math.cos(angle + Math.PI) * starSpeed;
          star.y += Math.sin(angle + Math.PI) * starSpeed;
        } else {
          star.y += starSpeed;
        }

        // Keep stars within the canvas bounds
        if (star.x > canvas.width) {
          star.x = 0;
        } else if (star.x < 0) {
          star.x = canvas.width;
        }
        if (star.y > canvas.height) {
          star.y = 0;
        } else if (star.y < 0) {
          star.y = canvas.height;
        }
      }

      requestAnimationFrame(draw);
    };

    for (let i = 0; i < 100; i++) {
      stars.push(createStar());
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
