import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { ArcticlesType } from './_help-articles'
import { DerivStore } from 'store'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { Text } from 'components/elements'
import device from 'themes/device'

type StyledProps = {
    wrap?: string
    show?: boolean
    has_transition?: boolean
    align?: string
    direction?: string
}

const ArticleComponent = Loadable(() => import('./_article-component'))

const ArticleSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0 8rem;
    width: 100%;

    @media ${device.tabletL} {
        flex-wrap: wrap;
        padding: 0 0 8rem;
    }
`

const RowDiv = styled.div<StyledProps>`
    display: flex;
    flex-wrap: wrap;

    @media ${device.tabletS} {
        flex-direction: column;
    }
`

const SectionName = styled(Text)`
    font-size: var(--text-size-l);
    color: var(--color-grey-5);
    margin: 2rem 0 0 1rem;

    @media ${device.tablet} {
        color: var(--color-black-3);
        font-size: 24px;
        font-weight: bold;
        margin: 32px auto 0;
    }
`

const HorizontalLine = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--color-grey-2);
    margin: 1em 0;
    padding: 0;
`

type ArticleSectionComponentProps = {
    section_name: string
    articles: ArcticlesType[]
    data: {
        search: string
        toggle_search: boolean
        search_has_transition: boolean
        all_categories: React.ReactNode
        all_articles: ArcticlesType[]
    }
    toggleArticle: (category: string) => void
}

const ArticleSectionComponent = ({
    section_name,
    articles,
    data,
    toggleArticle,
}: ArticleSectionComponentProps) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const { platform } = usePlatformQueryParam()

    return (
        <ArticleSection>
            <SectionName>{section_name}</SectionName>
            <HorizontalLine />
            <RowDiv>
                {articles.map((item, idx) => {
                    if (
                        is_eu_country &&
                        (item.category.props.translate_text === 'Deriv X' ||
                            item.category.props.translate_text === 'Deriv P2P')
                    ) {
                        return <React.Fragment key={idx}></React.Fragment>
                    }

                    return (
                        <ArticleComponent
                            key={idx}
                            idx={idx}
                            item={item}
                            all_categories={data.all_categories}
                            toggleArticle={toggleArticle}
                            is_eu_country={is_eu_country}
                            param={platform}
                        />
                    )
                })}
            </RowDiv>
        </ArticleSection>
    )
}

export default ArticleSectionComponent
