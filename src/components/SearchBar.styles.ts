import styled, { css } from 'styled-components/native';
import addOpacity from '../utils/addOpacity';

export const StyledContainer = styled.View`
  border-radius: 20px;
  height: 40px;
  flex-direction: row;
  background-color: ${addOpacity('#454545', 0.7)};
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  padding-left: 20px;
  color: green;
`;

export const StyledIconContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 1
})`
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  tint-color: white;
`