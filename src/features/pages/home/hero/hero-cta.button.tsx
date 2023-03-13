import React, { useMemo } from 'react'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Button from 'features/components/atoms/button'
import { TString } from 'types/generics'

const HeroCtaButton = () => {
    const [is_logged_in] = useAuthCheck()
    const { is_mobile_or_tablet } = useBreakpoints()

    const button_text: TString = useMemo(() => {
        if (is_logged_in) {
            return '_t_Get Trading_t_'
        }
        return '_t_Create free demo account_t_'
    }, [is_logged_in])

    return (
        <Button.Hero type={'button'} fluid={is_mobile_or_tablet}>
            <Localize translate_text={button_text} />
        </Button.Hero>
    )
}

export default HeroCtaButton
