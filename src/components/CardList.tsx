import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MotiView, View } from 'moti';

import {
    StyledContainer,
    StyledHeader,
    StyledTabLeft,
    StyledTabRight,
    StyledText,
    StyledImage,
    StyledFlatList,
    StyledButtonSeeMore,
    StyledIconSeeMore,
    StyledDivisor
} from './CardList.styles';

import logoApp from '../assets/icons/logoApp.png'
import icTicketStar from '../assets/icons/icTicketStar.png'
import icChevronDown from '../assets/icons/icChevronDown.png'
import icChevronUp from '../assets/icons/icChevronUp.png'
import PokeCard from './PokeCard';
import { Dimensions, FlatList } from 'react-native';
import usePokemonStore from '../store/pokemon/pokemonStore';

const CardList = () => {
    const { navigate } = useNavigation()
    const [seeMore, setSeeMore] = useState(false)
    const { getPokemon, pokemon } = usePokemonStore()


    const seeMoreSeeLess = () => {
        if (!!seeMore) {
            setSeeMore(false)
        } else {
            setSeeMore(true)
        }
    }

    useEffect(() => {
        getPokemon()
    }, [])

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

            <MotiView
                animate={{
                    height: seeMore ? Dimensions.get('window').height / 2.1 : 160
                }}
                transition={{
                    type: 'timing',
                    duration: 350
                }}
            >
                <StyledFlatList
                    data={pokemon}
                    keyExtractor={item => String(item.entry_number)}
                    numColumns={4}
                    contentContainerStyle={{ alignItems: 'center' }}
                    renderItem={({ item }) => (
                        <PokeCard
                            title={item.pokemon_species.name}
                            pokedexNumber={item.entry_number}
                            onPress={() => navigate('DetailsScreen')}
                        />
                    )}
                />
            </MotiView>
            <StyledDivisor />
            <StyledButtonSeeMore onPress={() => seeMoreSeeLess()}>
                <StyledIconSeeMore source={seeMore ? icChevronUp : icChevronDown} />
            </StyledButtonSeeMore>
        </StyledContainer>
    );
}

export default CardList;