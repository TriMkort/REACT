import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estos son mis primeros pasos con react
        </p>
        <div className='Componentes'>
        <hr/>
        <SegundoComponente/>
        
        
        <hr/>
        <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
