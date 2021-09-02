import React from 'react'
import PropTypes from 'prop-types'
import Clock from './recent-featured-posts/images/clock.svg'
import Dot from './recent-featured-posts/images/dot.svg'
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
    MobileHeader,
} from './recent-featured-posts/_style'
import { convertDate } from 'common/utility'
import { Flex } from 'components/containers'
import { QueryImage, Carousel, Tabs, Header } from 'components/elements'
import { localize, WithIntl, Localize } from 'components/localization'

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

const RecentFeaturedPosts = ({ recent_data, featured_data }) => {
    const recents = recent_data.slice(1)
    const headline_recent = recent_data[0]
    const featureds = featured_data.slice(1)
    const headline_featured = featured_data[0]

    const truncateString = (input) => (input.length > 40 ? `${input.substring(0, 40)}...` : input)

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
            >
                <Tabs.Panel label={localize('Recent posts')}>
                    <ArticleContentWrapper>
                        <LeftContent>
                            <RedirectLink to={`/academy/blog/posts/${headline_recent.slug}`}>
                                <MainArticle>
                                    <QueryImage
                                        className="main-article-bg"
                                        data={headline_recent.main_image.imageFile}
                                        alt={headline_recent.main_image.description || ''}
                                        height="464px"
                                    />
                                    <Description>
                                        <TagParentWrapper>
                                            {headline_recent.tags.map((article) => {
                                                return (
                                                    <>
                                                        <TagWrapper key={article.id}>
                                                            <StyledCategories>
                                                                {article.tags_id.tag_name}
                                                            </StyledCategories>
                                                        </TagWrapper>
                                                    </>
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
                                        {headline_recent.read_time_in_minutes}{' '}
                                        <Localize translate_text="min read" />
                                    </BottomDescription>
                                </MainArticle>
                            </RedirectLink>
                        </LeftContent>
                        <RightContent>
                            <Carousel {...settings}>
                                {recents.map((article) => {
                                    return (
                                        <RedirectLink
                                            to={`/academy/blog/posts/${article.slug}`}
                                            key={article.slug}
                                        >
                                            <SmallArticle>
                                                <SmallArticleLeftContent>
                                                    <SmallArticleImageWrapper>
                                                        <QueryImage
                                                            className="small-article-bg"
                                                            data={article.main_image.imageFile}
                                                            alt={
                                                                article.main_image.description || ''
                                                            }
                                                            height="102px"
                                                        />
                                                    </SmallArticleImageWrapper>
                                                </SmallArticleLeftContent>
                                                <SmallArticleRightContent>
                                                    <SmallArticleTopContent>
                                                        <Flex
                                                            jc="start"
                                                            laptopM={{ flexDirection: 'start' }}
                                                        >
                                                            {article.tags &&
                                                                article.tags
                                                                    .slice(0, 1)
                                                                    .map((tag) => (
                                                                        <SmallArticleCategories
                                                                            key={tag.id}
                                                                        >
                                                                            {tag.tags_id.tag_name}
                                                                        </SmallArticleCategories>
                                                                    ))}
                                                        </Flex>
                                                        <SmallArticleDateTimeMobile>
                                                            {article?.published_date &&
                                                                convertDate(
                                                                    article?.published_date,
                                                                )}
                                                            <MobileDotIcon src={Dot} />
                                                            {article.read_time_in_minutes}{' '}
                                                            <Localize translate_text="min" />
                                                        </SmallArticleDateTimeMobile>
                                                        <Header as="p" type="paragraph-1">
                                                            {truncateString(article.blog_title)}
                                                        </Header>
                                                    </SmallArticleTopContent>
                                                    <MobileHeader as="p" type="paragraph-1">
                                                        {truncateString(article.blog_title)}
                                                    </MobileHeader>
                                                    <SmallArticleDateTimeDesktop>
                                                        {article?.published_date &&
                                                            convertDate(article?.published_date)}
                                                        <DotIcon src={Dot} />
                                                        {article.read_time_in_minutes}{' '}
                                                        <Localize translate_text="min read" />
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
                            <RedirectLink to={`/academy/blog/posts/${headline_featured.slug}`}>
                                <MainArticle>
                                    <QueryImage
                                        className="main-article-bg"
                                        data={headline_featured.main_image.imageFile}
                                        alt={headline_featured.main_image.description || ''}
                                        height="464px"
                                    />
                                    <Description>
                                        <TagParentWrapper>
                                            {headline_featured.tags.map((article) => {
                                                return (
                                                    <>
                                                        <TagWrapper key={article.id}>
                                                            <StyledCategories>
                                                                {article.tags_id.tag_name}
                                                            </StyledCategories>
                                                        </TagWrapper>
                                                    </>
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
                                        {headline_featured.read_time_in_minutes}{' '}
                                        <Localize translate_text="min read" />
                                    </BottomDescription>
                                </MainArticle>
                            </RedirectLink>
                        </LeftContent>
                        <RightContent>
                            <Carousel {...settings}>
                                {featureds.map((article) => {
                                    return (
                                        <RedirectLink
                                            to={`/academy/blog/posts/${article.slug}`}
                                            key={article.slug}
                                        >
                                            <SmallArticle>
                                                <SmallArticleLeftContent>
                                                    <SmallArticleImageWrapper>
                                                        <QueryImage
                                                            className="small-article-bg"
                                                            data={article.main_image.imageFile}
                                                            alt={
                                                                article.main_image.description || ''
                                                            }
                                                            height="102px"
                                                        />
                                                    </SmallArticleImageWrapper>
                                                </SmallArticleLeftContent>
                                                <SmallArticleRightContent>
                                                    <SmallArticleTopContent>
                                                        <Flex
                                                            jc="start"
                                                            laptopM={{ flexDirection: 'start' }}
                                                        >
                                                            {article.tags &&
                                                                article.tags
                                                                    .slice(0, 1)
                                                                    .map((tag) => (
                                                                        <SmallArticleCategories
                                                                            key={tag.id}
                                                                        >
                                                                            {tag.tags_id.tag_name}
                                                                        </SmallArticleCategories>
                                                                    ))}
                                                        </Flex>
                                                        <SmallArticleDateTimeMobile>
                                                            {article?.published_date &&
                                                                convertDate(
                                                                    article?.published_date,
                                                                )}
                                                            <MobileDotIcon src={Dot} />
                                                            {article.read_time_in_minutes}{' '}
                                                            <Localize translate_text="min" />
                                                        </SmallArticleDateTimeMobile>
                                                        <Header as="p" type="paragraph-1">
                                                            {truncateString(article.blog_title)}
                                                        </Header>
                                                    </SmallArticleTopContent>
                                                    <MobileHeader as="p" type="paragraph-1">
                                                        {truncateString(article.blog_title)}
                                                    </MobileHeader>
                                                    <SmallArticleDateTimeDesktop>
                                                        {article?.published_date &&
                                                            convertDate(article?.published_date)}
                                                        <DotIcon src={Dot} />
                                                        {article.read_time_in_minutes}{' '}
                                                        <Localize translate_text="min read" />
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
            <AllArticleButton tertiary="true" to="/blog/articles/">
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
