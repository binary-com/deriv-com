import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { SectionContainer, Flex, Box } from 'components/containers'
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
        margin-top: 5rem;

        ${Text} {
            font-size: 2rem;
        }
    }
`
const ItemContainer = styled(Box)`
    display: flex;
    margin: 3.2rem 0;
    flex-direction: row;
    justify-content: space-between;
    max-width: 140.4rem;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;
        margin: 1rem 0 5rem 0;
    }
`
const StyledHeader = styled(Header)`
    font-size: var(--text-size-header-1);
    @media ${device.tablet} {
        text-align: center;
        max-width: unset;
        font-size: var(--text-size-header-4);
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
        padding: 5rem 2rem;
    }
`
const StyledButton = styled(LinkButton)`
    @media ${device.tabletL} {
        font-size: 1.75rem;
        padding: 1.25rem 4.75rem;
    }
`
export const WhyTrade = ({ children, header, text }) => {
    return (
        <StyledSection background="var(--color-grey-23)">
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <div>
                    <StyledHeader align="center" mb="1.6rem" lh="1.25">
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
