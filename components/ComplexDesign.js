import React, { useEffect, useRef } from 'react';

const ComplexDesign = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let startX = width / 2 - 150;
    let startY = height / 2 - 150;

    const drawComplexDesign = (size, depth, x, y) => {
      if (depth === 0) {
        return;
      } else {
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + size, y);
          ctx.strokeStyle = 'white';
          ctx.stroke();
          drawComplexDesign(size / 2, depth - 1, x, y);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + size);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x + size, y);
          ctx.lineTo(x + size, y + size);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y + size);
          ctx.lineTo(x + size, y + size);
          ctx.stroke();
          drawComplexDesign(size / 2, depth - 1, x, y + size);
          ctx.beginPath();
          ctx.moveTo(x, y + size);
          ctx.lineTo(x + size, y + size);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x + size, y);
          ctx.lineTo(x, y + size);
          ctx.stroke();
          x += size;
        }
      }
    };

    let size = 300;
    let depth = 4;

    let animationFrameId;
    const render = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      drawComplexDesign(size, depth, startX, startY);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }} />;
};

export default ComplexDesign;
