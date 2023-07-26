import { useRef, useState } from 'react'

enum Operations {
  add, subtract, multiply, divide
};

export const useCalculator = () => {

  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');
  
  const lastOperations = useRef<Operations>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const addNumbers = ( numberText: string ) => {

    // No aceptar doble punto
    if(number.includes('.') && numberText === '.') return;
    // Si el numero inicia con 0 o -0
    if(number.startsWith('0') || number.startsWith('-0')){

      // punto decimal
      if(numberText === '.') {
        setNumber( number + numberText );

      // Si comienza en 0 pero es un numero decimal
      } else if(numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

      // Evaluamos si es diferente de 0 y no tiene un punto. Reemplazamos el 0 incial por el numero seleccionado
      } else if(numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);

      // Evaluamos que no se permita poner, de inicio (osea si empieza con 0 el numero), más ceros antes del punto. Ejemplo: No se debe poder 00000.00 
      } else if( numberText === '0' && !number.includes('.') ){
        setNumber(number);
      } else{
        setNumber( number + numberText );
      }


    } else{
      setNumber( number + numberText );
    }
  };

  const negativePositive = () => {
    if(number.includes('-')) {
      setNumber( number.replace('-', '') );
    } else {
      setNumber( '-' + number )
    }
  };

  const btnDelete = () => {
    const newNumber = number.split('');

    if(newNumber[0] === '-' && newNumber.length === 2){
      setNumber('0');
    } else if(newNumber[0] === number){
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    };
  };

  const changeNumberPrevious = () => {
    if(number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1))
    } else {
      setPreviousNumber(number)
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberPrevious();
    lastOperations.current = Operations.divide;
  };
  const btnMultiply = () => {
    changeNumberPrevious();
    lastOperations.current = Operations.multiply;
  };
  const btnSubtract = () => {
    changeNumberPrevious();
    lastOperations.current = Operations.subtract;
  };
  const btnAdd = () => {
    changeNumberPrevious();
    lastOperations.current = Operations.add;
  };  

  const calculate = () => {
    
    const number1 = Number(number);
    console.log(number1);
    const number2 = Number(previousNumber);
    console.log(number2);
    
    if(number1 && !number2) {
      return setNumber(`${number1}`)
    };
    if( number1 === 0 && number2 === 0) {
      return setNumber('0');
    }
    
    switch (lastOperations.current) {
      case Operations.add:
        setNumber(`${number1 + number2}`)
        break;
      case Operations.subtract:
        setNumber(`${number2 - number1}`)
        break;
      case Operations.multiply:
        setNumber(`${number1 * number2}`)
        break;
      case Operations.divide:
        setNumber(`${number2 / number1}`)
        break;
    
      default:
        return;
    }
    setPreviousNumber('0');
  }

  return {
    number,
    previousNumber,
    clear,
    negativePositive,
    btnDelete,
    btnDivide,
    addNumbers,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate
  }
}


// Notar que la funcion addNumbers recibe y debemos pasarle un parametro, un string. Me salta un error porque en el inteface no aclaramos que esa funcion va a recibir un parametro
// En la funcion changeNumberPrevious estamos evaluando con number.endsWith('.') que si el numero termina con punto '.', me borre el punto y me lo guarde en el estado 'previousNumber'; de lo contrario solo que guarde el numeor en 'previousNumber',. 

// Repasar logica de la linea 102