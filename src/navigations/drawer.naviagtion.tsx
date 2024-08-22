import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/globalstyles';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigation } from './tab.navigation';
import { Camera} from '../screens/Camera'
type DrawerParamList = {
    Tab: undefined
    Camera: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary},
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
        </Drawer.Navigator>

    )

}