import React from 'react'
import styled from 'styled-components'
import { LinkText } from 'components/elements/typography'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const Wrapper = styled.section`
    width: 100%;
    border-top: 2px solid var(--color-grey-2);
    background-color: var(--color-white);
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
    max-width: 38.4rem;

    :nth-child(even) {
        padding: 0 2.4rem;
    }

    @media ${device.tabletL} {
        flex-wrap: wrap;
        height: auto;

        :nth-child(even) {
            padding: 0 2.4rem;
        }
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const StyledText = styled(Text)`
    text-align: center;
`

export const Affiliates = () => {
    return (
        <Wrapper>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Public Relations')}
                </StyledHeader>
                <StyledText>{localize('For media enquiries')}</StyledText>
                <LinkText
                    weight="bold"
                    size="var(--text-size-sm)"
                    color="red"
                    href="mailto:pr@deriv.com"
                >
                    {localize('pr@deriv.com')}
                </LinkText>
            </Content>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Affiliates')}
                </StyledHeader>
                <StyledText>
                    {localize('For enquiries about our affiliate and IB programmes')}
                </StyledText>
                <LinkText
                    weight="bold"
                    size="var(--text-size-sm)"
                    color="red"
                    href="mailto:affiliates@deriv.com"
                >
                    {localize('affiliates@deriv.com')}
                </LinkText>
            </Content>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Business development')}
                </StyledHeader>
                <StyledText>{localize('For collaboration opportunities')}</StyledText>
                <LinkText
                    weight="bold"
                    size="var(--text-size-sm)"
                    color="red"
                    href="mailto:marketing@deriv.com"
                >
                    {localize('marketing@deriv.com')}
                </LinkText>
            </Content>
        </Wrapper>
    )
}
