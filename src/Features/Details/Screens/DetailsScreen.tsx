import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';

import {
    StyledContainer,
    StyledText,
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
} from './DetailsScreen.styles';

import logoApp from '../../../assets/icons/logoApp.png'
import icWater from '../../../assets/icons/icWater.png'
import squirtle from '../../../assets/images/squirtle.png'

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
                            <StyledCharacteristicsImage />
                            <StyledCharacteristicsText>Caracteristicas</StyledCharacteristicsText>
                            <StyledDivisor />
                        </StyledCharacteristicsContent>
                        <StyledStatusContent>

                        </StyledStatusContent>

                    </StyledContent>
                    <StyledPokeImage source={squirtle} />

                </StyledSuperView>
            </StyledSafeAreaView>
        </StyledContainer>
    );
}

export default DetailsScreen;