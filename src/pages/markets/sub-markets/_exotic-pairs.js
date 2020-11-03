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

    img {
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
                <img src={AUDSGD} />
                <Text>{localize('AUD/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={CHFJPY} />
                <Text>{localize('CHF/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURHKD} />
                <Text>{localize('EUR/HKD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURILS} />
                <Text>{localize('EUR/ILS')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURMXN} />
                <Text>{localize('EUR/MXN')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURSGD} />
                <Text>{localize('EUR/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURTRY} />
                <Text>{localize('EUR/TRY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURZAR} />
                <Text>{localize('EUR/ZAR')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPSGD} />
                <Text>{localize('GBP/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPTRY} />
                <Text>{localize('GBP/TRY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={HKDJPY} />
                <Text>{localize('HKD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={NZDCHF} />
                <Text>{localize('NZD/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={NZDSGD} />
                <Text>{localize('NZD/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={SGDJPY} />
                <Text>{localize('SGD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDHKD} />
                <Text>{localize('USD/HKD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDILS} />
                <Text>{localize('USD/ILS')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDRUB} />
                <Text>{localize('USD/RUB')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDSGD} />
                <Text>{localize('USD/SGD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDTHB} />
                <Text>{localize('USD/THB')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDTRY} />
                <Text>{localize('USD/TRY')}</Text>
            </Symbol>
        </>
    )
}

export default ExoticPairs
