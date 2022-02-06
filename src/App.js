import React, { useState } from 'react';
import './App.css'

//Arrow function 
  const App = () =>{
    //State para atulizar o componete no click

    const[message, setMessage] = useState('hello world'); //state criado junto com a função para chama-lo depois

    return( 
      <div>
        <div className= "container">{message}</div>      
        <button onClick={() => setMessage('bye bye') }>mudar mensagem</button>  
      </div>  
    )
};
//state foi chamaddo dentro do listenner onClick com uma função anonima chamando setMessage(função ara chamar o state)
export default App;