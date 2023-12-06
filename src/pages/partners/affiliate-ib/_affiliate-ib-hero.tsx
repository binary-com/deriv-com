import React from 'react'
import Hero from './_hero'
import { StyledHeader, StyledLinkButton } from './_style'
import { affiliate_signup_url } from 'common/constants'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

type AffiliateIbHeroProps = {
    btn_text: TString
}

const AffiliateIbHero = ({ btn_text }: AffiliateIbHeroProps) => {
    const [is_mounted] = usePageLoaded()

    if (!is_mounted) return null

    return (
        <Hero>
            <StyledHeader as="h1" color="white" align="center" lh="1.25" type="display-title">
                <Localize translate_text="_t_Partner with a trusted online trading provider_t_" />
            </StyledHeader>
            <StyledLinkButton
                id="dm-hero-affiliate-signup"
                to={affiliate_signup_url}
                external
                target="_blank"
                type="affiliate_sign_up"
                secondary
            >
                <Localize translate_text={btn_text} />
            </StyledLinkButton>
        </Hero>
    )
}

export default AffiliateIbHero
