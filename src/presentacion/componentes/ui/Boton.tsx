import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { EstiloGlobales } from '../../../config/Tema/Tema';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
  texto: string;
  styles?: StyleProp<ViewStyle>;

  onPress: () => void;
}



export const Boton = ({ texto, styles, onPress }:Props) => {

  const { colors } = useContext( ThemeContext );

  return (
    <Pressable
      onPress={ onPress }
      style={ ({ pressed }) => ([
        EstiloGlobales.btnprimario,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primario,
        },
        styles
      ]) }
    >
      <Text style={[
        EstiloGlobales.btnprimarioText,
        {
          color: colors.btnColorTexto
        }
      ]}>{ texto }</Text>
      
    </Pressable>
  )
}