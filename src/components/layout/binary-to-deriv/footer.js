import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from '../../containers'
import { FooterGrid } from '../footer/common/style.js'
import LogoSection from '../footer/logo'
import DisclaimerSection from './_disclaimer'
import device from 'themes/device'

const DefaultFooter = styled.footer`
    background-color: var(--color-grey-25);
    width: 100%;
    margin: 0 auto;
    padding-bottom: 2rem;

    ${Container} {
        @media ${device.tabletL} {
            width: 100%;
        }
    }
`

const Footer = ({ type }) => {
    const is_eu_country = false

    return (
        <DefaultFooter is_eu_country={is_eu_country}>
            <Container>
                <FooterGrid>
                    <LogoSection type={type} />
                    <DisclaimerSection />
                </FooterGrid>
            </Container>
        </DefaultFooter>
    )
}

Footer.propTypes = {
    academy: PropTypes.bool,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    type: PropTypes.string,
}

export default Footer
