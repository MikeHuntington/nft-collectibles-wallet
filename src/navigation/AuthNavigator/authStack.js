import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import {AppScreens} from './index'
import {CreatePassword, CreatePhrase, Login, Welcome} from '../../screens'


const {Navigator, Screen} = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Navigator initialRouteName={AppScreens.Welcome} screenOptions={{headerShown: false, animationEnabled: false}}>
            <Screen name={AppScreens.Welcome} component={Welcome} />
            <Screen name={AppScreens.CreatePassword} component={CreatePassword} />
            <Screen name={AppScreens.CreatePhrase} component={CreatePhrase} />
            <Screen name={AppScreens.Login} component={Login} />
        </Navigator>
    )
}

export default AuthNavigator;