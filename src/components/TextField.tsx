import React from 'react';
import { TextInputProps } from 'react-native';
import { StyledTextContainer } from './TextField.styles';

interface Props extends TextInputProps {
    placeholder: string;
}

const TextField = ({ placeholder }: Props) => {
    return (
        <StyledTextContainer placeholder={placeholder} placeholderTextColor={'#504747'}>

        </StyledTextContainer>
    );
}

export default TextField;