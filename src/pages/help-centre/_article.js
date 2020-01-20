import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { Header, SideTab, StyledLink } from 'components/elements'
import { Container } from 'components/containers'

const HeaderSection = styled.section`
    padding: 12.8rem 0 8rem 0;
    border-bottom: 1px solid var(--color-grey-7);
    margin-bottom: 4rem;
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8rem 0;
    width: 100%;
`
const TabWrapper = styled.div`
    width: 100%;
`

export const Article = ({ children }) => {
    const [activeTabTitle, setactiveTabTitle] = useState('')

    function getTitle(tab) {
        setactiveTabTitle(tab.props.text)
    }
    return (
        <Layout>
            <Container align="left" justify="flex-start" direction="column">
                <HeaderSection>
                    <Header as="h1">{localize(activeTabTitle)}</Header>
                </HeaderSection>
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
                        <Header font_size="3.6rem">{localize('Account')}</Header>
                        <SideTab has_hash_routing onTabChange={getTitle}>{children}</SideTab>
                    </TabWrapper>
                </Content>
            </Container>
        </Layout>
    )
}

Article.propTypes = {
    children: PropTypes.node,
}
