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
    StyledButtonContainer
} from './LoginScreen.styles'

import logoApp from '../../../assets/icons/logoApp.png'
import backgroundPokemon from '../../../assets/images/backgroundPokemon.png'
import backgroundBlur from '../../../assets/images/backgroundBlur.png'
import icGoogle from '../../../assets/icons/icGoogle.png'
import icFacebook from '../../../assets/icons/icFacebook.png'

import TextField from '../../../components/TextField';
import Button from '../../../components/Button';

const LoginScreen = () => {
    const { navigate } = useNavigation()

    return (
        <StyledImageBackground source={backgroundPokemon}>
            <StyledImageBackground source={backgroundBlur}>
                <StyledSafeAreaView>
                    <StyledContainer>
                        <StyledLogoContainer>
                            <StyledLogoImg source={logoApp} />
                            <StyledLogoText>POKEDÉX</StyledLogoText>
                        </StyledLogoContainer>
                        <StyledInputsContainer>
                            <TextField placeholder='Email' />
                            <TextField placeholder='Senha' />
                            <StyledButtonContainer>
                                <Button text='Entrar' onPress={() => navigate('HomeScreen')} isLoading={false} />
                            </StyledButtonContainer>
                            <StyledTextContent>
                                <StyledTextInfo>Não possui conta? </StyledTextInfo>
                                <StyledTouchableContent onPress={() => navigate('RegisterScreen')} >
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

export default LoginScreen;