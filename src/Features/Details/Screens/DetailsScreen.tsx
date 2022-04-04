import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';

import {
    StyledContainer,
    StyledSafeAreaView,
    StyledContent,
    StyledContentBack,
    StyledSuperView,
    StyledLogoImage,
    StyledPokeImage,
    StyledPokedexNumberContent,
    StyledPokedexNumber,
    StyledTypeContent,
    StyledTypeText,
    StyledTypeImage,
    StyledCharacteristicsContent,
    StyledCharacteristicsImage,
    StyledCharacteristicsText,
    StyledDivisor,
    StyledStatusContent,
    StyledTextBorder,
    StyledImageBorder,
    StyledStatusTitle,
    StyledRowContainer,
    StyledStatusTypeContainer,
    StyledStatusLine,
    StyledStatusLineContainer
} from './DetailsScreen.styles';

import squirtle from '../../../assets/images/squirtle.png'
import logoApp from '../../../assets/icons/logoApp.png'
import icWater from '../../../assets/icons/icWater.png'
import icWeight from '../../../assets/icons/icWeight.png'
import icSize from '../../../assets/icons/icSize.png'
import icAttack from '../../../assets/icons/icAttack.png'


const DetailsScreen = () => {
    const { goBack } = useNavigation()

    return (
        <StyledContainer>
            <StyledSafeAreaView>
                <Header title='Pokemon' goBack={() => goBack()} favorite={() => { }} />
                <StyledSuperView>
                    <StyledContentBack>
                        <StyledLogoImage source={logoApp} />
                    </StyledContentBack>
                    <StyledContent>

                        <StyledPokedexNumberContent>
                            <StyledPokedexNumber>#007</StyledPokedexNumber>
                        </StyledPokedexNumberContent>
                        <StyledTypeContent>
                            <StyledTextBorder>
                                <StyledTypeText>Water</StyledTypeText>
                            </StyledTextBorder>
                            <StyledImageBorder>
                                <StyledTypeImage source={icWater} />
                            </StyledImageBorder>
                        </StyledTypeContent>
                        <StyledCharacteristicsContent>
                            <StyledCharacteristicsImage source={icWeight} />
                            <StyledCharacteristicsText>9.0 kg</StyledCharacteristicsText>
                            <StyledDivisor />
                            <StyledCharacteristicsImage source={icSize} />
                            <StyledCharacteristicsText>0.5 m</StyledCharacteristicsText>
                            <StyledDivisor />
                            <StyledCharacteristicsImage source={icAttack} />
                            <StyledCharacteristicsText>Torrent</StyledCharacteristicsText>
                        </StyledCharacteristicsContent>
                        <StyledStatusContent>
                            <StyledStatusTitle>Base Status</StyledStatusTitle>
                            <StyledRowContainer>
                                <StyledStatusTypeContainer>
                                    <StyledStatusTitle>HP</StyledStatusTitle>
                                    <StyledStatusTitle>ATK</StyledStatusTitle>
                                    <StyledStatusTitle>DEF</StyledStatusTitle>
                                    <StyledStatusTitle>SPD</StyledStatusTitle>
                                </StyledStatusTypeContainer>
                                <StyledDivisor />
                                <StyledStatusTypeContainer>
                                    <StyledStatusTitle>044</StyledStatusTitle>
                                    <StyledStatusTitle>048</StyledStatusTitle>
                                    <StyledStatusTitle>065</StyledStatusTitle>
                                    <StyledStatusTitle>043</StyledStatusTitle>
                                </StyledStatusTypeContainer>
                                <StyledStatusLineContainer>
                                    <StyledStatusLine />
                                    <StyledStatusLine />
                                    <StyledStatusLine />
                                    <StyledStatusLine />
                                </StyledStatusLineContainer>
                            </StyledRowContainer>
                        </StyledStatusContent>

                    </StyledContent>
                    <StyledPokeImage source={squirtle} />

                </StyledSuperView>
            </StyledSafeAreaView>
        </StyledContainer>
    );
}

export default DetailsScreen;