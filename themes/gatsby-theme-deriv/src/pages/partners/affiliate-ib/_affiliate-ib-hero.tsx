import React from 'react'
import Hero from './_hero'
import { StyledHeader, StyledLinkButton } from './_style'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import useAffiliateSignupLink from 'features/hooks/ab-testing/use-partners-signup-link'
import useBuildVariant from 'features/hooks/use-build-variant'

const AffiliateIbHero = () => {
    const { region } = useBuildVariant()
    const { affiliate_signup_link } = useAffiliateSignupLink()
    const banner_btn: TString = region === "row" ? '_t_Sign up as our affiliate and IB_t_' : '_t_Sign up as our affiliate_t_'

    return (
        <Hero>
            <StyledHeader as="h1" color="white" align="center" lh="1.25" type="display-title">
                <Localize translate_text="_t_Partner with a trusted online trading provider_t_" />
            </StyledHeader>
            <StyledLinkButton
                id="dm-hero-affiliate-signup"
                to={affiliate_signup_link}
                external
                target="_blank"
                // type="affiliate_sign_up"
                secondary
            >
                <Localize translate_text={banner_btn} />
            </StyledLinkButton>
        </Hero>
    )
}

export default AffiliateIbHero
