import React from 'react'
import { Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { Localize } from 'components/localization'

const sharedClasses = 'inline font-bold underline hover:text-typography-prominent'

export const DescriptionContent = () => {
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
