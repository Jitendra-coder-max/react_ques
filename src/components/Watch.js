import React, { useState, useEffect } from 'react';

const Watch = () => {
  const [startTime, setStartTime] = useState(new Date()); // Set the start time to the current time

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the time every second
      setStartTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to format time
  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };

  return (
    <div>
      <h2>Watch</h2>
      <p>Start Time: {formatTime(startTime)}</p>
      {/* Add additional watch features here */}
    </div>
  );
};

export default Watch;
