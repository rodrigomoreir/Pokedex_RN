import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack.routes';

import { Image } from 'react-native';

import icNotifications from '../assets/icons/icNotifications.png'
import icHome from '../assets/icons/icHome.png'
import icMore from '../assets/icons/icMore.png'

const { Navigator, Screen } = createBottomTabNavigator();

const BottomRoutes = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000000', height: 90 },
                tabBarLabelStyle: { fontSize: 12 },
                tabBarActiveTintColor: '#306DB6',
                tabBarInactiveTintColor: '#FFFFFF',
            }}
        >
            <Screen
                name={'home'}
                component={HomeStack}
                options={{
                    tabBarItemStyle: { borderTopRightRadius: 30, flex: 1 },
                    tabBarIcon: (({ size, color }) => (
                        <Image source={icHome} width={29} height={32} style={{ tintColor: color }} />
                    ))
                }}
            />
            <Screen
                name={'Cadastrar'}
                component={HomeStack}
                options={{
                    tabBarItemStyle: { backgroundColor: '#EB3434', borderRadius: 50, width: 58 },
                    // tabBarShowLabel: false,
                    tabBarIcon: (({ size, color }) => (
                        <Image source={icMore} width={22} height={22} style={{ tintColor: color }} />

                        // <MaterialIcons
                        //     name={'attach-money'}
                        //     size={size}
                        //     color={color}
                        // />
                    ))
                }}
            />
            <Screen
                name={'notificações'}
                component={HomeStack}
                options={{
                    // tabBarInactiveTintColor: '#000000',
                    tabBarItemStyle: { borderTopLeftRadius: 30 },
                    tabBarIcon: (({ size, color }) => (
                        <Image source={icNotifications} width={27} height={23.73} style={{ tintColor: color }} />
                        // <MaterialIcons
                        //     name={'notifications'}
                        //     size={size}
                        //     color={color}
                        // />
                    ))
                }}
            />
        </Navigator>
    )
}

export default BottomRoutes