import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Mensagem } from '../screens/Mensagem';
import { Perfil } from '../screens/Perfil';
import { colors } from '../styles/globalstyles';
import { AntDesign, Ionicons } from '@expo/vector-icons';

type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.secondary,
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.secondary,
                tabBarInactiveTintColor: colors.primary,
            }}
        >

            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={ colors.primary } /> 
                    ),
}}
/>
            <Tab.Screen name='Mensagem' component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="message1" size={24} color={ colors.primary } />
),
}}
/>
        </Tab.Navigator>
    )
}