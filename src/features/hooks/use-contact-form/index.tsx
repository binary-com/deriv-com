import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { validation_regex } from 'common/validation'
import { trimObjectValues } from 'common/utility'
import { contact_us_form_post_data } from 'common/constants'

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
type FormStateType = {
    is_loading_form: boolean
    is_submitted: boolean
    is_submission_fail: boolean
}

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

    const on_submit = async (data) => {
        setFormState({ ...form_state, is_loading_form: true, is_submission_fail: false })
        try {
            const clean_data = trimObjectValues(data)
            const response = await fetch(contact_us_form_post_data, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clean_data),
            })

            if (response.ok) {
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
