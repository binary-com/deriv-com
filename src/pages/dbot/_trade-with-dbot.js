import React from 'react'
import styled from 'styled-components'
import Button from 'components/form/button.js'
import { FlexGridContainer } from 'components/containers/container'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'

const StyledDiv = styled.div`
    text-align: center;

    button {
        margin-top: 3.2rem;
    }
`

const StyledSection = styled.section`
    background-color: var(--color-grey-1);
    width: 100%;
    padding: 2.4rem 0;
`

export const TradeWithDbot = () => {
    return (
        <StyledSection>
            <FlexGridContainer align-items="center" gap="1rem" grid="2">
                <StyledDiv>
                    <Header font_size="4rem" align="center" lh="5rem">
                        {localize('Trade more efficiently with DBot')}
                    </Header>
                    <Button secondary>{localize('Start building')}</Button>
                </StyledDiv>
                <StyledDiv>
                    <Header font_size="4rem" align="center" lh="5rem">
                        {localize('New to trading?')}
                    </Header>
                    <Text align="center">
                        {localize('Check out our live demo')}
                    </Text>
                    <Button primary>{localize('Go to live demo')}</Button>
                </StyledDiv>
            </FlexGridContainer>
        </StyledSection>
    )
}
