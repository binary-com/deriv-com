import React from 'react'
import DNumber from 'components/custom/_dnumbers'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

// TO-DO (REBRANDING) Replace this component with NumberSection.
type NumbersContentType = {
    title: TString
    subtitle: TString
}

const numbers_content: NumbersContentType[] = [
    {
        title: '_t_475k+_t_',
        subtitle: '_t_clients on Deriv MT5_t_',
    },
    {
        title: '_t_200+_t_',
        subtitle: '_t_tradable assets_t_',
    },
    {
        title: '_t_24/7_t_',
        subtitle: '_t_trading_t_',
    },
]

const numbers_content_eu: NumbersContentType[] = [
    {
        title: '_t_475k+_t_',
        subtitle: '_t_active traders on Deriv MT5_t_',
    },
    {
        title: '_t_150+_t_',
        subtitle: '_t_tradable assets_t_',
    },
    {
        title: '_t_24/7_t_',
        subtitle: '_t_trading_t_',
    },
]

const Numbers = () => {
    const { is_eu } = useRegion()
    const contents = is_eu ? numbers_content_eu : numbers_content

    return <DNumber items={contents} justify="space-around" />
}

export default Numbers
