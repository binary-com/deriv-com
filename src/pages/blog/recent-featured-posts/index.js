import React from 'react'
import styled from 'styled-components'
import Clock from './images/clock.svg'
import Dot from './images/dot.svg'
import { recent_article_data, featured_article_data, article_data, article_data_2 }  from './_data'
import Layout from 'components/layout/layout'
import { SEO, Container, Flex, } from 'components/containers'
import { Carousel, Header, Text, Tabs } from 'components/elements'
import { localize,LocalizedLink , WithIntl } from 'components/localization'
import HeroImage from 'images/common/blog/deriv-blog.png'
import device from 'themes/device'
import { LinkButton } from 'components/form'

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
    @media ${device.laptopM} {
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

    @media ${device.laptopM} {
        height: 348px;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        margin-top: 16px;
    }
`

const StyledContainer = styled(Flex)`
    width: 90%;
    max-width: 1200px;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.laptopM} {
        width: 100%;
        padding: 0 16px;
    }
`

const TagParentWrapper = styled(Flex)`
    height: 22px;
    justify-content: flex-start;
    @media ${device.laptopM} {
        margin-bottom: 8px;
    }
`
const TagWrapper = styled(Flex)`
    width: auto;
    padding: 1px 8px;
    border-radius: 8px;
    align-items: center;
`

const ArticleContentWrapper = styled(Container)`
    margin-top: 40px;
    color:white;
    @media ${device.laptopM} {
        flex-flow: column;
    }
`

const LeftContent= styled(Flex)`
    display:flex;
    justify-content:start;
    margin-right:10px;
    @media ${device.laptopM} {
        margin-right:0;
        margin-bottom:20px;
    }
`

const RightContent= styled(Flex)`
    display:flex;
    justify-content:start;
    @media ${device.laptopM} {
        flex-flow: column;
    }
`

const MainArticle = styled(Flex)`
    /* prettier-ignore */
    background: ${(props) =>
        props.image
            ? `linear-gradient(251.14deg,rgba(14, 14, 14, 0.5632) 29.18%,rgba(7, 6, 6, 0.88) 85.14%),url(${props.image}) no-repeat top left`
            : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
    position: relative;
    background-size: cover;
    min-height: 464px;
    width: 792px;
    max-height:300px;
    max-width: 1440px;
    align-items: flex-end;
    padding-bottom:80px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.02);
    }

    @media ${device.laptopM} {
        /* prettier-ignore */
        min-width: 328px;
        padding: 0;
        background: ${(props) =>
            props.image
                ? `linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%),url(${props.image}) no-repeat top right 46.5%`
                : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
        background-size: cover;
        justify-content:flex-end;
    }

    @media ${device.tablet} {
        width:100%;
        min-width: 270px;
    }
`

const Description = styled.div`
    padding:24px 40px 0 40px;

    @media ${device.laptopM} {
        padding:30px;
    }
`

const StyledCategories = styled(Text)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-yellow-2);
    color: var(--color-yellow-3);
    padding: 1px 8px;
    margin-left: -10px;
`

const ArticleTitle = styled.div`
    position: static;
    left: 0%;
    right: 0%;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0;

    @media ${device.laptopM} {
        font-size:24px
    }
`

const ArticleSubtitle = styled.div`
    position: static;
    width: 712px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #F2F3F4;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0;

    @media ${device.laptopM} {
        width: 100%;
        font-size:12px;
    }

`

const BottomDescription = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 40px;
    height: 66px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: rgba(14, 14, 14, 0.6);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
    flex: none;
    order: 1;
    flex-grow: 0;
    color: white;

    @media ${device.laptopM} {
        display:none;
    }
`

const SmallArticle = styled(Flex)`
    font-size: 16px;
    height: 110px;
    margin-bottom:22px;
    place-content: flex-start;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.02);
    }
`

const ImageWrapper = styled.div`
    height: 102px;
    width: 104px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    object-fit: cover;
`

const SmallArticleCategories = styled(Text)`
    margin-top:4px;
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 1px 8px;
    line-height: 20px;
    margin-left: -4px;
    font-size:14px;
    font-weight: 700;
`

const SmallArticleTitle = styled.div`
    margin-top:10px;
    font-size: 16px;
    width:100%;
    line-height:18px;
    color:black;
    font-weight: 700;
`

const SmallArticleBottomContent= styled.div`
    color: #999999;
    margin-top:18px;
    width:100%;
    font-size:12px;
`

const SmallArticleLeftContent = styled(Flex)`
    margin-left: 15px;
    margin-right: 10px;
    width:unset;

    @media ${device.laptopM} {
        margin-left:0;
    }

`

const SmallArticleRightContent = styled(Flex)`
    margin-top: -4px;
    margin-left: 10px;
    flex-direction: column;
`
const StyledLinkButton = styled(LinkButton)`
    margin-top: 40px;
    margin-bottom: 80px;
    width: fit-content;

    &:hover {
        cursor: pointer;
    }

    @media ${device.laptopM} {
        width: 100%;
    }
`

const StyledTabs = styled(Tabs)`
    width:unset;
`

const ClockIcon = styled.img`
    margin: 0 5px;
    color:white;
`

const DotIcon = styled.img`
    margin: 2px 4px;
    color:white;
`

const RedirectLink = styled(LocalizedLink)`
    text-decoration: none;
    z-index:1;
`

const settings = {
    options: {
        axis: 'y',
        align: 'start',
        slidesToScroll:3,
    },
    view_port: {
        height: 'auto',
    },
    vertical_container: {
        flexDirection: 'column',
        height: '464px',
        width: '384px'
    },
}

const RecentFeaturedPosts= () => {
    const recent = recent_article_data;
    const featured = featured_article_data;
    const articles = article_data;
    const articles_2 = article_data_2;

    return(
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

        <StyledContainer m="20px auto 0" fd="column" ai="center">
             <StyledTabs
                    tab_list={['recent_posts', 'featured_posts']}
                    route_from="recent_featured_posts"
                    is_left_aligned
                >
                    <Tabs.Panel label={localize('Recent posts')}>

                        <ArticleContentWrapper>
                            <LeftContent>
                                <RedirectLink to={recent.link}>
                                    <MainArticle image={recent.image} >
                                        <Description>
                                            <TagParentWrapper>
                                                <TagWrapper>
                                                    <StyledCategories>
                                                        {recent.category}
                                                    </StyledCategories>
                                                </TagWrapper>
                                            </TagParentWrapper>
                                                <ArticleTitle>
                                                    {recent.title}
                                                </ArticleTitle>
                                                <ArticleSubtitle>
                                                    {recent.description}
                                                </ArticleSubtitle>
                                        </Description>

                                        <BottomDescription>
                                            {recent.date} <ClockIcon src={Clock}/>  {recent.reading_time} mins read
                                        </BottomDescription>
                                    </MainArticle>
                                </RedirectLink>
                            </LeftContent>
                            <RightContent>
                                <Carousel {...settings}>
                                {
                                    articles.map((article,idx) => {
                                        return (
                                            <RedirectLink to={article.link} key={idx}>
                                            <SmallArticle>
                                                <SmallArticleLeftContent>
                                                    <ImageWrapper>
                                                        <StyledImage
                                                            src={article.image}
                                                            alt={idx}
                                                        />
                                                    </ImageWrapper>
                                                </SmallArticleLeftContent>
                                                <SmallArticleRightContent>
                                                    <SmallArticleCategories>{article.category}</SmallArticleCategories>
                                                    <SmallArticleTitle>{article.title}</SmallArticleTitle>
                                                    <SmallArticleBottomContent>{article.date} <DotIcon src={Dot} /> {article.reading_time} mins read</SmallArticleBottomContent>
                                                </SmallArticleRightContent>
                                            </SmallArticle>
                                        </RedirectLink>
                                        )})
                                    }
                                </Carousel>
                            </RightContent>
                        </ArticleContentWrapper>
                    </Tabs.Panel>
                    
                    <Tabs.Panel label={localize('Featured posts')}>
                    <ArticleContentWrapper>
                        <LeftContent>
                            <RedirectLink to={featured.link}>
                                <MainArticle image={featured.image} >
                                    <Description>
                                        <TagParentWrapper>
                                            <TagWrapper>
                                                <StyledCategories>
                                                    {featured.category}
                                                </StyledCategories>
                                            </TagWrapper>
                                        </TagParentWrapper>
                                            <ArticleTitle>
                                                {featured.title}
                                            </ArticleTitle>
                                            <ArticleSubtitle>
                                                {featured.description}
                                            </ArticleSubtitle>
                                    </Description>

                                    <BottomDescription>
                                        {featured.date} <ClockIcon src={Clock}/>  {featured.reading_time} mins read
                                    </BottomDescription>
                                </MainArticle>
                            </RedirectLink>
                        </LeftContent>
                        <RightContent>
                            <Carousel {...settings}>
                                {
                                    articles_2.map((article,idx) => {
                                        return (
                                            <RedirectLink to={article.link} key={idx}>
                                                <SmallArticle>
                                                    <SmallArticleLeftContent>
                                                        <ImageWrapper>
                                                            <StyledImage
                                                                src={article.image}
                                                                alt={idx}
                                                            />
                                                        </ImageWrapper>
                                                    </SmallArticleLeftContent>
                                                    <SmallArticleRightContent>
                                                        <SmallArticleCategories>{article.category}</SmallArticleCategories>
                                                        <SmallArticleTitle>{article.title}</SmallArticleTitle>
                                                        <SmallArticleBottomContent>{article.date} <DotIcon src={Dot} /> {article.reading_time} mins read</SmallArticleBottomContent>
                                                    </SmallArticleRightContent>
                                                </SmallArticle>
                                            </RedirectLink>
                                        )})
                                    }
                                </Carousel>
                            </RightContent>
                        </ArticleContentWrapper>
                    </Tabs.Panel>
                </StyledTabs>
                <StyledLinkButton tertiary to='/'>
                    See all blog articles
                 </StyledLinkButton>
        </StyledContainer>

    </Layout>
)
}

export default WithIntl()(RecentFeaturedPosts)
