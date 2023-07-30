import React from 'react'
import Loadable from '@loadable/component'
import Everything from '../_everything'
import Hero from './_hero'
import { PageDirection, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHeadApi } from 'features/types'

const FAQ = Loadable(() => import('../_faq'))
const LoveTrading = Loadable(() => import('./_love-trading'))

const Interim = () => {
    return (
        <Layout type="interim">
            <PageDirection />
            <Hero />
            <Everything />
            <FAQ />
            <LoveTrading />
        </Layout>
    )
}

export default WithIntl()(Interim)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO title="_t_Interim | DBot_t_" no_index pageContext={pageContext} />
)
