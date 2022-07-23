import {useState} from 'react'

function SmartCounter() {
    const [quantity, UpQuantity] = useState(1)
    // retorna um vetor
    // 1- variavel stateful
    // 2- função amarrada a variavel que atualiza a esse valor 

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => UpQuantity(quantity + 1)}>aumentar</button>
        </>
    )
}

export default SmartCounter;