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
    ArticleTitle,
    ArticleSubtitle,
    BottomDescription,
    SmallArticle,
    SmallArticleImageWrapper,
    SmallArticleImage,
    SmallArticleCategories,
    SmallArticleTitle,
    SmallArticleBottomContent,
    SmallArticleLeftContent,
    SmallArticleRightContent,
    AllArticleButton,
    RedirectLink,
    ClockIcon,
    DotIcon,
} from './_style'
import Layout from 'components/layout/layout'
import { Carousel, Tabs } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

//Settings for carrousel
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
        width: '384px',
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
                    is_left_aligned
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
                                            <ArticleTitle>{recent.title}</ArticleTitle>
                                            <ArticleSubtitle>{recent.description}</ArticleSubtitle>
                                        </Description>
                                        <BottomDescription>
                                            {recent.date} <ClockIcon src={Clock} />
                                            {recent.reading_time} mins read
                                        </BottomDescription>
                                    </MainArticle>
                                </RedirectLink>
                            </LeftContent>
                            <RightContent>
                                <Carousel {...settings}>
                                    {articles.map((article, idx) => {
                                        return (
                                            <RedirectLink to={article.link} key={idx}>
                                                <SmallArticle>
                                                    <SmallArticleLeftContent>
                                                        <SmallArticleImageWrapper>
                                                            <SmallArticleImage
                                                                src={article.image}
                                                                alt={idx}
                                                            />
                                                        </SmallArticleImageWrapper>
                                                    </SmallArticleLeftContent>
                                                    <SmallArticleRightContent>
                                                        <SmallArticleCategories>
                                                            {article.category}
                                                        </SmallArticleCategories>
                                                        <SmallArticleTitle>
                                                            {article.title}
                                                        </SmallArticleTitle>
                                                        <SmallArticleBottomContent>
                                                            {article.date} <DotIcon src={Dot} />
                                                            {article.reading_time} mins read
                                                        </SmallArticleBottomContent>
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
                                            <ArticleTitle>{featured.title}</ArticleTitle>
                                            <ArticleSubtitle>
                                                {featured.description}
                                            </ArticleSubtitle>
                                        </Description>
                                        <BottomDescription>
                                            {featured.date} <ClockIcon src={Clock} />
                                            {featured.reading_time} mins read
                                        </BottomDescription>
                                    </MainArticle>
                                </RedirectLink>
                            </LeftContent>
                            <RightContent>
                                <Carousel {...settings}>
                                    {articles_2.map((article, idx) => {
                                        return (
                                            <RedirectLink to={article.link} key={idx}>
                                                <SmallArticle>
                                                    <SmallArticleLeftContent>
                                                        <SmallArticleImageWrapper>
                                                            <SmallArticleImage
                                                                src={article.image}
                                                                alt={idx}
                                                            />
                                                        </SmallArticleImageWrapper>
                                                    </SmallArticleLeftContent>
                                                    <SmallArticleRightContent>
                                                        <SmallArticleCategories>
                                                            {article.category}
                                                        </SmallArticleCategories>
                                                        <SmallArticleTitle>
                                                            {article.title}
                                                        </SmallArticleTitle>
                                                        <SmallArticleBottomContent>
                                                            {article.date} <DotIcon src={Dot} />{' '}
                                                            {article.reading_time} mins read
                                                        </SmallArticleBottomContent>
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
