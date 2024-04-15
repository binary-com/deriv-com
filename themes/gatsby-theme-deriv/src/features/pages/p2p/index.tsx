import React from 'react'
import loadable from '@loadable/component'
import Layout from 'features/components/templates/layout'
import DP2Hero from './hero'
import DP2Numbers from './numbers'
import DP2P from './dp2p'
import DP2Steps from './steps'
import DP2Availability from './availability'
import { banner_data } from './_data'
import DP2Banner from 'features/components/templates/banners/blade-shape-banner'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import useRegion from 'components/hooks/use-region'
import InitialLoader from 'components/elements/dot-loader'
import PageNotFound from 'features/pages/404'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'

const MainFooter = loadable(() => import('features/components/templates/footer'))

type PageProps = {
    region: BuildVariantContextType['region']
}

const DP2PPage = ({ region }: PageProps) => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country, is_p2p_loading } = useRegion()

    if (!is_p2p_loading) {
        if (is_p2p_allowed_country) {
            return (
                <Layout region={region}>
                    <MainRowNavigation />
                    <DP2Hero />
                    <DP2Numbers />
                    <DP2P />
                    <DP2Steps />
                    <DP2Availability />
                    <DP2Banner data={banner_data} />
                    <MainFooter />
                </Layout>
            )
        }
        return <PageNotFound region={region} />
    }
    return (
        <Layout region={region}>
            <InitialLoader />
        </Layout>
    )
}

export default DP2PPage
