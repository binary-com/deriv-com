import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import { Text } from 'components/elements'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    margin-top: 210px;
`

const Content = styled.div`
    line-height: 1.5;
    margin: 98px 222px 10px 370px;

    ${Text} {
        text-align: center;
        width: 996px;
        height: 72px;
        font-size: 24px;
        color: #333333;
    }
`

const BetaVersion = () => {
    return (
        <StyledSection>
            <Content>
                <Text>
                    <Localize translate_text="The beta version of our mobile app is now available. Trade mulipliers on forex and synthetic indeces, and get the best deriv experience optimised for mobile:" />
                </Text>
            </Content>
        </StyledSection>
    )
}

export default BetaVersion
