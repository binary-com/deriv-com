import React from 'react'
import { LocationContext } from './location-context'
import { DefaultFooter, FooterGrid } from './footer/common/style'
import LogoSection from './footer/logo'
import MainLinksSection from './footer/main-links'
import DisclaimerSection from './footer/disclaimer'
import { Container } from 'components/containers'
import { DerivStore } from 'store'
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
    const { show_cookie_banner } = React.useContext(LocationContext)
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <DefaultFooter has_banner_cookie={show_cookie_banner} is_eu_country={is_eu_country}>
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
