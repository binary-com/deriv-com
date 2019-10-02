import React from 'react'
import styled from 'styled-components'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { Header, Text } from 'components/elements/typography'
import { localize, WithIntl, LocalizedLink } from 'components/localization'
import Wrapper from 'components/containers/wrapper'
import Image from 'components/elements/image'

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
    margin: 16rem 0;
`
const StyledButton = styled(LocalizedLink)`
    border-radius: 6px;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    transition: all 0.25s;
    font-weight: bold;
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);
    text-decoration: none;

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }

    &:focus,
    &:active {
        outline: none;
    }
    &:active {
        transform: scale(0.95);
    }
`
const ButtonWrappwr = styled.div`
    margin-top: 2.6rem;
`
const PageNotFound = () => (
    <Layout>
        <SEO title={localize('404: Not found')} />
        <PageNotFoundContainer>
            <ImageSection width="50%">
                <Image
                    img_name="page-not-found.png"
                    alt="Page not found"
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
                <ButtonWrappwr>
                    <StyledButton to="/">
                        {localize('Go to the homepage')}
                    </StyledButton>
                </ButtonWrappwr>
            </PageNotFoundContainerInfo>
        </PageNotFoundContainer>
    </Layout>
)

export default WithIntl()(PageNotFound)
