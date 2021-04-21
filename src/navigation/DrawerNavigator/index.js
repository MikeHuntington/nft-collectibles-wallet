import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {MainScreens, CollectiblesScreens} from '../../extra/constants'
import {Home, Scan, Market, Settings, Sidebar} from '../../screens/main'
import {CollectiblesNavigator} from './CollectibleNavigator'

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Navigator 
            drawerContent={(props) => <Sidebar {...props} />}
            initialRouteName={MainScreens.Home} 
            screenOptions={{headerShown: false, animationEnabled: false}}>
                <Screen name={MainScreens.Home} component={Home} />
                <Screen name={CollectiblesScreens.Collectibles} component={CollectiblesNavigator} />
                <Screen name={MainScreens.Scan} component={Scan} />
                <Screen name={MainScreens.Marketplace} component={Market} />
                <Screen name={MainScreens.Settings} component={Settings} />
        </Navigator>
    )
}