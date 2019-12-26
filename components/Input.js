import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = props => {
    return <TextInput style={{ ...styles.input, ...props.style }} placeholder={props.placeholder} />
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        textAlign: 'center',
    },
})