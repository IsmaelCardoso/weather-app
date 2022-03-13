import { NavigationRouteContext, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { useLocation } from '../../hooks/location'

import { 
    Container,
    Title,
    Text,
    Content,
} from './HelpLocationAccessPermission.styles'

const HelpLocation = () => {
    const { isPermited } = useLocation()

    const navigation = useNavigation<any>()

    useEffect(() => {
        isPermited && navigation.navigate('Home')
    }, [])

    return (
        <Container>
            <Title>Permissão Necessária</Title>
            <Text>Para acessar o app é necessário autorizar o acesso a sua localização:</Text>
            {Platform.OS === 'ios' && (
                <Content>
                    <Text>✓  Abra as configurações do seu celular</Text>
                    <Text>✓  Abra Privacidade</Text>
                    <Text>✓  Abra Localização e Serviços</Text>
                    <Text>✓  Selecione o app Weather App</Text>
                    <Text>✓  De permissão ao acesso ao local</Text>
                    <Text>✓  Feche o app e abra novamente</Text>
                </Content>
            )}

            {Platform.OS === 'android' && (
                <Content>
                    <Text>✓  Abra as configurações do seu celular</Text>
                    <Text>✓  Abra Privacidade</Text>
                    <Text>✓  Gerenciamento de permissão</Text>
                    <Text>✓  Localização</Text>
                    <Text>✓  Selecione o app Weather App</Text>
                    <Text>✓  De permissão para Acesso à localização para este aplicativo</Text>
                    <Text>✓  Feche o app e abra novamente</Text>
                </Content>
            )}

        </Container>
    )
}

export default HelpLocation