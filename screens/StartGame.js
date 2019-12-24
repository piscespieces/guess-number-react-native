import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StartGame = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The Game Screen
            </Text>
        </View>
    )
}

export default StartGame

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
})