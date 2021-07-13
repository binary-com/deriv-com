import React from 'react'
import Clock from './images/clock.svg'
import Dot from './images/dot.svg'
import { recent_article_data, featured_article_data, article_data, article_data_2 } from './_data'
import {
    StyledContainer,
    StyledTabs,
    ArticleContentWrapper,
    LeftContent,
    RightContent,
    MainArticle,
    Description,
    TagParentWrapper,
    TagWrapper,
    StyledCategories,
    BottomDescription,
    SmallArticle,
    SmallArticleImageWrapper,
    SmallArticleImage,
    SmallArticleCategories,
    SmallArticleTopContent,
    SmallArticleDateTimeDesktop,
    SmallArticleDateTimeMobile,
    SmallArticleLeftContent,
    SmallArticleRightContent,
    AllArticleButton,
    RedirectLink,
    ClockIcon,
    DotIcon,
    MobileDotIcon,
} from './_style'
import Layout from 'components/layout/layout'
import { Carousel, Tabs, Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

// Settings for carousel
const settings = {
    options: {
        axis: 'y',
        align: 'start',
        slidesToScroll: 3,
    },
    view_port: {
        height: 'auto',
    },
    vertical_container: {
        flexDirection: 'column',
        height: '464px',
        width: '100%',
    },
}

const RecentFeaturedPosts = () => {
    const recent = recent_article_data
    const featured = featured_article_data
    const articles = article_data
    const articles_2 = article_data_2

    return (
        <Layout>
            <StyledContainer m="20px auto 0" fd="column" ai="center">
                <StyledTabs
                    tab_list={['recent_posts', 'featured_posts']}
                    route_from="recent_featured_posts"
                    type="blog-featured"
                    inactive_color="--color-grey-5"
                    jc="start"
                    jc_mobileL="center"
                    jc_tabletM="center"
                    line_divider_length="unset"
                    mobile_tab_button_underline_length="100%"
                >
                    <Tabs.Panel label={localize('Recent posts')}>
                        <ArticleContentWrapper>
                            <LeftContent>
                                <RedirectLink to={recent.link}>
                                    <MainArticle image={recent.image}>
                                        <Description>
                                            <TagParentWrapper>
                                                <TagWrapper>
                                                    <StyledCategories>
                                                        {recent.category}
                                                    </StyledCategories>
                                                </TagWrapper>
                                            </TagParentWrapper>
                                            <Header as="h3" type="heading-3" color="white" mb="5px">
                                                {recent.title}
                                            </Header>
                                            <Header
                                                as="p"
                                                type="paragraph-2"
                                                color="white"
                                                weight="normal"
                                            >
                                                {recent.description}
                                            </Header>
                                        </Description>
                                        <BottomDescription>
                                            {new Date(recent.date * 1000).toLocaleString}
                                            <ClockIcon src={Clock} />
                                            {recent.reading_time} min read
                                        </BottomDescription>
                                    </MainArticle>
                                </RedirectLink>
                            </LeftContent>
                            <RightContent>
                                <Carousel {...settings}>
                                    {articles.map((article) => {
                                        return (
                                            <RedirectLink to={article.link} key={article.title}>
                                                <SmallArticle>
                                                    <SmallArticleLeftContent>
                                                        <SmallArticleImageWrapper>
                                                            <SmallArticleImage
                                                                src={article.image}
                                                                alt={article.title}
                                                            />
                                                        </SmallArticleImageWrapper>
                                                    </SmallArticleLeftContent>
                                                    <SmallArticleRightContent>
                                                        <SmallArticleTopContent>
                                                            <SmallArticleCategories>
                                                                {article.category}
                                                            </SmallArticleCategories>
                                                            <SmallArticleDateTimeMobile>
                                                                {article.date}
                                                                <MobileDotIcon src={Dot} />
                                                                {article.reading_time} min
                                                            </SmallArticleDateTimeMobile>
                                                        </SmallArticleTopContent>
                                                        <Header as="p" type="paragraph-1">
                                                            {article.title}
                                                        </Header>
                                                        <SmallArticleDateTimeDesktop>
                                                            {article.date} <DotIcon src={Dot} />
                                                            {article.reading_time} min read
                                                        </SmallArticleDateTimeDesktop>
                                                    </SmallArticleRightContent>
                                                </SmallArticle>
                                            </RedirectLink>
                                        )
                                    })}
                                </Carousel>
                            </RightContent>
                        </ArticleContentWrapper>
                    </Tabs.Panel>
                    <Tabs.Panel label={localize('Featured posts')}>
                        <ArticleContentWrapper>
                            <LeftContent>
                                <RedirectLink to={featured.link}>
                                    <MainArticle image={featured.image}>
                                        <Description>
                                            <TagParentWrapper>
                                                <TagWrapper>
                                                    <StyledCategories>
                                                        {featured.category}
                                                    </StyledCategories>
                                                </TagWrapper>
                                            </TagParentWrapper>
                                            <Header as="h3" type="heading-3" color="white" mb="5px">
                                                {featured.title}
                                            </Header>
                                            <Header
                                                as="p"
                                                type="paragraph-2"
                                                color="white"
                                                weight="normal"
                                            >
                                                {featured.description}
                                            </Header>
                                        </Description>
                                        <BottomDescription>
                                            {featured.date} <ClockIcon src={Clock} />
                                            {featured.reading_time} min read
                                        </BottomDescription>
                                    </MainArticle>
                                </RedirectLink>
                            </LeftContent>
                            <RightContent>
                                <Carousel {...settings}>
                                    {articles_2.map((article) => {
                                        return (
                                            <RedirectLink to={article.link} key={article.title}>
                                                <SmallArticle>
                                                    <SmallArticleLeftContent>
                                                        <SmallArticleImageWrapper>
                                                            <SmallArticleImage
                                                                src={article.image}
                                                                alt={article.title}
                                                            />
                                                        </SmallArticleImageWrapper>
                                                    </SmallArticleLeftContent>
                                                    <SmallArticleRightContent>
                                                        <SmallArticleTopContent>
                                                            <SmallArticleCategories>
                                                                {article.category}
                                                            </SmallArticleCategories>
                                                            <SmallArticleDateTimeMobile>
                                                                {article.date}
                                                                <MobileDotIcon src={Dot} />
                                                                {article.reading_time} min
                                                            </SmallArticleDateTimeMobile>
                                                        </SmallArticleTopContent>
                                                        <Header as="p" type="paragraph-1">
                                                            {article.title}
                                                        </Header>
                                                        <SmallArticleDateTimeDesktop>
                                                            {article.date} <DotIcon src={Dot} />
                                                            {article.reading_time} min read
                                                        </SmallArticleDateTimeDesktop>
                                                    </SmallArticleRightContent>
                                                </SmallArticle>
                                            </RedirectLink>
                                        )
                                    })}
                                </Carousel>
                            </RightContent>
                        </ArticleContentWrapper>
                    </Tabs.Panel>
                </StyledTabs>
                <AllArticleButton tertiary to="/blog/articles/">
                    See all blog articles
                </AllArticleButton>
            </StyledContainer>
        </Layout>
    )
}

export default WithIntl()(RecentFeaturedPosts)
