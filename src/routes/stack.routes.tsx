import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Home from '../screens/Home';
import HelpLocation from '../screens/HelpLocationAccessPermission';

const StackRoutes = () => {
    return(
        <Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Home'}
        >
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='Help'
                component={HelpLocation}
            />
        </Navigator>
    )
}

export default StackRoutes