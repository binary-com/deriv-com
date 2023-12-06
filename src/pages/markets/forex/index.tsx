import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import ForexMarket from 'features/pages/markets/forex'

const ForexPage = () => <ForexMarket />

export default WithIntl()(ForexPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade forex on Deriv's intuitive online trading platforms and get access to a wide range of major, minor, and exotic currency pairs._t_"
        title="_t_Forex online trading platforms | Forex trading demo account | Deriv_t_"
        pageContext={pageContext}
    />
)
