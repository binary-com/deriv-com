import React from 'react'
import { Localize } from 'components/localization'

export type CryptocurrenciesContent = {
    src: string
    alt: string
    text: React.ReactNode
}

export const simple_step_content_cryptocurrencies = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading cryptocurrencies and other markets." />
        ),
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
    },
]
