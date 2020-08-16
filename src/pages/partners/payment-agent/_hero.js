import React from 'react'
import styled from 'styled-components'
import Hero from '../affiliate-ib/_hero'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const MainHeader = styled(Header)`
    max-width: 80rem;
    margin-bottom: 1.6rem;

    @media ${device.mobileM} {
        font-size: 5rem;
    }
`

const MiddleHeader = styled(Header)`
    max-width: 99.6rem;
    margin-bottom: 6.4rem;
`

const PAHero = () => {
    return (
        <Hero>
            <MainHeader as="h1" color="white" align="center" lh="1.25">
                {localize('Become a payment agent on Deriv')}
            </MainHeader>
            <MiddleHeader as="h4" color="white" align="center" weight="normal">
                {localize(
                    'Expand your client base, gain additional business exposure, and earn more revenue when you sign up as a payment agent on Deriv.',
                )}
            </MiddleHeader>
            <LinkButton secondary external="true" to="mailto:partners@deriv.com" is_mail_link>
                {localize('Send us an email to apply')}
            </LinkButton>
        </Hero>
    )
}

export default PAHero
