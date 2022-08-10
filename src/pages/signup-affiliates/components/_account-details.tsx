import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DropdownSearch } from 'components/elements'
import { Input } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device'
import { useDerivWS } from 'store'
import { useWebsiteStatus } from 'components/hooks/use-website-status'

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;
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
const getCountryList = () => {
    return {
        residence_list: 1,
    }
}
const country_list = getCountryList()

const AccountDetails = () => {
    const [residence_list, setResidenceList] = useState([])
    const [value, setValue] = useState('')
    // // const [website_status] = useWebsiteStatus()
    // const user_ip_country = website_status?.clients_country || ''
    const [default_residence, setDefaultResidence] = useState(null)
    const { send } = useDerivWS()

    useEffect(() => {
        send(country_list, (response) => {
            if (!response.error) {
                type countryType = {
                    name: string
                    display_name: string
                    value: string
                }
                const residence_list_response = response.residence_list.map((el) => {
                    const country: countryType = {
                        name: el.text,
                        display_name: el.text,
                        value: el.value,
                    }
                    return country
                })
                setResidenceList(residence_list_response)
            }
        })
    }, [send])
    // if (residence_list.length > 0) {
    //     const current_country = residence_list.find(({ value }) => value === user_ip_country)
    //     setDefaultResidence(current_country)
    // }
    // if (!value && default_residence) {
    //     setValue(default_residence)
    // }
    const form_inputs = [
        {
            id: 'dm-country-select',
            name: 'country',
            type: 'select',
            label: localize('Country of residence'),
            placeholder: 'Country of residence',
            required: true,
            list: residence_list,
        },
        {
            id: 'dm-state',
            name: 'state',
            type: 'text',
            label: localize('State/province'),
            placeholder: 'State/province',
            required: true,
        },
        {
            id: 'dm-town',
            name: 'town',
            type: 'text',
            label: localize('Town/city'),
            placeholder: 'Town/city',
            required: true,
        },
        {
            id: 'dm-street',
            name: 'street',
            type: 'text',
            label: localize('Street'),
            placeholder: 'Street',
            required: true,
        },
        {
            id: 'dm-postal-code',
            name: 'postal_code',
            type: 'text',
            label: localize('Postal/Zip code'),
            placeholder: 'Postal/Zip code',
            required: true,
        },
    ]

    console.log('residence_list', residence_list)

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
                                    selected_item={value}
                                    onChange={(value) => setValue(value.name)}
                                    default_item={''}
                                    items={item.list}
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
export default AccountDetails
