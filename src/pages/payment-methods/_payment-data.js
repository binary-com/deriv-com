import React from 'react'
import styled from 'styled-components'
import ReferencePDF from '../../../static/payment-methods/index'
import payment_method_json from './payment_methods.json'
import PaymentLogos from 'images/svg/payment-methods'
import { Localize } from 'components/localization'

const StyledIcon = styled.img`
    width: 72px;
    height: 72px;
`
const NoIconText = styled.div`
    color: var(--color-red);
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

const getWithdrawalLimit = (min_withdrawal, max_withdrawal) => {
    if (
        (min_withdrawal === 'Not Available' && max_withdrawal === 'Not Available') ||
        max_withdrawal === 'No maximum'
    )
        return <Localize translate_text={`${min_withdrawal}`} />
    if (min_withdrawal.includes('|') && max_withdrawal.includes('|')) {
        let min_withdrawal_array = min_withdrawal.split('|')
        let max_withdrawal_array = max_withdrawal.split('|')
        const values = min_withdrawal_array
            .map((amount, i) => amount + '-' + max_withdrawal_array[i])
            .join('<0></0>')
        return <Localize translate_text={values} components={[<br key={0} />]} />
    }
    return <Localize translate_text={`${min_withdrawal} - ${max_withdrawal}`} />
}

const getDepositLimit = (min_deposit, max_deposit) => {
    if (min_deposit === 'No minimum' && max_deposit === 'No maximum')
        return <Localize translate_text={`${min_deposit}`} />
    if (min_deposit.includes('|') && max_deposit.includes('|')) {
        let min_deposit_array = min_deposit.split('|')
        let max_deposit_array = max_deposit.split('|')
        const values = min_deposit_array
            .map((amount, i) => amount + '-' + max_deposit_array[i])
            .join('<0></0>')
        return <Localize translate_text={values} components={[<br key={0} />]} />
    }
    return <Localize translate_text={`${min_deposit} - ${max_deposit}`} />
}

const categorizePaymentMethod = (json) => {
    const categories = {}

    json.map((data) => {
        const { category } = data
        if (categories[category] === undefined) {
            categories[category] = []
        }
        delete data.category
        categories[category].push({ ...data })
    })
    return categories
}

const getsortedCategories = (categories) => {
    const final_categories = []
    const default_order = ['Banking', 'Credit', 'wallet', 'Crypto', 'Fiat']

    categories.map((category) => {
        default_order.forEach((order, index) => {
            if (category.includes(order)) {
                final_categories[index] = category
            }
        })
    })

    return final_categories
}

const getCurrency = (currencies) => {
    if (currencies.length === 1) return currencies[0].join(' ')
    const values = currencies.map((group) => `${group.join(' ')}`).join('\n')
    return values
}

const getReference = (key, reference, locale) => {
    if (reference !== '') {
        if (locale.length && ReferencePDF[`${key}_${locale}`]) {
            return { reference: `${key}-payment-method.pdf`, locales: locale }
        }
        return ReferencePDF[key] ? { reference: `${key}-payment-method.pdf` } : null
    }
    return null
}

const PaymentDataGenerator = () => {
    const categorized_method = categorizePaymentMethod(payment_method_json)
    const sortedCategories = getsortedCategories(Object.keys(categorized_method))
    return sortedCategories.map((category) => {
        const payment_methods = categorized_method[category]
        const data =
            payment_methods &&
            payment_methods.map(
                ({
                    currencies,
                    deposit_proccessing_time,
                    description,
                    logo,
                    name,
                    max_deposit,
                    min_deposit,
                    max_withdrawal,
                    min_withdrawal,
                    withdrawal_processing_time,
                    link_deriv,
                    reference,
                    key,
                    countries,
                    locale,
                }) => {
                    const payment_method_logo = PaymentLogos[logo] ? (
                        <StyledIcon src={PaymentLogos[logo]} alt={name} />
                    ) : (
                        <NoIconText>{name}</NoIconText>
                    )
                    return {
                        name,
                        method: payment_method_logo,
                        currencies: getCurrency(currencies),
                        min_max_deposit: getDepositLimit(min_deposit, max_deposit),
                        min_max_withdrawal: getWithdrawalLimit(min_withdrawal, max_withdrawal),
                        deposit_time: <Localize translate_text={deposit_proccessing_time} />,
                        withdrawal_time: <Localize translate_text={withdrawal_processing_time} />,
                        description: <Localize translate_text={description} />,
                        countries,
                        ...(link_deriv !== '' && { url: link_deriv }),
                        ...getReference(key, reference, locale),
                    }
                },
            )

        return {
            name: <Localize translate_text={category} />,
            data,
            ...(category.includes('Credit') && {
                is_cards: true,
                note: (
                    <Localize translate_text="Withdrawals may take up to 15 working days to reflect on your card. Mastercard and Maestro withdrawals are only available for UK clients." />
                ),
            }),
            ...(category.includes('Crypto') && {
                is_crypto: true,
                note: (
                    <Localize translate_text="The minimum amount for withdrawal will vary depending on the latest exchange rates. The figures shown here have been rounded." />
                ),
            }),
            ...(category.includes('Fiat') && {
                is_fiat_onramp: true,
                note: (
                    <Localize translate_text="These payment methods are available exclusively for our clients with crypto trading accounts." />
                ),
            }),
        }
    })
}
const payment_data = PaymentDataGenerator()
export default payment_data
