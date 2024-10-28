import logo from './logo.svg';
import './App.css';
import AdicionarTarefas from './addTarefas/adicionarTarefas' 
import ExibirTarefas from './exibirTarefas/exibirTarefas';

function App() {
  return (
    <div className="App">
              
            <div className='container'>
             <AdicionarTarefas /> 
             <ExibirTarefas/> 
            </div>
            <div className='componente3'>

            </div>
    </div>
    


    
         
  );
};

export default App;
