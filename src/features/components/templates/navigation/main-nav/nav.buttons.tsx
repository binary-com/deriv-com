import React from 'react'
import { MobileNavToggle } from '@deriv-com/blocks'
import { useNavigation } from '@deriv-com/hooks'
import { Button } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons/Standalone'
import { Localize } from 'components/localization'

export const MainNavigationButtons = () => {
    const { isLoggedIn, setIsLoggedIn } = useNavigation()

    const onLoginClick = () => {
        setIsLoggedIn?.(true)
    }

    const onTradersHubClick = () => {
        setIsLoggedIn?.(false)
    }

    return (
        <div className="flex flex-row items-center gap-gap-sm">
            {isLoggedIn ? (
                <Button
                    variant="secondary"
                    colorStyle="coral"
                    size="lg"
                    onClick={onTradersHubClick}
                    icon={StandalonePlaceholderRegularIcon}
                    iconPosition="start"
                >
                    <Localize translate_text="_t_Traders Hub_t_" />
                </Button>
            ) : (
                <>
                    <Button variant="secondary" colorStyle="black" size="lg" onClick={onLoginClick}>
                        <Localize translate_text="_t_Log in_t_" />
                    </Button>
                    <Button size="lg" className="hidden lg:block">
                        <Localize translate_text="_t_Create free demo account_t_" />
                    </Button>
                </>
            )}

            <MobileNavToggle />
        </div>
    )
}

export default MainNavigationButtons
