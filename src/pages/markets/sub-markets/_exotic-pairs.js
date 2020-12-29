import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
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
} from 'components/elements/symbols'

const ExoticPairs = () => {
    return (
        <>
            <Symbol>
                <img src={AUDSGD} />
                <Text>{localize('AUD/SGD')}</Text>
            </Symbol>
            <Symbol>
                <img src={CHFJPY} />
                <Text>{localize('CHF/JPY')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURHKD} />
                <Text>{localize('EUR/HKD')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURILS} />
                <Text>{localize('EUR/ILS')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURMXN} />
                <Text>{localize('EUR/MXN')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURSGD} />
                <Text>{localize('EUR/SGD')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURTRY} />
                <Text>{localize('EUR/TRY')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURZAR} />
                <Text>{localize('EUR/ZAR')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPSGD} />
                <Text>{localize('GBP/SGD')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPTRY} />
                <Text>{localize('GBP/TRY')}</Text>
            </Symbol>
            <Symbol>
                <img src={HKDJPY} />
                <Text>{localize('HKD/JPY')}</Text>
            </Symbol>
            <Symbol>
                <img src={NZDCHF} />
                <Text>{localize('NZD/CHF')}</Text>
            </Symbol>
            <Symbol>
                <img src={NZDSGD} />
                <Text>{localize('NZD/SGD')}</Text>
            </Symbol>
            <Symbol>
                <img src={SGDJPY} />
                <Text>{localize('SGD/JPY')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDHKD} />
                <Text>{localize('USD/HKD')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDILS} />
                <Text>{localize('USD/ILS')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDRUB} />
                <Text>{localize('USD/RUB')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDSGD} />
                <Text>{localize('USD/SGD')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDTHB} />
                <Text>{localize('USD/THB')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDTRY} />
                <Text>{localize('USD/TRY')}</Text>
            </Symbol>
        </>
    )
}

export default ExoticPairs
