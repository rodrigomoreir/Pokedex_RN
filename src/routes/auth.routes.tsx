import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../Features/Login/Screens/LoginScreen';
import RegisterScreen from '../Features/Register/Screens/RegisterScreen';
// import HomeScreen from '../Features/Home/Screens/HomeScreen';

const AuthRoutes = () => {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="LoginScreen" component={LoginScreen} />
            <Screen name="RegisterScreen" component={RegisterScreen} />
            {/* <Screen name="HomeScreen" component={HomeScreen} /> */}
        </Navigator>
    );
};

export default AuthRoutes;