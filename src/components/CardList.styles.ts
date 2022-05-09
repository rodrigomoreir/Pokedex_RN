import styled from 'styled-components/native';

export const StyledContainer = styled.View`
`

export const StyledHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledTabLeft = styled.TouchableOpacity`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const StyledTabRight = styled.TouchableOpacity`
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

export const StyledFlatList = styled.FlatList`
  background-color: black;
  padding: 8px;
  flex-basis: 0;
`

export const StyledButtonSeeMore = styled.TouchableOpacity`
  width: 78px;
  height: 16px;
  align-self: center;
  background-color: black;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  align-items: center;
  justify-content: center;
`

export const StyledIconSeeMore = styled.Image`
  width: 15px;
  height: 8px;
`

export const StyledScrollview = styled.ScrollView`
`

export const StyledDivisor = styled.View`
  height: 10px;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`