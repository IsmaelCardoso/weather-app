import React from 'react'

import {
  Container,
  Content,
  ContentText,
  ContentValue,
  Line,
} from './Card.styles'

interface ICardProps {
  windSpeed: number
  pressure: number
  humidity: number
}

const Card = ({ humidity, pressure, windSpeed }: ICardProps): JSX.Element => {
  return (
    <Container>

      <Content>
        <ContentValue>{humidity}%</ContentValue>
        <ContentText>Umidade</ContentText>
      </Content>

      <Line />
      
      <Content>
        <ContentValue>{pressure}</ContentValue>
        <ContentText>Pressão</ContentText>
      </Content>

      <Line />
      
      <Content>
        <ContentValue>{windSpeed} m/s</ContentValue>
        <ContentText>Vel. vento</ContentText>
      </Content>
    </Container>
  )
}

export default Card
