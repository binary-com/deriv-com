import React, { useState } from 'react'
import styled from 'styled-components'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import PropTypes from 'prop-types'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { Header, SideTab } from 'components/elements'

const HeaderSection = styled.section`
    width: 100%;
    height: 32.1rem;
    padding: 3.5rem 12.6rem 4rem 12.6rem;
    border-bottom: 1px solid var(--color-grey-7);
`
const ArticleSection = styled.div`
    padding: 4rem 18.3rem 10.3rem 14.7rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const TabWrapper = styled.div`
    width: 100%;
`
const StyledHeader = styled(Header)`
    margin-top: 7.9rem;
`
export const Article = ({ children }) => {
    const [activeTabTitle, setactiveTabTitle] = useState('')

    function getTitle(tab) {
        setactiveTabTitle(tab.props.text)
    }
    return (
        <Layout>
            <HeaderSection>
                <StyledHeader as="h1">{localize(activeTabTitle)}</StyledHeader>
            </HeaderSection>
            <Breadcrumb
                location={window.location}
                crumbLabel="Back"
                crumbStyle={{ color: '#333333' }}
                crumbActiveStyle={{ color: 'black' }}
                crumbSeparator=" < "
            />
            <ArticleSection>
                <TabWrapper>
                    <SideTab onTabChange={getTitle}>{children}</SideTab>
                </TabWrapper>
            </ArticleSection>
        </Layout>
    )
}

Article.propTypes = {
    children: PropTypes.node,
}
