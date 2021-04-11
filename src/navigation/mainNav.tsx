import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './authStack'

const MainNav : FC = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default MainNav;