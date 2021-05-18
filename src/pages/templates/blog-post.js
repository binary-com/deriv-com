import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Container } from 'components/containers'
import { Header } from 'components/elements'

const BlogPost = ({ data }) => {
    return (
        <Container>
            <Header as="h1" type="page-title">
                {`Blog Post - ${data.prismicTitle.data.title[0].text}`}
            </Header>
        </Container>
    )
}

export default BlogPost

BlogPost.propTypes = {
    data: PropTypes.object,
}

export const pageQuery = graphql`
    query($path: String!) {
        prismicTitle(data: { slug: { eq: $path } }) {
            id
            data {
                title {
                    text
                }
                featured_image {
                    alt
                    url
                }
                body {
                    primary {
                        post_content {
                            text
                        }
                    }
                }
            }
        }
    }
`
