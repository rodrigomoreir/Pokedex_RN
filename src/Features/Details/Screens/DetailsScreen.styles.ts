import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import addOpacity from '../../../utils/addOpacity';

export const StyledContainer = styled.View`
    flex: 1;
`

export const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: #306DB6;
`

export const StyledSuperView = styled.View`
    flex: 1;
    padding: 5px;
    background-color: #306DB6;
`

export const StyledContentBack = styled.View`
    flex: 1;
    background-color: #306DB6;
`

export const StyledContent = styled.View`
    height: ${Dimensions.get('window').height / 2.2}px;
    background-color: white;
    border-radius: 25px;
`

export const StyledText = styled.Text`

`

export const StyledLogoImage = styled.Image`
    width: 165px;
    height: 165px;
    tint-color: ${addOpacity('#ffffff', 0.2)};
    margin-left: 50px;
`

export const StyledPokeImage = styled.Image`
    position: absolute;
    width: 256px;
    height: 191px;
    margin-top: ${Dimensions.get('window').height / 7.5}px;
    align-self: center;
`

export const StyledPokedexNumberContent = styled.View`
    padding: 12px;
    flex-direction: row;
    justify-content: flex-end;
`

export const StyledPokedexNumber = styled.Text`
    font-size: 23px;
    color: #454545;
`

export const StyledTypeContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const StyledTypeText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: white;
`

export const StyledTypeImage = styled.Image`
    width: 15.71px;
    height: 17.4px;
`

export const StyledTextBorder = styled.View`
    background-color: #306DB6;
    margin-right: 21px;
    padding-horizontal: 12px;
    padding-vertical: 5px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const StyledImageBorder = styled.View`
    background-color: #306DB6;
    padding: 5px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const StyledCharacteristicsContent = styled.View`

`

export const StyledCharacteristicsImage = styled.Image`

`

export const StyledCharacteristicsText = styled.Text`

`

export const StyledDivisor = styled.View`

`

export const StyledStatusContent = styled.View`

`
