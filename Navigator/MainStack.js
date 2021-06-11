import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login'
import Cadastro from '../Screens/Cadastro'
import Telainicial from '../Screens/Telainicial'
import Telaregistro from '../Screens/Telaregistro'
import Telaatividades from '../Screens/Telaatividades'

const MainStack = createStackNavigator()

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Cadastro" component={Cadastro} />
        <MainStack.Screen name="Telainicial" component={Telainicial} />
        <MainStack.Screen name="Telaregistro" component={Telaregistro}/>
        <MainStack.Screen name="Telaatividades" component={Telaatividades}/>
    </MainStack.Navigator>
);