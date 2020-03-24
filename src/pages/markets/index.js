import React from 'react'
import { getLocationHash } from 'common/utility'
// import styled from 'styled-components'
// import { Forex } from './_forex'
// import { Commodities } from './_commodities'
// import SyntheticIndices from './_synthetic-indices'
// import StockIndices from './_stock-indices'
import { Hero } from './_hero'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO, Flex } from 'components/containers'

const useTabState = tab => {
    const [active_tab, setActiveTab] = useState(tab)
    const setTab = tab => {
        if (tab === active_tab) return
        setActiveTab(tab)
        navigate(`#${tab}`)
    }
    return [active_tab, setTab]
}
const Tabs = styled(Flex)``

const Markets = () => {
    const [active_tab, setTab] = useTabState('forex')
    useEffect(() => {
        const new_tab = getLocationHash() || 'forex'
        setTab(new_tab)
    })
    return (
        <Layout>
            <SEO description={localize('')} title={localize('')} />
            <Hero />
            <Tabs />
        </Layout>
    )
}

export default WithIntl()(Markets)
