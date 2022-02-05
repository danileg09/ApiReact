import React from 'react';
import './App.css'

  const App = () =>{
    let message ='hello veinho';

    return( 
      <div>
        <div className= "container">{message}</div>      
        <button onClick={() => message = 'alouu' }>mudar mensagem</button>
      </div>  
    )
};

export default App;