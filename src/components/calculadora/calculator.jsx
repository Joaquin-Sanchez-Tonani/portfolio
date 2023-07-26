import React from "react";
import './calculator.css';
import { useState } from "react";
import * as math from 'mathjs';

function Calculator(){
    const resolve = () => {
        try {
          const result = math.evaluate(answer);
          setAnswer(result.toString());
        } catch (error) {
          setAnswer("Error");
        }
      };

    const clear = () =>{
        setAnswer(' ');
    };

    const show = event =>{
        const contenido = event.target.innerText;
        setAnswer(answer + contenido);
    };

    const [answer,setAnswer] = useState('');


    return(
        

        <div className="component">
            <div className="calculator-component">
                <div className="calculator-component-answer">
                    {answer}
                </div>
                <div className="calculator-component-conteiner">
                    <div className="row">
                        <button onClick={show} className="button">1</button>
                        <button onClick={show} className="button">2</button>
                        <button onClick={show} className="button">3</button>
                        <button onClick={show} className="button fondo-operador">+</button>
                    </div>
                    <div className="row">
                        <button onClick={show} className="button">4</button>
                        <button onClick={show} className="button">5</button>
                        <button onClick={show} className="button">6</button>
                        <button onClick={show} className="button fondo-operador">-</button>
                    </div>
                    <div className="row">
                        <button onClick={show} className="button">7</button>
                        <button onClick={show} className="button">8</button>
                        <button onClick={show} className="button">9</button>
                        <button onClick={show} className="button fondo-operador">*</button>
                    </div>
                    <div className="row">
                        <button onClick={resolve} className="button"> = </button>
                        <button onClick={show} className="button">0</button>
                        <button onClick={show} className="button">.</button>
                        <button onClick={show} className="button fondo-operador">/</button>
                    </div>
                    <div className="row">
                        <button onClick={clear} className="clear">Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Calculator;