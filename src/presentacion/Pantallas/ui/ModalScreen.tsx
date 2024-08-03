import {Modal, Platform, View} from 'react-native';
import {useContext, useState} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { VistaPersonalizada } from '../../componentes/ui/Vista-Personalizada';
import { Titulo } from '../../componentes/ui/Titulo';
import { Boton } from '../../componentes/ui/Boton';

export const ModalScreen = () => {
  const { colors } = useContext( ThemeContext );
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VistaPersonalizada margin>
      <Titulo texto="Modal" zonaSegura />

      <Boton texto="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: colors.fondo,
          }}>
          
          <View style={{paddingHorizontal: 10}}>
            <Titulo texto="Modal Content" zonaSegura />
          </View>

          <View style={{ flex: 1 }} />

          <Boton 
            texto="Cerrar Modal"
            onPress={ () => setIsVisible(false) }
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />



        </View>
      </Modal>
    </VistaPersonalizada>
  );
};
