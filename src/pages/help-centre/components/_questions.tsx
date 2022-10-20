import React, { memo } from 'react'
import styled from 'styled-components'
import SideTab from './_side-tab'
import DefaultAnswer from './_default-answer'
import { Community, DidntFindYourAnswerBanner } from './_lazy-load'
import useData from './use-data'
import Layout from 'components/layout/layout'
import { Localize, localize } from 'components/localization'
import { StyledLink } from 'components/elements'
import { Container, SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

type QuestionsType = {
    category: string
}

const ContactContainer = styled.div`
    margin-top: 8rem;
`

const Questions = ({ category }: QuestionsType) => {
    const data = useData(category)
    const { platform, has_platform } = usePlatformQueryParam()

    if (data) {
        const { articles } = data
        return (
            <Layout>
                <SEO
                    title={localize(
                        `_t_Help centre | Frequently asked questions | ${category} | Deriv_t_`,
                    )}
                    description={localize(`_t_Frequently asked questions - ${category}_t_`)}
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

                    <SideTab data={articles} tab_header={`_t_${category}_t_`}>
                        {articles.map(({ label, question, answer }) => (
                            <DefaultAnswer
                                key={label}
                                question={question}
                                answer={answer}
                                label={label}
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
    return <></>
}

export default memo(Questions)
