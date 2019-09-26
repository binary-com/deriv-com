import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import device from 'themes/device.js'
import Show from 'components/containers/show'
import { Header, Text } from 'components/elements/typography.js'
import Button from 'components/form/button'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-1);
    @media ${device.tabletL} {
        padding: 4rem 0 0 0;
    }
`
const Content = styled.div`
    width: 100%;
    max-width: 50.2rem;
    text-align: center;
    @media ${device.tabletL} {
        text-align: left;
    }

    ${Text} {
        margin-top: 2rem;
        @media ${device.tabletL} {
            font-size: 2rem;
            font-weight: bold;
            text-align: left;
        }
    }
`
const StyledButton = styled(Button)`
    margin-top: 2rem;
    ${props =>
        props.demo
            ? `    background-color: var(--color-grey-1);
    border-color: var(--color-grey-5);`
            : ''}
`
const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: left;
    }
`
const StyledContent = styled(Content)`
    @media ${device.tabletL} {
        box-shadow: inset 0 1px 0 0 var(--color-grey-2);
        padding: 3.56rem 0;
        margin-top: 3.56rem;
    }
`
const Experience = () => {
    return (
        <StyledSection padding="4rem 0">
            <StyledContainer justify="space-between">
                <Content>
                    <StyledHeader as="h2" align="center">
                        {localize('20 years of experience and trust')}
                    </StyledHeader>
                    <Text align="center">
                        {localize('Join over a million traders worldwide')}
                    </Text>
                    <StyledButton secondary>
                        {localize('Try for free')}
                    </StyledButton>
                </Content>
                <StyledContent>
                    <StyledHeader as="h2" align="center">
                        {localize('New to trading?')}
                    </StyledHeader>
                    <Show.Mobile>
                        <Text align="center">
                            {localize('Start trading on DTrader now.')}
                        </Text>
                    </Show.Mobile>
                    <Show.Desktop>
                        <Text align="center">
                            {localize('Check out our live demo')}
                        </Text>
                    </Show.Desktop>
                    <StyledButton demo>
                        {localize('Go to live demo')}
                    </StyledButton>
                </StyledContent>
            </StyledContainer>
        </StyledSection>
    )
}

export default Experience
