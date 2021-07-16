import React from 'react'
import PropTypes from 'prop-types'
import SocialSharing from '../_social-sharing'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Index = (props) => {
    const pathname = props.pageContext.pathname
    return (
        <Layout>
            <SocialSharing pathname={pathname} />
        </Layout>
    )
}

Index.propTypes = {
    pageContext: PropTypes.object,
}

export default WithIntl()(Index)