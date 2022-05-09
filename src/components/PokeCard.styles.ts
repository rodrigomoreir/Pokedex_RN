import styled from 'styled-components/native';

export const StyledContainer = styled.TouchableOpacity`
    width: 78px;
    height: 121px;
    background-color: #181818;
    border-radius: 10px;
    border-width: 2px;
    border-color: #306DB6;
    margin: 7px;
`

export const StyledContent = styled.View`
    flex: 1;
`

export const StyledPokedexNumberContent = styled.View`
    padding: 2px;
    padding-right: 5px;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`

export const StyledPokedexNumber = styled.Text`
    font-size: 8px;
    color: #306DB6;
    font-weight: 400;
`

export const StyledImage = styled.Image`
    width: 48.4px;
    height: 48.4px;
`

export const StyledPokemonImage = styled.Image`
    position: absolute;
    align-self: center;
    margin-top: 35.76px;
    width: 62.23px;
    height: 46.67px;
`

export const StyledTextContainer = styled.View`
    height: 26px;
    background-color: #306DB6;
    align-items: center;
    justify-content: center;
`

export const StyledTitle = styled.Text`
    font-size: 12px;
    font-weight: 400;
`
