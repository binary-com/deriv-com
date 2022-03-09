import React, { ReactElement } from 'react'
import AvailableTradesMobile from './_available-trades_mobile'
import AvailableTradesDesktop from './_available-trades_desktop'
import { getWindowWidth } from 'common/utility'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

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
    const [is_mounted] = usePageLoaded(false)
    const is_mobile = 426 < getWindowWidth()
    return (
        <>
            {is_mounted ? (
                <>
                    {!is_mobile ? (
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
            ) : (
                <></>
            )}
        </>
    )
}

export default AvailableTrades
