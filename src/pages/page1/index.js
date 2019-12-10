import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Page1 = ({
    pageContext: {
        breadcrumb: { crumbs },
    },
}) => (
    <Layout>
        <div>
            <Breadcrumb
                crumbs={crumbs}
                crumbLabel="Page1"
                crumbStyle={{ color: '#666' }}
                crumbActiveStyle={{ color: 'orange' }}
            />
            <h2>HELLO First PAGE1</h2>
            <Link to="page2">PAGE2</Link>
        </div>
    </Layout>
)

Page1.propTypes = {
    // location: PropTypes.string,
    pageContext: PropTypes.shape({
        breadcrumb: PropTypes.string,
    }),
}
export default WithIntl()(Page1)
