import React from 'react'

import { Text, View } from 'react-native'
import { CalculartorButton } from '../components'
import { useCalculator } from '../hooks/useCalculator'

import { styles } from '../theme/appTheme'



export const CalculadoraScreen = () => {

    const { oldNum, num, clean, negativePositive, del, btnDividir, btnMultiplicar, btnRestar, btnSuma, calcular, buildNumber } = useCalculator()

    return (
        <View style={styles.calculatorContainer}>
            {
                oldNum !== '0' && (
                    <Text style={styles.smallResult}> {oldNum} </Text>
                )
            }

            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit> {num}</Text>

            <View style={styles.row}>
                <CalculartorButton text='C' color='primary' action={clean} />
                <CalculartorButton text='+/-' color='primary' action={negativePositive} />
                <CalculartorButton text='del' color='primary' action={del} />
                <CalculartorButton text='/' color='tertiary' action={btnDividir} />
            </View>

            <View style={styles.row}>
                <CalculartorButton text='7' color='secondary' action={buildNumber} />
                <CalculartorButton text='8' color='secondary' action={buildNumber} />
                <CalculartorButton text='9' color='secondary' action={buildNumber} />
                <CalculartorButton text='X' color='tertiary' action={btnMultiplicar} />
            </View>

            <View style={styles.row}>
                <CalculartorButton text='4' color='secondary' action={buildNumber} />
                <CalculartorButton text='5' color='secondary' action={buildNumber} />
                <CalculartorButton text='6' color='secondary' action={buildNumber} />
                <CalculartorButton text='-' color='tertiary' action={btnRestar} />
            </View>

            <View style={styles.row}>
                <CalculartorButton text='1' color='secondary' action={buildNumber} />
                <CalculartorButton text='2' color='secondary' action={buildNumber} />
                <CalculartorButton text='3' color='secondary' action={buildNumber} />
                <CalculartorButton text='+' color='tertiary' action={btnSuma} />
            </View>

            <View style={styles.row}>
                <CalculartorButton text='0' color='secondary' block action={buildNumber} />
                <CalculartorButton text='.' color='secondary' action={buildNumber} />
                <CalculartorButton text='=' color='tertiary' action={calcular} />
            </View>
        </View>
    )
}
