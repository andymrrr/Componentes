import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {ColoresTema, ColoresOscuro, ColoresClaro} from '../../config/Tema/Tema';
import {AppState, Appearance, useColorScheme} from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

type ColorTema = 'Claro' | 'Oscuro';

interface ThemeContextProps {
  TemaActual: ColorTema;
  colors: ColoresTema;
  esOscuro: boolean;

  setTheme: (theme: ColorTema) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const TemaProveedor = ({children}: PropsWithChildren) => {
  const esquemaColor = useColorScheme();
  const [temaActual, setTemaActual] = useState<ColorTema>('Claro');

  const esOscuro = temaActual === 'Oscuro';
  const colors = esOscuro ? ColoresOscuro : ColoresClaro;


  useEffect(() => {
    if (esquemaColor === 'dark') {
      setTemaActual('Oscuro');
    } else {
      setTemaActual('Claro');
    }
  }, [esquemaColor]);

 

  const setTheme = (tema: ColorTema) => {
    setTemaActual(tema);
  };

  return (
    <NavigationContainer theme={esOscuro ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          TemaActual: temaActual,
          esOscuro: esOscuro,
          colors: colors,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
