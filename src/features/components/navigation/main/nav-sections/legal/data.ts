import { TSmartNavContent } from '../../types'
import Regulatory from 'images/svg/menu/regulatory.svg'
import SecureTrading from 'images/svg/menu/secure-trading.svg'
import Terms from 'images/svg/menu/terms.svg'

export const legalNavSectionContent: TSmartNavContent[] = [
    {
        id: 0,
        data: {
            icon: {
                src: Regulatory,
                alt: 'regulatory information',
            },
            title: '_t_Regulatory information_t_',
            to: '/regulatory/',
        },
    },
    {
        id: 1,
        data: {
            icon: {
                src: Terms,
                alt: 'terms and conditions',
            },
            title: '_t_Terms and conditions_t_',
            to: '/terms-and-conditions/#clients',
        },
    },
    {
        id: 2,
        data: {
            icon: {
                src: SecureTrading,
                alt: 'secure and responsible trading',
            },
            title: '_t_Secure and responsible trading_t_',
            to: '/responsible/',
        },
    },
]
