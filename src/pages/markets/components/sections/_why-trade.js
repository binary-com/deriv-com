import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device'

const Item = styled(Flex)`
    max-width: 18rem;
    width: 100%;

    img {
        width: 48px;
        height: 48px;
    }
    @media ${device.tabletL} {
        max-width: 27rem;
        margin-top: 24px;

        ${Text} {
            font-size: 2rem;
        }
    }
`
const ItemContainer = styled(Box)`
    display: flex;
    margin: 4rem 0;
    flex-direction: row;
    justify-content: space-between;
    max-width: 140.4rem;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;
        margin: 10px 0 32px 0;
    }
`
const StyledHeader = styled(Header)`
    font-size: 36px;
    @media ${device.tablet} {
        text-align: center;
        max-width: unset;
        font-size: 32px;
        line-height: 1.5;
    }
`
const StyledText = styled(Text)`
    padding: 0 2px;
    @media ${device.tabletL} {
        font-size: 2rem;
        padding: 0;
    }
`
const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`
const StyledButton = styled(LinkButton)`
    border-radius: 4px;
    @media ${device.tabletL} {
        font-size: 1.75rem;
        padding: 1.25rem 4.75rem;
    }
`
export const WhyTrade = ({ children, header, text }) => {
    return (
        <StyledSection background="color-grey-23">
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <div>
                    <StyledHeader as="h3" type="section-title" align="center" mb="1.6rem" lh="1.25">
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
                <StyledButton to="/signup/" secondary="true">
                    {localize('Create free demo account')}
                </StyledButton>
            </Flex>
        </StyledSection>
    )
}
WhyTrade.propTypes = {
    children: PropTypes.node,
    header: PropTypes.object,
    icon: PropTypes.object,
    text: PropTypes.object,
}
