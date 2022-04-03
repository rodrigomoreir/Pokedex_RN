import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';

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

const LoginScreen = () => {

    const getPokemon = async () => {
        await api.get('pokedex/2/').then(response => {
            console.log('RESPONSE', response)
        }).catch(error => {
            console.log('ERROR', error)
        })
    }

    useEffect(() => {
        getPokemon();
    }, [])

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