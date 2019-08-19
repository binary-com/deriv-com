import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListWithLinks } from './_list'
import { Text, Header } from 'components/elements/typography'
import { localize } from 'components/localization'
import { StyledLink } from 'components/elements/link'
import Container from 'components/containers/container'
import device from 'themes/device'
import Show from 'components/containers/show'
// Icons
import SearchIcon from 'images/svg/search.svg'

const getRelatedArticles = (article_list, selected_article) =>
    article_list.filter(
        article =>
            article.sub_category === selected_article.sub_category &&
            article.title !== selected_article.title,
    )

const LeftRightContainer = styled.div`
    display: flex;
    padding: ${props => props.padding || ''};

    > :first-child {
        margin-right: auto;
    }

    @media ${device.tabletL} {
        padding-top: 9rem;

        svg {
            display: none;
        }
    }
`

const HomeContainer = styled(LeftRightContainer)`
    > :first-child {
        margin-right: 0;
    }
    > * {
        width: 50%;

        @media ${device.tabletL} {
            width: 100%;
        }
    }

    @media ${device.tabletL} {
        flex-wrap: wrap;
        padding: 4rem 0;
    }
`

const ArticleContainer = styled(LeftRightContainer)`
    > :first-child {
        margin-right: 6.5rem;
    }
    > * {
        flex: 1 1 auto;
    }
    @media ${device.tabletL} {
        flex-wrap: wrap;
        width: 100%;
        padding-top: 2rem;
        > :first-child {
            margin-right: 0;
        }
    }
`

const ListWrapper = styled.div`
    ${Header} {
        margin-bottom: 1.6rem;
    }

    @media ${device.tabletL} {
        padding-top: 3.55rem;
    }
`

const SmallSearchIcon = styled(SearchIcon)`
    height: 27px;
    width: 27px;

    use {
        fill: var(--color-green);
    }
    &:hover {
        cursor: pointer;
    }
`

const ArticleContent = styled.div`
    width: 50%;

    > *:not(:last-child) {
        margin-top: 0;
        padding-bottom: 0.8rem;
    }
    ${Header} {
        margin-bottom: 1.6rem;
    }
    ${Text} {
        color: var(--color-black-3);
        line-height: 1.5;

        @media ${device.tabletL} {
            font-size: 2rem;
        }
    }
`
// Eslint fails to recognize display names in React.memo
// eslint-disable-next-line react/display-name
export const ArticleSection = React.memo(function ArticleSection({
    articles,
    all_articles,
    handleSelectArticle,
    selected_article,
    toggleSearch,
}) {
    return (
        <Container align="normal" direction="column">
            {!selected_article && (
                <HomeContainer padding="8rem 0">
                    <ArticleList
                        articles={articles}
                        onClick={handleSelectArticle}
                    />
                </HomeContainer>
            )}
            {selected_article && (
                <Article
                    article={selected_article}
                    all_articles={all_articles}
                    onClick={handleSelectArticle}
                    toggleSearch={toggleSearch}
                />
            )}
        </Container>
    )
})
ArticleSection.propTypes = {
    all_articles: PropTypes.array,
    article: PropTypes.object,
    articles: PropTypes.array,
    handleSelectArticle: PropTypes.func,
    selected_article: PropTypes.object,
    toggleSearch: PropTypes.func,
}

const Article = ({ article, all_articles, onClick, toggleSearch }) => {
    const related_articles = getRelatedArticles(all_articles, article)

    return (
        <>
            <LeftRightContainer padding="9px 0 0 0">
                <StyledLink to="/help-centre/" has_arrow="true">
                    {localize('Back to Help topics')}
                </StyledLink>
                <SmallSearchIcon onClick={toggleSearch} />
            </LeftRightContainer>
            <ArticleContainer padding="4.5rem 0">
                <ArticleContent>
                    <Show device="laptop">
                        <Header as="h3">
                            {article.category} - {article.title}
                        </Header>
                    </Show>
                    <Show device="mobile">
                        <Header as="h3">{article.category}</Header>
                    </Show>
                    {article.content}
                </ArticleContent>
                {!!related_articles.length && (
                    <ListWrapper>
                        <Header as="h3">{localize('Related topics')}</Header>
                        <ListWithLinks
                            list={related_articles}
                            onClick={onClick}
                            link_style={{ size: '2rem' }}
                        />
                    </ListWrapper>
                )}
            </ArticleContainer>
        </>
    )
}
Article.propTypes = {
    all_articles: PropTypes.array,
    article: PropTypes.object,
    onClick: PropTypes.func,
    toggleSearch: PropTypes.func,
}

const ArticleList = ({ articles, onClick }) => (
    <>
        {articles.map((category, idx) => (
            <ListWrapper key={idx}>
                <Header as="h3">{category.category}</Header>
                <ListWithLinks
                    link_style={{ size: '2rem' }}
                    list={category.articles}
                    onClick={onClick}
                />
            </ListWrapper>
        ))}
    </>
)
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}
