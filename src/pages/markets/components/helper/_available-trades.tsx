import React, { ReactElement } from 'react'
import AvailableTradesDesktop from './_available-trades_desktop'
import { TString } from 'types/generics'

type AvailableTradesProps = {
    CFDs: ReactElement
    DigitalOptions?: ReactElement
    Multipliers?: ReactElement
    display_title: TString
}

const AvailableTrades = ({
    CFDs,
    DigitalOptions,
    Multipliers,
    display_title,
}: AvailableTradesProps) => (
    <AvailableTradesDesktop
        CFDs={CFDs}
        DigitalOptions={DigitalOptions}
        Multipliers={Multipliers}
        display_title={display_title}
    />
)

export default AvailableTrades
