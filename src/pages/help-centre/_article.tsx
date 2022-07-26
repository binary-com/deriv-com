import React from 'react'
import styled from 'styled-components'
import { DidntFindYourAnswerBanner } from './_didnt-find-answer'
import { Community } from './_community'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { SideTab, StyledLink } from 'components/elements'
import { Container, SEO } from 'components/containers'
import device from 'themes/device'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
export type ArticleProps = {
    children?: React.ReactNode
    header?: string
    title?: string
    description?: string
    text?: string
    label?: string
    is_mounted?: boolean
    has_note?: string
}

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
const TabWrapper = styled.div`
    width: 100%;
    margin-top: 8rem;

    @media ${device.tabletL} {
        margin-top: 0;
    }
`
const ContactContainer = styled.div`
    margin-top: 8rem;
`
export const Article = ({
    children,
    header = '',
    title = '',
    description = '',
    text = '',
    label = '',
    is_mounted = false,
}: ArticleProps) => {
    const { platform, has_platform } = usePlatformQueryParam()

    return (
        <Layout>
            <SEO
                title={title}
                description={description}
                text={text}
                label={label}
                is_mounted={is_mounted}
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
                    {localize('Back')}
                </StyledLink>
                <Content>
                    <TabWrapper>
                        <SideTab
                            line_height="1.5"
                            opacity="0.72"
                            size="var(--text-size-s)"
                            tab_header={header}
                        >
                            {children}
                        </SideTab>
                    </TabWrapper>
                </Content>
            </Container>

            <ContactContainer>
                <Community />
                <DidntFindYourAnswerBanner />
            </ContactContainer>
        </Layout>
    )
}
