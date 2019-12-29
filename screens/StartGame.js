import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert, Button } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const StartGame = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = textInput => {
        return (
            setEnteredValue(textInput.replace(/[^0-9]/g, '')) //To sanitize
        )
    }

    const resetButtonHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmButtonHandler = () => {
        const chosenNumber = Number(enteredValue)
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Seems like you provided an invalid number, try again',
                [
                    {
                        text: 'Okay',
                        style: "default",
                        onPress: resetButtonHandler
                    }
                ]
            )
            return
        }

        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={{ fontStyle: 'italic' }}>
                    Selected Number
                </Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <AwesomeButtonRick
                    type='anchor'
                >
                    START GAME
                </AwesomeButtonRick>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <View style={styles.screen}>
                <Text style={styles.headerText}>Start a New Game</Text>
                <Card style={styles.inputFormContainer}>
                    <Input
                        style={styles.textInput}
                        placeholder="Select a Number"
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <AwesomeButtonRick
                            title="Reset"
                            onPress={resetButtonHandler}
                            type="secondary"
                        >Reset
                        </AwesomeButtonRick>

                        <AwesomeButtonRick
                            title="Confirm"
                            onPress={confirmButtonHandler}
                            type="primary"
                            style={styles.confirmButton}
                        >
                            Confirm
                        </AwesomeButtonRick>
                    </View>
                </Card>
                {confirmedOutput}
            </View >
        </TouchableWithoutFeedback>
    )
}

export default StartGame

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        marginVertical: 20,
    },
    inputFormContainer: {
        width: '100%',
        alignItems: 'center',
    },
    textInput: {
        width: '40%',
        fontSize: 15,
        marginVertical: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    summaryContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
})