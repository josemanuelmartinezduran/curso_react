import React, { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'incrementar':
      return {count: state.count + 1};
    case 'decrementar':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function ContadorReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Cuenta: {state.count}
      <button onClick={() => dispatch({type: 'decrementar'})}>-</button>
      <button onClick={() => dispatch({type: 'incrementar'})}>+</button>
    </div>
  );
}