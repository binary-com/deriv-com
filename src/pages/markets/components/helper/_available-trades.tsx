import React, { ReactElement } from 'react'
import AvailableTradesDesktop from './_available-trades_desktop'
import { TString } from 'types/generics'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

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
}: AvailableTradesProps) => {
    const [is_mounted] = usePageLoaded()

    if (!is_mounted) return null
    return (
        <AvailableTradesDesktop
            CFDs={CFDs}
            DigitalOptions={DigitalOptions}
            Multipliers={Multipliers}
            display_title={display_title}
        />
    )
}

export default AvailableTrades
