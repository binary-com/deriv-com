import React from 'react'
import styled from 'styled-components'
import { TQuestionsData } from '../data/_data-types'
import { useFilteredQuestions } from '../data/_hooks'
import { getUntranslatedCategory } from './_utility'
import SideTab from './_side-tab'
import AnswerCard from './_answer-card'
import { Community, DidntFindYourAnswerBanner } from './_lazy-load'
import Layout from 'components/layout/layout'
import { Localize, localize } from 'components/localization'
import { Container, SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { routeBack } from 'common/utility'

type TQuestionsTemplate = {
    data: TQuestionsData
}

const ContactContainer = styled.div`
    margin-top: 8rem;
`
const StyledBackButton = styled.button<{ is_rtl: boolean }>`
    font-size: var(--text-size-s);
    font-weight: bold;
    margin: 4rem 0 0;
    color: black;
    background: transparent;
    border: none;
    outline: none;
    position: relative;
    cursor: pointer;
    padding: 0;

    &::before {
        content: url("data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16' width='16' viewBox='0 0 16 16'><path fill='black' fill-rule='evenodd' d='M6.176 8l4.694 5.164a.5.5 0 1 1-.74.672l-5-5.5a.5.5 0 0 1 0-.672l5-5.5a.5.5 0 1 1 .74.672L6.176 8z'/></svg>");
        vertical-align: middle;
        display: inline-block;
        margin-right: 1rem;
        font-weight: 300;
        text-decoration: none;
        transform: ${({ is_rtl }) => {
            return is_rtl ? 'scaleX(-1)' : null
        }};
        position: relative;
        top: 2px;
    }
    &:hover {
        text-decoration: underline;
        color: var(--color-red);
    }
`
const QuestionsTemplate = ({ data }: TQuestionsTemplate) => {
    const is_rtl = useIsRtl()
    const { questions, category } = data
    const untranslate_category = getUntranslatedCategory(category)
    const filtered_questions = useFilteredQuestions(questions)
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <Layout>
            <SEO
                title={localize(
                    `Help centre | Frequently asked questions | ${untranslate_category} | Deriv`,
                )}
                description={localize(`Frequently asked questions - ${untranslate_category}`)}
            />
            <Container align="start" justify="flex-start" direction="column">
                <StyledBackButton is_rtl={is_rtl} onClick={routeBack}>
                    <Localize translate_text="Back" />
                </StyledBackButton>

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

            <ContactContainer>
                <Community />
                {!is_deriv_go && <DidntFindYourAnswerBanner />}
            </ContactContainer>
        </Layout>
    )
}

export default QuestionsTemplate
