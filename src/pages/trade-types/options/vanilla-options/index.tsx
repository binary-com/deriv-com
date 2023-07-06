import React from 'react'
import { tab_data } from '../_data'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import NavigationTabWithoutBorder from 'features/components/templates/navigation/tab-nav-without-border'

const VanillaOptions = () => {
    return (
        <Layout is_ppc_redirect={true} is_ppc={true}>
            <NavigationTabWithoutBorder tab_data={tab_data} />
        </Layout>
    )
}

export default WithIntl()(VanillaOptions)
