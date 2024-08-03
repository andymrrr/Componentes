import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { EstiloGlobales } from '../../../config/Tema/Tema';
import { Titulo } from '../../componentes/ui/Titulo';

export const PullToRefreshScreen = () => {
  const { colors } = useContext( ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false)

  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);
    

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }


  return (
    <ScrollView
      refreshControl={ 
        <RefreshControl 
          refreshing={ isRefreshing }
          progressViewOffset={ top }
          colors={[ colors.primario, 'red', 'orange','green' ]}
          progressBackgroundColor={ colors.TarjetaFondo }
          tintColor={ colors.primario }
          onRefresh={ onRefresh }
      />}

      style={ [ EstiloGlobales.mainContainer, EstiloGlobales.globalMargin ] }
    >


        <Titulo texto="Pull to refresh" zonaSegura />
        


    </ScrollView>
  )
}