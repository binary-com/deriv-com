import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer, Show } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    padding: 8.9rem 0 8rem 0;

    @media ${device.tabletL} {
        padding: 40px 16px 0;
    }
`
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    max-width: 996px;

    @media ${device.tabletL} {
        width: 100%;
    }
`
const Content = styled.div`
    width: 100%;
    max-width: 38.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        font-size: 2.4rem;
        margin-top: 0.8rem;

        @media ${device.tabletL} {
            text-align: center;
            font-size: 16px;
        }
    }

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto;
    }
`
const StyledHeader = styled(Header)`
    font-size: 32px;
    line-height: 1.25;
`
const StyledText = styled(Text)`
    font-size: 2.4rem;
    line-height: 36px;
    text-align: center;
    margin-bottom: 4rem;
`
const Row = styled.div`
    flex-direction: ${(props) => props.flex_direction};
    width: 100%;
    display: flex;
    margin-top: 4rem;

    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 40px;
    }
`
const query = graphql`
    query {
        mobile_exp: file(relativePath: { eq: "deriv-go/mobile-exp.png" }) {
            ...fadeIn
        }
        realtime_alert: file(relativePath: { eq: "deriv-go/realtime-alert.png" }) {
            ...fadeIn
        }
        trade_with_go: file(relativePath: { eq: "deriv-go/trade-with-go.png" }) {
            ...fadeIn
        }
    }
`
const DerivGoContent = ({ P2P, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <StyledContainer>
                <StyledText>
                    {localize(
                        'The beta version of our mobile app is now available. Trade multipliers on forex and synthetic indices, and get the best Deriv experience optimised for mobile:',
                    )}
                </StyledText>
                {P2P.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content margin_right={!is_even ? '12.6rem' : '0'}>
                                <StyledHeader>{item.title}</StyledHeader>
                                <Show.Desktop>
                                    <Text>{item.subtitle}</Text>
                                </Show.Desktop>
                                <Show.Mobile>
                                    <Text>{item.subtitle_mobile}</Text>
                                </Show.Mobile>
                                {two_title && (
                                    <>
                                        <StyledHeader mt="2.4rem">{item.second_title}</StyledHeader>
                                        <Text>{item.second_subtitle}</Text>
                                    </>
                                )}
                            </Content>
                            <ImageWrapper margin_right={!is_even ? '0' : '12.6rem'}>
                                <QueryImage
                                    data={data[item.image_name]}
                                    alt={item.image_alt}
                                    width="100%"
                                />
                            </ImageWrapper>
                        </Row>
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

DerivGoContent.propTypes = {
    P2P: PropTypes.array,
    reverse: PropTypes.bool,
    two_title: PropTypes.bool,
}

export default DerivGoContent
