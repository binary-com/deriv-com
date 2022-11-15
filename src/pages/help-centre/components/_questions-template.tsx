import React, { memo } from 'react'
import styled from 'styled-components'
import { TQuestionsData } from '../data/_data-types'
import useFilteredQuestions from '../data/_use-filtered-questions'
import { getUntranslatedCategory } from "./_utility"
import SideTab from './_side-tab'
import AnswerCard from './_answer-card'
import { Community, DidntFindYourAnswerBanner } from './_lazy-load'
import Layout from 'components/layout/layout'
import { Localize, localize } from 'components/localization'
import { StyledLink } from 'components/elements'
import { Container, SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

type TQuestionsTemplate = {
    data: TQuestionsData
}

const ContactContainer = styled.div`
    margin-top: 8rem;
`

const QuestionsTemplate = ({ data }: TQuestionsTemplate) => {
    const { platform, has_platform } = usePlatformQueryParam()
    const { questions, category } = data
    const untranslate_category = getUntranslatedCategory(category)
    const filtered_questions = useFilteredQuestions(questions)

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

                <SideTab data={filtered_questions} tab_header={category}>
                    {filtered_questions.map(({ label, question, answer, renderProp }) => (
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

export default memo(QuestionsTemplate)
