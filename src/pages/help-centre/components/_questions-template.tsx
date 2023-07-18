import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TQuestionsData } from '../data/_data-types'
import { useFilteredQuestions } from '../data/_hooks'
import { getUntranslatedCategory } from './_utility'
import SideTab from './_side-tab'
import AnswerCard from './_answer-card'
import { Community, DidntFindYourAnswerBanner } from './_lazy-load'
import Layout from 'components/layout/layout'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { StyledLink } from 'components/elements'
import { Container, SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { useIsRtl } from 'components/hooks/use-isrtl'

type TQuestionsTemplate = {
    data: TQuestionsData
}

const ContactContainer = styled.div`
    margin-top: 8rem;
`

const QuestionsTemplate = ({ data }: TQuestionsTemplate) => {
    const { platform, has_platform } = usePlatformQueryParam()
    const is_rtl = useIsRtl()
    const { questions, category } = data
    const untranslate_category = getUntranslatedCategory(category)
    const filtered_questions = useFilteredQuestions(questions)
    const { is_deriv_go } = usePlatformQueryParam()
    const { is_eu } = useRegion()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <SEO
                title={`_t_Help centre | Frequently asked questions | ${untranslate_category} | Deriv_t_`}
                description={`_t_Frequently asked questions - ${untranslate_category}_t_`}
            />
            <Container align="start" justify="flex-start" direction="column">
                <StyledLink
                    to={has_platform ? `/help-centre/?platform=${platform}` : '/help-centre/'}
                    has_arrow="true"
                    color="black"
                    is_rtl={is_rtl}
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
                            answer={typeof answer == 'function' ? answer({ is_eu }) : answer}
                            label={label}
                            renderProp={renderProp}
                        />
                    ))}
                </SideTab>
            </Container>

            <ContactContainer>
                <Community />
                {!is_deriv_go && <DidntFindYourAnswerBanner />}
            </ContactContainer>
        </Layout>
    )
}

export default QuestionsTemplate
