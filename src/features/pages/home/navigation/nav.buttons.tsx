import React from 'react'
import { MobileNavToggle } from '@deriv-com/blocks'
import { useNavigation } from '@deriv-com/hooks'
import { Button } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons/Standalone'

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
                    Traders Hub
                </Button>
            ) : (
                <>
                    <Button variant="secondary" colorStyle="black" size="lg" onClick={onLoginClick}>
                        Log in
                    </Button>
                    <Button size="lg" className="hidden lg:block">
                        Create free demo account
                    </Button>
                </>
            )}

            <MobileNavToggle />
        </div>
    )
}

export default MainNavigationButtons
