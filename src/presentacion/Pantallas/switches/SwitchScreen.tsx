import {  useState} from 'react';
import { VistaPersonalizada } from '../../componentes/ui/Vista-Personalizada';
import { Titulo } from '../../componentes/ui/Titulo';
import { Tarjeta } from '../../componentes/ui/Tarjeta';
import { SwitchPersonalizado } from '../../componentes/ui/Switch-Personalizado';
import { Separador } from '../../componentes/ui/Separador';


export const SwitchScreen = () => {
  


  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <VistaPersonalizada style={{ paddingHorizontal: 10}}>

      <Titulo texto="Switches" zonaSegura />

      <Tarjeta>
        <SwitchPersonalizado
          encendido={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          texto="¿Está activo?"
        />

        <Separador />

        <SwitchPersonalizado
          encendido={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          texto="¿Tiene hambre?"
        />

        <Separador />

        <SwitchPersonalizado
          encendido={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          texto="¿Es feliz?"
        />

       
      </Tarjeta>
    </VistaPersonalizada>
  );
};
