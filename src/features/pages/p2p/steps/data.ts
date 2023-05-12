import { SmartStepItem } from './types'
import RightAd from 'images/svg/p2p/right-ad.svg'
import SettlePayment from 'images/svg/p2p/settle-payment.svg'
import CompleteOrder from 'images/svg/p2p/complete-order.svg'
import RightAdMobile from 'images/svg/p2p/right-ad-mobile.svg'
import SettlePaymentMobile from 'images/svg/p2p/settle-payment-mobile.svg'
import CompleteOrderMobile from 'images/svg/p2p/complete-order-mobile.svg'

export const step_items: SmartStepItem[] = [
    {
        id: 0,
        data: {
            header: '_t_1. Find or create an ad_t_',
            description:
                '_t_Pick the best rates and place an order, or create an ad for the rates you want._t_',
            icon_src: RightAd,
            mobile_icon_src: RightAdMobile,
        },
    },
    {
        id: 1,
        data: {
            header: '_t_2. Send or receive payment_t_',
            description: '_t_Settle the payment with the counterparty of your transaction._t_',
            icon_src: SettlePayment,
            mobile_icon_src: SettlePaymentMobile,
        },
    },
    {
        id: 2,
        data: {
            header: '_t_3. Complete the transaction_t_',
            description: '_t_Every order must be completed and confirmed within 1 hour._t_',
            icon_src: CompleteOrder,
            mobile_icon_src: CompleteOrderMobile,
            note: '_t_Note: Funds are only released when the transaction is complete._t_',
        },
    },
]
