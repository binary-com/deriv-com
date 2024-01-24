import React, { useCallback, useEffect, useState } from 'react'
import { WizardStepProps } from '../_types'
import AffiliateInput from '../utils/_affiliate-input'
import AffiliatesHeader, { InputGroup, InputWrapper } from '../utils/_affiliate-header'
import affiliate_validation from '../validations/_affilaite_validation'
import { useStatesList } from 'features/hooks/use-states-list'
import { DropdownSearch } from 'components/elements'
import { localize } from 'components/localization'
import { TString } from 'types/generics'

const AccountAddress = ({
    is_individual,
    affiliate_account,
    residence_list,
    updateData,
    onValidate,
}: WizardStepProps<'account_address'>) => {
    const [form_data, setFormData] = useState(affiliate_account.account_address)
    const [form_errors, setFormErrors] = useState({
        country_error_msg: '',
        state_error_msg: '',
        city_error_msg: '',
        street_error_msg: '',
        postal_code_error_msg: '',
    })
    const [states_list] = useStatesList(form_data.country?.symbol)
    const header_text: TString = is_individual ? '_t_Personal address_t_' : '_t_Company address_t_'

    const handleCountry = (changed_country) => {
        if (
            form_data.country?.name &&
            form_data.state?.name &&
            changed_country !== form_data.country
        ) {
            setFormErrors({
                ...form_errors,
                state_error_msg: 'State is not valid for this country',
            })
        }
        setFormData({ ...form_data, country: changed_country })
    }
    const handleState = (changed_state) => {
        if (form_errors.state_error_msg) {
            setFormErrors({
                ...form_errors,
                state_error_msg: '',
            })
            setFormData({ ...form_data, state: changed_state })
        }
        setFormData({ ...form_data, state: changed_state })
    }

    const form_inputs = [
        {
            id: 'dm-country-select',
            name: 'country',
            type: 'select',
            label: is_individual
                ? localize('_t_Country of residence*_t_')
                : localize('_t_Country*_t_'),
            list: residence_list,
            handler: handleCountry,
        },
        {
            id: 'dm-state',
            name: 'state',
            type: 'select',
            label: localize('_t_State/province*_t_'),
            list: states_list,
            handler: handleState,
        },
        {
            id: 'dm-town',
            name: 'city',
            type: 'text',
            label: localize('_t_Town/city*_t_'),
        },
        {
            id: 'dm-street',
            name: 'street',
            type: 'text',
            label: localize('_t_Street*_t_'),
        },
        {
            id: 'dm-postal-code',
            name: 'postal_code',
            type: 'text',
            label: localize('_t_Postal/Zip code*_t_'),
        },
    ]

    useEffect(() => {
        updateData({ ...form_data })
        onValidate(
            form_data.country?.name &&
                form_data.state?.name &&
                form_data.city &&
                form_data.street &&
                form_data.postal_code &&
                !form_errors.country_error_msg &&
                !form_errors.state_error_msg &&
                !form_errors.city_error_msg &&
                !form_errors.street_error_msg &&
                !form_errors.postal_code_error_msg,
        )
    }, [form_data])

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prev) => ({ ...prev, [name]: value }))

        if (affiliate_validation[name]) {
            const error_msg = affiliate_validation[name](value.trim())
            setFormErrors((errors) => ({
                ...errors,
                [`${name}_error_msg`]: error_msg,
            }))
        }
    }, [])

    const handleError = (item) => {
        setFormData((prev) => ({ ...prev, [item.name]: '' }))
        setFormErrors((errors) => ({
            ...errors,
            [`${item.name}_error_msg`]: '',
        }))
    }

    return (
        <InputGroup>
            <AffiliatesHeader text={header_text} />
            <InputWrapper>
                {form_inputs.map((item) => {
                    if (item.name === 'country' || item.name === 'state') {
                        return (
                            <DropdownSearch
                                key={item.id}
                                id={item.id}
                                label={item.label}
                                items={item.list}
                                selected_item={form_data[item.name]}
                                error={form_errors[`${item.name}_error_msg`]}
                                onChange={item.handler}
                                style={{ marginTop: '16px' }}
                            />
                        )
                    } else {
                        return (
                            <li key={item.id}>
                                <AffiliateInput
                                    id={item.id}
                                    name={item.name}
                                    type={item.type}
                                    value={form_data[item.name].trim()}
                                    error={form_errors[`${item.name}_error_msg`]}
                                    label={item.label}
                                    placeholder={item.label}
                                    onChange={handleInput}
                                    handleError={() => handleError(item)}
                                />
                            </li>
                        )
                    }
                })}
            </InputWrapper>
        </InputGroup>
    )
}

export default AccountAddress
