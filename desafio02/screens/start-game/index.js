import React, {useState} from 'react'
import {View, Text, Button, TouchableWithoutFeedback, Keyboard} from "react-native";
import {Card, Input, NumberContainer, CustomText} from "../../src/components";
import {styles} from "./styles";
import theme from "../../constants/theme";

const StartGame = ({onStartGame}) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setconfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState("");

    const onHandlerChangeText = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }
    const onHandlerReset = () => {
        setEnteredValue("");
        setconfirmed(false);
    }

    const onHandlerConfirm = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <=0 ||chosenNumber > 99 ) return;
        setconfirmed(true);
        setselectedNumber(chosenNumber);
        setEnteredValue("");
    }
    const confirmedOutput = confirmed ? (
        <Card style={styles.inputContainer}>
            <CustomText>Tu selección </CustomText>
            <NumberContainer> {selectedNumber} </NumberContainer>
            <Button title="Empezar juego" 
            onPress={() => onStartGame(selectedNumber)}
            color={theme.colors.bluelightColor} />
        </Card> 
    ) : null;
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.container}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.subtitle}>Elija el número</Text>
                    <Input placeholder="11" keyboardType="numeric" 
                    placeholderTextColor={theme.colors.textColor} style={styles.input} 
                    maxLength={2} blurOnSubmit autoCapitalize="none" 
                    autoCorrect={false} value={enteredValue}
                    onChangeText={(text) => onHandlerChangeText(text) } />
                    <View style={styles.buttonContainer}>
                        <Button title="Limpiar" color={theme.colors.pinkColor} onPress={() => onHandlerReset() }/>
                        <Button title="Confirmar" color={theme.colors.pinkColor} onPress={() => onHandlerConfirm()}/>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
