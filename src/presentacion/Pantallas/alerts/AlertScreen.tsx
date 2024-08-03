import {Alert, View} from 'react-native';
import { showPrompt } from '../../../config/adapters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { VistaPersonalizada } from '../../componentes/ui/Vista-Personalizada';
import { EstiloGlobales } from '../../../config/Tema/Tema';
import { Titulo } from '../../componentes/ui/Titulo';
import { Boton } from '../../componentes/ui/Boton';

export const AlertScreen = () => {

  const { esOscuro } = useContext( ThemeContext );


  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: esOscuro ? 'dark' : 'light'
      },
    );
  };

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
        userInterfaceStyle: esOscuro ? 'dark' : 'light'
      },
    );

  const onShowPrompt = () => {

    showPrompt({
      title: 'Lorem Ipsum',
      subTitle: 'Nostrud qui duis officia dolor enim.',
      buttons: [
        { text: 'Ok', onPress: () => console.log('ok') }
      ],
      placeholder: 'Placeholder',
      
    },);
  };

  return (
    <VistaPersonalizada style={EstiloGlobales.globalMargin}>
      <Titulo zonaSegura texto="Alertas" />

      <Boton texto="Alerta - 2 Botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />

      <Boton texto="Alerta - 3 Botones" onPress={createThreeButtonAlert} />

      <View style={{height: 10}} />

      <Boton texto="Prompt - Input" onPress={onShowPrompt} />
    </VistaPersonalizada>
  );
};
