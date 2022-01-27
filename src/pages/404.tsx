import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { isBrowser } from 'common/utility'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header, QueryImage } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import { LinkButton } from 'components/form'

const query = graphql`
    query {
        page_not_found: file(relativePath: { eq: "image-not-available.png" }) {
            ...fadeIn
        }
    }
`

const PageNotFoundContainerInfo = styled.div`
    margin: 16px;

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
    flex-direction: column;
`
const ButtonWrapper = styled.div`
    margin-top: 3rem;
    text-align: center;
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
                    <QueryImage
                        width="96px"
                        height="96px"
                        data={data['page_not_found']}
                        alt={localize('Page not found')}
                        loading="eager"
                    />

                    <PageNotFoundContainerInfo>
                        <Header as="h3" type="heading-3" align="center">
                            {localize('We couldn’t find that page')}
                        </Header>
                        <Header as="p" type="paragraph-1" align="center" weight="normal">
                            {localize(
                                'It may not be available in your country, or maybe a broken link has brought you here.',
                            )}
                        </Header>

                        <ButtonWrapper>
                            <LinkButton secondary="true" to="/">
                                {localize('Visit our homepage')}
                            </LinkButton>
                        </ButtonWrapper>
                    </PageNotFoundContainerInfo>
                </PageNotFoundContainer>
            </Layout>
        )
    )
}

export default WithIntl()(PageNotFound)
