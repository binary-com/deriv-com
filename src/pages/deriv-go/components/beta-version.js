import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import { Text } from 'components/elements'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    width: 100vw;
`

const Content = styled.div`
    width: 100%;
    max-width: 78rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px 230px 80px;

    ${Text} {
        width: 996px;
        height: 72px;
        font-size: 24px;
        color: #333333;
    }
`

const BetaVersion = () => {
    return (
        <StyledSection>
            <Content ml="222px">
                <Text>
                    <Localize translate_text="The beta version of our mobile app is now available. Trade mulipliers on forex and synthetic indeces, and get the best deriv experience optimised for mobile:" />
                </Text>
            </Content>
        </StyledSection>
    )
}

export default BetaVersion
