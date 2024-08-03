import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
  encendido: boolean;
  texto?: string;

  onChange: (value: boolean) => void;
}



export const SwitchPersonalizado = ({ encendido, texto, onChange }: Props) => {

  const { colors } = useContext( ThemeContext );

  return (
    <View style={[ 
        styles.switchRow ,
        { backgroundColor: colors.TarjetaFondo }
      ]}>

      {
        texto && (<Text style={{ color: colors.texto }}>{ texto }</Text>)
      }
      


      <Switch
          thumbColor={ Platform.OS === 'android' ? colors.primario : '' }
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChange}
          value={encendido}
        />
    </View>
  )
}



const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  }
})