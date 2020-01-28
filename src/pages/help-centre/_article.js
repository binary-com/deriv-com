import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DidntFindYourAnswerBanner } from './_didnt-find-answer'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { Header, SideTab, StyledLink } from 'components/elements'
import { Container } from 'components/containers'

const ArticleSection = styled.section`
    padding: 12.8rem 0 8rem 0;
    margin-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-8);
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
`
const ContactContainer = styled.div`
    margin-top: 8rem;
`
export const Article = ({ children, header }) => {
    const [active_tab_title, setactiveTabTitle] = useState('')

    function setTabTitle(tab) {
        if (tab) setactiveTabTitle(tab.props.text)
    }
    return (
        <Layout>
            <ArticleSection>
                <Container align="left" justify="flex-start" direction="column">
                    <Header as="h1">{localize(active_tab_title)}</Header>
                </Container>
            </ArticleSection>
            <Container align="left" justify="flex-start" direction="column">
                <StyledLink
                    to="/help-centre/"
                    has_arrow="true"
                    color="black"
                    size="var(--text-size-s)"
                    weight="bold"
                >
                    {localize('Back')}
                </StyledLink>
                <Content>
                    <TabWrapper>
                        <SideTab has_hash_routing onTabChange={setTabTitle} tab_header={header}>
                            {children}
                        </SideTab>
                    </TabWrapper>
                </Content>
            </Container>

            <ContactContainer>
                <DidntFindYourAnswerBanner />
            </ContactContainer>
        </Layout>
    )
}

Article.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
}
