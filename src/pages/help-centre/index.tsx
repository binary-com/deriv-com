import React from 'react'
import QuestionsSection from './components/_questions-section'
import SearchSection from './components/_search-section'
import FaqSchema from './components/_faq-schema'
import { DidntFindYourAnswerBanner, Community } from './components/_lazy-load'
import { PLATFORMS, GENERAL, getQuestionsBySection } from './components/_utility'
import { SEO, Desktop, Container } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

const HelpCentre = () => {
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <Layout>
            <SEO
                title={localize('_t_Help centre | Frequently asked questions | Deriv_t_')}
                description={localize(
                    '_t_Need help? Have questions about Deriv services and online trading platforms? Read our FAQ or ask us a question._t_',
                )}
            />
            <FaqSchema />
            <SearchSection />

            <Container align="left" justify="flex-start" direction="column">
                <QuestionsSection data={getQuestionsBySection(GENERAL)} section_name={GENERAL} />
                <QuestionsSection
                    data={getQuestionsBySection(PLATFORMS)}
                    section_name={PLATFORMS}
                />
            </Container>

            <Desktop breakpoint="tabletL">
                <Community />
            </Desktop>
            {!is_deriv_go && <DidntFindYourAnswerBanner />}
        </Layout>
    )
}

export default WithIntl()(HelpCentre)
