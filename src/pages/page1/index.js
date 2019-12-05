import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Page1 = () => {
    return (
        <Layout>
            <div>
                <Breadcrumb
                    location={window.location}
                    crumbLabel="Account"
                    crumbStyle={{ color: '#666' }}
                    crumbActiveStyle={{ color: 'orange' }}
                />
                <h2>HELLO</h2>
                <Link to="/page1/page2">PAGE2</Link>
            </div>
        </Layout>
    )
}

Page1.propTypes = {
    location: PropTypes.string,
}
export default WithIntl()(Page1)
