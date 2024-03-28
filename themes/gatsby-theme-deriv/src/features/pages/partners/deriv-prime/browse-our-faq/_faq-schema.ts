import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Who is Deriv Prime?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Deriv Prime is the institutional arm of Deriv Group, and staying true to its guiding principles, effectively democratises liquidity provision to financial institutions. No matter if you are large, small, or have just started, Deriv Prime will provide top-of-book liquidity solutions with very fast execution at unmatched fair pricing and conditions._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Who can partner with Deriv Prime?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Deriv Prime partners with regulated financial institutions, including:<ul><li>Brokerage firms</li><li>Asset managers</li><li>Investment funds</li><li>Professional trading groups / professional traders</li><li>Corporate clients</li><li>Other financial institutions</li></ul>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is the liquidity solution offering?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_As a liquidity solutions provider, Deriv Prime offers institutional trading services and access to global financial markets through a single point of integration. This encompasses trading assets in the forex, commodities, equities, indices, ETFs, and cryptocurrencies markets._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is the onboarding procedure?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_To onboard with Deriv Prime’s liquidity solution and trading services, you will need to follow a streamlined process: <ol><li>Account application: Contact us to connect with a dedicated support team to guide you through the entire onboarding journey.</li><li>Verification: Satisfy all compliance and regulatory requirements including Know Your Business (KYB) requirements.</li><li>Margin account settlement: Fund your margin account to meet the minimum balance based on our scalable commercial plan.</li><li>Connectivity: Integrate with our platform using your preferred connectivity method.</li></ol>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How does Deriv Prime’s liquidity solution pricing work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<strong>Connectivity and Integration</strong> You are responsible for any connectivity or bridging fees charged by third-party providers to transact through our platform. <strong><br/>Minimum volume processing fee</strong> A monthly service fee of USD 1,500 will be charged at the end of each month. The fee is accrued and only charged if the minimum volume requirements are not exceeded. <strong><br/>Institutional swaps</strong> You will be charged daily with institutional swaps. <strong><br/>Commissions</strong> on institutional trading via Deriv Prime will be charged on trades per million, per side (see table below). For equities, indices, and ETFs, commissions are charged per contract per side. For cryptocurrencies, commissions are charged in basis points, per side. <table><caption>Scalable Commercial Plan</caption><tr><th>Monthly volume requirement</th><th>Fee</th></tr><tr><td>0 - 3 billion</td><td>$8.00</td></tr><tr><td> > 3 - 5 billion</td><td>$7.00</td></tr><tr><td> > 5 - 10 billion</td><td>$6.00</td></tr><tr><td> > 10 billion</td><td>$5.00</td></tr><tr><td>0 - 15 million (Crypto)</td><td>5.5 bps / 0.055%</td></tr><tr><td> > 15 million (Crypto)</td><td>5 bps / 0.05%</td></tr></table>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Are investments segregated from Deriv’s Group business funds?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, Deriv Prime’s partner funds are held in segregated client accounts that are separate from Deriv’s Group business activities._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Does Deriv Prime provide any support?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you will receive dedicated relationship managers to provide customised support and guidance along with technical support for connectivity, testing, and deployment for your trading operations._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What connectivity methods are available with Deriv Prime?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can connect to your trusted bridge partner via a FIX API protocol connection._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Which currencies are accepted for funding?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can fund your margin account with EUR, USD and GBP. If you wish to use other currencies, please reach out to us and we will review your request._t_',
                ),
            },
        },
    ],
}
