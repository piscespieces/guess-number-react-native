import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const StartGame = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.headerText}>Start a New Game</Text>
            <Card style={styles.inputFormContainer}>
                <Input
                    placeholder="Select a Number"
                    style={styles.textInput}
                />
                <View style={styles.buttonContainer}>
                    <AwesomeButtonRick
                        title="Reset"
                        onPress={() => { }}
                        type="secondary"
                        style={styles.resetButton}
                    >
                        Reset
                    </AwesomeButtonRick>

                    <AwesomeButtonRick
                        title="Confirm"
                        onPress={() => { }}
                        type="primary"
                        style={styles.confirmButton}
                    >
                        Confirm
                    </AwesomeButtonRick>
                </View>
            </Card>
        </View >
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
        width: '80%',
        marginVertical: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
})