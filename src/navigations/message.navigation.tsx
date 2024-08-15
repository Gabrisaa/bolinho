import React from 'react';

import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenMensagem, ScreenCadMesagem} from '../screens'
type MessageStackParamList = {
    Message: undefined
    CadMessage: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Message'>
export type MessageTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Message' component={ScreenMensagem} />
            <Stack.Screen name='CadMessage' component={ScreenCadMesagem} />
        </Stack.Navigator>
    )
}