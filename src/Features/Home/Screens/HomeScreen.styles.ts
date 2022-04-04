import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const StyledImageBackground = styled.ImageBackground`
    width: 100%; 
    height: 90%;
`

export const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
`

export const StyledTextContainer = styled.View`
    justify-content: center;
    align-items: center;
`

export const StyledTitleContent = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const StyledTitle = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: #E3E3E3;
`

export const StyledLogoImg = styled.Image`
    width: 44px;
    height: 44px;
    margin-left: 13px;
`

export const StyledSubtitle = styled.Text`
    margin-top: 10px;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    color: #E3E3E3;
`

export const StyledSearchBarContainer = styled.View`
    padding-horizontal: 75px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 14px;
`

export const StyledScrollView = styled.ScrollView`
    padding: 11px;
    padding-top: 77px;
`

export const StyledHomeHeader = styled.View`
    /* height: ${Dimensions.get('window').height / 3.85}px; */
    background-color: #000000;
`

export const StyledMasterView = styled.View`
    flex: 1;
    background-color: black;
`