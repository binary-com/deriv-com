import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Localize, localize } from 'components/localization'
import { SectionContainer, Container } from 'components/containers'
import StepperView from 'components/custom/_stepper_view'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    query {
        sign_up: file(relativePath: { eq: "deriv-go/create-account.png" }) {
            ...fadeIn
        }
        fund: file(relativePath: { eq: "deriv-go/fund-account.png" }) {
            ...fadeIn
        }
        trading: file(relativePath: { eq: "deriv-go/get-trading.png" }) {
            ...fadeIn
        }
    }
`

const SmallContainer = styled(Container)`
    width: 100%;
    margin: 0 auto;
    @media ${device.tabletL} {
        width: 90%;
        padding: 0;
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-black-9);

    @media ${device.mobileL} {
        font-size: 32px;
        padding: 0;
    }
    @media ${device.mobileM} {
        padding: 0;
    }
`

const StartDerivGo = () => {
    const data = useStaticQuery(query)

    const stepsData: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: () =>
                    '_t_Sign in to your Deriv account. If you don’t have one, sign up for free; then create a Deriv real account._t_',
                image: () => <QueryImage data={data['sign_up']} alt={localize('_t_Sign in_t_')} />,
            },
            {
                title: () =>
                    '_t_Fund your Deriv real account with your preferred payment method._t_',
                image: () => (
                    <QueryImage data={data['fund']} alt={localize('_t_Fund your Deriv_t_')} />
                ),
            },
            {
                title: () => '_t_Download the app and trade anytime, anywhere._t_',
                image: () => (
                    <QueryImage data={data['trading']} alt={localize('_t_Download the app_t_')} />
                ),
            },
        ],
        [data],
    )

    return (
        <SectionContainer tabletL={{ height: 'fit-content', p: '40px 0 0' }}>
            <SmallContainer direction="column">
                <StyledHeader as="h2" type="heading-2" align="center" mb="4rem">
                    <Localize translate_text="_t_How to get started with Deriv GO_t_" />
                </StyledHeader>
                <StepperView items={stepsData} contentWidth="385px" imageWidth="286px" gap="0" />
            </SmallContainer>
        </SectionContainer>
    )
}

export default StartDerivGo
