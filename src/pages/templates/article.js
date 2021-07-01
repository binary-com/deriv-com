import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO, Container } from 'components/containers'
import { Header } from 'components/elements'

const ArticleTemplate = (props) => {
    const post_data = props.data.directus.articles[0]
    return (
        <Layout>
            <SEO
                description={localize('Single Article Post | Deriv')}
                title={localize('Single Post Here.')}
                no_index
            />
            <Container>
                <Header as="h1" type="heading-2">
                    {post_data.article_title}
                </Header>
            </Container>

            {/* {console.log(props)}
            {console.log(post_data)} */}
        </Layout>
    )
}

ArticleTemplate.propTypes = {
    data: PropTypes.object,
}

export default WithIntl()(ArticleTemplate)

// Query our published articles
export const query = graphql`
    query ($slug: String!) {
        directus {
            articles(filter: { article_url: { _eq: $slug } }) {
                article_title
                article_tags
                date_created
                featured
                article_body
                main_image {
                    imageFile {
                        absolutePath
                    }
                }
            }
        }
    }
`
