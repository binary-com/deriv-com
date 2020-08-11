import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const NumberSection = styled(SectionContainer)`
    display: Flex;
    background-color: var(--color-grey-25);
    padding: 4rem 12rem;
    align-items: center;
    justify-content: center;

    @media ${device.laptopM} {
        padding: 4rem 4rem;
    }
    @media ${device.tablet} {
        flex-direction: column;
        padding: 4rem 4rem;
        justify-content: center;
    }
`
const Splitter = styled.div`
    height: 6rem;
    width: 0.1rem;
    background-color: var(--color-grey-26);
    margin-left: 2.4rem;
    margin-right: 2.4rem;

    @media ${device.tablet} {
        display: none;
    }
`
const StyledHeader = styled(Header)`
    width: auto;
    line-height: 1.5rem;

    @media ${device.tablet} {
        margin-bottom: 8px;
        font-size: 32px;
    }
`
const StyledText = styled(Text)`
    @media ${device.tablet} {
        font-size: 16px;
    }
`
const Number = styled(Flex)`
    align-items: center;
    width: unset;

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 16px;
    }
`
const Numbers = () => {
    return (
        <NumberSection>
            <Flex tablet_direction="column" max_width="1200px" jc="space-between">
                <Number>
                    <StyledHeader as="h2">{localize('330K+')}</StyledHeader>
                    <Splitter />
                    <StyledText>{localize('clients on DMT5')}</StyledText>
                </Number>
                <Number>
                    <StyledHeader as="h2">{localize('100+')}</StyledHeader>
                    <Splitter />
                    <StyledText>{localize('tradable assets')}</StyledText>
                </Number>
                <Number>
                    <StyledHeader as="h2">{localize('24/7')}</StyledHeader>
                    <Splitter />
                    <StyledText>{localize('trading')}</StyledText>
                </Number>
            </Flex>
        </NumberSection>
    )
}
export default Numbers
