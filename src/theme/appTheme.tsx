import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'black'
    },
    calculatorContainer: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'flex-end'
    },
    result: {
      color: 'white',
      fontSize: 60,
      textAlign: 'right',
      marginBottom: 10
    },
    resultSmall: {
      color: 'rgba(255,255,255, 0.5)',
      fontSize: 30,
      textAlign: 'right'
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 18,
      paddingHorizontal: 10,
    },
    button: {
      height: 80,
      width: 80,
      backgroundColor: '#2D2D2D',
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 5,
      // backgroundColor: 'red'
    },
    buttonZero: {
      width: 180
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      // fontWeight: '300'
    }
});