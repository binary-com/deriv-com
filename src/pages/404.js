import React from 'react'
import styled from 'styled-components'
import { SEO, Wrapper } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header, Text, Image } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import { LinkButton } from 'components/form'

const ImageSection = styled(Wrapper)`
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
const PageNotFound = () => (
    <Layout>
        <SEO title={localize('404: Not found')} />
        <PageNotFoundContainer>
            <ImageSection width="50%">
                <Image
                    img_name="page-not-found.png"
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
                    <LinkButton secondary to="/">
                        {localize('Go to the homepage')}
                    </LinkButton>
                </ButtonWrapper>
            </PageNotFoundContainerInfo>
        </PageNotFoundContainer>
    </Layout>
)

export default WithIntl()(PageNotFound)
