import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import Show from 'components/containers/show'
import { Header, Image } from 'components/elements'
import { localize, Localize } from 'components/localization'

const Wrapper = styled.section`
    width: 100%;
    height: 19rem;
    background-color: var(--color-grey-8);
    padding: 5.6rem 12.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const StyledText = styled(Text)`
    margin-bottom: ${props => props.marginBttom || '0.8rem'};
    color: ${props => props.color || 'var(--color-black-3)'};
`

export const Affiliates = () => {
    return (
        <Show.Desktop>
            <Wrapper>
                <Content>
                    <StyledHeader as="h3" color="--color-black-3" align="center">
                        {localize('Public Relations')}
                    </StyledHeader>
                    <StyledText secondary weight="bold" color="var(--color-red)">
                        {localize('publicrelations@deriv.com')}
                    </StyledText>
                </Content>
                <Content>
                    <StyledHeader as="h3" color="--color-black-3" align="center">
                        {localize('Affiliates')}
                    </StyledHeader>
                    <StyledText secondary weight="bold" color="var(--color-red)">
                        {localize('affiliates@deriv.com')}
                    </StyledText>
                </Content>
                <Content>
                    <StyledHeader as="h3" color="--color-black-3" align="center">
                        {localize('Business development')}
                    </StyledHeader>
                    <StyledText secondary weight="bold" color="var(--color-red)">
                        {localize('businessdev@deriv.com')}
                    </StyledText>
                </Content>
            </Wrapper>
        </Show.Desktop>
    )
}
