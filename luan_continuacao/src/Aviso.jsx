import React from 'react';

function Aviso({ urgente }) {
  return (
    <div>
      {urgente ? <p>ATENÇÃO: leia agora!</p> : <p>Aviso comum</p>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Aviso urgente={true} />
      <Aviso urgente={false} />
    </div>
  );
}
