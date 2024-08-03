import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icono from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Separador} from './Separador';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  nombre: string;
  icono: string;
  componente: string;

  primero?: boolean;
  ultimo?: boolean;
}

export const MenuItem = ({
  nombre,
  icono,
  componente,
  primero = false,
  ultimo = false,
}: Props) => {
  const navigation = useNavigation<any>();

  const { colors } = useContext( ThemeContext );

  return (
    <>
      <Pressable onPress={() => navigation.navigate(componente)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.TarjetaFondo,
            ...(primero && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(ultimo && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}>
          <Icono
            name={icono}
            size={25}
            style={{marginRight: 10}}
            color={colors.primario}
          />
          <Text style={{color: colors.texto}}>{nombre}</Text>
          <Icono
            name="chevron-forward-outline"
            size={25}
            style={{marginLeft: 'auto', color: colors.primario}}
          />
        </View>
      </Pressable>

      {!ultimo && <Separador />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
