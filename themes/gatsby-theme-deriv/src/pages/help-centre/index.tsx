import React from 'react'
import QuestionsSection from './components/_questions-section'
import SearchSection from './components/_search-section'
import faq_schema from './components/_faq-schema'
import { DidntFindYourAnswerBanner, Community } from './components/_lazy-load'
import { getQuestionsBySection } from './components/_utility'
import { PLATFORMS, GENERAL } from './components/_constants'
import { SEO, Desktop, Container } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { TGatsbyHead } from 'features/types'

const HelpCentre = () => {
    const { is_deriv_go } = usePlatformQueryParam()
    const general_questions = getQuestionsBySection(GENERAL)
    const platforms_questions = getQuestionsBySection(PLATFORMS)

    return (
        <Layout>
            <SearchSection />

            <Container align="start" justify="flex-start" direction="column">
                <QuestionsSection data={general_questions} section_name={`_t_${GENERAL}_t_`} />
                <QuestionsSection data={platforms_questions} section_name={`_t_${PLATFORMS}_t_`} />
            </Container>

            <Desktop breakpoint="tabletL">
                <Community />
            </Desktop>
            {!is_deriv_go && <DidntFindYourAnswerBanner />}
        </Layout>
    )
}

export default WithIntl()(HelpCentre)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deriv_t_"
        description="_t_Need help? Have questions about Deriv services and online trading platforms? Read our FAQ or ask us a question._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
