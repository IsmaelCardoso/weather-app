import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IButton {
  color?: string
}

interface ITitle {
  textColor: string
}

export const Container = styled.TouchableOpacity<IButton>`
  width: 100%;
  min-height: 56px;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.white
  };

  border-radius: 10px;

  margin-bottom: 8px;
`
export const Title = styled.Text<ITitle>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, textColor }) => !!textColor ? 
    textColor : 
    theme.colors.text_detail
  };
`;
