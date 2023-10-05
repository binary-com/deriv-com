import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import derivx from './data/_deriv-x'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'

const DerivX = () => {
    const { is_eu, is_region_loading } = useRegion()

    return (
        <ProtectedRoute
            is_page_visible={!is_eu}
            component={<QuestionsTemplate data={derivx} />}
            is_loading={is_region_loading}
        />
    )
}
export default WithIntl()(DerivX)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deriv X | Deriv_t_"
        description="_t_Frequently asked questions - Deriv X_t_"
        pageContext={pageContext}
    />
)
