import { useEffect, } from 'react';
import './hero.css';
import gs from '../assets/images/gs.png'; // Import the image
import nift from '../assets/images/nift.png'; // Import the image
import delhi from '../assets/images/delhi.png'; // Import the image
import atom from '../assets/images/atom.png'; // Import the image
import yutika from '../assets/yutika.svg'; // Import the image
import char from '../assets/char.svg'; // Import the image
import sticky from '../assets/sticky.svg'; // Import the image
import pen from '../assets/pen.svg'; // Import the image
import bezier from '../assets/bezier.svg'; // Import the image
import note from '../assets/note.svg'; // Import the image
import heart from '../assets/heart.svg'; // Import the image
import box from '../assets/box.svg'; // Import the image

function HERO() {
  useEffect(() => {
    const canvas = document.getElementById('rotatingCanvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('2D context not available');
      return;
    }

    let angleOffset = 0; // Initial rotation angle
    let animationFrameId: number; // To store the animation frame ID

    const images = [yutika, char, sticky, pen, bezier, note, heart, box]; // Array of image sources
    const numImages = 8; // Number of images
    const loadedImages: HTMLImageElement[] = [];

    // Load images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      loadedImages.push(img);
    });

    const resizeCanvas = () => {
      // Resize canvas to fit container
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Recalculate dependent variables
      const radius = Math.min(canvas.height, canvas.width) / 2; // Radius of the circle
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Redraw everything
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Draw outer circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(217, 217, 217, 0.02)';
        ctx.fill();

        // Draw middle circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 35, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(217, 217, 217, 0.5)';
        ctx.setLineDash([4, 4]); // Dotted effect
        ctx.fillStyle = 'rgba(217, 217, 217, 0.02)';
        ctx.fill();
        ctx.stroke();

        // Draw the images
        for (let i = 0; i < numImages; i++) {
          const angle = (i * (2 * Math.PI)) / numImages + angleOffset; // Calculate angle for each image
          const x = centerX + (radius - 35) * Math.cos(angle) - 15; // Adjust x to center the image
          const y = centerY + (radius - 35) * Math.sin(angle) - 15; // Adjust y to center the image
          const img = loadedImages[i % loadedImages.length]; // Cycle through images

          if (img.complete) {
            ctx.drawImage(img, x, y, 30, 30); // Draw the image
          }
        }

        // Draw inner circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 70, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(217, 217, 217, 0.02)';
        ctx.fill();

        const img = loadedImages[0];
        if (img.complete) {
          ctx.drawImage(img, centerX - (radius - 70) * 0.75, centerY - (radius - 70) * 0.75, (radius - 70) * 1.5, (radius - 70) * 1.5); // Draw the image
        }

        angleOffset += 0.01; // Increment the rotation angle
        animationFrameId = requestAnimationFrame(draw); // Animate
      };
      cancelAnimationFrame(animationFrameId); // Cancel any previous animation frame
      draw(); // Start the animation
    };

    // Resize canvas on load and on window resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <span className="hero-title">Hi, I'm Yutika!</span>
        <span className="hero-subtitle" style={{ marginBottom: 0 }}>
        I design intuitive experiences by stepping into 
        </span>
        <span className="hero-subtitle">
        the user's world and turning complexity into clarity.
        </span>
        <div className="hero-jobs">
          {/* <div className="hero-job">
            <svg className="hero-job-border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" preserveAspectRatio="none">
              <rect x="0" y="0" width="100%" height="100%" rx="24" ry="24" fill="none" stroke="rgba(127, 127, 127, 1)" strokeWidth="2" strokeDasharray="8 4" />
            </svg>
            <span>Product Designer at <img src={gs} alt="Goldman Sachs" className="hero-image" /> Goldman Sachs</span>
          </div> */}
          <span className="hero-job">
            Product Designer at <img src={gs} alt="Goldman Sachs" className="hero-image" /> Goldman Sachs
          </span>
          <span className="hero-job">
            Previously an inern at <img src={atom} alt="Atom EI" className="hero-image" /> Atom EI and <img src={delhi} alt="Delhi Govt." className="hero-image" /> Govt. of Delhi
          </span>
          <span className="hero-job">
            Studied at <img src={nift} alt="NIFT" className="hero-image" />National Institute of Fashion Technology
          </span>
        </div>
      </div>
      <div className="hero-animation">
        <canvas id="rotatingCanvas" className="hero-canvas" style={{height: "100%", width: "100%"}}></canvas>
      </div>
    </div>
  );
}

export default HERO;
