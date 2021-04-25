import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {MainScreens, CollectiblesScreens, ScannerScreens} from '../../extra/constants'
import {Drops, Market, Settings, Sidebar} from '../../screens/main'
import {CollectiblesNavigator} from './CollectibleNavigator'
import {ScannerNavigator} from './ScannerNavigator'

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Navigator 
            drawerContent={(props) => <Sidebar {...props} />}
            initialRouteName={MainScreens.Drops} 
            screenOptions={{headerShown: false, animationEnabled: false}}>
                <Screen name={MainScreens.Drops} component={Drops} />
                <Screen name={CollectiblesScreens.Collectibles} component={CollectiblesNavigator} />
                <Screen name={ScannerScreens.Scan} component={ScannerNavigator} />
                <Screen name={MainScreens.Marketplace} component={Market} />
                <Screen name={MainScreens.Settings} component={Settings} />
        </Navigator>
    )
}