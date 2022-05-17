import React, { useState, memo, useEffect } from 'react';

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
import api from '../services/api';

interface Props {
    title: String
    pokedexNumber: String
    urlType?: String
    onPress: () => void
}

const PokeCard = ({ title, pokedexNumber, urlType, onPress }: Props) => {
    const [colorType, setColorType] = useState('')
    const [pokeImage, setPokeImage] = useState('')

    const getPokemonColor = async (url) => {
        try {
            const pokemonColor = await api.get(url)
            setColorType(pokemonColor.data.color.name)

            const pokemonImage = await api.get(`https://pokeapi.co/api/v2/pokemon/${title}/`)
            setPokeImage(pokemonImage.data.sprites.front_default)

        } catch (error) {
            console.log('err', error)
        }
    }

    useEffect(() => {
        getPokemonColor(urlType)
    }, [])

    return (
        <StyledContainer onPress={onPress} style={{ borderColor: colorType }}>
            <StyledContent>
                <StyledPokedexNumberContent>
                    <StyledPokedexNumber>#{pokedexNumber}</StyledPokedexNumber>
                </StyledPokedexNumberContent>
                <StyledImage source={icPokeball} />
                <StyledPokemonImage source={{ uri: pokeImage }} />
            </StyledContent>
            <StyledTextContainer style={{ backgroundColor: colorType }}>
                <StyledTitle>{title}</StyledTitle>
            </StyledTextContainer>
        </StyledContainer>
    );
}

export default memo(PokeCard);