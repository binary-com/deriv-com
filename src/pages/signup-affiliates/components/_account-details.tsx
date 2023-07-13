import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import residence_list from '../residence-list'
import AffiliateInput from '../utils/_affiliate-input'
import validation from '../validations/_validations'
import { DropdownSearch } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

type CountryType = {
    name: string
    display_name: string
    value: string
}
type AccountDetailsProps = {
    residence_list: CountryType[]
    updateData: (e) => void
    onValidate: (e) => void
    affiliate_address_data: {
        state: string
        city: string
        street: string
        postal_code: string
        country: CountryType
    }
}

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

const AccountDetails = ({
    updateData,
    affiliate_address_data,
    onValidate,
}: AccountDetailsProps) => {
    const [country, setCountry] = useState(affiliate_address_data.country)
    const [state, setState] = useState(affiliate_address_data.state)
    const [city, setCity] = useState(affiliate_address_data.city)
    const [street, setStreet] = useState(affiliate_address_data.street)
    const [postal_code, setPostCode] = useState(affiliate_address_data.postal_code)
    const [country_error_msg, setCountryErrorMsg] = useState('')
    const [state_error_msg, setStateErrorMsg] = useState('')
    const [city_error_msg, setCityErrorMsg] = useState('')
    const [street_error_msg, setStreetErrorMsg] = useState('')
    const [postcode_error_msg, setPostCodeErrorMsg] = useState('')

    useEffect(() => {
        updateData({
            ...affiliate_address_data,
            country,
            state,
            street,
            city,
            postal_code,
        })
    }, [country, state, street, city, postal_code])

    const validate =
        country &&
        state &&
        city &&
        street &&
        postal_code &&
        !country_error_msg &&
        !state_error_msg &&
        !city_error_msg &&
        !street_error_msg &&
        !postcode_error_msg

    useEffect(() => {
        onValidate(validate)
    }, [onValidate, validate])

    const form_inputs = [
        {
            id: 'dm-country-select',
            name: 'country',
            type: 'select',
            label: localize('_t_Country of residence_t_'),
            required: true,
            error: country_error_msg,
            value: country,
            list: residence_list,
            value_set: setCountry,
        },
        {
            id: 'dm-state',
            name: 'state',
            type: 'text',
            error: state_error_msg,
            label: localize('_t_State/province_t_'),
            placeholder: 'State/province',
            extra_info: ' ',
            required: true,
            value: state,
            value_set: setState,
            error_set: setStateErrorMsg,
        },
        {
            id: 'dm-town',
            name: 'city',
            type: 'text',
            label: localize('_t_Town/city_t_'),
            placeholder: 'Town/city',
            extra_info: ' ',
            required: true,
            error: city_error_msg,
            value: city,
            value_set: setCity,
            error_set: setCityErrorMsg,
        },
        {
            id: 'dm-street',
            name: 'street',
            type: 'text',
            label: localize('_t_Street_t_'),
            placeholder: 'Street',
            extra_info: ' ',
            required: true,
            error: street_error_msg,
            value: street,
            value_set: setStreet,
            error_set: setStreetErrorMsg,
        },
        {
            id: 'dm-postal-code',
            name: 'postal_code',
            type: 'text',
            label: localize('_t_Postal/Zip code_t_'),
            placeholder: 'Postal/Zip code',
            extra_info: ' ',
            required: true,
            error: postcode_error_msg,
            value: postal_code,
            value_set: setPostCode,
            error_set: setPostCodeErrorMsg,
        },
    ]
    const handleInput = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'country': {
                setCountry(value)
                return setCountryErrorMsg(validation.country(value))
            }
            case 'state': {
                setState(value)
                return setStateErrorMsg(validation.address_state(value))
            }
            case 'city': {
                setCity(value)
                return setCityErrorMsg(validation.address_city(value))
            }
            case 'street': {
                setStreet(value)
                return setStreetErrorMsg(validation.address_street(value))
            }
            case 'postal_code': {
                setPostCode(value)
                return setPostCodeErrorMsg(validation.address_postal_code(value))
            }
        }
    }

    return (
        <InputGroup>
            <InputWrapper>
                {form_inputs.map((item) => {
                    if (item.name === 'country') {
                        return (
                            <DropdownSearch
                                key={item.id}
                                id={item.id}
                                selected_item={item.value}
                                onChange={(country) => setCountry(country)}
                                error={item.error}
                                items={item.list}
                                label={localize('_t_Country of residence_t_')}
                            />
                        )
                    } else {
                        return (
                            <AffiliateInput
                                width={500}
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                type={item.type}
                                value={item.value}
                                error={item.error}
                                border="solid 1px var(--color-grey-7)"
                                label_color="grey-5"
                                label_hover_color="grey-5"
                                background="white"
                                label={item.label}
                                placeholder={item.placeholder}
                                extra_info={item.extra_info}
                                onChange={handleInput}
                                onBlur={handleInput}
                                autoComplete="off"
                                required={item.required}
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

export default AccountDetails
