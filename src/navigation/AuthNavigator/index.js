import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AuthScreens} from '../../extra/constants'
import {Login, Welcome, Phrase, Password} from '../../screens/auth'

const {Navigator, Screen} = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <Navigator initialRouteName={AuthScreens.Welcome} screenOptions={{headerShown: false, animationEnabled: false}}>
            <Screen name={AuthScreens.Welcome} component={Welcome} />
            <Screen name={AuthScreens.CreatePassword} component={Password} />
            <Screen name={AuthScreens.CreatePhrase} component={Phrase} />
            <Screen name={AuthScreens.Login} component={Login} />
        </Navigator>
    )
}