import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO, SectionContainer, SmallContainer } from 'components/containers'
import { Header } from 'components/elements'

const PreviewContainer = styled.div`
    font-size: 16px;

    & p {
        margin-top: 32px;
        font-weight: 400;
        line-height: 32px;
        font-size: 20px;
    }
    & blockquote {
        margin-top: 32px;
        border-left: 0.25rem solid #ff1a75;
        padding-left: 2rem;
        font-style: italic;
        line-height: 32px;
    }
    & hr {
        margin: 32px 0;
    }
    & ul {
        margin-top: 32px;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;

        > li {
            margin: 10px 0 0 24px;
            padding: 0 0 0 6px;
            line-height: 32px;
            font-size: 20px;

            :first-child {
                margin: 0 0 0 24px;
            }
        }
    }
    & a {
        font-size: 20px;
        color: var(--color-red);
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
    & figure {
        display: flex;
        justify-content: center;
    }
    & img {
        max-width: 100%;
        height: auto;
    }
    & img[width='full'] {
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        max-width: 100vw;
    }
    & video {
        width: 100%;
        height: auto;
    }
    & h1 {
        font-size: 48px;
        line-height: 32px;
        margin-top: 32px;
        font-weight: bold;
    }
    & h2 {
        font-size: 32px;
        line-height: 32px;
        margin-top: 32px;
        font-weight: bold;
    }
`

const ArticleTemplate = (props) => {
    const post_data = props.data.directus.articles[0]
    return (
        <Layout>
            <SEO
                description={localize('Single Article Post | Deriv')}
                title={post_data.article_title}
                no_index
            />
            <SectionContainer>
                <SmallContainer fd="column">
                    <Header as="h1" type="page-title">
                        {post_data.article_title}
                    </Header>

                    <PreviewContainer
                        dangerouslySetInnerHTML={{ __html: post_data.article_body }}
                    ></PreviewContainer>
                </SmallContainer>
            </SectionContainer>
        </Layout>
    )
}

ArticleTemplate.propTypes = {
    data: PropTypes.object,
}

export default WithIntl()(ArticleTemplate)

// Query our published articles by slug
export const query = graphql`
    query MyQuery($slug: String) {
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
