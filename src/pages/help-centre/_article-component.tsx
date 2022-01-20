import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { convertToHash } from './_utility'
import { Header, Text } from 'components/elements'
import { LocalizedLink, Localize } from 'components/localization'
import device from 'themes/device'

type IItems = {
    translate_text: string
    is_expanded: boolean
}

type IProps = {
    props: IItems
    translate_text: string
    is_expanded: boolean
    is_eu_country?: boolean
}

export type PropsType = IItems & IProps

type ArticlesProps = {
    category: string
    label: string
    title: PropsType
    title_eu: boolean
    label_eu: boolean
}[]

type ItemProps = {
    category: PropsType
    articles: ArticlesProps
}

type ArticleComponentProps = {
    idx: number
    id: number
    item: ItemProps
    all_categories: PropsType
    is_eu_country: boolean
}

const ArticleDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Platforms = styled(Text)`
    font-size: var(--text-size-s);
    color: var(--color-grey-5);
    margin: 4rem 0 -3.2rem;

    @media ${device.tablet} {
        color: var(--color-black-3);
        font-size: 24px;
        font-weight: bold;
        margin: 32px auto -32px;
    }
`
const ListWrapper = styled.div`
    margin-right: 2.4rem;
    max-width: 38.4rem;
    width: 38.4rem;
    line-height: 1.5;

    @media ${device.laptopL} {
        max-width: auto;
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
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`

type StyledProps = {
    should_show_item?: boolean
}

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

const HeaderPlatforms = styled.div`
    margin: 6.2rem 0 -3.2rem;

    @media ${device.tablet} {
        margin: 32px auto -32px;
    }
`

const ArticleComponent = ({
    idx,
    id,
    item,
    all_categories,
    is_eu_country,
}: ArticleComponentProps) => {
    const [current_categories, setCurrentCategories] = useState(all_categories)

    const toggleArticle = (category) => {
        if (current_categories[category]) {
            const categories = { ...current_categories }
            categories[category].is_expanded = !categories[category].is_expanded
            setCurrentCategories(categories)
        }
    }

    return (
        <ArticleDiv key={idx}>
            {id === 1 && idx == 0 && <Platforms>Platforms</Platforms>}
            {id === 1 && idx !== 0 && <HeaderPlatforms />}

            <ListWrapper>
                <StyledHeader type="section-title">{item.category}</StyledHeader>
                {item.articles.map((ar, idxb) => {
                    const category_is_expanded =
                        ar.category in all_categories && all_categories[ar.category].is_expanded
                    const should_show_item = idxb < 3 || category_is_expanded
                    const can_expand = item.articles.length > 3
                    const should_show_expand = !category_is_expanded && can_expand && idxb === 3
                    const should_show_collapse =
                        category_is_expanded && can_expand && idxb === item.articles.length - 1
                    const title_type = is_eu_country && ar.title_eu ? ar.title_eu : ar.title

                    const label_type = is_eu_country && ar.label_eu ? ar.label_eu : ar.label

                    return (
                        <ListNoBullets key={idxb}>
                            <ShowItem should_show_item={should_show_item}>
                                <StyledLink
                                    to={convertToHash(
                                        item.category.props.translate_text,
                                        label_type,
                                    )}
                                >
                                    {title_type}
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
