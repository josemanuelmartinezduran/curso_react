import { useState } from 'react';

function useCounter(valorInicial: number = 0) {
  const [count, setCount] = useState(valorInicial);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(valorInicial);
  };

  return { count, incrementar, decrementar, reset };
}

export default function Counter() {
    const { count, incrementar, decrementar, reset } = useCounter(10);
  
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={() => incrementar(5)}>Incrementar por 5</button>
        <button onClick={reset}>Reiniciar</button>
      </div>
    );
  }