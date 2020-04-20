import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SEO, Box } from 'components/containers'
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

const ImageSection = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`
const PageNotFoundContainerInfo = styled.div`
    width: 50%;

    * {
        margin: 1.6rem 0;
    }
`
const PageNotFoundContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16rem 0;
`
const ButtonWrapper = styled.div`
    margin-top: 2.6rem;
`

const PageNotFound = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO
                title={localize('404 - Page not found')}
                description={localize('The page you are looking for does not exist.')}
            />
            <PageNotFoundContainer>
                <ImageSection width="50%">
                    <QueryImage
                        data={data['page_not_found']}
                        alt={localize('Page not found')}
                        width="59.4rem"
                        height="48rem"
                    />
                </ImageSection>
                <PageNotFoundContainerInfo>
                    <Header as="h3">{localize("This channel doesn't work")}</Header>
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
}

export default WithIntl()(PageNotFound)
