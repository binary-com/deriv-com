import React from 'react'
import styled from 'styled-components'
import Hero from '../affiliate-ib/_hero'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const MainHeader = styled(Header)`
    max-width: 99.6rem;

    @media ${device.mobileM} {
        font-size: 40px;
        line-height: 50px;
    }
`

const MiddleHeader = styled(Header)`
    max-width: 99.6rem;
`

const PAHero = () => {
    return (
        <Hero>
            <MainHeader as="h1" type="heading-1" color="white" align="center" lh="1.25">
                {localize('Become a payment agent on Deriv')}
            </MainHeader>
            <MiddleHeader
                as="h4"
                type="subtitle-1"
                color="white"
                align="center"
                weight="normal"
                mt="16px"
                mb="40px"
            >
                {localize(
                    'Expand your client base, gain additional business exposure, and earn more revenue when you sign up as a payment agent on Deriv.',
                )}
            </MiddleHeader>
            <LinkButton
                id="dm-hero-affiliate-email-apply"
                secondary
                external
                to="mailto:partners@deriv.com"
                is_mail_link
                style={{
                    'align-items': 'center',
                    padding: '17px 24px',
                    'font-size': '20px',
                    'border-radius': '8px',
                }}
            >
                {localize('Send us an email to apply')}
            </LinkButton>
        </Hero>
    )
}

export default PAHero
