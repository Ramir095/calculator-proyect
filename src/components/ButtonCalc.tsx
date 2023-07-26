import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
  title: string,
  color?: string,
  widthButton?: boolean,
  action: ( numberText: string ) => void;
}

export const ButtonCalc = ({ title, color = '#2D2D2D', widthButton, action }: Props) => {
  return (
    <TouchableOpacity onPress={ () => action(title) }>
      <View style={{
        ...styles.button,
        width: (widthButton) ? 180 : 80,
        backgroundColor: color
      }} >
          <Text style={{
            ...styles.buttonText,
            color: (color === 'grey') ? 'black' : 'white'
          }}>{ title }</Text>
      </View>
    </TouchableOpacity>
  )
};

// Aclaramos dentro del interface que la funcion "action" recibe un parametro "numerText"
// Dentro de "TouchableOpacity", en "onPress" a la funcion "accion" le mandamos el "title" como argumento. Cuando se haga click en cada boton, se ejecutarà la "action" mandando al valor del boton (title) como argumento
