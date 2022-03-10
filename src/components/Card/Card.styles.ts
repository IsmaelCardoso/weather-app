import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => 
    theme.colors.background_secondary_opacity
  };

  border-radius: 15px;
  border: 2px;
  border-color: ${({theme}) => theme.colors.line_opacity};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Content = styled.View`
  align-items: center;
`
export const ContentValue = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.secondary_600};

  color: ${({theme}) => theme.colors.text};

  margin-bottom: 2px;
  `

export const ContentText = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.secondary_400};

  color: ${({theme}) => theme.colors.text};
`

export const Line = styled.View`
  width: 1px;
  height: 25px;
  background-color: ${({theme}) => theme.colors.line};
`