import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './AuthNavigator/authStack'

const MainNav = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default MainNav;