import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../containers'
import { LocationContext } from './location-context'
import MainLinksSection from './footer/main-links'
import AdditionalEUSection from './footer/additional-eu'
import DisclaimerSection from './footer/disclaimer'
import LogoSection from './footer/logo'
import { StyledFooter, StyledGrid } from './footer/common/style.js'
import CopyrightSection from './footer/copyright'
import BottomSocialSection from './footer/bottom-social-wrapper'
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

    mobile_accordion_header_about.borderTop = 'none'
    
    return (
        <StyledFooter has_banner_cookie={show_cookie_banner}>
            <Container>
                <StyledGrid>
                    <LogoSection type={type}/>
                    <MainLinksSection is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}/>
                    <DisclaimerSection/>
                    <CopyrightSection/>
                    <BottomSocialSection type={type} />
                    <AdditionalEUSection/>
                </StyledGrid>
            </Container>
        </StyledFooter>
    )
}

Footer.propTypes = {
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    type: PropTypes.string,
}

export default Footer
