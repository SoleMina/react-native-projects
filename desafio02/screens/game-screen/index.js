import React, {useState} from 'react';
import {View, Text, Button} from "react-native";
import theme from '../../constants/theme';
import { Card, GenerateRandomNumber, NumberContainer } from '../../src/components';
import StartGame from '../start-game';
import {styles} from "./styles";


const GameScreen = ({userOptions}) => {
    const [content, setContent] = useState(true);
    const [currentGuess, setCurrentGuess] = useState(GenerateRandomNumber(1, 99, userOptions));

    
    const endGame = () => {
        setContent(false);
    }
    return (
        <View style={styles.container}>
            {
                content ? 
                <View>
                    <Text style={styles.headline}>La suposición del oponente</Text>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    
                    <Card style={styles.buttonContainer}>
                        <Button title="End Game" onPress={() => endGame()}  color={theme.colors.bluelightColor} />
                    </Card>
                </View>
                :
                <Text style={styles.subtitle}>Thank you for playing with me</Text>

            }
            
        </View>
    )
}

export default GameScreen;
