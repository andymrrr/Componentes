import { PropsWithChildren, useContext } from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>; 
}


export const Tarjeta = ({style, children }: Props) => {

  const { colors } = useContext( ThemeContext );

  return (
    <View style={[
      {
        backgroundColor: colors.TarjetaFondo,
        borderRadius: 10,
        padding: 10
      },
      style,
    ]}>
      { children }
     
    </View>
  )
}