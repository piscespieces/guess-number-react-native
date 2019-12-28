import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#61ADD9',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
    },
    number: {
        fontSize: 22,
    }
})

export default NumberContainer