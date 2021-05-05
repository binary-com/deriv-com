import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DidntFindYourAnswerBanner } from './_didnt-find-answer'
import { Community } from './_community'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { SideTab, StyledLink } from 'components/elements'
import { Container, SEO } from 'components/containers'
import device from 'themes/device'

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
export const Article = ({ children, header, title, description }) => {
    return (
        <Layout>
            <SEO title={title} description={description} />
            <Container align="left" justify="flex-start" direction="column">
                <StyledLink
                    to="/help-centre/"
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

Article.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    header: PropTypes.string,
    title: PropTypes.string,
}
