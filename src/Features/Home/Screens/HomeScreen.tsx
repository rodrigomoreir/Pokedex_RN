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
    StyledScrollView,
    StyledHomeHeader,
    StyledMasterView
} from './HomeScreen.styles'

import backgroundHome from '../../../assets/images/backgroundHome.png'
import backgroundBlur from '../../../assets/images/backgroundBlur.png'
import logoApp from '../../../assets/icons/logoApp.png'

import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import CardList from '../../../components/CardList';
import usePokemonStore from '../../../store/pokemon/pokemonStore';

const LoginScreen = () => {

    // const { getPokemon } = usePokemonStore()

    // useEffect(() => {
    //     getPokemon()
    // }, [])

    return (
        <StyledMasterView>

            <StyledSafeAreaView>
                <StyledHomeHeader>
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
                </StyledHomeHeader>
                <StyledImageBackground source={backgroundHome}>
                    <StyledImageBackground source={backgroundBlur}>
                        {/* <StyledScrollView> */}
                        <CardList onPressSeeMore={() => { }} />
                        {/* </StyledScrollView> */}
                    </StyledImageBackground>
                </StyledImageBackground>
            </StyledSafeAreaView>
        </StyledMasterView>
    );
}

export default LoginScreen;