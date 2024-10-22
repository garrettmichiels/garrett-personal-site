import React, { useEffect, useRef } from 'react';
import { useTheme } from '@mui/joy/styles';

interface DotBackgroundProps {
  dotSize: number;
  dotSpacing: number;
  opacity: number;
}

const DotBackground: React.FC<DotBackgroundProps> = ({ dotSize, dotSpacing, opacity }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    let animationFrameId: number;

    const drawDots = (time: number) => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotColor = theme.vars.palette.background.level1;
      ctx.fillStyle = dotColor;

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const offsetX = Math.sin(time * 0.001 + y * 0.1) * 2;
          const offsetY = Math.cos(time * 0.002 + x * 0.1) * 2;
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(drawDots);
    };

    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(drawDots);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize, dotSpacing, opacity, theme.vars.palette.background.level1]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: opacity,
        backgroundColor: theme.vars.palette.background.body,
      }}
    />
  );
};

export default DotBackground;
