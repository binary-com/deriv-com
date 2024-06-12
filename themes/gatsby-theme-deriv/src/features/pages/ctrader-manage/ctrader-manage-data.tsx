import React from 'react'
import AddAccountImage from 'images/common/ctrader/add-account.png'
import AddMoreAccountsImage from 'images/common/ctrader/add-more-accounts.png'
import AddAccountMobileImage from 'images/common/ctrader/add-account-mobile.png'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'
import Image from 'features/components/atoms/image'

type ParagraphType = {
    id?: number
    text: TString
    components?: React.ReactElement[]
}

type CtraderManageDataType = { [page: string]: CtraderManageProps }

export type CtraderManageProps =  {
    title: TString
    paragraph: ParagraphType
    steps?: ParagraphType[]
    image_url?: JSX.Element
    image_url_mobile?: JSX.Element
    button_url: LinkUrlType
    button_text: TString
}

export const ctrader_manage_data: CtraderManageDataType = {
    add_account: {
        title: '_t_Creating a live cTrader account_t_',
        button_url: {
            type: 'non-company',
            target: '_blank',
            href: 'https://app.deriv.com/',
        },
        image_url: <Image src={AddAccountImage} width={325} alt={'_t_Add account image_t_'} />,
        image_url_mobile: (
            <Image src={AddAccountMobileImage} height={197} alt={'_t_Add account image_t_'} />
        ),
        steps: [
            {
                id: 1,
                text: '_t_1. Go to the Trader’s hub and choose the <0>Real</0> option._t_',
                components: [<strong key={0} />],
            },
            {
                id: 2,
                text: '_t_2. Under CFDs, look for Deriv cTrader and select <0>Get</0>._t_',
                components: [<strong key={0} />],
            },
        ],
        paragraph: {
            text: '_t_Please click on the button below to proceed. _t_',
        },
        button_text: "_t_Go to Trader's Hub_t_",
    },
    add_more_accounts: {
        title: '_t_Create more trading accounts_t_',
        image_url: <Image src={AddMoreAccountsImage} width={325} alt={'_t_Add account image_t_'} />,
        image_url_mobile: (
            <Image src={AddAccountMobileImage} height={197} alt={'_t_Add account image_t_'} />
        ),
        steps: [
            {
                id: 1,
                text: '_t_1. Go to the Trader’s hub and choose the <0>Real</0> option._t_',
                components: [<strong key={0} />],
            },
            {
                id: 2,
                text: '_t_2. Under Options and Multipliers and CFDs, look for the new trading account you want and select <0>Get</0>._t_',
                components: [<strong key={0} />],
            },
        ],
        paragraph: {
            text: '_t_Please click on the button below to proceed. _t_',
        },
        button_url: {
            type: 'non-company',
            target: '_blank',
            href: 'https://app.deriv.com/',
        },
        button_text: "_t_Go to Trader's Hub_t_",
    },
    change_password: {
        title: '_t_Changing your credentials is just a click away_t_',
        button_url: {
            type: 'non-company',
            target: '_blank',
            href: 'https://app.deriv.com/account/passwords',
        },
        paragraph: {
            text: '_t_Your cTrader credentials are the same as your Deriv credentials. <0/>Please click the button to proceed with <1>changing your Deriv credentials</1>._t_',
            components: [<br key={0} />, <strong key={1} />],
        },
        button_text: '_t_Change credentials_t_',
    },
    close_account: {
        title: '_t_Are you sure you want to delete your account?_t_',
        button_url: {
            type: 'non-company',
            target: '_blank',
            href: 'https://app.deriv.com/account/closing-account',
        },
        paragraph: {
            text: '_t_Your cTrader account is linked to your Deriv account. <0/>Please click the button to proceed with <1>deleting your Deriv account</1>._t_',
            components: [<br key={0} />, <strong key={1} />],
        },
        button_text: '_t_Delete account_t_',
    },
    cashier: {
        title: '_t_Almost done_t_',
        paragraph: {
            text: '_t_To manage your funds, please click the button below._t_',
        },
        button_text: '_t_Go to Cashier_t_',
        button_url: {
            type: 'non-company',
            target: '_blank',
            href: 'https://app.deriv.com/redirect?action=payment_transfer',
        },
    },
}
