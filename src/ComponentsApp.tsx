import 'react-native-gesture-handler';

import {Navegacion} from './presentacion/Navegacion/Navegacion';
import { TemaProveedor} from './presentacion/context/ThemeContext';





export const ComponentsApp = () => {
  return (
    <TemaProveedor>
      <Navegacion />
    </TemaProveedor>
  );
};
