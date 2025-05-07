import { useEffect, useRef } from 'react';
import './loading-animation.css';
import yutika from '../assets/yutika.svg';
import box from '../assets/box.svg';

function LoadingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
      console.error('2D context not available');
      return;
    }

    const marioImg = new Image();
    const boxImg = new Image();
    marioImg.src = yutika; // Your Mario SVG path
    boxImg.src = box;     // Your Box SVG path

    let animationFrameId: number;

    function resizeCanvas() {
        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        console.log(canvas.width)
        let mario = {
          x: 0,
          y: canvas.height / 2, // ground level
          width: 50,
          height: 50,
          speed: 2,
          vy: 0,           // vertical speed
          gravity: 0.5,    // gravity
          jumpStrength: -13,
          groundY: canvas.height / 2 + 200
        };

        let boxes: Array<any> = [];

        // get number of boxes possible
        // Create multiple boxes
        const numberOfBoxes = Math.floor((canvas.width + 100)/140);
        const spaceBetweenBoxes = (canvas.width - numberOfBoxes * 40) / (numberOfBoxes - 1);
        for (let i = 0; i < numberOfBoxes; i += 1) {
          boxes.push({ x: i * (40 + spaceBetweenBoxes), y: canvas.height / 2, width: 40, height: 40, bounceOffset: 0, bouncing: false });
        }

        function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        
          // Apply vertical physics
          mario.vy += mario.gravity;
          mario.y += mario.vy;
        
          if(mario.x > canvas.width || mario.x < 0) {
            mario.speed = -mario.speed;
          }
          // Ground collision
          if (mario.y >= mario.groundY) {
            mario.y = mario.groundY;
            mario.vy = mario.jumpStrength; // Reset vertical speed for jump
          }
        
          // Draw Mario
          ctx.drawImage(marioImg, mario.x, mario.y - mario.height, mario.width, mario.height);
        
          // Draw boxes and handle bounce
          boxes.forEach(box => {
            const offsetY = box.bounceOffset;
            ctx.drawImage(boxImg, box.x, box.y - offsetY, box.width, box.height);
        
            if (box.bouncing) {
              box.bounceOffset += box.bounceDirection * 2;
              if (box.bounceOffset > 20) box.bounceDirection = -1;
              if (box.bounceOffset <= 0) {
                box.bounceOffset = 0;
                box.bouncing = false;
              }
            }
          });
        
          // Move Mario horizontally
          mario.x += mario.speed;
        
          // Collision detection during jump
          boxes.forEach(box => {
            const marioTop = mario.y - mario.height;
            if (
              mario.x + mario.width > box.x &&
              mario.x < box.x + box.width &&
              marioTop <= box.y + 5 &&
              marioTop >= box.y - 5 &&
              mario.vy < 0 && // Only detect on upward motion
              !box.bouncing
            ) {
              box.bouncing = true;
              box.bounceDirection = 1;
            }
          });
        
          animationFrameId = requestAnimationFrame(draw);
        }

        marioImg.onload = () => {
          boxImg.onload = () => {
            draw();
          };
        };
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className='mario-animation'>
      <canvas ref={canvasRef} style={{height: "100%", width: "100%"}}/>
    </div>
  );
}

export default LoadingAnimation;