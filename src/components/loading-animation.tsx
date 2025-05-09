import { useEffect, useRef } from 'react';
import './loading-animation.css';
import yutika from '../assets/yutika.svg';
import box from '../assets/box.svg';
import heart from '../assets/heart.svg';
import note from '../assets/note.svg';
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
    const heartImg = new Image();
    const noteImg = new Image();
    marioImg.src = yutika; // Your Mario SVG path
    boxImg.src = box;     // Your Box SVG path
    heartImg.src = heart; // Heart image
    noteImg.src = note; // Note image
    let animationFrameId: number;

    function resizeCanvas() {
      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const mario = {
        x: canvas.width / 2 -25, // Center Mario horizontally
        y: canvas.height - 130,
        width: 50,
        height: 50,
        vy: 0,
        gravity: 0.5,
        jumpStrength: -10,
        isJumping: false,
        groundY: canvas.height - 130,
      };

      let boxes: Array<any> = [];
      let hearts: Array<any> = []; // Array to store heart particles

      // Create multiple boxes
      const numberOfBoxes = Math.floor((canvas.width)/ 190);
      const boxDimension = 40;
      const spaceBetweenBoxes = (canvas.width - numberOfBoxes * boxDimension) / (numberOfBoxes);
      for (let i = 0; i < numberOfBoxes; i += 1) {
        boxes.push({
          x: i * (boxDimension + spaceBetweenBoxes), // Start boxes off-screen
          y: mario.groundY - 100,
          width: boxDimension,
          height: boxDimension,
          bounceOffset: 0,
          bouncing: false,
        });
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Apply gravity to Mario
        mario.vy += mario.gravity;
        mario.y += mario.vy;

        // Ground collision
        if (mario.y >= mario.groundY) {
          mario.y = mario.groundY;
          mario.vy = 0;
          mario.isJumping = false;
        }

        // Draw Mario
        ctx.drawImage(marioImg, mario.x, mario.y, mario.width, mario.height);

        // Move and draw boxes
        boxes.forEach((box) => {
          box.x -= 4; // Move boxes to the left

          // Reset box position when it goes off-screen
          if (box.x + box.width < 0) {
            box.x = canvas.width - box.width;
            box.bouncing = false;
            box.bounceOffset = 0;
          }

          // Draw box
          const offsetY = box.bounceOffset;
          ctx.drawImage(boxImg, box.x, box.y - offsetY, box.width, box.height);

          // Handle bounce
          if (box.bouncing) {
            box.bounceOffset += box.bounceDirection * 2;
            if (box.bounceOffset > 20) box.bounceDirection = -1;
            if (box.bounceOffset <= 0) {
              box.bounceOffset = 0;
              box.bouncing = false;
            }
          }

          // Detect head hit
          const marioTop = mario.y - mario.height;
          if (
            mario.vy < 0 &&
            mario.x + mario.width > box.x &&
            mario.x < box.x + box.width &&
            marioTop <= box.y &&
            marioTop >= box.y - 10 &&
            !box.bouncing
          ) {
            box.bouncing = true;
            box.bounceDirection = 1;
            
            for (let i = 0; i < 1; i++) {
              hearts.push({
                x: box.x + box.width / 2,
                y: box.y - 10,
                vy: -Math.random(), // Random upward velocity
                vx: (Math.random() - 0.5) * 2, // Random horizontal velocity
                alpha: 1, // Opacity
                isHeart: Math.floor(Math.random() * 2) === 1 || true
              });
            }
          }

          // Move and draw hearts
          hearts = hearts.filter((heart) => {
            heart.x += heart.vx;
            heart.y += heart.vy;
            heart.alpha -= 0.002; // Fade out faster to avoid long-lived particles

            // Only keep hearts that are still visible
            if (heart.alpha > 0) {
              ctx.globalAlpha = heart.alpha; // Set opacity
              ctx.drawImage(heart.isHeart ? heartImg : noteImg, heart.x, heart.y, 20, 20);
              ctx.globalAlpha = 1; // Reset opacity
              return true; // Keep this heart
            }
            return false; // Remove this heart
          });

          // Make Mario jump if a box is approaching
          if (
            !mario.isJumping && // Mario is not already jumping
            box.x < mario.x + mario.width && // Box is near Mario's horizontal position
            box.x + box.width > mario.x // Box is overlapping Mario's position
          ) {
            mario.vy = mario.jumpStrength; // Trigger jump
            mario.isJumping = true;
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