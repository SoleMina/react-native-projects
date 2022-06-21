import React, {useState} from 'react';
import {View, Text, Button} from "react-native";
import theme from '../../constants/theme';
import { Card, NumberContainer } from '../../src/components';
import {styles} from "./styles";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    } 
}

const GameScreen = ({userOptions}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 99, userOptions))
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
