import { Text, View } from 'react-native';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { VistaPersonalizada } from '../../componentes/ui/Vista-Personalizada';
import { Titulo } from '../../componentes/ui/Titulo';
import { Boton } from '../../componentes/ui/Boton';

export const ChangeThemeScreen = () => {

  const { setTheme, TemaActual, colors } = useContext( ThemeContext );


  return (
    <VistaPersonalizada margin>
      <Titulo texto={`Cambiar tema: ${ TemaActual }`} zonaSegura />

      <Boton 
        texto="Claro"
        onPress={() => setTheme('Claro')}
      />

      <View style={{ height: 10 }} />

      <Boton 
        texto="Oscuro"
        onPress={() => setTheme('Oscuro')}
      />
      
      <View style={{ height: 10 }} />

      <Text style={{ color: colors.texto }}>
        { JSON.stringify( colors, null, 2 ) }
      </Text>

    </VistaPersonalizada>
  )
}