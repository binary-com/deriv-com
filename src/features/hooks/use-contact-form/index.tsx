import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { validation_regex } from 'common/validation'
import { trimObjectValues } from 'common/utility'
import { contact_us_form_post_data } from 'common/constants'

const error_message = {
    email: '_t_Please enter your corporate email._t_',
    full_name: '_t_Please enter your full name._t_',
    company_name: '_t_Please enter your company name._t_',
    mobile_number: '_t_Please enter your mobile number._t_',
    email_validation: '_t_Please enter a valid email address._t_',
}
const schema = yup.object({
    full_name: yup.string().required(error_message['full_name']),
    company_name: yup.string().required(error_message['company_name']),
    email: yup
        .string()
        .required(error_message['email'])
        .matches(validation_regex.email, { message: error_message['email_validation'] })
        .email(error_message['email_validation']),
    mobile_number: yup.string().required(error_message['mobile_number']),
})

type FormDataType = yup.InferType<typeof schema>
type FormStateType = {
    is_loading_form: boolean
    is_submitted: boolean
    is_submission_fail: boolean
}
type FieldNameType = keyof typeof error_message

const useContactForm = () => {
    const [form_state, setFormState] = useState<FormStateType>({
        is_loading_form: false,
        is_submitted: false,
        is_submission_fail: false,
    })
    const contact_us_form = useForm<FormDataType>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })
    useEffect(() => {
        if (form_state.is_submitted) {
            setTimeout(() => {
                setFormState({ ...form_state, is_submitted: false })
            }, 4000)
        }
    }, [form_state])

    const on_submit = async (data) => {
        setFormState({ is_loading_form: true, is_submission_fail: false, is_submitted: false })
        try {
            const clean_data = trimObjectValues(data)
            const fields_to_validate = ['full_name', 'mobile_number', 'company_name']

            let has_validation_error = false
            fields_to_validate.forEach((fieldName: FieldNameType) => {
                if (!clean_data[fieldName]) {
                    contact_us_form.setError(fieldName, {
                        type: 'manual',
                        message: error_message[fieldName],
                    })
                    has_validation_error = true
                }
            })

            if (has_validation_error) {
                setFormState({ ...form_state, is_loading_form: false })
                return
            }
            const response = await fetch(contact_us_form_post_data, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clean_data),
            })

            if (response.ok) {
                contact_us_form.reset()
                setFormState({
                    is_submitted: true,
                    is_loading_form: false,
                    is_submission_fail: false,
                })
            } else {
                setFormState({ ...form_state, is_loading_form: false, is_submission_fail: true })
            }
        } catch (error) {
            setFormState({ ...form_state, is_loading_form: false, is_submission_fail: true })
        }
    }

    return {
        contact_us_form,
        on_submit,
        form_state,
    }
}

export default useContactForm
