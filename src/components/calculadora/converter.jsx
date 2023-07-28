import React, { useState } from "react";
import './converter.css';

function Converter(){
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar el proceso de carga

    const currencyOptions = [
        "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "ARS", "BRL", "INR", "CNY", "CHF"
      ];
    const url = `https://currency-converter-exchange-rates1.p.rapidapi.com/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '36b4214ac2msh5f15fa669b35efdp1e3c39jsn75d557ae0845',
                'X-RapidAPI-Host': 'currency-converter-exchange-rates1.p.rapidapi.com',
            }
        };
    async function res(){
        try{
            setIsLoading(true)
            const response = await fetch(url,options);
            const data = await response.json();
            setResultado(data.result)
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    

    const fetching = () =>{
        if(fromCurrency.trim() !== '' && toCurrency.trim() !== '' && amount.trim() !== '' ){
            setError(false)
            res().then(()=>{setIsLoading(false)})
        }else{
            setError(true)
        }
    }
    
    
    

    return(
        
        <div className="contenedor">
            <h1 class="titulo">Currency Converter</h1>
            <div className="contenedor-request" >
                <label className="label-currency">From Currency:</label>
                <input 
                className="input-currency"
                type="text"
                list="options"
                value={fromCurrency}
                onChange={(e)=>{setFromCurrency(e.target.value)}}
                />
                <datalist id="options">
                    {
                        currencyOptions.map((currency)=>(
                            <option value={currency} key={currency}>{currency}</option>
                        ))
                    }
                </datalist>
                <label className="label-currency">To Currency:</label>
                <input 
                className="input-currency"
                type="text"
                list="options"
                value={toCurrency}
                onChange={(e)=>{setToCurrency(e.target.value)}}
                />
                <datalist id="options">
                    {
                        currencyOptions.map((currency)=>(
                            <option value={currency} key={currency}>{currency}</option>
                        ))
                    }
                </datalist>
                <label className="label-currency">Amount Currency:</label>
                <input 
                className="input-currency"
                type="number"
                onChange={(e)=>{setAmount(e.target.value)}}
                />
                <button onClick={fetching} className="button-currency" type="button">Converter</button>
            </div>
            <div className="span-conetenedor">
                {isLoading && <span class="span-loading">Loading...</span>}
                {resultado !== null && <span class="span-resultado">{toCurrency === 'ARS' ? `$ ${Math.round((resultado[toCurrency] * 2))}` : `${toCurrency} ${resultado[toCurrency]}`}</span>}
                {error && <span class="span-error">Please, complete inputs.</span>}
            </div>
        </div>
    );  
};

export default Converter;