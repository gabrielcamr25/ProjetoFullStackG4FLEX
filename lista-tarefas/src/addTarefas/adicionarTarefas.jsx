import React, { useState } from 'react';

function AdicionarTarefas() {
  const [nome, setNome] = useState('');

  const adicionarTarefa = async () => {
    if (!nome) return;

    try {
      const response = await fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: nome }),
      });

      if (response.ok) {
        const data = await response.json();
        setNome(''); // Limpa o campo após adicionar
      } else {
        console.error('Erro ao adicionar tarefa:', response.statusText);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="componente1">
      <h1 className="tituloPrincipal">ADICIONAR TAREFAS</h1>
      <br />
      <br />
      <div>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="inputTarefa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button className="button-add" onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default AdicionarTarefas;

