import React from 'react'
import PropTypes from 'prop-types'
import Clock from './components/recent-featured-posts/images/clock.svg'
import Dot from './components/recent-featured-posts/images/dot.svg'
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
import { convertDate, getAssetUrl, getMinRead } from 'common/utility'
import { QueryImage, Tabs, Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const RecentFeaturedPosts = ({ recent_data, featured_data }) => {
    const recents = recent_data.slice(1)
    const headline_recent = recent_data[0]
    const featureds = featured_data.slice(1)
    const headline_featured = featured_data[0]

    return (
        <StyledContainer m="20px auto 0" fd="column" ai="center">
            <StyledTabs
                tab_list={['recent_posts', 'featured_posts']}
                route_from="recent_featured_posts"
                type="blog-featured"
                jc="start"
                jc_mobileL="center"
                jc_tabletM="center"
                line_divider_length="unset"
                mobile_tab_button_underline_length="100%"
                has_no_query
            >
                <Tabs.Panel label={localize('Recent posts')}>
                    <ArticleContentWrapper>
                        <LeftContent>
                            <RedirectLink to={`/academy/blog/posts/${headline_recent.slug}/`}>
                                <MainArticle image={getAssetUrl(headline_recent?.main_image?.id)}>
                                    <Description>
                                        <TagParentWrapper>
                                            {headline_recent.tags.map((article) => {
                                                return (
                                                    <TagWrapper key={article?.id}>
                                                        <StyledCategories>
                                                            {article.tags_id.tag_name}
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
                                                        data={article?.main_image?.imageFile}
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
                <Tabs.Panel label={localize('Featured posts')}>
                    <ArticleContentWrapper>
                        <LeftContent>
                            <RedirectLink to={`/academy/blog/posts/${headline_featured.slug}/`}>
                                <MainArticle image={getAssetUrl(headline_featured.main_image.id)}>
                                    <Description>
                                        <TagParentWrapper>
                                            {headline_featured.tags.map((article) => {
                                                return (
                                                    <TagWrapper key={article.id}>
                                                        <StyledCategories>
                                                            {article.tags_id.tag_name}
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
            </StyledTabs>
            <AllArticleButton tertiary="true" to="/academy/blog/">
                See all blog articles
            </AllArticleButton>
        </StyledContainer>
    )
}

RecentFeaturedPosts.propTypes = {
    featured_data: PropTypes.array,
    recent_data: PropTypes.array,
}

export default WithIntl()(RecentFeaturedPosts)
