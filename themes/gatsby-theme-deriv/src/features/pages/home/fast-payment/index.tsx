import React, { useRef } from 'react'
import { FastPayment } from '@deriv-com/blocks'
import { EUPaymentMethods, RowPaymentMethods } from './data'
import { Localize } from 'components/localization'
import useIsInViewport from 'components/hooks/use-is-in-viewport'
import useBuildVariant from 'features/hooks/use-build-variant'

const FastPaymentSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const is_in_viewport = useIsInViewport(ref)
    const { region } = useBuildVariant()

    const logosAnimation = is_in_viewport
        ? region === 'eu'
            ? '!animate-[40s_slide_linear_infinite] rtl:!animate-[40s_slideRtl_linear_infinite]'
            : '!animate-[100s_slide_linear_infinite] rtl:!animate-[100s_slideRtl_linear_infinite]'
        : ''
        
    return (
        <div ref={ref}>
            <FastPayment
                title={
                    <Localize translate_text="_t_Fast, hassle-free deposits and withdrawals_t_" />
                }
                description={
                    region === 'row' ? (
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
                    cards: region === 'eu' ? EUPaymentMethods : RowPaymentMethods,
                    sliderClass: logosAnimation,
                }}
                disclaimer={
                    <Localize translate_text="_t_* Availability of payment methods and processing speeds may vary based on location and selected payment option._t_" />
                }
            />
        </div>
    )
}

export default FastPaymentSection
