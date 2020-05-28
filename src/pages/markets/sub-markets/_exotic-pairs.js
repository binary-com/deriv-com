import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import {
    AUDSGD,
    CHFJPY,
    EURHKD,
    EURILS,
    EURMXN,
    EURSGD,
    EURTRY,
    EURZAR,
    GBPSGD,
    GBPTRY,
    HKDJPY,
    NZDCHF,
    NZDSGD,
    SGDJPY,
    USDHKD,
    USDILS,
    USDRUB,
    USDSGD,
    USDTHB,
    USDTRY,
} from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: fit-content;

    svg {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }
`

const ExoticPairs = () => {
    return (
        <>
            <Symbol ai="center">
                <AUDSGD />
                <Text>{localize('AUD/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <CHFJPY />
                <Text>{localize('CHF/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURHKD />
                <Text>{localize('EUR/HKD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURILS />
                <Text>{localize('EUR/ILS')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURMXN />
                <Text>{localize('EUR/MXN')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURSGD />
                <Text>{localize('EUR/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURTRY />
                <Text>{localize('EUR/TRY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURZAR />
                <Text>{localize('EUR/ZAR')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPSGD />
                <Text>{localize('GBP/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPTRY />
                <Text>{localize('GBP/TRY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <HKDJPY />
                <Text>{localize('HKD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <NZDCHF />
                <Text>{localize('NZD/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <NZDSGD />
                <Text>{localize('NZD/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <SGDJPY />
                <Text>{localize('SGD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDHKD />
                <Text>{localize('USD/HKD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDILS />
                <Text>{localize('USD/ILS')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDRUB />
                <Text>{localize('USD/RUB')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDSGD />
                <Text>{localize('USD/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDTHB />
                <Text>{localize('USD/THB')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDTRY />
                <Text>{localize('USD/TRY')}</Text>
            </Symbol>
        </>
    )
}

export default ExoticPairs
