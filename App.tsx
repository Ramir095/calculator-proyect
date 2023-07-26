import React from 'react';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { SafeAreaView, StatusBar } from 'react-native';

import { styles } from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={ styles.background }>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

// La etiqueta <StatusBar /> nos permite estilizar la barra deslizable del movil. En este caso cambiamos el color de la barra y de las letras