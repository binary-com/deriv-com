import React from 'react'
import { Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'

const sharedClasses = 'inline font-bold underline hover:text-typography-prominent'

export const DescriptionContentROW = () => {
    return (
        <>
            <Text size="sm">
                <Localize
                    translate_text="_t_Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority <0>(licence)</0>. Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission <1>(licence)</1>. Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission <2>(licence)</2>. Deriv (SVG) LLC has a registered office at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines. Deriv.com Limited is the holding company for the above subsidiaries with the registration number 71479 and the registered address is located at 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_"
                    components={[
                        <a
                            className={clsx(sharedClasses)}
                            href="/regulatory/Deriv_(FX)_Ltd.pdf"
                            key={0}
                            target="_blank"
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                            key={1}
                            target="_blank"
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            href="/regulatory/Deriv_(V)_Ltd.pdf"
                            key={2}
                            target="_blank"
                        />,
                    ]}
                />
            </Text>
            <Text size="sm">
                <Localize
                    translate_text="_t_Please read our <0>Terms and conditions</0>, <1>Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. The information on this website does not constitute investment advice._t_"
                    components={[
                        <a
                            className={clsx(sharedClasses)}
                            href="/terms-and-conditions/#clients"
                            key={0}
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            href="/tnc/risk-disclosure.pdf"
                            key={1}
                            target="_blank"
                        />,
                        <a className={clsx(sharedClasses)} href="/responsible/" key={2} />,
                    ]}
                />
            </Text>
        </>
    )
}

export const DescriptionContentEU = () => {
    return (
        <>
            <Text size="sm">
                <Localize
                    translate_text="_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act <0>(licence)</0>. Deriv Holdings (Guernsey) Limited is the holding company for the above subsidiary with the registration number 71479 and the registered address of 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_"
                    components={[
                        <a
                            className={clsx(sharedClasses)}
                            href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                            key={0}
                            target="_blank"
                        />,
                    ]}
                />
            </Text>
            <Text size="sm">
                <Localize
                    translate_text="_t_Please read our <0>Terms and conditions</0>, <1>Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. The information on this website does not constitute investment advice._t_"
                    components={[
                        <a
                            className={clsx(sharedClasses)}
                            href="/terms-and-conditions/#clients"
                            key={0}
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            href="/tnc/eu/risk-disclosure.pdf"
                            key={1}
                            target="_blank"
                        />,
                        <a className={clsx(sharedClasses)} href="/responsible/" key={2} />,
                    ]}
                />
            </Text>
        </>
    )
}

export const DescriptionContentCPA = () => {
    return (
        <>
            <Text size="sm">
                <Localize
                    translate_text="_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act (<0>licence</0>). Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<1>licence</1>). Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<2>licence</2>). Deriv (V) Ltd is licensed by the Vanuatu Financial Services Commission (<3>licence</3>). Deriv (SVG) LLC has a registered office at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines. Deriv.com Limited is the holding company for the above subsidiaries with the registration number 71479 and the registered address is located at 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_"
                    components={[
                        <a
                            className={clsx(sharedClasses)}
                            href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                            key={0}
                            target="_blank"
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            key={1}
                            target="_blank"
                            href="/regulatory/Deriv_(FX)_Ltd.pdf"
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            key={2}
                            target="_blank"
                            href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            key={3}
                            target="_blank"
                            href="/regulatory/Deriv_(V)_Ltd.pdf"
                        />,
                    ]}
                />
            </Text>
            <Text size="sm">
                <Localize
                    translate_text="_t_Please read our <0>Terms and conditions</0>, <1>Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. The information on this website does not constitute investment advice._t_"
                    components={[
                        <a
                            className={clsx(sharedClasses)}
                            href="/terms-and-conditions/#clients"
                            key={0}
                        />,
                        <a
                            className={clsx(sharedClasses)}
                            href="/tnc/eu/risk-disclosure.pdf"
                            key={1}
                            target="_blank"
                        />,
                        <a className={clsx(sharedClasses)} href="/responsible/" key={2} />,
                    ]}
                />
            </Text>
        </>
    )
}

export const DescriptionContent = () => {
    const { is_eu, is_cpa_plan } = useRegion()
    const { exitRef } = useFloatingCtaContext()
    return (
        <div ref={exitRef}>
            {is_eu ? (
                <DescriptionContentEU />
            ) : is_cpa_plan ? (
                <DescriptionContentCPA />
            ) : (
                <DescriptionContentROW />
            )}
        </div>
    )
}
