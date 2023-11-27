import React from 'react'
import { CustomLink } from '@deriv-com/components'
import { Text, qtMerge } from '@deriv/quill-design'

const Link = ({ href, children }: { href: string; children: string }) => {
    return (
        <CustomLink size="sm" className={qtMerge('inline font-bold underline')} href={href}>
            {children}
        </CustomLink>
    )
}

export const DescriptionContent = () => {
    return (
        <>
            <Text size="sm">
                Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (
                <Link href="/">licence</Link>). Deriv (BVI) Ltd is licensed by the British Virgin
                Islands Financial Services Commission (<Link href="/">licence</Link>). Deriv (V) Ltd
                is licensed by the Vanuatu Financial Services Commission (
                <Link href="/">licence</Link>). Deriv (SVG) LLC has a registered office at First
                Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street,
                Kingstown P.O., St Vincent and the Grenadines. Deriv.com Limited is the holding
                company for the above subsidiaries with the registration number 71479 and the
                registered address is located at 2nd Floor, 1 Cornet Street, St Peter Port,
                Guernsey, GY1 1BZ.
            </Text>
            <Text size="sm">
                Please read our <Link href="/">Terms and conditions</Link>,{' '}
                <Link href="/">Risk disclosure</Link>, and{' '}
                <Link href="/">Secure and responsible trading</Link> to fully understand the risks
                involved before using our services. The information on this website does not
                constitute investment advice.
            </Text>
        </>
    )
}
