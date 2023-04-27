import { TSmartNavContent } from '../../../types'

export const legalNavSectionContent: TSmartNavContent[] = [
    {
        id: 0,
        data: {
            title: '_t_Regulatory information_t_',
            url: { type: 'internal', to: '/regulatory/' },
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Terms and conditions_t_',
            url: { type: 'internal', to: '/terms-and-conditions/#clients' },
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Secure and responsible trading_t_',
            url: { type: 'internal', to: '/responsible/' },
        },
    },
]
