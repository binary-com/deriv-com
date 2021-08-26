import React from 'react'
import PropTypes from 'prop-types'
import Clock from './recent-featured-posts/images/clock.svg'
import Dot from './recent-featured-posts/images/dot.svg'
import { featured_article_data, article_data_2 } from './recent-featured-posts/_data'
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
    MobileHeader,
} from './recent-featured-posts/_style'
import { Carousel, Tabs, Header, QueryImage } from 'components/elements'
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

const RecentFeaturedPosts = ({ recent_data, featured_data }) => {
    const featured = featured_article_data
    const articles_2 = article_data_2
    const recents = recent_data
    const headline_recent = recents[0]
    const featureds = featured_data
    const headline_featured = featureds[0]
    console.log(headline_featured)

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
                            <RedirectLink to={`/academy/blog/${headline_recent.slug}`}>
                                <MainArticle>
                                    <QueryImage
                                        className="main-article-bg"
                                        data={headline_recent.main_image.imageFile}
                                        alt={headline_recent.main_image.description || ''}
                                        height="464px"
                                    />
                                    <Description>
                                        <TagParentWrapper>
                                            {headline_recent.tags.map((item) => {
                                                return (
                                                    <>
                                                        <TagWrapper>
                                                            <>
                                                                {item.tags &&
                                                                    item.tags
                                                                        .slice(0, 2)
                                                                        .map((tag) => (
                                                                            <StyledCategories
                                                                                key={tag.id}
                                                                            >
                                                                                {
                                                                                    tag.tags_id
                                                                                        .tag_name
                                                                                }
                                                                            </StyledCategories>
                                                                        ))}
                                                                {item.tags.length > 2 && (
                                                                    <StyledCategories>
                                                                        {`+${item.tags
                                                                            .slice(2)
                                                                            .length.toString()}`}
                                                                    </StyledCategories>
                                                                )}
                                                            </>
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
                                        {headline_recent.published_date}
                                        <ClockIcon src={Clock} />
                                        {headline_recent.read_time_in_minutes} min read
                                    </BottomDescription>
                                </MainArticle>
                            </RedirectLink>
                        </LeftContent>
                        <RightContent>
                            <Carousel {...settings}>
                                {recents.map((article) => {
                                    return (
                                        <RedirectLink
                                            to={`/academy/blog/${article.slug}`}
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
                                                        {headline_recent.map((item) => {
                                                            return (
                                                                <>
                                                                    {item.tags &&
                                                                        item.tags
                                                                            .slice(0, 1)
                                                                            .map((tag) => (
                                                                                <SmallArticleCategories
                                                                                    key={tag.id}
                                                                                >
                                                                                    {
                                                                                        tag.tags_id
                                                                                            .tag_name
                                                                                    }
                                                                                </SmallArticleCategories>
                                                                            ))}
                                                                    {item.tags.length > 1 && (
                                                                        <SmallArticleCategories>
                                                                            {`+${item.tags
                                                                                .slice(2)
                                                                                .length.toString()}`}
                                                                        </SmallArticleCategories>
                                                                    )}
                                                                </>
                                                            )
                                                        })}
                                                        <SmallArticleDateTimeMobile>
                                                            {article.published_date}
                                                            <MobileDotIcon src={Dot} />
                                                            {article.read_time_in_minutes} min
                                                        </SmallArticleDateTimeMobile>
                                                        <Header as="p" type="paragraph-1">
                                                            {article.blog_title}
                                                        </Header>
                                                    </SmallArticleTopContent>
                                                    <MobileHeader as="p" type="paragraph-1">
                                                        {article.blog_description}
                                                    </MobileHeader>
                                                    <SmallArticleDateTimeDesktop>
                                                        {article.published_date}{' '}
                                                        <DotIcon src={Dot} />
                                                        {article.read_time_in_minutes} min read
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
                                                        <Header as="p" type="paragraph-1">
                                                            {article.title}
                                                        </Header>
                                                    </SmallArticleTopContent>
                                                    <MobileHeader as="p" type="paragraph-1">
                                                        {article.title}
                                                    </MobileHeader>
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
    )
}

RecentFeaturedPosts.propTypes = {
    featured_data: PropTypes.object,
    recent_data: PropTypes.object,
}

export default WithIntl()(RecentFeaturedPosts)
