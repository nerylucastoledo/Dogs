import React from 'react'

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email valido'
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: 'Senha deve conter 8 caracteres sendo 1 letra maiúcula, 1 minúcula e 1 número.'
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize somente números'
    }
}

function useForm(type) {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if (type === false) {
            return true
        } 

        if (value.length === 0) {
            setError('Preencha um valor')
            return false
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        }

        setError(null)
        return true
    }

    function onChange({ target }) {
        if (error) {
            validate(target.value)
        }
        setValue(target.value)
    }

    return ({
        value, 
        setValue, 
        onChange, 
        error,
        validate: () => validate(value), 
        onBlur: () => validate(value)
    })
}

export default useForm