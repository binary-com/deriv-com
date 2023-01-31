import React from 'react'
import { DefaultFooter, FooterGrid } from './footer/common/style'
import LogoSection from './footer/logo'
import MainLinksSection from './footer/main-links'
import DisclaimerSection from './footer/disclaimer'
import { Container } from 'components/containers'
import useRegion from 'components/hooks/use-region'
// TODO: (discussion) make footer pure component, and move usage of footer to custom

type FooterProps = {
    academy?: boolean
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    no_footer_links?: boolean
    type?: string
}

const Footer = ({
    type = '',
    is_ppc = false,
    is_ppc_redirect = false,
    academy = false,
    no_footer_links = false,
}: FooterProps) => {
    const { is_eu, is_cpa_plan } = useRegion()

    return (
        <DefaultFooter is_margin={is_eu || is_cpa_plan}>
            <Container>
                <FooterGrid>
                    <LogoSection type={type} />
                    {!no_footer_links && (
                        <MainLinksSection is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
                    )}
                    <DisclaimerSection is_academy={academy} />
                </FooterGrid>
            </Container>
        </DefaultFooter>
    )
}

export default Footer
