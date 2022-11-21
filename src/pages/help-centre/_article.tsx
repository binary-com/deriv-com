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
import { useIsRtl } from 'components/hooks/use-isrtl'
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

const BackArrowStyle = styled(StyledLink)`
    @media ${device.mobileL} {
        border-bottom: 1px solid var(--color-grey-8);
        padding-bottom: 1.6rem;
        font-size: var(--text-size-sm) !important;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
const TabWrapper = styled.div`
    width: 100%;
    margin-top: 8rem;

    @media ${device.mobileL} {
        margin-top: 4rem;
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
    const is_rtl = useIsRtl()
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
                <BackArrowStyle
                    to={has_platform ? `/help-centre/?platform=${platform}` : '/help-centre/'}
                    has_arrow="true"
                    color="black"
                    is_rtl={is_rtl}
                    size="var(--text-size-s)"
                    weight="bold"
                    arrow_margin="1rem"
                    margin="4rem 0 0"
                >
                    {localize('Back')}
                </BackArrowStyle>
            </Container>
            <Container align="left" justify="flex-start" direction="column">
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
