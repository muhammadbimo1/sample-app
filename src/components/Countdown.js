import React, { useState, useEffect } from 'react';

function Countdown() {
  const [count, setCount] = useState(10); // Initial countdown value

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000); // Update the countdown every 1000ms (1 second)

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, [count]); // The effect depends on the 'count' state

  return (
    <div className="countdown">
      <h1>Countdown: {count}</h1>
    </div>
  );
}

export default Countdown;
