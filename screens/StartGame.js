import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const StartGame = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.headerText}>Start a New Game</Text>
            <View style={styles.inputFormContainer}>
                <TextInput
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
            </View>
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
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 8, //For Android Shadows
    },
    textInput: {
        width: '80%',
        height: 30,
        marginVertical: 30,
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
})