import React, { ReactElement } from 'react'
import AvailableTradesDesktop from './_available-trades_desktop'
import { Desktop, Mobile } from 'components/containers'

type AvailableTradesProps = {
    CFDs: ReactElement
    DigitalOptions?: ReactElement
    Multipliers?: ReactElement
    Accumulators?: ReactElement
    display_title: ReactElement
}

const AvailableTrades = ({
    CFDs,
    DigitalOptions,
    Accumulators,
    Multipliers,
    display_title,
}: AvailableTradesProps) => {
    return (
        <>
            <Desktop breakpoint={'tablet'}>
                <AvailableTradesDesktop
                    CFDs={CFDs}
                    DigitalOptions={DigitalOptions}
                    Multipliers={Multipliers}
                    Accumulators={Accumulators}
                    display_title={display_title}
                />
            </Desktop>
            <Mobile breakpoint={'tablet'}>
                <AvailableTradesDesktop
                    CFDs={CFDs}
                    DigitalOptions={DigitalOptions}
                    Multipliers={Multipliers}
                    Accumulators={Accumulators}
                    display_title={display_title}
                />
            </Mobile>
        </>
    )
}

export default AvailableTrades
