// import React, { useState, useEffect } from 'react'
import React from 'react'
// import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
import Introduction from 'components/layout/ebooks/introduction'
import HeaderSection from 'components/layout/ebooks/header'
import Topics from 'components/layout/ebooks/topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import introForexEbook from 'images/common/ebooks/introduction-forex-ebook.png'
import forexEbookImage from 'images/common/ebooks/forex-ebook.png'
import forexEbookInside from 'images/common/ebooks/forex-ebook-inside.png'
// import { size } from 'themes/device'
// import { isBrowser } from 'common/utility'

const ForexEbook = () => {
    return (
        <Layout is_ppc_redirect={true}>
            <SEO
                title={localize('Forex Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            <HeaderSection mainHeaderImage={forexEbookImage} />
            <Introduction introImage={introForexEbook} imageHeight={462} />
            <Topics topicsImage={forexEbookInside} />
        </Layout>
    )
}

export default WithIntl()(ForexEbook)
