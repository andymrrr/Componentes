import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import {useState} from 'react';
import { VistaPersonalizada } from '../../componentes/ui/Vista-Personalizada';
import { Titulo } from '../../componentes/ui/Titulo';
import { Tarjeta } from '../../componentes/ui/Tarjeta';
import { EstiloGlobales } from '../../../config/Tema/Tema';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
      <ScrollView>
        <VistaPersonalizada margin>
          <Titulo texto="Text Inputs"zonaSegura />

          <Tarjeta>
            <TextInput
              style={EstiloGlobales.input}
              placeholder="Nombre completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />

            <TextInput
              style={EstiloGlobales.input}
              placeholder="Correo electrónico"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />

            <TextInput
              style={EstiloGlobales.input}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Tarjeta>

          <View style={{height: 10}} />

          <Tarjeta>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Tarjeta>

          <View style={{ height: 20 }} />

          <Tarjeta>
            <TextInput
              style={EstiloGlobales.input}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Tarjeta>
        </VistaPersonalizada>

          <View style={{ height: 20 }} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
};
