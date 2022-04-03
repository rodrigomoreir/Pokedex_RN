import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

// import { useAuth } from '../hooks/auth'

import AuthRoutes from './auth.routes'
import BottomRoutes from './bottom.routes'

const Routes = () => {
    // const { user } = useAuth()
    const validation = true

    return (
        <NavigationContainer>
            {validation ? <BottomRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}

export default Routes