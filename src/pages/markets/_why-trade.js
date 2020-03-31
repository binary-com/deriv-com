import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'

const ContentWrapper = styled(Flex)`
    max-width: 99.6rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
`
const LeftContent = styled.div``
const RightContent = styled.div`
    width: 100%;
    max-width: 48.6rem;
`
const Item = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2.4rem;
    margin-bottom: 1.6rem;
    height: 7.2rem;
    border-radius: 6px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background-color: var(--color-white);
`
const StyledHeader = styled(Header)`
    max-width: 38.4rem;

    @media ${device.tablet} {
        text-align: center;
        max-width: unset;
    }
`

export const WhyTrade = ({ children, header }) => {
    return (
        <SectionContainer>
            <ContentWrapper>
                <LeftContent>
                    <StyledHeader size="3.6rem">{localize(header)}</StyledHeader>
                </LeftContent>
                <RightContent>
                    {children.map((child, idx) => {
                        {
                            const { text, icon } = child.props
                            return (
                                <Item key={idx}>
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
                </RightContent>
            </ContentWrapper>
        </SectionContainer>
    )
}
WhyTrade.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.object,
}
