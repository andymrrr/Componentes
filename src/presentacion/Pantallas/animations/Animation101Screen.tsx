import { Animated, Easing, Pressable, StyleSheet, Text } from 'react-native';

import { useAnimation } from '../../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { VistaPersonalizada } from '../../componentes/ui/Vista-Personalizada';
import { Boton } from '../../componentes/ui/Boton';


export const Animation101Screen = () => {

  const { colors } = useContext( ThemeContext );

  const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();


  return (
    <VistaPersonalizada style={ styles.container }>
      
      <Animated.View style={[
        styles.purpleBox,
        {
          backgroundColor: colors.primario
        },
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]}/>

      <Boton 
        texto="FadeIn"
        onPress={ () => {
          fadeIn({});
          startMovingTopPosition({ 
            initialPosition: -100, 
            easing: Easing.elastic(1),
            duration: 750
          });

        }} styles={{ marginTop: 10 }} 
      />

      <Boton 
        texto="FadeOut"
        onPress={ ()=> fadeOut({}) } 
        styles={{ marginTop: 10 }} />
      
    </VistaPersonalizada>
  )
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  }
})