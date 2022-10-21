import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Button } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'

type WhyTradeProps = {
    children: ReactElement[]
    header: ReactElement
    text: ReactElement
}

const Item = styled(Flex)`
    max-width: 18rem;
    width: 100%;

    img {
        width: 48px;
        height: 48px;
    }

    @media ${device.tabletL} {
        max-width: 19rem;
        margin-top: 24px;

        ${Text} {
            font-size: 2rem;
            margin-top: 8px;
        }
    }
`

const ItemContainer = styled(Box)`
    display: flex;
    margin: 40px 0 32px;
    flex-direction: row;
    justify-content: space-between;
    max-width: 140.4rem;

    @media ${device.tabletL} {
        flex-wrap: wrap;
        align-items: center;
        margin: 0 0 32px 0;
    }
    @media (max-width: 336px) {
        justify-content: center;
    }
`
const StyledHeader = styled(Header)`
    font-size: 48px;
    @media ${device.tablet} {
        text-align: center;
        max-width: unset;
        font-size: 28px;
        line-height: 1.5;
        margin-bottom: 8px;
    }
`
const StyledText = styled(Text)`
    padding: 0 2px;
    @media ${device.tabletL} {
        font-size: 1.8rem;
        padding: 0;
    }
`
const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`
const StyledButton = styled(Button)`
    border-radius: 4px;
    @media ${device.tabletL} {
        font-size: 1.75rem;
        padding: 1.25rem 4.75rem;
    }
`

export const WhyTrade = ({ children, header, text }: WhyTradeProps) => {
    const handleSignup = useHandleSignup()

    return (
        <StyledSection background="#f9fbff" padding="120px 16px">
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <div>
                    <StyledHeader as="h3" type="section-title" align="center" mb="1.2rem" lh="1.25">
                        {header}
                    </StyledHeader>
                    <StyledText align="center">{text}</StyledText>
                </div>
                <ItemContainer max_width="48.6rem" width="100%">
                    {children.map((child, idx) => {
                        {
                            const { text, icon } = child.props
                            return (
                                <Item key={idx} ai="center" direction="column">
                                    {icon}
                                    {
                                        <Text align="center" mt="1.6rem">
                                            {text}
                                        </Text>
                                    }
                                </Item>
                            )
                        }
                    })}
                </ItemContainer>
                <StyledButton onClick={handleSignup} id="dm-why-trade-signup" secondary>
                    {localize('Create free demo account')}
                </StyledButton>
            </Flex>
        </StyledSection>
    )
}
