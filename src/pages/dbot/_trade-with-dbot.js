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

const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        font-size: 3.6rem;
    }
`

const StyledSection = styled.section`
    background-color: var(--color-grey-1);
    width: 100%;
    padding: 4rem 0;
`

const handleExternalLink = (is_bot = false) => {
    window.open(is_bot ? deriv_bot_app_url : deriv_app_url, '_blank')
}

export const TradeWithDbot = () => {
    return (
        <StyledSection>
            <FlexGridContainer align-items="center" gap="0" grid="2" content_width="49%">
                <StyledDiv>
                    <StyledHeader font_size="4.8rem" align="center" lh="6rem">
                        {localize('Trade more efficiently with DBot')}
                    </StyledHeader>
                    <StyledButton
                        secondary
                        onClick={() => handleExternalLink(true)}
                    >
                        {localize('Start building')}
                    </StyledButton>
                </StyledDiv>
                <StyledDiv>
                    <StyledHeader font_size="4.8rem" align="center" lh="6rem">
                        {localize('New to trading?')}
                    </StyledHeader>
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
