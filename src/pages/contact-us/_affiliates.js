import React from 'react'
import styled from 'styled-components'
import { LinkText } from 'components/elements/typography'
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

export const Affiliates = () => {
    return (
        <Wrapper>
            <Content>
                <StyledHeader as="h3" align="center">
                    {localize('Public Relations')}
                </StyledHeader>

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
