import React, { ReactElement } from 'react'
import AvailableTradesMobile from './_available-trades_mobile'
import AvailableTradesDesktop from './_available-trades_desktop'
import { Show } from 'components/containers'

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
    return (
        <>
            <Show.Desktop max_width="tablet">
                <AvailableTradesDesktop
                    CFDs={CFDs}
                    DigitalOptions={DigitalOptions}
                    Multipliers={Multipliers}
                    display_title={display_title}
                />
            </Show.Desktop>
            <Show.Mobile min_width="tablet">
                <AvailableTradesMobile
                    CFDs={CFDs}
                    DigitalOptions={DigitalOptions}
                    Multipliers={Multipliers}
                    display_title={display_title}
                />
            </Show.Mobile>
        </>
    )
}

export default AvailableTrades
