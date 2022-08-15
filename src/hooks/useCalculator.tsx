import { useRef, useState } from "react"

enum Operators {
    suma, restar, multiplicar, dividir
}

export const useCalculator = () => {
    const [num, setNum] = useState('100')
    const [oldNum, setOldtNum] = useState('0')

    const operationOld = useRef<Operators>()

    const clean = () => {
        setNum('0')
        setOldtNum('0')
    }


    const buildNumber = (textNumber: string) => {
        if (num.includes('.') && textNumber === '.') return

        if (num.startsWith('0') || num.startsWith('-0')) {
            if (textNumber === '.')
                setNum(num + textNumber)
            else if (textNumber === '0' && num.includes('.'))
                setNum(num + textNumber)
            else if (textNumber !== '0' && !num.includes('.'))
                setNum(textNumber)
            else if (textNumber === '0' && !num.includes('.'))
                setNum(num)
            else
                setNum(num + textNumber)
        } else {
            setNum(num + textNumber)
        }
    }

    const negativePositive = () => {
        if (num.includes('-'))
            setNum(num.replace('-', ''))
        else
            setNum('-' + num)
    }

    const del = () => {
        if (num.length === 1 || num.length === 2 && num.includes('-'))
            setNum('0')
        else
            setNum(num.slice(0, -1))
    }

    const changeNumberForOld = () => {
        if (num.endsWith('.')) {
            setOldtNum(num.slice(0, -1))
        } else {
            setOldtNum(num)
        }
        setNum('0')
    }

    const btnDividir = () => {
        changeNumberForOld()
        operationOld.current = Operators.dividir
    }

    const btnMultiplicar = () => {
        changeNumberForOld()
        operationOld.current = Operators.multiplicar
    }

    const btnRestar = () => {
        changeNumberForOld()
        operationOld.current = Operators.restar
    }

    const btnSuma = () => {
        changeNumberForOld()
        operationOld.current = Operators.suma
    }

    const calcular = () => {
        const num1 = Number(num)
        const num2 = Number(oldNum)

        switch (operationOld.current) {
            case Operators.suma:
                setNum(String(num2 + num1))
                break

            case Operators.restar:
                setNum(String(num2 - num1))
                break

            case Operators.multiplicar:
                setNum(String(num2 * num1))
                break

            case Operators.dividir:
                setNum(String(num2 / num1))
                break
        }

        setOldtNum('0')
    }


    return {
        num,
        oldNum,
        clean,
        buildNumber,
        negativePositive,
        del,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSuma,
        calcular
    }
}
