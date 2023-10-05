import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { WizardStepProps } from '../_types'
import affiliate_validation from '../validations/_affilaite_validation'
import BirthForm from '../utils/_birth-form'
import AffiliateInput from '../utils/_affiliate-input'
import { localize } from 'components/localization'
import device from 'themes/device'

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    inline-size: 100%;
    block-size: 100%;
    margin-bottom: 4rem;
    justify-content: center;

    p {
        min-height: 30px !important;
    }
`

const InputWrapper = styled.div`
    width: 60%;
    line-height: 10px;

    @media ${device.mobileL} {
        width: 250px;
    }
`

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
    const [company_name, setCompanyName] = useState(affiliate_data.company_name)
    const [company_registration_number, setCompanyRegistrationNumber] = useState(
        affiliate_data.company_registration_number,
    )
    const [website_url, setWebsiteUrl] = useState(affiliate_data.website_url)
    const [social_media_url, setSocialMedia] = useState(affiliate_data.social_media_url)
    const [password, setPassword] = useState(affiliate_data.password)

    const [user_name_error_msg, setUserNameErrorMsg] = useState<string>()
    const [first_name_error_msg, setFirstNameErrorMsg] = useState<string>()
    const [last_name_error_msg, setLastNameErrorMsg] = useState<string>()
    const [company_name_error_msg, setCompanyNameErrorMsg] = useState<string>()
    const [company_registration_error_msg, setCompanyRegistrationErrorMsg] = useState<string>()
    const [website_url_error_msg, setWebsiteUrlErrorMsg] = useState<string>()
    const [social_media_url_error_msg, setSocialMediaErrorMsg] = useState<string>()
    const [password_error_msg, setPasswordErrorMsg] = useState<string>()

    const form_inputs = [
        {
            id: 'username',
            name: 'username',
            type: 'text',
            label: localize('_t_Username_t_'),
            placeholder: 'Username',
            extra_info: ' ',
            error: user_name_error_msg,
            value: username,
            required: true,
            value_set: setUsername,
            error_set: setUserNameErrorMsg,
        },
        {
            id: 'first_name',
            name: 'first_name',
            type: 'text',
            label: localize('_t_First name_t_'),
            placeholder: 'First name',
            extra_info: ' ',
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
            label: localize('_t_Last name_t_'),
            placeholder: 'Last name',
            extra_info: ' ',
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
            label: localize('_t_Date of Birth_t_'),
            placeholder: 'Date of Birth',
            extra_info: ' ',
            value: date_birth,
            required: false,
            value_set: setDateBirth,
        },
        {
            id: 'company_name',
            name: 'company_name',
            type: 'text',
            label: localize('_t_Company name_t_'),
            placeholder: 'Company name',
            extra_info: ' ',
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
            label: localize('_t_Company registration number_t_'),
            placeholder: 'Company registration number',
            extra_info: ' ',
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
            label: localize('_t_Website URL_t_'),
            placeholder: 'Website URL',
            extra_info: ' ',
            error: website_url_error_msg,
            value: website_url,
            required: true,
            value_set: setWebsiteUrl,
            error_set: setWebsiteUrlErrorMsg,
        },
        {
            id: 'social_media_url',
            name: 'social_media_url',
            type: 'text',
            label: localize('_t_Social media URL_t_'),
            placeholder: 'Social media URL',
            extra_info: 'Optional',
            error: social_media_url_error_msg,
            value: social_media_url,
            required: false,
            value_set: setSocialMedia,
            error_set: setSocialMediaErrorMsg,
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            label: localize('_t_Password_t_'),
            placeholder: 'Password',
            extra_info: ' ',
            error: password_error_msg,
            value: password,
            required: true,
            value_set: setPassword,
            error_set: setPasswordErrorMsg,
        },
    ]
    // prevent these characters from the input type='number' tag
    const input = document.getElementById('company_registration_number')
    input?.addEventListener('keydown', function (e) {
        if (['.', ',', '-', '+', 'e'].includes(e.key)) {
            e.preventDefault()
        }
    })

    const validate = is_individual
        ? username &&
          first_name &&
          last_name &&
          date_birth &&
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
          !password_error_msg &&
          !company_name_error_msg &&
          !company_registration_error_msg

    useEffect(() => {
        updateData({
            ...affiliate_data,
            username,
            first_name,
            last_name,
            date_birth,
            company_name,
            company_registration_number,
            website_url,
            social_media_url,
            password,
        })
    }, [
        username,
        first_name,
        last_name,
        date_birth,
        company_name,
        company_registration_number,
        website_url,
        social_media_url,
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
            case 'username': {
                setUsername(value)
                return setUserNameErrorMsg(affiliate_validation.username(value))
            }
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
            case 'social_media_url': {
                setSocialMedia(value)
                return setSocialMediaErrorMsg(affiliate_validation.social_media_url(value))
            }
            case 'password': {
                setPassword(value)
                return setPasswordErrorMsg(affiliate_validation.password(value))
            }
        }
    }

    return (
        <InputGroup>
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
                                extra_info={item.extra_info}
                                placeholder={item.placeholder}
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
