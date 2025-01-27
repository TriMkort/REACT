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
          Bienvenidos a mi proyecto con React.
        </p>
        <div className='componentes'>
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
