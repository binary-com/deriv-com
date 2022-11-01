import React, { memo, useContext } from 'react'
import styled from 'styled-components'
import { ArticlesDataType } from '../data/_data-types'
import SideTab from './_side-tab'
import AnswerCard from './_answer-card'
import { Community, DidntFindYourAnswerBanner } from './_lazy-load'
import Layout from 'components/layout/layout'
import { Localize, localize } from 'components/localization'
import { StyledLink } from 'components/elements'
import { Container, SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { DerivStore } from 'store'

type QuestionsType = {
    data: ArticlesDataType
}

const ContactContainer = styled.div`
    margin-top: 8rem;
`

const Questions = ({ data }: QuestionsType) => {
    const { is_eu_country } = useContext(DerivStore)
    const { platform, has_platform } = usePlatformQueryParam()
    const { articles, category } = data
    const untranslate_category = category.substring(3, category.length - 3)

    const filtered_articles = is_eu_country
        ? articles.filter((article) => !article.hide_for_eu)
        : articles.filter((article) => !article.hide_for_non_eu)

    return (
        <Layout>
            <SEO
                title={localize(
                    `_t_Help centre | Frequently asked questions | ${untranslate_category} | Deriv_t_`,
                )}
                description={localize(`_t_Frequently asked questions - ${untranslate_category}_t_`)}
            />
            <Container align="left" justify="flex-start" direction="column">
                <StyledLink
                    to={has_platform ? `/help-centre/?platform=${platform}` : '/help-centre/'}
                    has_arrow="true"
                    color="black"
                    size="var(--text-size-s)"
                    weight="bold"
                    arrow_margin="1rem"
                    margin="4rem 0 0"
                >
                    <Localize translate_text="_t_Back_t_" />
                </StyledLink>

                <SideTab data={filtered_articles} tab_header={category}>
                    {filtered_articles.map(({ label, question, answer, renderProp }) => (
                        <AnswerCard
                            key={label}
                            question={question}
                            answer={answer}
                            label={label}
                            renderProp={renderProp}
                        />
                    ))}
                </SideTab>
            </Container>

            {/* contacts */}
            <ContactContainer>
                <Community />
                <DidntFindYourAnswerBanner />
            </ContactContainer>
        </Layout>
    )
}

export default memo(Questions)
