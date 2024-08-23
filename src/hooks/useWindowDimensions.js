import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    // Call the function to set initial dimensions
    updateDimensions();

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
