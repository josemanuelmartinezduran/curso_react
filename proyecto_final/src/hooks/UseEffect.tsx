import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}