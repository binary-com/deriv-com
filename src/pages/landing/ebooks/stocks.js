// import React, { useState, useEffect } from 'react'
import React from 'react'
// import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
import HeaderSection from 'components/layout/ebooks/header'
import Introduction from 'components/layout/ebooks/introduction'
import Topics from 'components/layout/ebooks/topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import stocksEbookImage from 'images/common/ebooks/stocks-ebook.png'
import stocksEbookInside from 'images/common/ebooks/stocks-ebook-inside.png'
import StocksIntroImage from 'images/svg/stock-indices/stocksHeaderBelowSection.svg'
// import { size } from 'themes/device'
// import { isBrowser } from 'common/utility'

// const MainSec = styled.section`
//     background-color: var(--color-grey-25);
//     background-size: cover;
//     height: 100vh;
//     width: 100%;
//     margin: 0;
//     display: flex;
//     align-items: center;
// `

const StocksEbook = () => {
    return (
        <Layout is_ppc_redirect={true}>
            <SEO
                title={localize('Stocks Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            <HeaderSection mainHeaderImage={stocksEbookImage} />
            <Introduction introImage={StocksIntroImage} imageHeight={476} />
            <Topics topicsImage={stocksEbookInside} />
        </Layout>
    )
}

export default WithIntl()(StocksEbook)
