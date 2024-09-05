import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/globalstyles';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TabNavigation } from './tab.navigation';
import { Camera } from '../screens/Camera'
import { Images } from '../screens/Imagens'
import { Mensagem } from '../screens/Mensagem'
import { QrCode } from '../screens/QrCode'
type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    Imagem: undefined
    Mensagem: undefined
    QrCode: undefined
}


type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: colors.primary,
            drawerStyle: {
                backgroundColor: colors.secondary,
            },
            drawerActiveTintColor: colors.primary,
            drawerInactiveTintColor: colors.primary

        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.primary} />
                    ),
                }}
            />
            <Drawer.Screen name='Camera' component={Camera}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="camera" size={24} color={colors.light} />
                    ),
                }}
            />
            <Drawer.Screen name='Imagem' component={Images}
                options={{
                    drawerIcon: () => (
                        <Entypo name="images" size={24} color={colors.roxo} />
                    ),
                }}
            />
            <Drawer.Screen name='Mensagem' component={Mensagem}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="paper-plane" size={24} color={colors.azul} />
                    ),
                }}
            />
            <Drawer.Screen name='QrCode' component={QrCode}
            options={{
                drawerIcon:()=> (
                    <AntDesign name="qrcode" size={24} color={colors.branco} />
            ),
}}
/>
        </Drawer.Navigator>


    )

}