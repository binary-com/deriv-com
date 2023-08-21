import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { validation_regex } from 'common/validation'

const schema = yup.object({
    email: yup
        .string()
        .required('_t_Email is required_t_')
        .matches(validation_regex.email, { message: '_t_Email is required_t_' })
        .email('_t_Email is required_t_'),
    full_name: yup.string().required('_t_Please enter your full name_t_'),
    company_name: yup.string().required('_t_Please enter your company name._t_'),
    mobile_number: yup.string().required('_t_Please enter your mobile number._t_'),
})

type FormDataType = yup.InferType<typeof schema>
type FormStateType = { is_loading_form: boolean; is_submitted: boolean }

const useContactForm = () => {
    const [form_state, setFormState] = useState<FormStateType>({
        is_loading_form: false,
        is_submitted: false,
    })
    const contact_us_form = useForm<FormDataType>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    const on_submit = async (data) => {
        setFormState({ ...form_state, is_loading_form: true })
        try {
            const response = await fetch('https://formkeep.com/f/7f4b8b55f10f', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                const responseText = await response.text()
                console.log('Form submitted successfully:', responseText, response)
                setFormState({ is_submitted: true, is_loading_form: false })
            } else {
                console.error('Form submission error:', response.status)
                // Handle errors here based on the response status
                setFormState({ ...form_state, is_loading_form: false })
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setFormState({ ...form_state, is_loading_form: false })
        }
    }

    return {
        contact_us_form,
        on_submit,
        form_state,
    }
}

export default useContactForm
