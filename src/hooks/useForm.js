import { useState, useEffect } from "react";

export function useForm(initialValues, submitCallback, options = { reinatalizeForm: false }) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if (options.reinatalizeForm) {
            setValues(initialValues);
        }

    }, [initialValues, options])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.value)
    }

    const reinatalizeForm = () => {
        setValues(initialValues);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        await submitCallback(values);
        setValues(initialValues)
    }

    return {
        values,
        changeHandler,
        submitHandler
    };
}