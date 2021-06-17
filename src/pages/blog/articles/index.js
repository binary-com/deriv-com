import React from 'react'
import styled from 'styled-components'
import AllArticles from './_all-articles'
import { article_data } from './_data'
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
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        margin-top: 16px;
    }
    @media ${device.mobileL} {
        font-size: 28px;
    }
`

const ArticlesPage = () => (
    <Layout>
        <SEO
            title={localize('Articless Page | Blog by Deriv')}
            description={localize('All articles page.')}
        />
        <Hero jc="center" ai="center">
            <SmallContainer>
                <Header as="h2" type="section-title" color="white" weight="400" align="left">
                    {localize('Deriv blog')}
                </Header>
                <StyledHeader as="h2" type="page-title" color="white" align="left">
                    {localize('The latest articles and resources')}
                </StyledHeader>
            </SmallContainer>
        </Hero>
        <AllArticles article_data={article_data} />
    </Layout>
)

export default WithIntl()(ArticlesPage)
