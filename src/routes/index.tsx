import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'

// import { useAuth } from '../hooks/auth'

import AuthRoutes from './auth.routes'
import BottomRoutes from './bottom.routes'

const Routes = () => {
    const validation = true
    // const [validation, setValidation] = useState(false)

    return (
        <NavigationContainer>
            {validation ? <BottomRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}

export default Routes