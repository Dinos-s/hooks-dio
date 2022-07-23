import React, {useState, useEffect} from 'react';
import '../ifoodCounter/ifoodStyles.css';

export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    useEffect(()=>{
        alert('Você alcançou o minimo possivel do produto')
    },[buttonStyle])

    function down(){
        if(value <= 1){
            setButtonStyle("counter-button-minus-desactive")
        }

        if(value > 0){
            setValue(value -1)
        }
    }

    function up(){
        setValue(value +1)
        setButtonStyle("counter-button-minus-active")
    }

    return (
        <div className="countex-wrapper">
           <button className={buttonStyle} onClick={down}>-</button>
           <p>{value}</p>
           <button className="counter-button-plus-active" onClick={up}>+</button>
           <button id="moeda">12,00</button>
        </div>
    )
}