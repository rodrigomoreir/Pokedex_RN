import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    StyledContainer,
    StyledHeader,
    StyledTabLeft,
    StyledTabRight,
    StyledText,
    StyledImage,
    StyledContent
} from './CardList.styles';

import logoApp from '../assets/icons/logoApp.png'
import icTicketStar from '../assets/icons/icTicketStar.png'
import PokeCard from './PokeCard';

const CardList = () => {
    const { navigate } = useNavigation()

    return (
        <StyledContainer>
            <StyledHeader>
                <StyledTabLeft>
                    <StyledImage source={logoApp} />
                    <StyledText>Pokémon</StyledText>
                </StyledTabLeft>
                <StyledTabRight>
                    <StyledText>Favoritos</StyledText>
                    <StyledImage source={icTicketStar} />
                </StyledTabRight>
            </StyledHeader>
            <StyledContent>
                <PokeCard onPress={() => navigate('DetailsScreen')} />
                <PokeCard onPress={() => navigate('DetailsScreen')} />
                <PokeCard onPress={() => navigate('DetailsScreen')} />
                <PokeCard onPress={() => navigate('DetailsScreen')} />
            </StyledContent>
        </StyledContainer>
    );
}

export default CardList;