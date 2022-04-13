import './App.css';
import React, {useState } from 'react';

const PasswordComplexityValues = {
  WEAK: 'weak',
  GOOD: 'good',
  EXCELLENT: 'excellent',
}


const App = () => {

  const [passval, setPassval] = useState('');

  const [passText, setPassText] = useState('');

  const setValuePass = (e) => {

      let resp = calculateComplexity(e);

      setPassText(resp);
  }
  
  const calculateComplexity = (password) =>{
    let res = false;
    let a = false;
    let b =  false;
    let c = false;
    let v_letras = 0;
    let v_num = 0;

    if(password.length >= 8)
       a = true;

  
    for (let i = 0; i <= password.length; i ++)
    {
        if(isNaN(password[i])){
            v_letras = v_letras +1;
        }           
        else
            v_num = v_num +1;
    }

    if( (v_num > 1 && v_letras != 0) && a)
        b = true;

    if (a && b){
        return PasswordComplexityValues.EXCELLENT;
    }else{
        if(a || b)
            return PasswordComplexityValues.GOOD;
        else
            return PasswordComplexityValues.WEAK;
    }     
    
    
} 
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Complejidad de Contraseña
        </p>
          <div className='Container' >
             <input className ='password' onChange={(e) => { setValuePass(e.target.value) }}/>
             
              <p>El valor de la Contraseña es: {passText} </p>

          </div>
      </header>
    </div>
  );
}

export default App;
