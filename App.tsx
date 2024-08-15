import React from 'react';
import { Dispatch, SetStateAction, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,PTSerif_400Regular} from '@expo-google-fonts/pt-serif';
import { StatusBar } from 'expo-status-bar';
{/*não funciona, não reconhece a export do navigations*/}
import { Navigation } from './src/navigations';
import { AuthProvider } from './src/context/auth';

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}

export default function App() {

  const [page, setPage] = useState(1)

  let [fontsLoaded] = useFonts({
   PTSerif_400Regular
  })
  if (!fontsLoaded) {
    return null
  }

return (
  <>
<AuthProvider>
<Navigation />
</AuthProvider>
<StatusBar style="auto" />
</>
  );

}
