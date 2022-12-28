import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import validation from '../validations/_affiliate_validation'
import BirthForm from '../utils/_birth-form'
import AffiliateInput from '../utils/_affiliate-input'
import Currency from '../utils/_currency-affiliates'
import Uploader from 'components/form/uploader'
import { localize } from 'components/localization'
import { DropdownSearch, Header } from 'components/elements'
import device from 'themes/device'
import { useDerivWS } from 'store'

export type TCertificate = {
    lastModified: string
    lastModifiedDate: string
    name: string
    size: number
    type: string
    webkitRelativePath: string
}
type PersonalDataProps = {
    first_name: string
    last_name: string
    date_birth: Date | [Date, Date] | string
    social_media_url: string
    website_url: string
    password: string
    company_name: string
    company_registration_number: string
    certificate_of_incorporation: TCertificate
    citizen: string
    currency: string
}

type PersonalDetailsProps = {
    updatedData: (e) => void
    onValidate: (e) => void
    is_individual: boolean
    affiliate_personal_data: PersonalDataProps
}

type ErrorProps = {
    first_name: string | JSX.Element
    last_name: string | JSX.Element
    company_name: string | JSX.Element
    company_registration_number: string | JSX.Element
    certificate_of_incorporation: string | JSX.Element
    website_url: string | JSX.Element
    social_media_url: string | JSX.Element
    password: string | JSX.Element
    citizen: string | JSX.Element
    currency: string | JSX.Element
}

const DropdownSearchWrapper = styled.div`
    margin-bottom: -16px;
`

const CurrencyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        display: flex;
        flex-direction: row;

        &::before,
        &::after {
            content: '';
            flex: 1 1;
            border-bottom: 1px solid;
            margin: auto;
            color: var(--color-grey-8);
        }
        &::before {
            margin-right: 8px;
        }
        &::after {
            margin-left: 8px;
        }
    }
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
}: PersonalDetailsProps) => {
    const [citizenship_list, setCitizenShipList] = useState([])
    const [personal_details, setPersonalDetails] = useState({
        first_name: affiliate_personal_data.first_name,
        last_name: affiliate_personal_data.last_name,
        date_birth: affiliate_personal_data.date_birth,
        company_name: affiliate_personal_data.company_name,
        company_registration_number: affiliate_personal_data.company_registration_number,
        certificate_of_incorporation: affiliate_personal_data.certificate_of_incorporation,
        citizen: affiliate_personal_data.citizen,
        website_url: affiliate_personal_data.website_url,
        social_media_url: affiliate_personal_data.social_media_url,
        password: affiliate_personal_data.password,
        currency: affiliate_personal_data.currency,
    })

    const [error_msgs, setErrorMsgs] = useState<ErrorProps>({
        first_name: null,
        last_name: null,
        company_name: null,
        company_registration_number: null,
        certificate_of_incorporation: null,
        website_url: null,
        social_media_url: null,
        password: null,
        currency: null,
        citizen: null,
    })

    const {
        first_name,
        last_name,
        date_birth,
        company_name,
        company_registration_number,
        certificate_of_incorporation,
        citizen,
        website_url,
        social_media_url,
        password,
        currency,
    } = personal_details

    const form_inputs = [
        {
            id: 'first_name',
            name: 'first_name',
            type: 'text',
            label: localize('First name'),
            placeholder: localize('First name'),
            extra_info: ' ',
            error: error_msgs.first_name,
            value: first_name,
            required: true,
        },
        {
            id: 'last_name',
            name: 'last_name',
            type: 'text',
            label: localize('Last name'),
            placeholder: localize('Last name'),
            extra_info: ' ',
            error: error_msgs.last_name,
            value: last_name,
            required: true,
        },
        {
            id: 'date_birth',
            name: 'date_birth',
            type: 'date',
            label: localize('Date of Birth'),
            placeholder: localize('Date of Birth'),
            extra_info: ' ',
            value: date_birth,
            required: false,
        },
        {
            id: 'company_name',
            name: 'company_name',
            type: 'text',
            label: localize('Company name'),
            placeholder: localize('Company name'),
            extra_info: ' ',
            error: error_msgs.company_name,
            value: company_name,
            required: true,
        },
        {
            id: 'company_registration_number',
            name: 'company_registration_number',
            type: 'number',
            label: localize('Company registration number'),
            placeholder: localize('Company registration number'),
            extra_info: ' ',
            error: error_msgs.company_registration_number,
            value: company_registration_number,
            required: true,
        },
        {
            id: 'certificate_of_incorporation',
            name: 'certificate_of_incorporation',
            type: 'file',
            label: certificate_of_incorporation?.name
                ? certificate_of_incorporation?.name
                : localize('Certificate of incorporation'),
            placeholder: localize('Certificate of incorporation'),
            extra_info: 'Accepted files: pdf, jpeg, and png. Max file size: 8MB',
            error: error_msgs.certificate_of_incorporation,
            value: certificate_of_incorporation,
            required: true,
        },
        {
            id: 'citizenship_select',
            name: 'citizen',
            type: 'select',
            label: localize('Citizenship'),
            placeholder: localize('Citizenship'),
            extra_info: ' ',
            error: error_msgs.citizen,
            list: citizenship_list,
            value: citizen,
            required: true,
        },
        {
            id: 'website_url',
            name: 'website_url',
            type: 'text',
            label: localize('Website URL'),
            placeholder: localize('Website URL'),
            extra_info: 'Optional',
            error: error_msgs.website_url,
            value: website_url,
            required: false,
        },
        {
            id: 'social_media_url',
            name: 'social_media_url',
            type: 'text',
            label: localize('Social media URL'),
            placeholder: localize('Social media URL'),
            extra_info: 'Optional',
            error: error_msgs.social_media_url,
            value: social_media_url,
            required: false,
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            label: localize('Password'),
            placeholder: localize('Password'),
            extra_info: ' ',
            error: error_msgs.password,
            value: password,
            required: true,
        },
        {
            id: 'dm-currency',
            name: 'currency',
            type: 'currency',
            label: localize('currency'),
            placeholder: localize('currency'),
            extra_info: ' ',
            error: error_msgs.currency,
            value: currency,
            required: true,
        },
    ]

    const { send } = useDerivWS()

    useEffect(() => {
        send({ residence_list: 1 }, (response) => {
            if (!response.error) {
                const residence_list_response = response.residence_list.map(({ text, value }) => {
                    return {
                        name: text,
                        display_name: text,
                        value: value,
                    }
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
            certificate_of_incorporation,
            citizen,
            website_url,
            social_media_url,
            password,
            currency,
        })
    }, [personal_details])

    const is_individual_validate =
        !first_name || !last_name || !date_birth || !citizen || !password || !currency

    const is_business_validate =
        !first_name ||
        !last_name ||
        !date_birth ||
        !citizen ||
        !password ||
        !company_name ||
        !company_registration_number ||
        !currency ||
        !certificate_of_incorporation

    useEffect(() => {
        const validateAccountType = is_individual ? !is_individual_validate : !is_business_validate
        onValidate(validateAccountType)
    }, [onValidate])

    const getFormFields = () => {
        return form_inputs.filter((item) => {
            if (is_individual) {
                const company_details = [
                    'company_name',
                    'certificate_of_incorporation',
                    'company_registration_number',
                ]

                return !company_details.includes(item.name)
            }
            return true
        })
    }

    const handleInput = (e) => {
        const { name, value } = e.target

        switch (name) {
            case 'first_name': {
                setPersonalDetails({ ...personal_details, first_name: value })
                return setErrorMsgs({ ...error_msgs, first_name: validation.first_name(value) })
            }
            case 'last_name': {
                setPersonalDetails({ ...personal_details, last_name: value })
                return setErrorMsgs({ ...error_msgs, last_name: validation.last_name(value) })
            }
            case 'date_birth': {
                setPersonalDetails({ ...personal_details, date_birth: value })
                break
            }
            case 'company_name': {
                setPersonalDetails({ ...personal_details, company_name: value })
                return setErrorMsgs({ ...error_msgs, company_name: validation.company_name(value) })
            }
            case 'company_registration_number': {
                setPersonalDetails({ ...personal_details, company_registration_number: value })
                return setErrorMsgs({
                    ...error_msgs,
                    company_registration_number: validation.company_registration_number(value),
                })
            }
            case 'certificate_of_incorporation': {
                setPersonalDetails({
                    ...personal_details,
                    certificate_of_incorporation: e.target.files[0],
                })
                break
            }
            case 'citizen': {
                setPersonalDetails({ ...personal_details, citizen: value })
                return setErrorMsgs({ ...error_msgs, citizen: validation.country(value) })
            }
            case 'website_url': {
                setPersonalDetails({ ...personal_details, website_url: value })
                return setErrorMsgs({ ...error_msgs, website_url: validation.website_url(value) })
            }
            case 'social_media_url': {
                setPersonalDetails({ ...personal_details, social_media_url: value })
                return setErrorMsgs({
                    ...error_msgs,
                    social_media_url: validation.social_media_url(value),
                })
            }
            case 'password': {
                setPersonalDetails({ ...personal_details, password: value })
                return setErrorMsgs({ ...error_msgs, password: validation.password(value) })
            }
            case 'currency': {
                setPersonalDetails({ ...personal_details, currency: value })
                break
            }
        }
    }

    return (
        <InputGroup>
            <InputWrapper>
                <form>
                    {getFormFields().map((item) => {
                        if (item.name === 'citizen') {
                            return (
                                <DropdownSearchWrapper key={item.id}>
                                    <DropdownSearch
                                        id={item.id}
                                        label_position={1}
                                        key={item.id}
                                        selected_item={citizen}
                                        onChange={(value) =>
                                            setPersonalDetails({
                                                ...personal_details,
                                                citizen: value,
                                            })
                                        }
                                        error={error_msgs[item.name]}
                                        default_item={''}
                                        items={item.list}
                                        type={item.type}
                                        label={item.label}
                                        mb="48px"
                                        affiliate
                                    />
                                </DropdownSearchWrapper>
                            )
                        }
                        if (item.name === 'date_birth') {
                            return (
                                <BirthForm
                                    id={item.id}
                                    key={item.id}
                                    error={error_msgs[item.name]}
                                    value={item.value}
                                    border="solid 1px var(--color-grey-7)"
                                    label_color="grey-5"
                                    label_hover_color="grey-5"
                                    label={localize(item.label)}
                                    setFieldValue={(value) => {
                                        setPersonalDetails({
                                            ...personal_details,
                                            date_birth: value,
                                        })
                                    }}
                                />
                            )
                        }
                        if (item.name === 'certificate_of_incorporation') {
                            return (
                                <Uploader
                                    width={500}
                                    id={item.id}
                                    key={item.id}
                                    type={item.type}
                                    error={error_msgs[item.name]}
                                    name={item.name}
                                    label={item.label}
                                    border="solid 1px var(--color-grey-7)"
                                    background="white"
                                    onChange={handleInput}
                                    required={item.required}
                                    accept="image/*"
                                    className="custom-file-input"
                                    extra_info={item.extra_info}
                                    handleError={() => {
                                        setPersonalDetails({ ...personal_details, [item.name]: '' })
                                        setErrorMsgs({ ...error_msgs, [item.name]: null })
                                    }}
                                />
                            )
                        }

                        if (item.name === 'currency') {
                            return (
                                <>
                                    <CurrencyWrapper>
                                        <Header
                                            as="span"
                                            type="paragraph-1"
                                            align="center"
                                            weight="normal"
                                        >
                                            {localize('Choose your currency')}
                                        </Header>
                                    </CurrencyWrapper>
                                    <Currency
                                        current_select={currency}
                                        selectedCurrency={(value) => {
                                            setPersonalDetails({
                                                ...personal_details,
                                                currency: value,
                                            })
                                        }}
                                    />
                                </>
                            )
                        } else {
                            return (
                                <AffiliateInput
                                    width={500}
                                    id={item.id}
                                    key={item.id}
                                    type={item.type}
                                    value={item.value}
                                    name={item.name}
                                    error={error_msgs[item.name]}
                                    password_icon={item.type == 'password'}
                                    border="solid 1px var(--color-grey-7)"
                                    label_color="grey-5"
                                    label_hover_color="grey-5"
                                    background="white"
                                    label={localize(item.label)}
                                    placeholder={item.placeholder}
                                    onChange={handleInput}
                                    onBlur={handleInput}
                                    required={item.required}
                                    data-lpignore="true"
                                    autoComplete="off"
                                    extra_info={item.extra_info}
                                    handleError={() => {
                                        setErrorMsgs({ ...error_msgs, [item.name]: null })
                                    }}
                                />
                            )
                        }
                    })}
                </form>
            </InputWrapper>
        </InputGroup>
    )
}
export default PersonalDetails
