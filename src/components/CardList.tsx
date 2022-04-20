import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MotiScrollView } from 'moti';

import {
    StyledContainer,
    StyledHeader,
    StyledTabLeft,
    StyledTabRight,
    StyledText,
    StyledImage,
    StyledContent,
    StyledButtonSeeMore,
    StyledIconSeeMore,
    StyledScrollview,
    StyledDivisor
} from './CardList.styles';

import logoApp from '../assets/icons/logoApp.png'
import icTicketStar from '../assets/icons/icTicketStar.png'
import icChevronDown from '../assets/icons/icChevronDown.png'
import icChevronUp from '../assets/icons/icChevronUp.png'
import PokeCard from './PokeCard';
import { Dimensions, View } from 'react-native';

interface Props {
    onPressSeeMore: () => void
}

const CardList = ({ onPressSeeMore }: Props) => {
    const { navigate } = useNavigation()
    const [seeMore, setSeeMore] = useState(false)

    const seeMoreSeeLess = () => {
        if (!!seeMore) {
            setSeeMore(false)
        } else {
            setSeeMore(true)
        }
    }

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

            <MotiScrollView
                bounces={false}
                animate={{
                    height: seeMore ? Dimensions.get('window').height / 2.1 : 160
                }}
            // transition={{
            //     type: 'timing',
            //     duration: 350
            // }}
            >
                <StyledContent style={{}}>
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                </StyledContent>
                <StyledContent>
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                </StyledContent>
                <StyledContent>
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                    <PokeCard onPress={() => navigate('DetailsScreen')} />
                </StyledContent>
            </MotiScrollView>
            <StyledDivisor />
            <StyledButtonSeeMore onPress={() => seeMoreSeeLess()}>
                <StyledIconSeeMore source={seeMore ? icChevronUp : icChevronDown} />
            </StyledButtonSeeMore>
        </StyledContainer>
    );
}

export default CardList;