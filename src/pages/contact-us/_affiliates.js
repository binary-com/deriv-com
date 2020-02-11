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
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`

export const Affiliates = () => {
    return (
        <Wrapper>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Public Relations')}
                </StyledHeader>
                <Text>{localize('For media enquiries')}</Text>
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
                <Text>{localize('For enquiries about our affiliate and IB programmes')}</Text>
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
                <Text>{localize('For collaboration opportunities')}</Text>
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
