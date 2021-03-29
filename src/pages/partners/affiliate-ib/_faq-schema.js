import React from "react"
import { Localize } from 'components/localization'
export const faq_schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: <Localize translate_text='What is the Deriv IB Programme?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='The Deriv IB Programme is a partnership where you benefit from referring new clients to trade on our DMT5 platform.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text="How much can I earn from referring new clients to your DMT5 platform?" />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='You’ll earn a fixed commission based on the volume of individual trades purchased by your referred clients. Please refer to our IB commission plan for more info.' />,

            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='How much do I need to pay to join your IB programme?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text="The Deriv IB Programme is completely free." />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='Are there any minimum client or volume conditions that I need to meet before I can withdraw my commissions?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='There is absolutely no requirement to withdraw your IB commissions.' />,
            },
        },
        {
            '@type': 'Question',
            name:
                <Localize translate_text='How can I sign up as a Deriv IB?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='If you’re interested in becoming an IB, all you need to do is head to the signup page and fill out the application form. We’ll review your application and get in touch if it’s successful. If you’re already registered as a Deriv affiliate, you can email us at affiliates@deriv.com instead.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='How and when will I receive my Deriv IB commissions?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='Your IB commissions are credited directly into your DMT5 account daily. You can transfer the funds to your Deriv account and withdraw them to your preferred payment method.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='Do you offer any referral tools to your IBs?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='Definitely. We’ll provide you with banners, videos, reviews, links, and text ads that you can use to bring new clients to our DMT5 platform.' />,
            },
        },
    ],
}
