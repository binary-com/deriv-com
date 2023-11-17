import React, { useEffect, useState } from 'react'
import { WizardStepProps } from '../_types'
import affiliate_validation from '../validations/_affilaite_validation'
import BirthForm from '../utils/_birth-form'
import AffiliateInput from '../utils/_affiliate-input'
import AffiliatesHeader, { InputGroup, InputWrapper } from '../utils/_affiliate-header'
import { localize } from 'components/localization'

const PersonalDetails = ({
    is_individual,
    affiliate_account,
    updateData,
    onValidate,
}: WizardStepProps) => {
    const affiliate_data = affiliate_account.personal_details
    const [username, setUsername] = useState(affiliate_data.username)
    const [first_name, setFirstName] = useState(affiliate_data.first_name)
    const [last_name, setLastName] = useState(affiliate_data.last_name)
    const [date_birth, setDateBirth] = useState(affiliate_data.date_birth)
    const [prefix, setPrefix] = useState(affiliate_data.prefix)
    const [phone, setPhone] = useState(
        affiliate_data.phone ? affiliate_data.phone : affiliate_data.prefix,
    )
    const [company_name, setCompanyName] = useState(affiliate_data.company_name)
    const [company_registration_number, setCompanyRegistrationNumber] = useState(
        affiliate_data.company_registration_number,
    )
    const [website_url, setWebsiteUrl] = useState(affiliate_data.website_url)
    const [second_website_url, setSecondWebsiteUrl] = useState(affiliate_data.second_website_url)
    const [password, setPassword] = useState(affiliate_data.password)

    const [user_name_error_msg, setUserNameErrorMsg] = useState<string>()
    const [first_name_error_msg, setFirstNameErrorMsg] = useState<string>()
    const [last_name_error_msg, setLastNameErrorMsg] = useState<string>()
    const [phone_error_msg, setPhoneErrorMsg] = useState<string>()
    const [company_name_error_msg, setCompanyNameErrorMsg] = useState<string>()
    const [company_registration_error_msg, setCompanyRegistrationErrorMsg] = useState<string>()
    const [website_url_error_msg, setWebsiteUrlErrorMsg] = useState<string>()
    const [second_website_url_error_msg, setSecondWebsiteUrlErrorMsg] = useState<string>()
    const [password_error_msg, setPasswordErrorMsg] = useState<string>()

    const form_inputs = [
        {
            id: 'first_name',
            name: 'first_name',
            type: 'text',
            label: localize('_t_First name*_t_'),
            error: first_name_error_msg,
            value: first_name,
            required: true,
            value_set: setFirstName,
            error_set: setFirstNameErrorMsg,
        },
        {
            id: 'last_name',
            name: 'last_name',
            type: 'text',
            label: localize('_t_Last name*_t_'),
            error: last_name_error_msg,
            value: last_name,
            required: true,
            value_set: setLastName,
            error_set: setLastNameErrorMsg,
        },
        {
            id: 'date_birth',
            name: 'date_birth',
            type: 'date',
            label: localize('_t_Date of Birth*_t_'),
            value: date_birth,
            required: false,
            value_set: setDateBirth,
        },
        {
            id: 'phone',
            name: 'phone',
            type: 'number',
            label: localize('_t_Phone number*_t_'),
            error: phone_error_msg,
            value: phone,
            required: false,
            value_set: setPhone,
            error_set: setPhoneErrorMsg,
        },
        {
            id: 'company_name',
            name: 'company_name',
            type: 'text',
            label: localize('_t_Company name*_t_'),
            error: company_name_error_msg,
            value: company_name,
            required: true,
            value_set: setCompanyName,
            error_set: setCompanyNameErrorMsg,
        },
        {
            id: 'company_registration_number',
            name: 'company_registration_number',
            type: 'number',
            label: localize('_t_Company registration number*_t_'),
            error: company_registration_error_msg,
            value: company_registration_number,
            required: true,
            value_set: setCompanyRegistrationNumber,
            error_set: setCompanyRegistrationErrorMsg,
        },
        {
            id: 'website_url',
            name: 'website_url',
            type: 'text',
            label: is_individual
                ? localize('_t_Website/social media URL*_t_')
                : localize('_t_Company website/social media URL*_t_'),
            error: website_url_error_msg,
            value: website_url,
            required: true,
            value_set: setWebsiteUrl,
            error_set: setWebsiteUrlErrorMsg,
        },
        {
            id: 'second_website_url',
            name: 'second_website_url',
            type: 'text',
            label: is_individual
                ? localize('_t_Second website/social media URL_t_')
                : localize('_t_Company second website/social media URL_t_'),
            error: second_website_url_error_msg,
            value: second_website_url,
            required: false,
            value_set: setSecondWebsiteUrl,
            error_set: setSecondWebsiteUrlErrorMsg,
        },
        {
            id: 'username',
            name: 'username',
            type: 'text',
            label: localize('_t_Username*_t_'),
            error: user_name_error_msg,
            value: username,
            required: true,
            value_set: setUsername,
            error_set: setUserNameErrorMsg,
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            label: localize('_t_Password*_t_'),
            error: password_error_msg,
            value: password,
            required: true,
            value_set: setPassword,
            error_set: setPasswordErrorMsg,
        },
    ]
    // prevent these characters from the input type='number' tag
    const input_id = document.getElementById('company_registration_number')
    const phone_id = document.getElementById('phone')
    input_id?.addEventListener('keydown', function (e) {
        if (['.', ',', '-', '+', 'e'].includes(e.key)) {
            e.preventDefault()
        }
    })
    phone_id?.addEventListener('keydown', function (e) {
        if (['.', ',', '-', '+', 'e'].includes(e.key)) {
            e.preventDefault()
        }
    })

    const validate = is_individual
        ? username &&
          first_name &&
          last_name &&
          date_birth &&
          phone &&
          password &&
          !first_name_error_msg &&
          !last_name_error_msg &&
          !password_error_msg
        : first_name &&
          last_name &&
          date_birth &&
          password &&
          company_name &&
          company_registration_number &&
          !first_name_error_msg &&
          !last_name_error_msg &&
          !phone_error_msg &&
          !password_error_msg &&
          !company_name_error_msg &&
          !company_registration_error_msg

    useEffect(() => {
        updateData({
            ...affiliate_data,
            first_name,
            last_name,
            date_birth,
            phone,
            prefix,
            company_name,
            company_registration_number,
            website_url,
            second_website_url,
            username,
            password,
        })
    }, [
        username,
        first_name,
        last_name,
        date_birth,
        phone,
        company_name,
        company_registration_number,
        website_url,
        second_website_url,
        password,
    ])

    useEffect(() => {
        onValidate(validate)
    }, [onValidate, validate])
    const getFormFields = () => {
        return form_inputs.filter((item) => {
            if (is_individual) {
                const company_details = ['company_name', 'company_registration_number']

                return !company_details.includes(item.name)
            }
            return true
        })
    }
    const handleInput = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'first_name': {
                setFirstName(value)
                return setFirstNameErrorMsg(affiliate_validation.first_name(value))
            }
            case 'last_name': {
                setLastName(value)
                return setLastNameErrorMsg(affiliate_validation.last_name(value))
            }
            case 'date_birth': {
                setDateBirth(value)
                break
            }
            case 'phone': {
                setPhone(value)
                return setPhoneErrorMsg(affiliate_validation.phone(value))
            }
            case 'company_name': {
                setCompanyName(value)
                return setCompanyNameErrorMsg(affiliate_validation.company_name(value))
            }
            case 'company_registration_number': {
                setCompanyRegistrationNumber(value)
                return setCompanyRegistrationErrorMsg(
                    affiliate_validation.company_registration_number(value),
                )
            }
            case 'website_url': {
                setWebsiteUrl(value)
                return setWebsiteUrlErrorMsg(affiliate_validation.website_url(value))
            }
            case 'second_website_url': {
                setSecondWebsiteUrl(value)
                return setSecondWebsiteUrlErrorMsg(affiliate_validation.second_website_url(value))
            }
            case 'username': {
                setUsername(value)
                return setUserNameErrorMsg(affiliate_validation.username(value))
            }
            case 'password': {
                setPassword(value)
                return setPasswordErrorMsg(affiliate_validation.password(value))
            }
        }
    }

    return (
        <InputGroup>
            <AffiliatesHeader translate_text={'_t_Details_t_'} />
            <InputWrapper>
                {getFormFields().map((item) => {
                    if (item.name === 'date_birth') {
                        return (
                            <BirthForm
                                id={item.id}
                                key={item.id}
                                error={item.error}
                                value={item.value}
                                label={item.label}
                                setFieldValue={item.value_set}
                            />
                        )
                    } else if (item.name === 'username') {
                        return (
                            <>
                                <AffiliatesHeader translate_text={'_t_Personal address_t_'} sized />
                                <AffiliateInput
                                    id={item.id}
                                    key={item.id}
                                    name={item.name}
                                    type={item.type}
                                    value={item.value}
                                    error={item.error}
                                    label={item.label}
                                    required={item.required}
                                    placeholder={item.label}
                                    onChange={handleInput}
                                    onBlur={handleInput}
                                    handleError={() => {
                                        item?.value_set('')
                                        item?.error_set('')
                                    }}
                                />
                            </>
                        )
                    } else {
                        return (
                            <AffiliateInput
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                type={item.type}
                                label={item.label}
                                value={item.value}
                                error={item.error}
                                required={item.required}
                                placeholder={item.label}
                                password_icon={item.type == 'password'}
                                onChange={handleInput}
                                onBlur={handleInput}
                                data-lpignore="true"
                                handleError={() => {
                                    item?.value_set('')
                                    item?.error_set('')
                                }}
                            />
                        )
                    }
                })}
            </InputWrapper>
        </InputGroup>
    )
}
export default PersonalDetails
