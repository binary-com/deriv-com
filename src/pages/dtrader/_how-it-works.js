import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header } from 'components/elements/typography.js'
import DtraderTabs from './_dtrader-tabs.js'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-6);
`

const StyledHeader = styled(Header)`
    margin-top: ${props => (props.as === 'h2' ? '0.8rem' : '0')};
`
const SelectYourAssetContainer = styled.div``
const FollowTheChartContainer = styled.div``
const PurchaseYourOptionContainer = styled.div``

const SelectYourAsset = () => {
    return <SelectYourAssetContainer>Asset</SelectYourAssetContainer>
}
const FollowTheChart = () => {
    return <FollowTheChartContainer>Chart</FollowTheChartContainer>
}
const PurchaseYourOption = () => {
    return <PurchaseYourOptionContainer>Follow</PurchaseYourOptionContainer>
}

const HowItWorks = () => {
    return (
        <StyledSection>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" align="center">
                    How it works
                </StyledHeader>
                <StyledHeader as="h2" align="center">
                    Make a trade in 3 easy steps
                </StyledHeader>
                <DtraderTabs>
                    <SelectYourAsset title="Select your asset" />
                    <FollowTheChart title="Follow the chart" />
                    <PurchaseYourOption title="Purchase your option" />
                </DtraderTabs>
            </Container>
        </StyledSection>
    )
}

export default HowItWorks
