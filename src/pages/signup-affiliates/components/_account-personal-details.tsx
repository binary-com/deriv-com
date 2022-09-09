import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import validation from '../validations/_account-details'
import Currency from '../_currency-affiliates'
import { localize } from 'components/localization'
import { DropdownSearch, Header } from 'components/elements'
import { Input } from 'components/form'
import device from 'themes/device'
import { useDerivWS } from 'store'

type PersonalDetailsprops = {
    updatedData?: (e) => void
    onValidate?: (e) => void
    is_individual?: boolean
    affiliate_personal_data?: {
        first_name: string
        last_name: string
        date_birth: string
        social_media_url: string
        website_url: string
        password: string
        company_name: string
        company_registration_number: string
        certificate: string
        citizen: {
            name: string
            display_name: string
            value: string
        }
    }
}

type countryType = {
    name: string
    display_name: string
    value: string
}

const DropdownSearchWrapper = styled.div`
    margin-bottom: -16px;
`

const CurrencyWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const Line = styled.div`
    width: 132px;
    height: 1px;
    margin: 10px;
    background-color: var(--color-grey-7);
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;

    p {
        min-height: 30px !important;
    }
`

const InputWrapper = styled.div`
    width: 50%;
    line-height: 10px;
    font-weight: normal;
    margin-right: 1rem;
    @media ${device.mobileL} {
        width: unset;
        max-width: 191px;
    }
`

const PersonalDetails = ({
    is_individual,
    affiliate_personal_data,
    updatedData,
    onValidate,
}: PersonalDetailsprops) => {
    const [currency, setCurrency] = useState('')
    const [citizenship_list, setCitizenShipList] = useState([])
    const [first_name, setFirstName] = useState(affiliate_personal_data.first_name)
    const [last_name, setLastName] = useState(affiliate_personal_data.last_name)
    const [date_birth, seDateBirth] = useState(affiliate_personal_data.date_birth)
    const [citizen, setCitizen] = useState(affiliate_personal_data.citizen)
    const [website_url, setWebsiteUrl] = useState(affiliate_personal_data.website_url)
    const [social_media_url, setSocialMedia] = useState(affiliate_personal_data.social_media_url)
    const [password, setPassword] = useState(affiliate_personal_data.password)
    const [company_name, setCompanyName] = useState(affiliate_personal_data.company_name)
    const [company_registration_number, setCompanyRegistrationNumber] = useState(
        affiliate_personal_data.company_registration_number,
    )
    const [certificate, setCertificate] = useState(affiliate_personal_data.certificate)
    const [first_name_error_msg, setFirstNameErrorMsg] = useState('')
    const [last_name_error_msg, setLastNameErrorMsg] = useState('')
    const [date_birth_error_msg, setDateBirthErrorMsg] = useState('')
    const [citizen_error_msg, setCitizenErrorMsg] = useState('')
    const [password_error_msg, setPasswordErrorMsg] = useState('')
    const [company_name_error_msg, setCompanyNameErrorMsg] = useState('')
    const [company_registration_error_msg, setCompanyRegistrationErrorMsg] = useState('')
    const [certificate_error_msg, setCertificateErrorMsg] = useState('')
    const [currency_error_msg, setCurrencyErrorMsg] = useState('')

    const form_inputs = [
        {
            id: 'first_name',
            name: 'first_name',
            type: 'text',
            label: localize('First name'),
            placeholder: 'First name',
            error: first_name_error_msg,
            value: first_name,
            required: true,
        },
        {
            id: 'last_name',
            name: 'last_name',
            type: 'text',
            label: localize('Last name'),
            placeholder: 'First name',
            error: last_name_error_msg,
            value: last_name,
            required: true,
        },
        {
            id: 'date_birth',
            name: 'date',
            type: 'text',
            label: localize('Date of Birth'),
            placeholder: 'Date of Birth',
            error: date_birth_error_msg,
            value: date_birth,
            required: true,
        },

        {
            id: 'company_name',
            name: 'company_name',
            type: 'text',
            label: localize('Company name'),
            placeholder: 'Company name',
            error: company_name_error_msg,
            value: company_name,
            required: true,
        },
        {
            id: 'company_registration_number',
            name: 'company_registration_number',
            type: 'text',
            label: localize('Company registration number'),
            placeholder: 'Company registration number',
            error: company_registration_error_msg,
            value: company_registration_number,
            required: true,
        },
        {
            id: 'certificate_incorporation',
            name: 'certificate_incorporation',
            type: 'text',
            label: localize('Certificate of incorporation'),
            placeholder: 'Company name',
            error: certificate_error_msg,
            value: certificate,
            required: true,
        },
        {
            id: 'citizenship_select',
            name: 'citizen',
            type: 'select',
            label: localize('Citizenship'),
            placeholder: 'Citizenship',
            error: citizen_error_msg,
            list: citizenship_list,
            value: citizen,
            required: true,
        },
        {
            id: 'website_url',
            name: 'website_url',
            type: 'text',
            label: localize('Website URL'),
            placeholder: 'Website URL',
            value: website_url,
            required: false,
        },
        {
            id: 'social_media_url',
            name: 'social_media_url',
            type: 'text',
            label: localize('Social media URL'),
            placeholder: 'Social media URL',
            value: social_media_url,
            required: false,
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            label: localize('Password'),
            placeholder: 'Password',
            error: password_error_msg,
            value: password,
            required: true,
        },
    ]

    const { send } = useDerivWS()

    const getCitizenList = () => {
        return {
            residence_list: 1,
        }
    }

    const citizen_list = getCitizenList()

    const validate =
        first_name ||
        last_name ||
        date_birth ||
        citizen ||
        password ||
        company_name ||
        company_registration_number ||
        currency ||
        certificate_error_msg ||
        !first_name_error_msg ||
        !last_name_error_msg ||
        !date_birth_error_msg ||
        !citizen_error_msg ||
        !password_error_msg ||
        !company_name_error_msg ||
        !company_registration_error_msg ||
        !certificate_error_msg ||
        !currency_error_msg

    useEffect(() => {
        send(citizen_list, (response) => {
            if (!response.error) {
                const residence_list_response = response.residence_list.map(({ text, value }) => {
                    const country: countryType = {
                        name: text,
                        display_name: text,
                        value: value,
                    }
                    return country
                })
                setCitizenShipList(residence_list_response)
            }
        })
    }, [send])

    useEffect(() => {
        updatedData({
            first_name,
            last_name,
            date_birth,
            company_name,
            company_registration_number,
            certificate,
            citizen,
            website_url,
            social_media_url,
            password,
        })
    }, [
        first_name,
        last_name,
        date_birth,
        company_name,
        company_registration_number,
        certificate,
        citizen,
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
                const company_details = [
                    'company_name',
                    'certificate_incorporation',
                    'company_registration_number',
                ]

                return !company_details.includes(item.name)
            }
            return true
        })
    }
    const handleInput = (e) => {
        console.log(e)
        const { name, value } = e.target
        switch (name) {
            case 'first_name': {
                setFirstName(value)
                return setFirstNameErrorMsg(validation.first_name(value))
            }
            case 'last_name': {
                setLastName(value)
                return setLastNameErrorMsg(validation.last_name(value))
            }
            case 'date_birth': {
                seDateBirth(value)
                return setDateBirthErrorMsg(validation.date(value))
            }
            case 'website_url': {
                setWebsiteUrl(value)
                break
            }
            case 'social_media_url': {
                setSocialMedia(value)
                break
            }
            case 'password': {
                setPassword(value)
                return setPasswordErrorMsg(validation.password(value))
            }
            case 'company_name': {
                setCompanyName(value)
                return setCompanyNameErrorMsg(validation.company_name(value))
            }
            case 'company_registration_number': {
                setCompanyRegistrationNumber(value)
                return setCompanyRegistrationErrorMsg(validation.company_registration_number(value))
            }
            case 'certificate': {
                setCertificate(value)
                return setCertificateErrorMsg(validation.certificate(value))
            }
            case 'citizen': {
                setCitizen(value)
                return setCitizenErrorMsg(validation.country(value))
            }
        }
    }

    return (
        <InputGroup>
            <InputWrapper>
                <form>
                    {getFormFields().map((item, index) => {
                        if (item.name === 'citizen') {
                            return (
                                <DropdownSearchWrapper key={item.id}>
                                    <DropdownSearch
                                        id={item.id}
                                        label_position={0.8}
                                        key={index}
                                        selected_item={citizen}
                                        onChange={(value) => setCitizen(value)}
                                        error={item.error}
                                        default_item={''}
                                        items={item.list}
                                        type={item.type}
                                        label={localize('Citizenship')}
                                    />
                                </DropdownSearchWrapper>
                            )
                        } else {
                            return (
                                <Input
                                    width={500}
                                    id={item.id}
                                    key={index}
                                    type={item.type}
                                    value={item.value}
                                    name={item.name}
                                    error={item.error}
                                    border="solid 1px var(--color-grey-7)"
                                    label_color="grey-5"
                                    label_hover_color="grey-5"
                                    background="white"
                                    label={localize(item.label)}
                                    placeholder={item.placeholder}
                                    onChange={handleInput}
                                    onBlur={handleInput}
                                    required={item.required}
                                />
                            )
                        }
                    })}

                    <CurrencyWrapper>
                        <Line />
                        <Header type="paragraph-1" align="center" weight="normal">
                            {localize('Choose your currency')}
                        </Header>
                        <Line />
                    </CurrencyWrapper>
                    <Currency current_select={currency} selectedCurrency={setCurrency} />
                </form>
            </InputWrapper>
        </InputGroup>
    )
}
export default PersonalDetails
