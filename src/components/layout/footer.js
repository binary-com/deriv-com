import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../containers'
import { LocationContext } from './location-context'
import MainLinks from './footer/main-links'
import EuContent from './footer/eu-content'
import Disclaimer from './footer/disclaimer'
import Logo from './footer/logo'
import { StyledFooter, StyledGrid, CopyrightWrapper } from './footer/common/style.js'
import Copyright from './copyright'
import BottomSocialWrapper from './footer/bottom-social-wrapper'
import CopyrightIc from 'images/svg/copyright-white.svg'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'
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

    const current_year = new Date().getFullYear()

    return (
        <StyledFooter has_banner_cookie={show_cookie_banner}>
            <Container>
                <StyledGrid>
                    <Logo type={type}/>
                    <MainLinks is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}/>
                    <Disclaimer/>
                    <CopyrightWrapper>
                        <img src={CopyrightIc} alt="copyright ic" width="16" height="16" />
                        <Text ml="0.4rem">
                            <Localize
                                translate_text="{{current_year}} Deriv | All rights reserved"
                                values={{ current_year }}
                            />
                        </Text>
                    </CopyrightWrapper>
                    <Copyright/>
                    <BottomSocialWrapper type={type} />
                    <EuContent/>
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
