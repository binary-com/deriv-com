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
import { DerivStore } from 'store'

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
    const { is_eu_country } = React.useContext(DerivStore)
    const article_data = is_eu_country
        ? data.directus.blog.filter((item) => item.hide_for_eu == false)
        : data.directus.blog

    const meta_attributes = {
        og_title: 'Trading tips, guides, and more.',
        og_description:
            'Educational content at your fingertips – everything you need to know to start trading or upgrade your trading skills.',
    }
    return (
        <Layout type="academy">
            <SEO
                title={localize('Articles, trading guide and resources | Deriv')}
                description={localize(
                    "If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online.",
                )}
                meta_attributes={meta_attributes}
            />
            <Hero jc="center" ai="center">
                <SmallContainer>
                    <Header as="h2" type="heading-3" color="white" weight="400" align="left">
                        {localize('Deriv blog')}
                    </Header>
                    <StyledHeader as="h2" type="heading-2" color="white" align="left">
                        {localize('The latest articles and resources')}
                    </StyledHeader>
                </SmallContainer>
            </Hero>
            {article_data && <AllArticles article_data={article_data} />}
            <Container pb="80px" tabletL={{ pb: '40px' }}>
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
    query AllArticlesQuery {
        directus {
            blog(
                filter: { status: { _eq: "published" }, test_data: { _eq: false } }
                sort: "-published_date"
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                slug
                featured
                hide_for_eu
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
                published_date
            }
        }
    }
`
