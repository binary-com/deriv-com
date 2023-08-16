import React, { ReactElement } from 'react'
import { TString } from 'types/generics'
import DubaiExpo from 'images/common/deriv-prime/dubai_expo.png'
import CyprusExpo from 'images/common/deriv-prime/cyprus_expo.png'
import LondonSummit from 'images/common/deriv-prime/london_summit.png'

type ExpoCardTypes = {
    title?: TString
    image?: string
    date?: TString
    link?: string
}

export const expo_cards: ExpoCardTypes[] = [
    {
        title: '_t_iFX EXPO Cyprus_t_',
        date: '_t_19-21 September 2023_t_',
        image: `${DubaiExpo}`,
        link: 'https://cyprus2023.ifxexpo.com/',
    },
    {
        title: '_t_Forex Expo Dubai_t_',
        date: '_t_26-27 September 2023_t_',
        image: `${CyprusExpo}`,
        link: 'https://theforexexpo.com/dubai2023/',
    },
    {
        title: '_t_FM London Summit_t_',
        date: '_t_20-22 November 2023_t_',
        image: `${LondonSummit}`,
        link: 'https://events.financemagnates.com/fmls23/lp/',
    },
]
