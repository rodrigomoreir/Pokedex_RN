import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    StyledSafeAreaView,
    StyledLogoContainer,
    StyledLogoImg,
    StyledLogoText,
    StyledImageBackground,
    StyledInputsContainer,
    StyledLogoImgSocial,
    StyledSocialContainer,
    StyledContainer,
    StyledTextInfo,
    StyledTextContent,
    StyledTextTouchable,
    StyledTouchableContent,
    StyledSocialContent,
    StyledSocialText,
    StyledButtonContainer,
    StyledBackImg
} from './RegisterScreen.styles'

import logoApp from '../../../assets/icons/logoApp.png'
import backgroundPokemon from '../../../assets/images/backgroundPokemon.png'
import backgroundBlur from '../../../assets/images/backgroundBlur.png'
import icGoogle from '../../../assets/icons/icGoogle.png'
import icFacebook from '../../../assets/icons/icFacebook.png'
import chevronLeft from '../../../assets/icons/chevronLeft.png'

import TextField from '../../../components/TextField';
import Button from '../../../components/Button';

const RegisterScreen = () => {
    const { goBack } = useNavigation()


    return (
        <StyledImageBackground source={backgroundPokemon}>
            <StyledImageBackground source={backgroundBlur}>
                <StyledSafeAreaView>
                    <StyledContainer>
                        <StyledTouchableContent onPress={() => goBack()} >
                            <StyledBackImg source={chevronLeft} />
                        </StyledTouchableContent>
                        <StyledLogoContainer>
                            <StyledLogoImg source={logoApp} />
                            <StyledLogoText>POKEDÉX</StyledLogoText>
                        </StyledLogoContainer>
                        <StyledInputsContainer>
                            <TextField placeholder='Email' />
                            <TextField placeholder='Senha' />
                            <TextField placeholder='Confirme a senha' />
                            <StyledButtonContainer>
                                <Button text='Entrar' onPress={() => { }} isLoading={false} />
                            </StyledButtonContainer>
                            <StyledTextContent>
                                <StyledTextInfo>Não possui conta? </StyledTextInfo>
                                <StyledTouchableContent>
                                    <StyledTextTouchable>Cadastre-se</StyledTextTouchable>
                                </StyledTouchableContent>
                            </StyledTextContent>
                        </StyledInputsContainer>
                        <StyledSocialContainer>
                            <StyledSocialText>Ou acesse com: </StyledSocialText>
                            <StyledSocialContent>
                                <StyledTouchableContent>
                                    <StyledLogoImgSocial source={icGoogle} />
                                </StyledTouchableContent>
                                <StyledTouchableContent>
                                    <StyledLogoImgSocial source={icFacebook} />
                                </StyledTouchableContent>
                            </StyledSocialContent>
                        </StyledSocialContainer>
                    </StyledContainer>
                </StyledSafeAreaView>
            </StyledImageBackground>
        </StyledImageBackground>
    );
}

export default RegisterScreen;