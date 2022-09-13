import React from 'react'
import styled, { css } from 'styled-components'
import { convertToHash } from './_utility'
import { Header } from 'components/elements'
import { LocalizedLink, Localize } from 'components/localization'
import device from 'themes/device'

type StyledProps = {
    should_show_item?: boolean
}

type TranslateTextType = {
    translate_text: string
}

type CategoryType = {
    props: TranslateTextType
    translate_text: string
    is_expanded: boolean
    is_eu_country?: boolean
}

type ArticleType = {
    category: string
    label: string
    title: React.ReactElement
    hide_for_eu?: boolean
    hide_for_non_eu?: boolean
}

type ItemType = {
    category: CategoryType
    articles: ArticleType[]
}

type ArticleComponentProps = {
    idx: number
    id: number
    item: ItemType
    all_categories: CategoryType
    toggleArticle: (arg: string) => void
    is_eu_country: boolean
    param: string
}

const ArticleDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const ListWrapper = styled.div`
    margin-right: 2.4rem;
    width: 35rem;
    line-height: 1.5;

    @media ${device.laptopL} {
        width: 30rem;
    }
    @media ${device.laptopM} {
        width: 26rem;
    }
    @media ${device.tabletS} {
        width: auto;
    }

    @media ${device.tabletL} {
        padding-top: 3.55rem;
    }
`
const margin = ({ row, col }) => {
    let margin_top = '4rem'
    switch (row) {
        case 0:
            margin_top = '8rem'
            break
        case 1:
            margin_top = col ? '7.2rem' : margin_top
            break
    }
    return css`
        margin-top: ${margin_top};
    `
}

const StyledHeader = styled(Header)`
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    ${margin};

    @media ${device.mobileL} {
        margin-top: 40px;
    }
`
const ListNoBullets = styled.ul`
    margin-bottom: 1.6rem;
    list-style: none;

    li {
        max-width: 38.4rem;

        @media ${device.tabletS} {
            max-width: 100%;
            width: 100%;
        }
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`

const ShowItem = styled.li<StyledProps>`
    display: ${(props) => (props.should_show_item ? 'block' : 'none')};
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-black-3);
    font-size: 16px;

    :hover {
        color: red;
        text-decoration: underline;
    }
`
const StyledView = styled.div`
    text-decoration: none;
    color: var(--color-red);
    font-size: 16px;
    font-weight: normal;

    :hover {
        cursor: pointer;
    }
`

const ArticleComponent = ({
    idx,
    item,
    all_categories,
    toggleArticle,
    is_eu_country,
    param,
}: ArticleComponentProps) => {
    const eu_articles = item.articles.filter((article) => !article.hide_for_eu)
    const row_articles = item.articles.filter((article) => !article.hide_for_non_eu)

    const articles = React.useMemo(
        () => (is_eu_country ? eu_articles : row_articles),
        [eu_articles, is_eu_country, row_articles],
    )

    return (
        <ArticleDiv key={idx}>
            <ListWrapper>
                <StyledHeader type="section-title">{item.category}</StyledHeader>
                {articles.map((ar, idxb) => {
                    const category_is_expanded =
                        ar.category in all_categories && all_categories[ar.category].is_expanded
                    const should_show_item = idxb < 3 || category_is_expanded
                    const can_expand = item.articles.length > 3
                    const should_show_expand = !category_is_expanded && can_expand && idxb === 3
                    const should_show_collapse =
                        category_is_expanded && can_expand && idxb === item.articles.length - 1

                    return (
                        <ListNoBullets key={ar.label}>
                            <ShowItem should_show_item={should_show_item}>
                                <StyledLink
                                    to={convertToHash(
                                        item.category.props.translate_text,
                                        ar.label,
                                        param,
                                    )}
                                >
                                    {ar.title}
                                </StyledLink>
                            </ShowItem>

                            {(should_show_expand || should_show_collapse) && (
                                <li>
                                    <StyledView onClick={() => toggleArticle(ar.category)}>
                                        {should_show_expand ? (
                                            <Localize
                                                translate_text="<0>View all questions</0>"
                                                components={[<p key={0} />]}
                                            />
                                        ) : (
                                            <Localize
                                                translate_text="<0>View fewer questions</0>"
                                                components={[<p key={0} />]}
                                            />
                                        )}
                                    </StyledView>
                                </li>
                            )}
                        </ListNoBullets>
                    )
                })}
            </ListWrapper>
        </ArticleDiv>
    )
}

export default ArticleComponent
