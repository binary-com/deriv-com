import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements/typography'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const Wrapper = styled.section`
    width: 100%;
    height: 19rem;
    background-color: var(--color-grey-8);
    padding: 5.6rem 12.8rem;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;

    @media ${device.tabletL} {
        flex-wrap: wrap;
        height: auto;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const StyledText = styled(Text)`
    margin-bottom: ${props => props.marginBttom || '0.8rem'};

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Affiliates = () => {
    return (
        <Wrapper>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Public Relations')}
                </StyledHeader>
                <StyledText secondary weight="bold" color="red">
                    {localize('pr@deriv.com')}
                </StyledText>
            </Content>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Affiliates')}
                </StyledHeader>
                <StyledText secondary weight="bold" color="red">
                    {localize('affiliates@deriv.com')}
                </StyledText>
            </Content>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Business development')}
                </StyledHeader>
                <StyledText secondary weight="bold" color="red">
                    {localize('marketing@deriv.com')}
                </StyledText>
            </Content>
        </Wrapper>
    )
}
