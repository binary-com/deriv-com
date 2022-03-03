import React, { ReactElement } from 'react'
import AvailableTradesMobile from './_available-trades_mobile'
import AvailableTradesDesktop from './_available-trades_desktop'
import { getWindowWidth } from 'common/utility'


type AvailableTradesProps = {
    CFDs: ReactElement
    DigitalOptions?: ReactElement
    Multipliers?: ReactElement
    display_title: ReactElement
}

const AvailableTrades = ({
    CFDs,
    DigitalOptions,
    Multipliers,
    display_title,
}: AvailableTradesProps) => {
    const is_mobile = getWindowWidth() < 426
    return (
        <>
            {is_mobile ? (
                <AvailableTradesMobile
                    CFDs={CFDs}
                    DigitalOptions={DigitalOptions}
                    Multipliers={Multipliers}
                    display_title={display_title}
                />
            ) : (
                <AvailableTradesDesktop
                    CFDs={CFDs}
                    DigitalOptions={DigitalOptions}
                    Multipliers={Multipliers}
                    display_title={display_title}
                />
            )}
        </>

    )
}

export default AvailableTrades
