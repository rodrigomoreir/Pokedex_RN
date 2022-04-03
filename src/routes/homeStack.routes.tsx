import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Features/Home/Screens/HomeScreen'
import DetailsScreen from '../Features/Details/Screens/DetailsScreen';

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />

        </Stack.Navigator>
    );
}

export default HomeStack;