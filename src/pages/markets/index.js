import React from 'react'
import styled from 'styled-components'
import { Forex } from './_forex'
import { Commodities } from './_commodities'
import SyntheticIndices from './_synthetic-indices'
import StockIndices from './_stock-indices'
import { Hero } from './_hero'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { Container, Wrapper, Flex, SEO } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import device from 'themes/device'

const Markets = () => {
    return (
        <Layout>
            <SEO description={localize('')} title={localize('')} />
            <Hero />
        </Layout>
    )
}

export default WithIntl()(Markets)
