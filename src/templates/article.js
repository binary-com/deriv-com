import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const ArticleTemplate = ({ data }) => {
    return (
        <Layout>
            <SEO
                description={localize('Single Article Post | Deriv')}
                title={localize('Single Post Here.')}
                no_index
            />
            {console.log(data)}
        </Layout>
    )
}

ArticleTemplate.propTypes = {
    data: PropTypes.object,
}

// Query our published articles
export const pageQuery = graphql`
    query data {
        directus {
            articles {
                article_title
                article_tags
                date_created
                featured
            }
        }
    }
`

export default WithIntl()(ArticleTemplate)
