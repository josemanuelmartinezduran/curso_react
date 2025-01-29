import React, { useState, useMemo } from 'react';

function CalculoCostoso({ numero }: { numero: number }) {
  const resultado = useMemo(() => {
    // Simular un cálculo costoso
    let resultado = 0;
    for (let i = 0; i < 1000000000; i++) {
      resultado += i;
    }
    return resultado;
  }, [numero]);

  return (
    <div>
      Resultado: {resultado}
    </div>
  );
}