import React from 'react';

import {
    StyledContainer,
    StyledContent,
    StyledPokedexNumber,
    StyledImage,
    StyledPokemonImage,
    StyledTextContainer,
    StyledTitle,
    StyledPokedexNumberContent
} from './PokeCard.styles';

import icPokeball from '../assets/icons/icPokeball.png'
import squirtle from '../assets/images/squirtle.png'

interface Props {
    title: String
    pokedexNumber: String
    onPress: () => void
}

const PokeCard = ({ title, pokedexNumber, onPress }: Props) => {
    return (
        <StyledContainer onPress={onPress}>
            <StyledContent>
                <StyledPokedexNumberContent>
                    <StyledPokedexNumber>#{pokedexNumber}</StyledPokedexNumber>
                </StyledPokedexNumberContent>
                <StyledImage source={icPokeball} />
                <StyledPokemonImage source={squirtle} />
            </StyledContent>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
            </StyledTextContainer>
        </StyledContainer>
    );
}

export default PokeCard;