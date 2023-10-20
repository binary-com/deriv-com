import { SmartFooterLink, SmartFooterLinkColumn } from './types'
import { deriv_status_page_url } from 'common/constants'

const aboutUsLinks: SmartFooterLink[] = [
    {
        id: 0,
        data: {
            text: '_t_Who we are_t_',
            url: { type: 'internal', to: '/who-we-are/' },
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Why choose us_t_',
            url: { type: 'internal', to: '/why-choose-us/' },
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Principles_t_',
            url: { type: 'internal', to: '/our-principles/' },
        },
    },
    {
        id: 3,
        data: {
            text: '_t_Partnership programmes_t_',
            url: { type: 'internal', to: '/partners/' },
        },
    },
    {
        id: 4,
        data: {
            text: '_t_Contact us_t_',
            url: { type: 'internal', to: '/contact_us/' },
        },
    },
    {
        id: 5,
        data: {
            text: '_t_Careers_t_',
            url: { type: 'internal', to: '/careers/' },
        },
    },
    {
        id: 6,
        data: {
            text: '_t_Deriv life_t_',
            url: { type: 'company', url_name: 'derivlife' },
        },
    },
]

const tradesLinks: SmartFooterLink[] = [
    {
        id: 0,
        data: {
            text: '_t_CFDs_t_',
            url: { type: 'internal', to: '/trade-types/cfds/' },
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Options_t_',
            url: { type: 'internal', to: '/trade-types/options/digital-options/up-and-down/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Multipliers_t_',
            url: { type: 'internal', to: '/trade-types/multiplier/' },
        },
    },
]

const marketsLinks: SmartFooterLink[] = [
    {
        id: 0,
        data: {
            text: '_t_Forex_t_',
            url: { type: 'internal', to: '/markets/forex/' },
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Derived indices_t_',
            url: { type: 'internal', to: '/markets/synthetic/' },
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Stocks & indices_t_',
            url: { type: 'internal', to: '/markets/stock/' },
        },
    },
    {
        id: 3,
        data: {
            text: '_t_ETF_t_',
            url: { type: 'internal', to: '/markets/exchange-traded-funds/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 4,
        data: {
            text: '_t_Cryptocurrencies_t_',
            url: { type: 'internal', to: '/markets/cryptocurrencies/' },
        },
    },
    {
        id: 5,
        data: {
            text: '_t_Commodities_t_',
            url: { type: 'internal', to: '/markets/commodities/' },
        },
    },
]

const platformsLinks: SmartFooterLink[] = [
    {
        id: 0,
        data: {
            text: '_t_Deriv MT5_t_',
            url: ({ is_ppc_redirect }) => ({
                type: 'internal',
                to: is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/',
            }),
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Deriv X_t_',
            url: { type: 'internal', to: '/derivx/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Deriv EZ_t_',
            url: { type: 'internal', to: '/deriv-ez/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 3,
        data: {
            text: '_t_Deriv GO_t_',
            url: { type: 'internal', to: '/deriv-go/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 4,
        data: {
            text: '_t_Deriv Trader_t_',
            url: { type: 'internal', to: '/dtrader/' },
        },
    },
    {
        id: 5,
        data: {
            text: '_t_SmartTrader_t_',
            url: { type: 'company', url_name: 'smart_trader', target: '_blank' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 6,
        data: {
            text: '_t_Deriv Bot_t_',
            url: { type: 'internal', to: '/dbot/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 7,
        data: {
            text: '_t_Binary Bot_t_',
            url: { type: 'company', url_name: 'binary_bot', target: '_blank' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 8,
        data: {
            text: '_t_Deriv cTrader_t_',
            url: { type: 'internal', to: '/deriv-ctrader/' },
        },
        visibility: {
            is_row: true,
        },
    },
]

const legalLinks: SmartFooterLink[] = [
    {
        id: 0,
        data: {
            text: '_t_Regulatory information_t_',
            url: { type: 'internal', to: '/regulatory/' },
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Terms & conditions_t_',
            url: { type: 'internal', to: '/terms-and-conditions/#clients' },
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Secure & responsible trading_t_',
            url: { type: 'internal', to: '/responsible/' },
        },
    },
]

const partnerLinks: SmartFooterLink[] = [
    {
        id: 0,
        data: {
            text: '_t_Deriv Prime_t_',
            url: { type: 'internal', to: '/partners/deriv-prime/' },
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Affiliates and IBs_t_',
            url: { type: 'internal', to: '/partners/affiliate-ib/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Affiliates_t_',
            url: { type: 'internal', to: '/partners/affiliate-ib/' },
        },
        visibility: {
            is_row: false,
        },
    },
    {
        id: 3,
        data: {
            text: '_t_Payment agents_t_',
            url: { type: 'internal', to: '/partners/payment-agent/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 4,
        data: {
            text: '_t_API_t_',
            url: { type: 'company', url_name: 'api' },
        },
    },
]

const supportLinks: SmartFooterLink[] = [
    {
        id: 0,
        data: {
            text: '_t_Help centre_t_',
            url: { type: 'internal', to: '/help-centre/' },
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Community_t_',
            url: { type: 'company', url_name: 'community' },
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Payment methods_t_',
            url: { type: 'internal', to: '/payment-methods/' },
        },
    },
    {
        id: 3,
        data: {
            text: '_t_Status page_t_',
            url: { type: 'non-company', href: deriv_status_page_url },
        },
    },
    {
        id: 4,
        data: {
            text: '_t_Deriv Blog_t_',
            url: { type: 'company', url_name: 'blog' },
        },
    },
]

export const footerLinks: SmartFooterLinkColumn[] = [
    {
        id: 0,
        data: {
            title: '_t_ABOUT US_t_',
            links: aboutUsLinks,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_TRADE TYPES_t_',
            links: tradesLinks,
        },
    },
    {
        id: 2,
        data: {
            title: '_t_MARKETS_t_',
            links: marketsLinks,
        },
    },
    {
        id: 3,
        data: {
            title: '_t_PLATFORMS_t_',
            links: platformsLinks,
        },
    },
    {
        id: 4,
        data: {
            title: '_t_LEGAL_t_',
            links: legalLinks,
        },
    },
    {
        id: 5,
        data: {
            title: '_t_PARTNERS_t_',
            links: partnerLinks,
        },
    },
    {
        id: 7,
        data: {
            title: '_t_SUPPORT_t_',
            links: supportLinks,
        },
    },
]
