import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'

const MainSec = styled.section`
    background-color: var(--color-grey-25);
    background-size: cover;
    height: 100vh;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
`

const ForexEbook = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    return (
        <Layout is_ppc_redirect={true}>
            <SEO
                title={localize('Forex Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            {is_mobile && (
                <div>
                    <p>This is a mobile page</p>
                </div>
            )}
            <MainSec>
                <h1>This is the main stuff </h1>
            </MainSec>
        </Layout>
    )
}

export default WithIntl()(ForexEbook)
