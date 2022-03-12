import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title } from './Button.styles';

interface IButton extends TouchableOpacityProps {
  title: string;
  color?: string;
  loading?: boolean,
  textColor?: string,
  enabled?: boolean;
  onPress: () => void,
}

const Button = ({
  title,
  color,
  enabled = true,
  loading = false,
  textColor = "",
  onPress,
  ...rest
}: IButton) => {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      onPress={onPress}
      color={color}
      style={{ opacity: (enabled === false || loading === true) ? 0.5 : 1 }}
    >
      {
        loading ?
        <ActivityIndicator
          color={theme.colors.background_secondary}
        /> :
        <Title textColor={textColor}>
          {title}
        </Title>
      }
    </Container>
  );
}

export default Button;
