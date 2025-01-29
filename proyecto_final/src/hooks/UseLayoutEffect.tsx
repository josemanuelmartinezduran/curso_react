import React, { useState, useLayoutEffect, useRef } from 'react';

function MedirAncho() {
  const [ancho, setAncho] = useState(0);
  const elementoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (elementoRef.current) {
      setAncho(elementoRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div ref={elementoRef} style={{ width: 200, height: 100, backgroundColor: 'lightblue' }}>
        {/* Contenido del div */}
      </div>
      <p>Ancho del div: {ancho}px</p>
    </div>
  );
}

export default MedirAncho;