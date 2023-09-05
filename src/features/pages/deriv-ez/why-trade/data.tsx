import React from 'react'
import { DerivEzCardTypes } from '../types'
import { EasyToStart, FavouriteAssets, TwentyFourSeven } from 'images/svg/deriv-ez'
import Image from 'features/components/atoms/image'

export const card_data: DerivEzCardTypes[] = [
    {
        title: '_t_Easy to start_t_',
        subtitle:
            '_t_Start trading CFDs in two easy steps — click to get an account, start trading. No need to remember another login ID and password._t_',
        icon: <Image src={EasyToStart} height={48} alt={'_t_Easy start_t_'} />,
    },
    {
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade anytime you want, including weekends and holidays, on cryptocurrencies and our proprietary derived indices._t_',
        icon: <Image src={TwentyFourSeven} height={48} alt={'_t_24/7 chat_t_'} />,
    },
    {
        title: '_t_All your favourite assets, one platform_t_',
        subtitle:
            '_t_Access over 150 assets in multiple markets simultaneously on one platform._t_',
        icon: <Image src={FavouriteAssets} height={48} alt={'_t_Favourite assets_t_'} />,
    },
]
