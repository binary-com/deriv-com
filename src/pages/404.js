import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { isBrowser } from 'common/utility'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header, Text, QueryImage } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import { LinkButton } from 'components/form'

const query = graphql`
    query {
        page_not_found: file(relativePath: { eq: "page-not-found.png" }) {
            ...fadeIn
        }
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 59.4rem;
`
const PageNotFoundContainerInfo = styled.div`
    margin-left: 2.4rem;

    * {
        margin: 1.6rem 0;
    }
`
const PageNotFoundContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16rem 0;
    flex-wrap: wrap;
`
const ButtonWrapper = styled.div`
    margin-top: 2.6rem;
`

const PageNotFound = () => {
    const data = useStaticQuery(query)
    return (
        isBrowser() && (
            <Layout>
                <SEO
                    title={localize('404 - Page not found | Deriv')}
                    description={localize('The page you are looking for does not exist.')}
                />
                <PageNotFoundContainer>
                    <ImageWrapper>
                        <QueryImage
                            data={data['page_not_found']}
                            alt={localize('Page not found')}
                        />
                    </ImageWrapper>

                    <PageNotFoundContainerInfo>
                        <Header as="h3" type="sub-section-title">
                            {localize("This channel doesn't work")}
                        </Header>
                        <Text>
                            {localize(
                                'You may have followed a broken link, or the page has moved to a new address.',
                            )}
                        </Text>
                        <Text>{localize('Error code: 404 page not found')}</Text>
                        <ButtonWrapper>
                            <LinkButton secondary="true" to="/">
                                {localize('Go to the homepage')}
                            </LinkButton>
                        </ButtonWrapper>
                    </PageNotFoundContainerInfo>
                </PageNotFoundContainer>
            </Layout>
        )
    )
}

export default WithIntl()(PageNotFound)
