import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_night};

    padding: 80px 25px;

    align-items: center;
`

export const Title = styled.Text`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};

    color:  ${({ theme }) => theme.colors.text};

    margin-bottom: 20px;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};

    color:  ${({ theme }) => theme.colors.text};

    margin-bottom: 24px;
`;

export const Content = styled.View`
    width: 100%;

    padding: 0 20px;

    align-items: flex-start;

`;