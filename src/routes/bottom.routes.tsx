import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack.routes';

import { Dimensions, Image, View } from 'react-native';

import icNotifications from '../assets/icons/icNotifications.png'
import icHome from '../assets/icons/icHome.png'
import icMore from '../assets/icons/icMore.png'

const { Navigator, Screen } = createBottomTabNavigator();

const BottomRoutes = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'black' },
                tabBarLabelStyle: { fontSize: 12 },
                tabBarActiveTintColor: '#306DB6',
                tabBarInactiveTintColor: '#FFFFFF',
            }}
        >
            <Screen
                name={'home'}
                component={HomeStack}
                options={{
                    tabBarItemStyle: { borderTopRightRadius: 30 },
                    tabBarIcon: (({ size, color }) => (
                        <View style={{
                            width: Dimensions.get('window').width / 2,
                            height: 70,
                            borderTopRightRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 6,
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            backgroundColor: 'black'
                        }}>
                            <Image source={icHome} width={29} height={32} style={{ tintColor: color }} />
                        </View>
                    ))
                }}
            />
            <Screen
                name={'Cadastrar'}
                component={HomeStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: (({ size, color }) => (
                        <View style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 6,
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            backgroundColor: '#EB3434'
                        }}>
                            <Image source={icMore} width={22} height={22} style={{ tintColor: color }} />
                        </View>
                    ))
                }}
            />
            <Screen
                name={'notificações'}
                component={HomeStack}
                options={{
                    tabBarItemStyle: { borderTopLeftRadius: 30 },
                    tabBarIcon: (({ size, color }) => (
                        <View style={{
                            width: Dimensions.get('window').width / 2,
                            height: 70,
                            borderTopLeftRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 6,
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            backgroundColor: 'black'
                        }}>
                            <Image source={icNotifications} width={27} height={23.73} style={{ tintColor: color }} />
                        </View>
                    ))
                }}
            />
        </Navigator>
    )
}

export default BottomRoutes