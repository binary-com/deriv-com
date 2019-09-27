import React from 'react'
import styled from 'styled-components'
import Button from 'components/form/button.js'
import { FlexGridContainer } from 'components/containers/container'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'
import { deriv_app_url, deriv_bot_app_url } from 'common/utility'
import device from 'themes/device'

const StyledButton = styled(Button)`
    margin-top: 2rem;
    ${props =>
        props.demo
            ? `    background-color: var(--color-grey-1);
    border-color: var(--color-grey-5);`
            : ''}
`

const StyledDiv = styled.div`
    text-align: center;

    button {
        margin-top: 3.2rem;
    }

    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledSection = styled.section`
    background-color: var(--color-grey-1);
    width: 100%;
    padding: 2.4rem 0;
`

const handleExternalLink = (is_bot = false) => {
    window.open(is_bot ? deriv_bot_app_url : deriv_app_url, '_blank')
}

export const TradeWithDbot = () => {
    return (
        <StyledSection>
            <FlexGridContainer align-items="center" gap="1rem" grid="2">
                <StyledDiv>
                    <Header font_size="4rem" align="center" lh="5rem">
                        {localize('Trade more efficiently with DBot')}
                    </Header>
                    <StyledButton
                        secondary
                        onClick={() => handleExternalLink(true)}
                    >
                        {localize('Start building')}
                    </StyledButton>
                </StyledDiv>
                <StyledDiv>
                    <Header font_size="4rem" align="center" lh="5rem">
                        {localize('New to trading?')}
                    </Header>
                    <Text align="center">
                        {localize('Check out our live demo')}
                    </Text>
                    <StyledButton
                        demo
                        onClick={() => handleExternalLink(false)}
                    >
                        {localize('Go to live demo')}
                    </StyledButton>
                </StyledDiv>
            </FlexGridContainer>
        </StyledSection>
    )
}
