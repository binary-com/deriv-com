import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: row;
    height: 58.4rem;
    width: 100%;
    padding: 8rem 22.2rem;
`
const LeftContent = styled.div`
    width: 50%;
    padding: 2.4rem 2.4rem 8rem;
    margin: auto;
`
const RightContent = styled.div`
    width: 50%;
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

export const WhyTrade = ({ children, header }) => {
    return (
        <ContentWrapper>
            <LeftContent>
                <Header font_size="3.6rem">{localize(header)}</Header>
            </LeftContent>
            <RightContent>
                {children.map((child, idx) => {
                    {
                        const { text, icon } = child.props
                        return (
                            <Item key={idx}>
                                {icon}
                                {<Text margin="0 0 0 2.4rem">{text}</Text>}
                            </Item>
                        )
                    }
                })}
            </RightContent>
        </ContentWrapper>
    )
}
WhyTrade.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.object,
}
