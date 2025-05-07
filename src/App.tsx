import { useState, useEffect } from 'react';
import './App.css';
import HERO from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const handleResize = () => {
      const cols = Math.ceil(window.innerWidth / 24); // Calculate number of columns
      const rows = Math.ceil(window.innerHeight / 24); // Calculate number of rows
      setGridDimensions({ rows, cols });
    };

    handleResize(); // Set initial grid dimensions
    window.addEventListener('resize', handleResize); // Update grid on window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || 0; // Current scroll position
      const scrollHeight = document.documentElement.scrollHeight; // Total scrollable height
      const clientHeight = window.innerHeight; // Height of the viewport
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100; // Calculate scroll progress as a percentage
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll listener to #root

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className='container'>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <Navbar/>
      <div className="grid-container" onMouseMove={handleMouseMove} style={{
                gridTemplateColumns: `repeat(${gridDimensions.cols}, 1fr)`,
                gridTemplateRows: `repeat(${gridDimensions.rows}, 1fr)`
              }}>
      {Array.from({ length: gridDimensions.rows * gridDimensions.cols }).map((_, index) => {
          // Calculate the position of each grid point
          const row = Math.floor(index / gridDimensions.cols);
          const col = index % gridDimensions.cols;
          const pointX = col * 24 + 12; // 50px spacing, 25px offset for center
          const pointY = row * 24 + 12;

          // Calculate the distance from the cursor to the grid point
          const dx = cursorPosition.x - pointX;
          const dy = cursorPosition.y - pointY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Apply transformation only if the distance is within 100px
          const transform =
            distance < 50
              ? `translate(${dx * 0.2}px, ${dy * 0.2}px)` // Scale the movement
              : 'none';

          return (
            <div key={index} className="grid-point-container">
              <span
                className="grid-point"
                style={{
                  transform,
                  transition: distance < 50 ? 'transform 0.1s ease-out' : 'transform 0.3s ease-in',
                }}
              ></span>
            </div>
          );
        })}
      </div>
      <HERO />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
