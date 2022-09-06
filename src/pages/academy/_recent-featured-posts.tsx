import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Clock from './components/recent-featured-posts/images/clock.svg'
import Dot from './components/recent-featured-posts/images/dot.svg'
import {
    StyledContainer,
    StyledTabs,
    ArticleContentWrapper,
    LeftContent,
    BackgroundImageWrapper,
    BackgroundImageContainer,
    GradientWrapper,
    RightContent,
    MainArticle,
    Description,
    TagParentWrapper,
    TagWrapper,
    StyledCategories,
    BottomDescription,
    SmallArticle,
    SmallArticleTopContent,
    SmallArticleDateTimeDesktop,
    SmallArticleLeftContent,
    SmallArticleRightContent,
    AllArticleButton,
    RedirectLink,
    ClockIcon,
    DotIcon,
} from './components/recent-featured-posts/_style'
import { StandardImgWrapper } from './common/_styles'
import { RecentDataType, FeaturedDataType } from './index'
import { convertDate, getMinRead } from 'common/utility'
import { QueryImage, Tabs, Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

type RecentFeaturedPostsProps = {
    recent_data: RecentDataType
    featured_data: FeaturedDataType
}

const RecentFeaturedPosts = ({ recent_data, featured_data }: RecentFeaturedPostsProps) => {
    let featureds, headline_featured

    if (featured_data) {
        if (featured_data.length < 5) {
            const featured_data_combined = [...featured_data, ...recent_data]
            featureds = featured_data_combined.slice(1)
            headline_featured = featured_data_combined[0]
        } else {
            featureds = featured_data.slice(1)
            headline_featured = featured_data[0]
        }
    }

    const recents = recent_data.slice(1)
    const headline_recent = recent_data[0]

    return (
        <StyledContainer m="20px auto 0" fd="column" ai="center">
            <StyledTabs
                tab_list={['recent_posts', 'featured_posts']}
                route_from="recent_featured_posts"
                type="blog-featured"
                jc="start"
                jc_tabletM="center"
                jc_mobileL="center"
                mobile_font_size={16}
                line_divider_length="unset"
                mobile_tab_button_underline_length="100%"
                has_no_query
            >
                <Tabs.Panel label={localize('Recent articles')}>
                    <ArticleContentWrapper>
                        <LeftContent>
                            <RedirectLink to={`/academy/blog/posts/${headline_recent.slug}/`}>
                                <MainArticle>
                                    <BackgroundImageWrapper>
                                        <BackgroundImageContainer>
                                            <GatsbyImage
                                                image={getImage(
                                                    headline_recent.main_image.imageFile
                                                        .childImageSharp.gatsbyImageData,
                                                )}
                                                alt={headline_recent.main_image.description}
                                            />
                                        </BackgroundImageContainer>
                                    </BackgroundImageWrapper>
                                    <GradientWrapper />
                                    <Description>
                                        <TagParentWrapper>
                                            {headline_recent.tags.slice(0, 3).map((article) => {
                                                return (
                                                    <TagWrapper key={article?.id}>
                                                        <StyledCategories>
                                                            {article.tags_id?.tag_name}
                                                        </StyledCategories>
                                                    </TagWrapper>
                                                )
                                            })}
                                        </TagParentWrapper>
                                        <Header as="h3" type="heading-3" color="white" mb="5px">
                                            {headline_recent.blog_title}
                                        </Header>
                                        <Header
                                            as="p"
                                            type="paragraph-2"
                                            color="white"
                                            weight="normal"
                                        >
                                            {headline_recent.blog_description}
                                        </Header>
                                    </Description>
                                    <BottomDescription>
                                        {headline_recent?.published_date &&
                                            convertDate(headline_recent?.published_date)}
                                        <ClockIcon src={Clock} />
                                        {getMinRead(headline_recent?.blog_post)}
                                    </BottomDescription>
                                </MainArticle>
                            </RedirectLink>
                        </LeftContent>
                        <RightContent>
                            {recents.map((article) => {
                                return (
                                    <RedirectLink
                                        to={`/academy/blog/posts/${article.slug}/`}
                                        key={article.slug}
                                    >
                                        <SmallArticle>
                                            <SmallArticleLeftContent>
                                                <StandardImgWrapper
                                                    width="143px"
                                                    height="85.8px"
                                                    tabletL_width="113px"
                                                    tabletL_height="68px"
                                                >
                                                    <QueryImage
                                                        className="standard-query-img"
                                                        data={
                                                            article?.main_image?.imageFile
                                                                .childImageSharp.gatsbyImageData
                                                        }
                                                        alt={article?.main_image?.description || ''}
                                                    />
                                                </StandardImgWrapper>
                                            </SmallArticleLeftContent>
                                            <SmallArticleRightContent>
                                                <SmallArticleTopContent>
                                                    <Header as="p" type="paragraph-1">
                                                        {article.blog_title}
                                                    </Header>
                                                </SmallArticleTopContent>
                                                <SmallArticleDateTimeDesktop>
                                                    {article?.published_date &&
                                                        convertDate(article?.published_date)}
                                                    <DotIcon src={Dot} />
                                                    {getMinRead(article?.blog_post)}
                                                </SmallArticleDateTimeDesktop>
                                            </SmallArticleRightContent>
                                        </SmallArticle>
                                    </RedirectLink>
                                )
                            })}
                        </RightContent>
                    </ArticleContentWrapper>
                </Tabs.Panel>
                {featured_data && (
                    <Tabs.Panel label={localize('Featured articles')}>
                        <ArticleContentWrapper>
                            <LeftContent>
                                <RedirectLink to={`/academy/blog/posts/${headline_featured.slug}/`}>
                                    <MainArticle>
                                        <BackgroundImageWrapper>
                                            <BackgroundImageContainer>
                                                <GatsbyImage
                                                    image={getImage(
                                                        headline_featured.main_image.imageFile,
                                                    )}
                                                    alt={headline_featured.main_image.description}
                                                />
                                            </BackgroundImageContainer>
                                        </BackgroundImageWrapper>
                                        <GradientWrapper />
                                        <Description>
                                            <TagParentWrapper>
                                                {headline_featured.tags
                                                    .slice(0, 3)
                                                    .map((article) => {
                                                        return (
                                                            <TagWrapper key={article.id}>
                                                                <StyledCategories>
                                                                    {article.tags_id?.tag_name}
                                                                </StyledCategories>
                                                            </TagWrapper>
                                                        )
                                                    })}
                                            </TagParentWrapper>
                                            <Header as="h3" type="heading-3" color="white" mb="5px">
                                                {headline_featured.blog_title}
                                            </Header>
                                            <Header
                                                as="p"
                                                type="paragraph-2"
                                                color="white"
                                                weight="normal"
                                            >
                                                {headline_featured.blog_description}
                                            </Header>
                                        </Description>
                                        <BottomDescription>
                                            {headline_featured.published_date &&
                                                convertDate(headline_featured?.published_date)}
                                            <ClockIcon src={Clock} />
                                            {getMinRead(headline_featured?.blog_post)}
                                        </BottomDescription>
                                    </MainArticle>
                                </RedirectLink>
                            </LeftContent>
                            <RightContent>
                                {featureds.map((article) => {
                                    return (
                                        <RedirectLink
                                            to={`/academy/blog/posts/${article.slug}/`}
                                            key={article.slug}
                                        >
                                            <SmallArticle>
                                                <SmallArticleLeftContent>
                                                    <StandardImgWrapper
                                                        width="143px"
                                                        height="85.8px"
                                                        tabletL_width="113px"
                                                        tabletL_height="68px"
                                                    >
                                                        <QueryImage
                                                            className="standard-query-img"
                                                            data={article.main_image.imageFile}
                                                            alt={
                                                                article?.main_image?.description ||
                                                                ''
                                                            }
                                                        />
                                                    </StandardImgWrapper>
                                                </SmallArticleLeftContent>
                                                <SmallArticleRightContent>
                                                    <SmallArticleTopContent>
                                                        <Header as="p" type="paragraph-1">
                                                            {article.blog_title}
                                                        </Header>
                                                    </SmallArticleTopContent>
                                                    <SmallArticleDateTimeDesktop>
                                                        {article?.published_date &&
                                                            convertDate(article?.published_date)}
                                                        <DotIcon src={Dot} />
                                                        {getMinRead(article?.blog_post)}
                                                    </SmallArticleDateTimeDesktop>
                                                </SmallArticleRightContent>
                                            </SmallArticle>
                                        </RedirectLink>
                                    )
                                })}
                            </RightContent>
                        </ArticleContentWrapper>
                    </Tabs.Panel>
                )}
            </StyledTabs>
            <AllArticleButton tertiary to="/academy/blog/">
                {localize('See all articles')}
            </AllArticleButton>
        </StyledContainer>
    )
}

export default WithIntl()(RecentFeaturedPosts)
