import React from 'react'
import { FastPayment } from '@deriv-com/blocks'
import { EUPaymentMethods, RowPaymentMethods } from './data'
import useRegion from 'components/hooks/use-region'
import { Localize } from 'components/localization'

const FastPaymentSection: React.FC = () => {
    const { is_eu } = useRegion()
    return (
        <FastPayment
            title={<Localize translate_text="_t_Fast, hassle-free deposits and withdrawals_t_" />}
            description={
                !is_eu ? (
                    <Localize translate_text="_t_60+ global payment methods. Deposit instantly starting from just USD 5. Withdraw in minutes.*_t_" />
                ) : (
                    <Localize translate_text="_t_10+ global payment methods. Deposit instantly starting from just USD 10. Withdraw in minutes.*_t_" />
                )
            }
            link={{
                content: <Localize translate_text="_t_Learn more_t_" />,
                href: '/payment-methods/',
                descriptiveText: 'About payment methods',
            }}
            content={{
                cols: 'infinite',
                cards: is_eu ? EUPaymentMethods : RowPaymentMethods,
                sliderClass: is_eu
                    ? '!animate-[40s_slide_linear_infinite] rtl:!animate-[40s_slideRtl_linear_infinite]'
                    : '!animate-[100s_slide_linear_infinite] rtl:!animate-[100s_slideRtl_linear_infinite]',
            }}
            disclaimer={
                <Localize translate_text="_t_* Availability of payment methods and processing speeds may vary based on location and selected payment option._t_" />
            }
        />
    )
}

export default FastPaymentSection
