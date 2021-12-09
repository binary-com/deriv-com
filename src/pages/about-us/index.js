import React from 'react'
import styled from 'styled-components'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'

const StyledDiv = styled.div`
    font-size: 330%;
    background-color: white;
`

const AboutUs = () => {
    return (
        <Layout>
            <SEO
                // title and description from story page, needs new?
                title={localize('About Us | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv.com - A Binary.com brand, is a pioneer and award-winning online trading platform in the trading market.',
                )}
            />
            <StyledDiv>About Us new page</StyledDiv>{' '}
        </Layout>
    )
}

AboutUs.propTypes = {
    // data: PropTypes.object,
}

export default WithIntl()(AboutUs)
