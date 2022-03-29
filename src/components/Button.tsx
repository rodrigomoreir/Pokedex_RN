import React from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'

import {
    StyledTouchableOpacity,
    StyledText
} from './Button.styles'

interface ButtonProps extends TouchableOpacityProps {
    text: string
    onPress: () => void
    isLoading: boolean
}

const Button: React.FC<ButtonProps> = ({
    text,
    onPress,
    isLoading,
    ...rest
}) => {
    return (
        <>
            {!isLoading ? (
                <StyledTouchableOpacity onPress={onPress} {...rest}>
                    <StyledText>{text}</StyledText>
                </StyledTouchableOpacity>
            ) : (
                <ActivityIndicator />
            )}
        </>
    )
}

export default Button;