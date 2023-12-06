import React from 'react'
import { FastPayment } from '@deriv-com/blocks'
import { EUPaymentMethods, RowPaymentMethods } from './data'
import useRegion from 'components/hooks/use-region'

const FastPaymentSection: React.FC = () => {
    const { is_eu } = useRegion()
    return (
        <FastPayment
            title="Fast, hassle-free deposits & withdrawal"
            description="60+ global payment methods. Deposit instantly starting from just USD 5. Withdraw in minutes.*"
            link={{
                content: 'Learn More',
                href: '#',
            }}
            content={{
                cols: 'infinite',
                cards: is_eu ? EUPaymentMethods : RowPaymentMethods,
            }}
            disclaimer="* Availability of payment methods and processing speeds may vary based on location and selected payment option"
        ></FastPayment>
    )
}

export default FastPaymentSection
