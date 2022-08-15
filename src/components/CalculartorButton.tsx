import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    text: string
    color?: 'primary' | 'secondary' | 'tertiary'
    block?: boolean,
    action: (textNumber: string) => void
}

export const CalculartorButton = ({ text, color, block, action }: Props) => {
    const getButtonColor = () => {
        switch (color) {

            case 'secondary':
                return styles.secondaryColor

            case 'tertiary':
                return styles.tertiaryColor

            case 'primary':
            default:
                return styles.primaryColor
        }
    }

    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={{
                ...styles.button,
                ...getButtonColor(),
                width: block ? 180 : 80
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: color === 'primary' ? 'black' : 'white'
                }}> {text} </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    primaryColor: {
        backgroundColor: '#9B9B9B',
    },
    secondaryColor: {
        backgroundColor: '#2D2D2D',
    },
    tertiaryColor: {
        backgroundColor: '#FF9427',
    },
    buttonText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
});