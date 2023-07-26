import React from 'react';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { SafeAreaView, StatusBar } from 'react-native';

import { styles } from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={ styles.background }>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

// La etiqueta <StatusBar /> nos permite estilizar la barra deslizable del movil. En este caso cambiamos el color de la barra y de las letras