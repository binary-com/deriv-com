import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { SectionContainer, Flex, Box } from 'components/containers'
import device from 'themes/device'

const Item = styled(Flex)`
    border-radius: 6px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background-color: var(--color-white);

    svg {
        width: 32px;
        height: 32px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        text-align: center;
        max-width: unset;
    }
`

export const WhyTrade = ({ children, header }) => {
    return (
        <SectionContainer>
            <Flex max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <div>
                    <StyledHeader size="3.6rem" max_width="38.4rem">
                        {localize(header)}
                    </StyledHeader>
                </div>
                <Box max_width="48.6rem" width="100%">
                    {children.map((child, idx) => {
                        {
                            const { text, icon } = child.props
                            return (
                                <Item
                                    key={idx}
                                    ai="center"
                                    jc="flex-start"
                                    p="2rem 2.4rem"
                                    mb="1.6rem"
                                >
                                    {icon}
                                    {
                                        <Text ml="2.4rem" weight="bold">
                                            {text}
                                        </Text>
                                    }
                                </Item>
                            )
                        }
                    })}
                </Box>
            </Flex>
        </SectionContainer>
    )
}
WhyTrade.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.object,
}
