import React from 'react'
import PropTypes from 'prop-types'
import { DerivLogoWrapper, StyledLogo } from './common/style.js'
import DerivLogo from 'images/svg/layout/deriv-footer.svg'

const LogoSection = () => {
    return (
        <DerivLogoWrapper>
            <StyledLogo src={DerivLogo} alt="logo" width="147" height="25" />
        </DerivLogoWrapper>
    )
}

LogoSection.propTypes = {
    type: PropTypes.string,
}

export default LogoSection
