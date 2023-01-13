import './App.css';
import Logo from './componentes/Logo';

// import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; AL CREARSE EL COMPONENTE NO ES NECESARIO IMPORTAR LA IMAGEN

// import Tarea from './componentes/Tarea';
// import TareaFormulario from './componentes/TareaFormulario'; AL CREARSE LISTA DE TAREAS QUE INCLUYE A TAREA Y TAREA FORMULARIO NO ES NECESARIO IMPORTARLOS

import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      {/* <div className='freecodecamp-logo-contenedor'>
         <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' 
          alt='logo'/>
      </div> */}
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        {/* <TareaFormulario />
        <Tarea /> */}
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
