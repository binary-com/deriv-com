import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Subscribe from '../components/_subscribe'
import AllArticles from './_all-articles'
import Layout from 'components/layout/layout'
import { SEO, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import HeroImage from 'images/common/blog/deriv-blog.png'
import device from 'themes/device'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;
    flex-direction: column;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${HeroImage});
    background-size: cover;
    background-position: center;

    @media ${device.tabletL} {
        height: 348px;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        margin-top: 16px;
    }
`

const ArticlesPage = ({ data }) => {
    const article_data = data.directus.blog
    return (
        <Layout>
            <SEO
                title={localize('Deriv Blog')}
                description={localize(
                    "If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online.",
                )}
            />
            <Hero jc="center" ai="center">
                <SmallContainer>
                    <Header as="h2" type="heading-3" color="white" weight="400" align="left">
                        {localize('Deriv Blog')}
                    </Header>
                    <StyledHeader as="h2" type="heading-2" color="white" align="left">
                        {localize('The latest articles and resources')}
                    </StyledHeader>
                </SmallContainer>
            </Hero>
            <AllArticles article_data={article_data} />
            <Container>
                <Flex direction="column" ai="flex-start" jc="space-between">
                    <Subscribe />
                </Flex>
            </Container>
        </Layout>
    )
}

ArticlesPage.propTypes = {
    data: PropTypes.object,
}
export default WithIntl()(ArticlesPage)

export const query = graphql`
    {
        directus {
            blog(filter: { status: { _eq: "published" } }) {
                id
                main_image {
                    id
                    filename_disk
                    description
                    imageFile {
                        publicURL
                        relativePath
                        id
                    }
                }
                slug
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                read_time_in_minutes
            }
        }
    }
`
