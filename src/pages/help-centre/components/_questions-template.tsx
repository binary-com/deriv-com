import React, { memo } from 'react'
import styled from 'styled-components'
import SideTab, { TChildren } from '../side-tab'
import { Community, DidntFindYourAnswerBanner } from '../_lazy-load'
import { ArticlesType } from './_data'
import Layout from 'components/layout/layout'
import { Localize, localize } from 'components/localization'
import { StyledLink } from 'components/elements'
import { Container, SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { TString } from 'types/generics'

type QuestionsTemplateType = Record<'seo_title' | 'seo_description' | 'tab_header', TString> & {
    data: ArticlesType
    children: TChildren
}

const ContactContainer = styled.div`
    margin-top: 8rem;
`

const QuestionsTemplate = ({
    children,
    seo_title,
    seo_description,
    tab_header,
    data,
}: QuestionsTemplateType) => {
    const { platform, has_platform } = usePlatformQueryParam()

    return (
        <Layout>
            <SEO title={localize(seo_title)} description={localize(seo_description)} />
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

                <SideTab data={data} tab_header={tab_header}>
                    {children}
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
