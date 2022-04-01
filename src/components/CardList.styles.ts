import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
`

export const StyledHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledTabLeft = styled.View`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const StyledTabRight = styled.View`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const StyledText = styled.Text`
  color: white;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  margin-horizontal: 7px;
`

export const StyledImage = styled.Image`
  tint-color: red;
  width: 27px;
  height: 27px;

`

export const StyledContent = styled.View`
  flex: 1;
  padding: 18px;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
`