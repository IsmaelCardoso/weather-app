import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface IContainerProps {
    period: 'day' | 'afternoon' | 'night'
}

export const ContainerLoading = styled.View<IContainerProps>`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme, period }) => period === 'day' ? 
        theme.colors.background_day : 
        period === 'afternoon' ? 
        theme.colors.background_afternoon : 
        theme.colors.background_night
    };
`

export const Container = styled.View<IContainerProps>`
    flex: 1;
    background-color: ${({ theme, period }) => period === 'day' ? 
        theme.colors.background_day : 
        period === 'afternoon' ? 
        theme.colors.background_afternoon : 
        theme.colors.background_night
    };
    padding: 0 25px;
`


export const Content = styled.View`
    margin-top: ${getStatusBarHeight() + 60}px;

    align-items: center;
`;

export const Neighborhood = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(30)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Temperature = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(60)}px;

    color: ${({ theme }) => theme.colors.text};

    margin-top: 16px;
    margin-left: ${RFValue(15)}px;
`;

export const ClimateImageContainer = styled.View`
    margin: -30px 0;
`;

export const ClimateImage = styled.Image`
    width: 180px;
    height: 180px;
`;

export const Climate = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(18)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const TemperatureRange = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(18)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const CardContainer = styled.View`
    margin-top: 20px;
`;

export const Footer = styled.View`
    margin: 20px 0 25px;
`; 

