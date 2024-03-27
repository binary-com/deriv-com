import React from 'react'
import AccumulatorsOptions from 'features/pages/options/accumulator'
import { faq_schema } from 'features/pages/options/accumulator/_faq-schema'
import {
    how_to_trade_video_schema,
    accumulator_options_video_schema,
} from 'features/pages/options/accumulator/_video-schema'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { TGatsbyHead } from 'features/types'

const AccumulatorsOptionsPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return (
        <ProtectedRoute
            region={region}
            is_page_visible={region === "row"}
            component={<AccumulatorsOptions region={region} />}
        />
    )
}

export default WithIntl()(AccumulatorsOptionsPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Accumulator options | Trade options | Deriv_t_"
        description="_t_Grow your potential payout at every tick with accumulator options. Accumulator trading is available on volatility indices under derived indices._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
        <script type="application/ld+json">
            {JSON.stringify(accumulator_options_video_schema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(how_to_trade_video_schema)}</script>
    </SEO>
)
