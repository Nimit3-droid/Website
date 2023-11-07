import { useEffect, useRef } from 'react';

const BeautifulAnimation = () => {
  const canvasRef = useRef(null);
  const waveOffset = useRef(0);
  const waveSpeed = 0.05; // Adjust wave speed as needed
  const waveHeight = 35; // Adjust wave height as needed

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let requestId;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height =( window.innerHeight)*0.05;

      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);

      const centerY = canvas.height /1.05;
      const increment = 0.015;

      waveOffset.current += waveSpeed;

      for (let i = 0; i < canvas.width; i++) {
        const angle = waveOffset.current + i * increment ;
        const y = centerY + Math.sin(angle) * waveHeight;
        context.beginPath();
        context.moveTo(i, y);
        context.lineTo(i, canvas.height);
        context.strokeStyle = 'white';
        context.stroke();
      }

      requestId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(requestId);
  }, []);

  return <canvas ref={canvasRef} className='relative' />;
};

export default BeautifulAnimation;
