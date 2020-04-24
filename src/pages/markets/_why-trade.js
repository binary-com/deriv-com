import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { SectionContainer, Flex, Box } from 'components/containers'
import device from 'themes/device'

const Item = styled(Flex)`
    svg {
        width: 48px;
        height: 48px;
    }
`
const ItemContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 140.4rem;
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        text-align: center;
        max-width: unset;
    }
`
export const WhyTrade = ({ children, header, text }) => {
    return (
        <SectionContainer background="var(--color-grey-23)">
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <div>
                    <StyledHeader align="center" mb="1.6rem" size="3.6rem" lh="1.25">
                        {localize(header)}
                    </StyledHeader>
                    <Text align="center" p="0 1px">
                        {localize(text)}
                    </Text>
                </div>
                <ItemContainer max_width="48.6rem" width="100%" mt="3.2rem" mb="3.2rem">
                    {children.map((child, idx) => {
                        {
                            const { text, icon } = child.props
                            return (
                                <Item key={idx} ai="center" direction="column" width="18rem">
                                    {icon}
                                    {
                                        <Text align="center" mt="1.6rem" max_width="18rem">
                                            {localize(text)}
                                        </Text>
                                    }
                                </Item>
                            )
                        }
                    })}
                </ItemContainer>
                <LinkButton to="/signup/" secondary="true">
                    {localize('Create free demo account')}
                </LinkButton>
            </Flex>
        </SectionContainer>
    )
}
WhyTrade.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.object,
    text: PropTypes.string,
}
