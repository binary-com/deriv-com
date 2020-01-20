import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListWithLinks } from './_list'
import { localize } from 'components/localization'
import { Text, Header } from 'components/elements'
import { Show } from 'components/containers'
import device from 'themes/device'

const getRelatedArticles = (article_list, selected_article) =>
    article_list.filter(
        article =>
            article.sub_category === selected_article.sub_category &&
            article.title !== selected_article.title,
    )

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 8rem 0;

    @media ${device.tabletL} {
        flex-wrap: wrap;
    }
`

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
    margin-right: 2.4rem;
    max-width: 38.4rem;
    width: 38.4rem;

    ${Header} {
        margin-bottom: 1.6rem;
    }

    @media ${device.tabletL} {
        padding-top: 3.55rem;
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
export const ArticleSection = React.memo(function ArticleSection({ articles, selected_article }) {
    return <Wrapper>{!selected_article && <ArticleList articles={articles} />}</Wrapper>
})
ArticleSection.propTypes = {
    all_articles: PropTypes.array,
    article: PropTypes.object,
    articles: PropTypes.array,
    handleSelectArticle: PropTypes.func,
    selected_article: PropTypes.object,
    toggleSearch: PropTypes.func,
}


const ArticleList = ({ articles }) => (
    <>
        {articles.map((category, idx) => (
            <ListWrapper key={idx}>
                <Header font_size="3.6rem">{localize(category.category)}</Header>
                <ListWithLinks
                    list={category.articles}
                    categoryLink={'/help-centre/' + localize(category.category)}
                />
            </ListWrapper>
        ))}
    </>
)
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
}
