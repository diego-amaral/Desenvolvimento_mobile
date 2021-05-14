import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import Segunda from '../Screens/Segunda'
import Terceira from '../Screens/Terceira'

const MainStack = createStackNavigator()

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Segunda" component={Segunda} />
        <MainStack.Screen name="Terceira" component={Terceira} />
    </MainStack.Navigator>
);