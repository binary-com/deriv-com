import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Container } from 'components/containers'
import device from 'themes/device'

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: row;
    height: 58.4rem;
    width: 100%;
    padding: 0 22.2rem;
    position: relative;

    @media ${device.tablet} {
        height: 70rem;
        padding: 0 14rem;
    }
`
const Background = styled.div`
    background-color: rgba(242, 243, 244, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    width: 71%;
    height: 100%;

    @media ${device.tablet} {
        height: auto;
    }
`
const ContainerWrapper = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    margin-top: 8rem;

    @media ${device.tablet} {
        height: auto;
        margin-top: 0;
    }
`
const Wrapper = styled(Container)`
    @media ${device.tablet} {
        flex-direction: column;
        padding: 0;
        height: auto;
    }
`
const LeftContent = styled.div`
    width: 50%;
    padding: 2.4rem 2.4rem 8rem;
    margin: auto;

    @media ${device.tablet} {
        width: 100%;
    }
`
const RightContent = styled.div`
    width: 50%;
    max-width: 48.6rem;

    @media ${device.tablet} {
        width: 100%;
    }
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
        <ContentWrapper>
            <Background />
            <ContainerWrapper>
                <Wrapper>
                    <LeftContent>
                        <StyledHeader font_size="3.6rem">{localize(header)}</StyledHeader>
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
                </Wrapper>
            </ContainerWrapper>
        </ContentWrapper>
    )
}
WhyTrade.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.object,
}
