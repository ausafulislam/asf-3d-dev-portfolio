import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const animateCircles = (event) => {
      if (event.target.closest("a, button, input, textarea, select")) return; // Prevent effect on interactive elements

      const circle = document.createElement("div");
      circle.classList.add("circle");
      document.body.appendChild(circle);

      circle.style.left = `${event.clientX}px`;
      circle.style.top = `${event.clientY}px`;
      circle.style.transition = "all 1s ease-out"; // Increased duration to 1s

      requestAnimationFrame(() => {
        circle.style.transform = "scale(8)"; // Increased scale for longer animation
        circle.style.opacity = "0";
      });

      setTimeout(() => {
        circle.remove();
      }, 1500); // Increased time for circle to disappear
    };

    document.body.style.cursor = "none";
    document.addEventListener("mousemove", animateCircles);

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", animateCircles);
    };
  }, []);

  return (
    <style>{`
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(8); /* Increased scale to make the effect more dramatic */
          opacity: 0;
        }
      }

      @keyframes colorChange {
        0% {
          background: radial-gradient(line, #6713a8, #151030);
        }
        50% {
          background: radial-gradient(line, #1f122b, #151030);
        }
        100% {
          background: radial-gradient(line, #3513a8, #151030);
        }
      }
      
      .circle {
        width: 20px; /* Increased size for a more noticeable effect */
        height: 20px; /* Increased size */
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 10px #3513a8, 0 0 20px #3513a8; /* Stronger glow */
        mix-blend-mode: screen;
        z-index: 9999;
        animation: pulse 1s ease-out forwards, colorChange 2s infinite alternate; /* Adjusted durations */
      }
    `}</style>
  );
};

export default CursorTrail;
