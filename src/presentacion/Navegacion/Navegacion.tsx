import { createStackNavigator } from '@react-navigation/stack';
import { InicioPantalla } from '../Pantallas/Inicio/Inicio-Pantalla';
import { Animation101Screen } from '../Pantallas/animations/Animation101Screen';
import { Animation102Screen } from '../Pantallas/animations/Animation102Screen';
import { SwitchScreen } from '../Pantallas/switches/SwitchScreen';
import { AlertScreen } from '../Pantallas/alerts/AlertScreen';
import { TextInputScreen } from '../Pantallas/inputs/TextInputScreen';
import { PullToRefreshScreen } from '../Pantallas/ui/PullToRefreshScreen';
import { CustomSectionListScreen } from '../Pantallas/ui/CustomSectionListScreen';
import { ModalScreen } from '../Pantallas/ui/ModalScreen';
import { InfiniteScrollScreen } from '../Pantallas/ui/InfiniteScrollScreen';
import { SlidesScreen } from '../Pantallas/ui/SlidesScreen';
import { ChangeThemeScreen } from '../Pantallas/theme/ChangeThemeScreen';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Stack = createStackNavigator();

export const Navegacion = () => {

  const { colors } = useContext( ThemeContext );

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.fondo,
      }
    }}
    >
      <Stack.Screen name="InicioPantalla" component={InicioPantalla} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      
      
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      
    </Stack.Navigator>
  );
}

