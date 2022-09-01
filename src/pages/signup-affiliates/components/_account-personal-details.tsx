import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { DropdownSearch } from 'components/elements'
import { Input } from 'components/form'
import device from 'themes/device'

const PersonalDetails = () => {
    const InputGroup = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        justify-content: center;
        max-height: 300px;
        overflow: scroll;

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
    const form_inputs = [
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
    ]
    return (
        <InputGroup>
            <InputWrapper>
                {form_inputs.map((item, index) => {
                    if (item.name === 'country') {
                        return (
                            <DropdownSearchWrapper key={item.id}>
                                <DropdownSearch
                                    id={item.id}
                                    label_position={0.8}
                                    key={index}
                                    selected_item={''}
                                    onChange={(value) => console.log(value)}
                                    default_item={''}
                                    items={''}
                                    type={item.type}
                                    label={localize('Country of residence')}
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
            </InputWrapper>
        </InputGroup>
    )
}
export default PersonalDetails
