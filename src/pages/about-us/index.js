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
                title={localize('Articles, trading guide and resources | Deriv')}
                description={localize(
                    "If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online.",
                )}
                // meta_attributes={meta_attributes}
            />
            <StyledDiv>About Us new page</StyledDiv>{' '}
        </Layout>
    )
}

AboutUs.propTypes = {
    // data: PropTypes.object,
}

export default WithIntl()(AboutUs)
