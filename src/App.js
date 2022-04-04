// Importar el fichero logo.svg y lo guarda en la variable logo.
import logo from './logo.svg';
// Importamos el css escrito en ./App.css
import './App.css';
import { useState } from 'react';

// La funcion app es una funcion que podemos llamar como queramos, despues la exportaremos
function App() {

  // La funcion empieza con el return, y lo que nos devuelve es una plantilla en JSX.
  // Se escribe className en lugar de class porque si no el compilador puede liarse.
  // JSX puede tener hijos como un HTML 'normal'.
  // <img src={logo} Esto establece el atributo src con el valor de la variable logo.

  // Regla de oro de todos los componentes JSX, Tienen que tener un contenedor padre, tipo <div>

  const [bgColor, setBgColor] = useState('black');

   // Gestion de eventos.
   function clickedButton() {    
    let r = randomRGBColor();
    let g = randomRGBColor();
    let b = randomRGBColor();    
    setBgColor(`rgb(${r}, ${g}, ${b})`)
  }

  return (
    <div className="App">
      <header className="App-header" style={{'backgroundColor':bgColor}}>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <Button changeColor={clickedButton} texto="Click me!"/>        
      </header>
    </div>
  );
}

/*
 * Acabamos de crear un functional component, un componente basico y reutilizable en cualquier parte de nuestra aplicación.
 */

// Dfinimos un estado para el btn que sea su color de fondo actual.
// Para ello utilizamos Hooks.

function Button(props) {

  // Para definir un estado con Hoock utilizamos useState  
  // En el parametro de useState se puede poner cualquier tipo de valor, objetos, arrays, strings, numbers etc...

  return <button 
    onClick={props.changeColor} // Componente controlado, le pasamos una funcion al metodo nativo click
    className='Btn'
    style={{ 'fontSize': '20px'}}>{props.texto}</button>
}

// Se puede llamar a una función desde un html.
function randomRGBColor(){
  return Math.floor(Math.random() * 255);
}

// Esto sirve para hacer el codigo modular, nos da la posiblidad de exportar parte de nuestro codigo como funciones.
export default App;
