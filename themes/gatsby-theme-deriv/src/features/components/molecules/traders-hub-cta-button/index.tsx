import React, { ComponentPropsWithRef, forwardRef } from 'react'
import { Button } from '@deriv/quill-design'
import { LabelPairedGrid2MdBoldIcon, LabelPairedGrid2LgBoldIcon } from '@deriv/quill-icons'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import { Localize } from 'components/localization'

type TradersHubCtaButtonProps = ComponentPropsWithRef<typeof Button> & {
    is_accumulator_mobile?: boolean
}

const TradersHubCtaButton = forwardRef<HTMLButtonElement, TradersHubCtaButtonProps>(
    ({ is_accumulator_mobile = false, className, ...rest }, ref) => {
        const [is_logged_in] = useAuthCheck()
        const handleSignup = useHandleSignup()
        if (is_logged_in && is_accumulator_mobile) {
            return (
                <Button
                    ref={ref}
                    size="lg"
                    onClick={handleRedirectToTradersHub}
                    className={className}
                    {...rest}
                >
                    <div className="relative">
                        <LabelPairedGrid2MdBoldIcon className="absolute top-100" fill="#ffffff" />
                        <Localize translate_text="_t_Trader's Hub_t_" />
                    </div>
                </Button>
            )
        }

        if (is_logged_in) {
            return (
                <Button
                    ref={ref}
                    size="lg"
                    icon={LabelPairedGrid2LgBoldIcon}
                    iconPosition="start"
                    onClick={handleRedirectToTradersHub}
                    className={className}
                    {...rest}
                >
                    <Localize translate_text="_t_Trader's Hub_t_" />
                </Button>
            )
        }
        return (
            <Button ref={ref} size="lg" onClick={handleSignup} className={className} {...rest}>
                <Localize translate_text="_t_Open demo account_t_" />
            </Button>
        )
    },
)

TradersHubCtaButton.displayName = 'TradersHubCtaButton'

export default TradersHubCtaButton
