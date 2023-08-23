import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Where can I trade Asian options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Asian options are available on the SmartTrader and Deriv Bot trading platforms. You can trade Asian options on synthetics._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How can I open an Asians trade?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>You can open an Asians trade by:</p><ul><li>Choosing your preferred instrument.</li><li>Setting the duration of your trade.</li><li>Entering your preferred stake amount or desired potential payout.</li><li>Making your market prediction.</li></ul><p>Once you have determined the above parameters, you can open an Asians trade on SmartTrader and Deriv Bot.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do Asians contracts work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_Asians contracts calculate the average price of an underlying asset over a predetermined trade duration of 5 to 10 ticks. When you open an Asians trade, you'll predict whether the final price tick (the last tick) will be higher or lower than the average price throughout the contract period._t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I close an Asians contract before the contract expires?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize('_t_No, you cannot close an Asians contract before it expires._t_'),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I select the duration for an Asians contract?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can choose the duration of your Asians contract anywhere between 5 and 10 ticks._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I open multiple Asians contracts simultaneously?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can. You can open contracts with different parameters to take advantage of more market opportunities._t_',
                ),
            },
        },
    ],
}
