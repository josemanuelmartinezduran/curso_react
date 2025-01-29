import React, { createContext, useContext, useState } from 'react';

// 1. Definir la interfaz del contexto
interface TemaContexto {
  tema: 'claro' | 'oscuro';
  cambiarTema: () => void;
}

// 2. Crear el contexto
const TemaContext = createContext<TemaContexto>({
  tema: 'claro',
  cambiarTema: () => {}, // Función vacía por defecto
});

// 3. Crear el proveedor del contexto
function TemaProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<'claro' | 'oscuro'>('claro');

  const cambiarTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

// 4. Crear un Hook para consumir el contexto
function useTema() {
  const context = useContext(TemaContext);
  if (context === undefined) {
    throw new Error('useTema debe usarse dentro de un TemaProvider');
  }
  return context;
}

// 5. Usar el contexto en componentes
function ComponenteTema() {
  const { tema } = useTema();

  return (
    <div className={tema}>
      {/* Contenido del componente */}
    </div>
  );
}

function BotonCambiarTema() {
  const { cambiarTema } = useTema();

  return (
    <button onClick={cambiarTema}>
      Cambiar tema
    </button>
  );
}

function App() {
  return (
    <TemaProvider>
      <ComponenteTema />
      <BotonCambiarTema />
    </TemaProvider>
  );
}

export default App;