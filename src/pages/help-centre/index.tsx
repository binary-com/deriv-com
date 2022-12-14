import React from 'react'
import QuestionsSection from './components/_questions-section'
import SearchSection from './components/_search-section'
import FaqSchema from './components/_faq-schema'
import { DidntFindYourAnswerBanner, Community } from './components/_lazy-load'
import { getQuestionsBySection } from './components/_utility'
import { PLATFORMS, GENERAL } from './components/_constants'
import { SEO, Desktop, Container } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { DerivStore } from 'store'

const HelpCentre = () => {
    const { is_deriv_go } = usePlatformQueryParam()
    const { is_p2p_allowed_country } = React.useContext(DerivStore)
    const general_questions = getQuestionsBySection(GENERAL)
    const platforms_questions = getQuestionsBySection(PLATFORMS).filter((item) => {
        return !is_p2p_allowed_country ? !item.category.includes('_t_Deriv P2P_t_') : item
    })

    return (
        <Layout>
            <SEO
                title={localize('Help centre | Frequently asked questions | Deriv')}
                description={localize(
                    'Need help? Have questions about Deriv services and online trading platforms? Read our FAQ or ask us a question.',
                )}
            />
            <FaqSchema />
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
