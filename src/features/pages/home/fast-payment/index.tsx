import { FastPayment } from '@deriv-com/blocks'
import React from 'react'

const FastPaymentSection: React.FC = () => {
    return (
        <FastPayment
            title="Fast, hassle-free deposits & withdrawal"
            description="60+ global payment methods. Deposit instantly starting from just USD 5. Withdraw in minutes.*"
            link={{
                content: 'Learn More',
                href: '#',
            }}
            content={{
                cards: [],
            }}
            disclaimer="* Availability of payment methods and processing speeds may vary based on location and selected payment option"
        ></FastPayment>
    )
}

export default FastPaymentSection
