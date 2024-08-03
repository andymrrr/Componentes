import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {EstiloGlobales} from '../../../config/Tema/Tema';
import {ReactNode, useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const VistaPersonalizada = ({style, children, margin = false}: Props) => {

  const { colors } = useContext( ThemeContext );

  return (
    <View
      style={[
        EstiloGlobales.mainContainer,
        margin ? EstiloGlobales.globalMargin : null,
        { backgroundColor: colors.fondo },
        style,
      ]}>
      {children}
    </View>
  );
};
