import React, {useState} from 'react';
import {View, Text, Button} from "react-native";
import theme from '../../constants/theme';
import { Card, GenerateRandomNumber, NumberContainer } from '../../src/components';
import {styles} from "./styles";


const GameScreen = ({userOptions}) => {
    const [currentGuess, setCurrentGuess] = useState(GenerateRandomNumber(1, 99, userOptions))
    return (
        <View style={styles.container}>
            <Text>La suposición del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            
            <Card style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => null}  color={theme.colors.bluelightColor} />
                <Button title="Mayor" onPress={() => null} color={theme.colors.bluelightColor}  />
            </Card>
        </View>
    )
}

export default GameScreen;
