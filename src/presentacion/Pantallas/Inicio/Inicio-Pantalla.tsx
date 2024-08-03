import {View} from 'react-native';
import {EstiloGlobales} from '../../../config/Tema/Tema';
import {ScrollView} from 'react-native-gesture-handler';
import { VistaPersonalizada } from '../../componentes/ui/Vista-Personalizada';
import { Titulo } from '../../componentes/ui/Titulo';
import { MenuItem } from '../../componentes/ui/MenuItem';


const animacionMenuItems = [
  {
    nombre: 'Animation 101',
    icono: 'cube-outline',
    componente: 'Animation101Screen',
  },
  {
    nombre: 'Animation 102',
    icono: 'albums-outline',
    componente: 'Animation102Screen',
  },
];

export const menuItems = [
  {
    nombre: 'Pull to refresh',
    icono: 'refresh-outline',
    componente: 'PullToRefreshScreen',
  },
  {
    nombre: 'Section List',
    icono: 'list-outline',
    componente: 'CustomSectionListScreen',
  },
  {
    nombre: 'Modal',
    icono: 'copy-outline',
    componente: 'ModalScreen',
  },
  {
    nombre: 'InfiniteScroll',
    icono: 'download-outline',
    componente: 'InfiniteScrollScreen',
  },
  {
    nombre: 'Slides',
    icono: 'flower-outline',
    componente: 'SlidesScreen',
  },
  {
    nombre: 'Themes',
    icono: 'flask-outline',
    componente: 'ChangeThemeScreen',
  },
];
const uiMenuItems = [
  {
    nombre: 'Switches',
    icono: 'toggle-outline',
    componente: 'SwitchScreen',
  },
  {
    nombre: 'Alerts',
    icono: 'alert-circle-outline',
    componente: 'AlertScreen',
  },
  {
    nombre: 'TextInputs',
    icono: 'document-text-outline',
    componente: 'TextInputScreen',
  },
];

export const InicioPantalla = () => {
  return (
    <VistaPersonalizada margin>
      <ScrollView>
        <Titulo texto="Opciones del menú" zonaSegura />

        {/* animationMenuItems
          menuItems
          uiMenuItems */}

        {animacionMenuItems.map((item, index) => (
          <MenuItem
            key={item.componente}
            {...item}
            primero={index === 0}
            ultimo={index === animacionMenuItems.length - 1}
          />
        ))}

        <View style={{marginTop: 30}} />
        {uiMenuItems.map((item, index) => (
          <MenuItem
            key={item.componente}
            {...item}
            primero={index === 0}
            ultimo={index === uiMenuItems.length - 1}
          />
        ))}

        <View style={{marginTop: 30}} />
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.componente}
            {...item}
            primero={index === 0}
            ultimo={index === menuItems.length - 1}
          />
        ))}

        <View style={{marginTop: 30}} />
      </ScrollView>
    </VistaPersonalizada>
  );
};
