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
`

const ArticlesPage = () => (
    <Layout>
        <SEO
            title={localize('Articles, trading guide and resources | Deriv')}
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
    </Layout>
)

export default WithIntl()(ArticlesPage)
