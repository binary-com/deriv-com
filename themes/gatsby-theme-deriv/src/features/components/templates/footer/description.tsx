import React, { useEffect, useState } from 'react'
import { Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'
import useBuildVariant from 'features/hooks/use-build-variant'

const sharedClasses = 'inline font-bold underline hover:text-typography-prominent'

export const DescriptionContentROW = () => {
    return (
        <>
            <Text size="sm">
                <Localize translate_text="_t_Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority._t_" />
            </Text>

            <Text size="sm">
                <Localize translate_text="_t_Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission._t_" />
            </Text>

            <Text size="sm">
                <Localize translate_text="_t_Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission._t_" />
            </Text>

            <Text size="sm">
                <Localize translate_text="_t_Deriv (SVG) LLC has a registered office at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines._t_" />
            </Text>

            <Text size="sm">
                <Localize translate_text="_t_Deriv.com Limited, a company registered in Guernsey, is the holding company for these entities._t_" />
            </Text>

            <Text size="sm" className="pt-general-lg">
                <Localize
                    translate_text="_t_Make sure to read our <0>Terms and Conditions</0>, <1>Risk Disclosure</1>, and <2>Secure and Responsible Trading</2> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice._t_"
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
            <Text size="sm" className="text-solid-slate-1400">
                <Localize
                    translate_text="_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act._t_"
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
            <Text size="sm" className="pt-general-lg text-solid-slate-1400">
                <Localize
                    translate_text="_t_Make sure to read our <0>Terms and Conditions</0>, <1>Risk Disclosure</1>, and <2>Secure and Responsible Trading</2> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice. The value of investments may go down as well as up._t_"
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
            <Text size="sm" className="text-solid-slate-1400">
                <Localize translate_text="_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act._t_" />
            </Text>

            <Text size="sm" className="text-solid-slate-1400">
                <Localize translate_text="_t_Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority._t_" />
            </Text>

            <Text size="sm" className="text-solid-slate-1400">
                <Localize translate_text="_t_Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission._t_" />
            </Text>

            <Text size="sm" className="text-solid-slate-1400">
                <Localize translate_text="_t_Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission._t_" />
            </Text>

            <Text size="sm" className="text-solid-slate-1400">
                <Localize translate_text="_t_Deriv (SVG) LLC has a registered office at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines._t_" />
            </Text>

            <Text size="sm" className="text-solid-slate-1400">
                <Localize translate_text="_t_Deriv.com Limited, a company registered in Guernsey, is the holding company for these entities._t_" />
            </Text>

            <Text size="sm" className="pt-general-lg text-solid-slate-1400">
                <Localize
                    translate_text="_t_Make sure to read our <0>Terms and Conditions</0>, <1>Risk Disclosure</1>, and <2>Secure and Responsible Trading</2> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice._t_"
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

export const DescriptionContent = () => {
    const { region } = useBuildVariant()
    const { is_cpa_plan } = useRegion()
    const { exitRef } = useFloatingCtaContext()
    const descriptionContent =
        (region === 'row' && <DescriptionContentROW />) ||
        (region === 'eu' && <DescriptionContentEU />)
    const [content, setContent] = useState(descriptionContent)

    useEffect(() => {
        if (is_cpa_plan) setContent(<DescriptionContentCPA />)
    }, [is_cpa_plan])

    return <div ref={exitRef}>{content}</div>
}
