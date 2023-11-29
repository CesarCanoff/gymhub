import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';

import { Loading } from '@components/Loading';
import { Routes } from './src/routes';
import { AuthContext } from '@contexts/AuthContent';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <AuthContext.Provider value={{
        user: {
          id: '1',
          name: 'César',
          email: 'canoff@email.com',
          avatar: 'avatar.png',
        }
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>

    </NativeBaseProvider>
  );
}
