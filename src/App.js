//Componentes
import Cabecera from './components/Cabecera';
import Cuerpo from './components/Cuerpo';
import Lateral from "./components/Lateral"


//Styles
import './styles/App.css';

function App() {
  return (
    <div className='app'>
    <Cabecera/>    
    <div className='app__main'>
        <Lateral/>
        <Cuerpo/>
    </div>
  </div>

    
  );
}

export default App;
