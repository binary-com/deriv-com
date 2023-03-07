import React from 'react'
import { Localize } from 'components/localization'
import SButton from 'features/components/button'
import useAuthCheck from 'components/hooks/use-auth-check'
import useBreakpoints from 'components/hooks/use-breakpoints'

const HeroCtaButton = () => {
    const [is_logged_in] = useAuthCheck()
    const { is_mobile_or_tablet } = useBreakpoints()

    return is_logged_in ? (
        <SButton type={'button'} button_type="hero" fluid={is_mobile_or_tablet}>
            <Localize translate_text="Get Trading" />
        </SButton>
    ) : (
        <SButton type={'button'} button_type="hero" fluid={is_mobile_or_tablet}>
            <Localize translate_text="Create free demo account" />
        </SButton>
    )
}

export default HeroCtaButton
