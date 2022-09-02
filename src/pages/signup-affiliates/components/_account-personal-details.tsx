import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Currency from '../_currency-select'
import { localize } from 'components/localization'
import { DropdownSearch, Header } from 'components/elements'
import { Input } from 'components/form'
import device from 'themes/device'

type PersonalDetailsprops = {
    is_individual?: boolean
}
const PersonalDetails = ({ is_individual }: PersonalDetailsprops) => {
    const [currency, setCurrency] = useState('')
    const [form_inputs, setFormInputs] = useState([
        {
            id: 'first_name',
            name: 'first_name',
            type: 'text',
            label: localize('First name'),
            placeholder: 'First name',
            required: true,
        },
        {
            id: 'last_name',
            name: 'last_name',
            type: 'text',
            label: localize('Last name'),
            placeholder: 'First name',
            required: true,
        },
        {
            id: 'dm-date-input',
            name: 'date',
            type: 'text',
            label: localize('Date of Birth'),
            placeholder: 'Date of Birth',
            required: true,
        },

        {
            id: 'company_name',
            name: 'company_name',
            type: 'text',
            label: localize('Company name'),
            placeholder: 'Company name',
            required: true,
        },
        {
            id: 'company_registration_number',
            name: 'company_registration_number',
            type: 'text',
            label: localize('Company registration number'),
            placeholder: 'Company name',
            required: true,
        },
        {
            id: 'certificate_incorporation',
            name: 'certificate_incorporation',
            type: 'text',
            label: localize('Certificate of incorporation'),
            placeholder: 'Company name',
            required: true,
        },
        {
            id: 'citizenship_select',
            name: 'citizenship',
            type: 'select',
            label: localize('Citizenship'),
            placeholder: 'Citizenship',
            required: true,
            // list: residence_list,
        },
        {
            id: 'website_url',
            name: 'website_url',
            type: 'text',
            label: localize('Website URL'),
            placeholder: 'Website URL',
            required: true,
        },
        {
            id: 'social_media_url',
            name: 'social_media_url',
            type: 'text',
            label: localize('Social media URL'),
            placeholder: 'Social media URL',
            required: true,
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            label: localize('Password'),
            placeholder: 'Password',
            required: true,
        },
    ])
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

    useEffect(() => {
        setFormInputs((current_form_inputs) =>
            current_form_inputs.filter((item) => {
                if (is_individual) {
                    const company_details = [
                        'company_name',
                        'certificate_incorporation',
                        'company_registration_number',
                    ]

                    return !company_details.includes(item.name)
                }

                return true
            }),
        )
    }, [form_inputs])

    return (
        <InputGroup>
            <InputWrapper>
                {form_inputs.map((item, index) => {
                    if (item.name === 'citizenship') {
                        return (
                            <DropdownSearchWrapper key={item.id}>
                                <DropdownSearch
                                    id={item.id}
                                    label_position={0.8}
                                    key={index}
                                    selected_item={''}
                                    onChange={(value) => value}
                                    default_item={''}
                                    items={''}
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
                                label_focus_color="black"
                                background="white"
                                label={localize(item.label)}
                                placeholder={item.placeholder}
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
            </InputWrapper>
        </InputGroup>
    )
}
export default PersonalDetails
