import React, { useEffect, useState } from 'react';

function ExibirTarefas() {
  const [tarefas, setTarefas] = useState([]);

  const buscarTarefas = async () => {
    try {
    
      const response = await fetch('http://localhost:3000/tarefas');
      const data = await response.json();
      setTarefas(data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    buscarTarefas();
  }, []);

  return (
    <div className="componente2">
      <h1 className="tituloPrincipal">LISTA DE TAREFAS</h1>
      <div>
        {tarefas.length > 0 ? (
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa.id}>{tarefa.nome}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma tarefa encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default ExibirTarefas;