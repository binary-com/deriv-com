import React from 'react'
import { TSimpleStepContent } from './_types'
import { localize } from 'components/localization'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

export const simple_step_content: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
        icon: <img src={PractiseIcon} alt={localize('_t_Practise_t_')} width="32" height="32" />,
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading forex and other markets._t_',
        icon: <img src={TradeIcon} alt={localize('_t_Trade_t_')} width="32" height="28" />,
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        icon: <img src={WithdrawIcon} alt={localize('_t_Withdraw_t_')} width="32" height="32" />,
    },
]
