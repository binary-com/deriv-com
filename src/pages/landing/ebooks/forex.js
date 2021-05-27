// import React, { useState, useEffect } from 'react'
import React from 'react'
// import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
import Introduction from './components/introduction';
import HeaderSection from 'components/layout/ebooks/header'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import forexEbook from 'images/common/ebooks/forex-ebook.png'
// import { size } from 'themes/device'
// import { isBrowser } from 'common/utility'

const ForexEbook = () => {
    return (
        <Layout is_ppc_redirect={true}>
            <SEO
                title={localize('Stocks Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            <HeaderSection mainHeaderImage={forexEbook} />

            <Introduction />

        </Layout>
    )
}

export default WithIntl()(ForexEbook)
