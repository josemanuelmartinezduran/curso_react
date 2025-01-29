import React, { useState, useCallback } from 'react';

interface Item {
  id: number;
  nombre: string;
}

function Lista() {
  const [items, setItems] = useState<Item[]>([]);
  const [count, setCount] = useState(0);

  const agregarItem = useCallback(() => {
    const nuevoItem: Item = {
      id: count,
      nombre: `Item ${count}`,
    };
    setItems(items => [...items, nuevoItem]);
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={agregarItem}>Agregar item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}