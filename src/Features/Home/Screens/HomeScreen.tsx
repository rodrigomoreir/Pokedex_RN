import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    StyledSafeAreaView,
    StyledImageBackground,
    StyledTextContainer,
    StyledTitleContent,
    StyledTitle,
    StyledLogoImg,
    StyledSubtitle,
    StyledSearchBarContainer,
    StyledScrollView
} from './HomeScreen.styles'

import backgroundHome from '../../../assets/images/backgroundHome.png'
import backgroundBlur from '../../../assets/images/backgroundBlur.png'
import logoApp from '../../../assets/icons/logoApp.png'

import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import CardList from '../../../components/CardList';
import { ScrollView } from 'react-native';

const LoginScreen = () => {
    const { navigate } = useNavigation()

    return (
        <StyledImageBackground source={backgroundHome}>
            <StyledImageBackground source={backgroundBlur}>
                <StyledSafeAreaView>
                    <Header goProfile={() => { }} />
                    <StyledTextContainer>
                        <StyledTitleContent>
                            <StyledTitle>BROWSE</StyledTitle>
                            <StyledLogoImg source={logoApp} />
                        </StyledTitleContent>
                        <StyledSubtitle>Monitore e veja como estão {'\n'}seus Pokémon.</StyledSubtitle>
                    </StyledTextContainer>
                    <StyledSearchBarContainer>
                        <SearchBar placeholder='pesquise...' value='' onChangeText={() => { }} />
                    </StyledSearchBarContainer>
                    <StyledScrollView>
                        <CardList />

                    </StyledScrollView>
                </StyledSafeAreaView>
            </StyledImageBackground>
        </StyledImageBackground>
    );
}

export default LoginScreen;