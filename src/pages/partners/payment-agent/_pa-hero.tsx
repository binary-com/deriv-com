import React from 'react'
import styled from 'styled-components'
import Hero from '../affiliate-ib/_hero'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

type StyledLinkButtonProps = {
    id?: string
}

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
const StyledLinkButton = styled(LinkButton)<StyledLinkButtonProps>`
    align-items: center;
    padding: 17px 24px;
    font-size: 20px;
    border-radius: 8px;
`

const PAHero = () => {
    return (
        <Hero>
            <MainHeader as="h1" type="heading-1" color="white" align="center" lh="1.25">
                <Localize translate_text="_t_Become a payment agent on Deriv_t_" />
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
                <Localize translate_text="_t_Expand your client base, gain additional business exposure, and earn more revenue when you sign up as a payment agent on Deriv._t_" />
            </MiddleHeader>
            <StyledLinkButton
                id="dm-hero-affiliate-email-apply"
                secondary
                external
                to="mailto:partners@deriv.com"
                is_mail_link
            >
                <Localize translate_text="_t_Send us an email to apply_t_" />
            </StyledLinkButton>
        </Hero>
    )
}

export default PAHero
