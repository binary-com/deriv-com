import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Text } from 'components/elements/typography'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'
import NeedUsIcon from 'images/svg/need-us.svg'

const Wrapper = styled.section`
    width: 100%;
    background-color: var(--color-grey-8);
    padding: 4rem 6.6rem;
`

const Logo = styled(NeedUsIcon)`
    margin-bottom: 2.4rem;
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const StyledText = styled(Text)`
    margin-bottom: 4rem;
    width: 38.4rem;
`
const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;
    width: 18.4rem;
    height: 4rem;
`

export const NeedHelp = () => {
    return (
        <Wrapper>
            <Flex direction="column" ai="center">
                <Logo />
                <StyledHeader as="h3" align="center">
                    {localize('Need help?')}
                </StyledHeader>
                <StyledText align="center">
                    {localize(
                        'Try our Help Centre. You’ll find searchable, easy to follow articles to get you going.',
                    )}
                </StyledText>
                <StyledLinkButton secondary to="help-centre">
                    {localize('Go to Help Centre')}
                </StyledLinkButton>
            </Flex>
        </Wrapper>
    )
}
