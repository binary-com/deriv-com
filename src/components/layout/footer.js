import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../containers'
import { LocationContext } from './location-context'
import { DefaultFooter, FooterGrid } from './footer/common/style.js'
import LogoSection from './footer/logo'
import MainLinksSection from './footer/main-links'
import DisclaimerSection from './footer/disclaimer'
import CopyrightSection from './footer/copyright'
import BottomSocialSection from './footer/bottom-social-wrapper'
import AdditionalEUSection from './footer/additional-eu'
import { DerivStore } from 'store'
// TODO: (discussion) make footer pure component, and move usage of footer to custom

const mobile_accordion_header = {
    borderTop: '1px solid var(--color-grey-26)',
    borderBottom: 'none',
    padding: '0',
    margin: '0 2rem',
    backgroundColor: 'var(--color-grey-25)',
    boxShadow: 'none',
}

const mobile_accordion_header_about = Object.assign({}, mobile_accordion_header)

const Footer = ({ type, is_ppc, is_ppc_redirect }) => {
    const { show_cookie_banner } = React.useContext(LocationContext)
    const { is_eu_country } = React.useContext(DerivStore)
    mobile_accordion_header_about.borderTop = 'none'

    return (
        <DefaultFooter has_banner_cookie={show_cookie_banner} is_eu_country={is_eu_country}>
            <Container>
                <FooterGrid>
                    <LogoSection type={type} />
                    <MainLinksSection is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} is_eu_country={is_eu_country} />
                    <DisclaimerSection />
                    <CopyrightSection />
                    <BottomSocialSection type={type} />
                    <AdditionalEUSection />
                </FooterGrid>
            </Container>
        </DefaultFooter>
    )
}

Footer.propTypes = {
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    type: PropTypes.string,
}

export default Footer
