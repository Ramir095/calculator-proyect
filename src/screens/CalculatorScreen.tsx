import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const { 
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
  } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>
      {
        ( previousNumber !== '0' ) && (
          <Text style={ styles.resultSmall }>{ previousNumber }</Text>
        )
      }
      <Text 
        style={ styles.result }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
          { number }
      </Text>

    <View style={ styles.row }>
      <ButtonCalc title='C' color='#9B9B9B' action={ clear } />
      <ButtonCalc title='+/-' color='#9B9B9B' action={ negativePositive } />
      <ButtonCalc title='del' color='#9B9B9B' action={ btnDelete } />
      <ButtonCalc title='/' color='#FF9427' action={ btnDivide } />
    </View>

    <View style={ styles.row }>
      <ButtonCalc title='7' action={ addNumbers } />
      <ButtonCalc title='8' action={ addNumbers } />
      <ButtonCalc title='9' action={ addNumbers } />
      <ButtonCalc title='x' color='#FF9427' action={ btnMultiply } />
    </View>

    <View style={ styles.row }>
      <ButtonCalc title='4' action={ addNumbers }  />
      <ButtonCalc title='5' action={ addNumbers }  />
      <ButtonCalc title='6' action={ addNumbers }  />
      <ButtonCalc title='-' color='#FF9427' action={ btnSubtract } />
    </View>

    <View style={ styles.row }>
      <ButtonCalc title='1' action={ addNumbers }  />
      <ButtonCalc title='2' action={ addNumbers }  />
      <ButtonCalc title='3' action={ addNumbers }  />
      <ButtonCalc title='+' color='#FF9427' action={ btnAdd } />
    </View>

    <View style={ styles.row }>
      <ButtonCalc title='0' action={ addNumbers }  widthButton/>
      <ButtonCalc title='.' action={ addNumbers }  />
      <ButtonCalc title='=' color='#FF9427' action={ calculate } />
    </View>
    </View>
  )
}

// numberOfLines={ 1 } es para que el contenido se mantenga en una sola linea
// adjustsFontSizeToFit es para que el contenido se adapte al espacio; osea se vuelve mas pequeña el tamaño de los numero para que entren en la pantalla