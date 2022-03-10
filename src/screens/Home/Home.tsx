import React from 'react';
import { ScrollView } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons"

import Card from '../../components/Card'

import { 
    Container, 
    Content,
    City, 
    Neighborhood,
    Temperature,
    ClimateImageContainer,
    Climate,
    TemperatureRange,
    CardContainer,
    Footer,
} from './Home.styles';
import Button from '../../components/Button';


const Home = () => {
    return (
        <Container>
            <ScrollView>
                <Content>
                    <City>São Paulo</City>
                    <Neighborhood>Liberdade</Neighborhood>
                    <Temperature>{`${28}°`}</Temperature>
                    <ClimateImageContainer>
                        <MaterialCommunityIcons name="weather-partly-cloudy" size={165} color="white" />
                    </ClimateImageContainer>
                    <Climate>Parcialmente Nublado</Climate>
                    <TemperatureRange>{`Máx.:${31}°  Mín.:${20}°`}</TemperatureRange>
                </Content>

                <CardContainer>
                    <Card humidity={2} pressure={3} windSpeed={4}/>
                </CardContainer>

                <Footer>
                    <Button title="Atualizar informações"/>
                </Footer>
            </ScrollView>
        </Container>
    );
}

export default Home;