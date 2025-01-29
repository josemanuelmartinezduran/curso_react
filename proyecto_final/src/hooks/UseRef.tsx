import React, { useRef } from 'react';

function FocoInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>
        Enfocar input
      </button>
    </div>
  );
}

export default FocoInput;