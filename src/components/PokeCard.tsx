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
    onPress: () => void
}

const PokeCard = ({ onPress }: Props) => {
    return (
        <StyledContainer onPress={onPress}>
            <StyledContent>
                <StyledPokedexNumberContent>
                    <StyledPokedexNumber>#007</StyledPokedexNumber>
                </StyledPokedexNumberContent>
                <StyledImage source={icPokeball} />
                <StyledPokemonImage source={squirtle} />
            </StyledContent>
            <StyledTextContainer>
                <StyledTitle>SQUIRTLE</StyledTitle>
            </StyledTextContainer>
        </StyledContainer>
    );
}

export default PokeCard;