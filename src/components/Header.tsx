import React from 'react';

import {
    StyledContainer,
    StyledView,
    StyledImageContainer,
    StyledTitle,
    StyledImage,
    StyledImageStar,
    StyledImageProfile
} from './Header.styles';

import icChevronBack from '../assets/icons/icChevronBack.png'
import icStar from '../assets/icons/icStar.png'
import icOptions from '../assets/icons/icOptions.png'

interface Props {
    title?: string
    goBack?: () => void
    goProfile?: () => void
    favorite?: () => void
}

const Header: React.FC<Props> = ({ title, goBack, goProfile, favorite }) => {

    return (
        <StyledContainer>
            <StyledView>
                {goBack && (
                    <StyledImageContainer onPress={goBack}>
                        <StyledImage source={icChevronBack} />
                    </StyledImageContainer>
                )}
            </StyledView>
            <StyledTitle>{title}</StyledTitle>
            {goProfile && (
                <StyledImageContainer onPress={goProfile}>
                    <StyledImageProfile source={icOptions} />
                </StyledImageContainer>
            )}
            {favorite && (
                <StyledImageContainer onPress={favorite}>
                    <StyledImageStar source={icStar} />
                </StyledImageContainer>
            )
            }

        </StyledContainer>
    )
}

export default Header;