import { Text } from 'react-native';
import { EstiloGlobales } from '../../../config/Tema/Tema';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Propiedad {
  texto: string;
  zonaSegura?: boolean;
  white?: boolean;
}


export const Titulo = ({ texto, zonaSegura = false, white = false }: Propiedad) => {

  const { top } = useSafeAreaInsets();
  const { colors } = useContext( ThemeContext );

  return (
    <Text
      style={{
        ...EstiloGlobales.titulo,
        marginTop: zonaSegura ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.texto
      }}
    >{ texto }</Text>
  )
}