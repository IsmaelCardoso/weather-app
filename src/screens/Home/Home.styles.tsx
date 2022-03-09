import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(30)}px;

    color: ${({ theme }) => theme.colors.text};
`;