import { Text, View } from 'react-native';
import { EstiloGlobales } from '../../../config/Tema/Tema';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Propiedad {
  texto: string;
  zonaSegura?: boolean;
  colorFondo?: string;
}


export const SubTitulo = ({ texto, zonaSegura = false, colorFondo }:Propiedad) => {

  const { colors } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();


  return (
    <Text style={{
      ...EstiloGlobales.subTitulo,
      color: colors.texto,
      marginTop: zonaSegura ? top : 0 ,
      marginBottom: 10,
      backgroundColor: colorFondo ? colorFondo : colors.fondo
    }}>
      { texto }
    </Text>
  )
}