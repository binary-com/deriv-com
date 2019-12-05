import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Article = () => {
    return (
        <Layout>
            <div>
                <Breadcrumb
                    location={window.location}
                    crumbLabel="Who can open an account"
                    crumbStyle={{ color: '#666' }}
                    crumbActiveStyle={{ color: 'orange' }}
                />
                <h2>ARTICLE PAGE</h2>
            </div>
        </Layout>
    )
}

Page2.propTypes = {
    location: PropTypes.string,
}
export default WithIntl()(Article)
