import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Page2 = () => {
    return (
        <Layout>
            <div>
                <Breadcrumb
                    location={window.location}
                    crumbLabel="page 2"
                    crumbStyle={{ color: '#666' }}
                    crumbActiveStyle={{ color: 'orange' }}
                />
                <h2> this is page 2</h2>
                <Link to="/">HOME</Link>
            </div>
        </Layout>
    )
}

Page2.propTypes = {
    location: PropTypes.string,
}
export default WithIntl()(Page2)
