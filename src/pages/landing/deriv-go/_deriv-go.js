import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, Flex, SectionContainer, Show } from 'components/containers'
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
    flex-direction: column;
    max-width: 996px;

    @media ${device.tabletL} {
        width: 100%;
    }
`
const Content = styled(Flex)`
    width: 100%;
    max-width: 38.4rem;
    display: flex;
    flex-direction: column;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        font-size: 2.4rem;
        margin-top: 0.8rem;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    margin-right: ${(props) => props.margin_right};
`
const StyledText = styled(Text)`
    font-size: 2.4rem;
    line-height: 36px;
    text-align: center;
    margin-bottom: 4rem;
`
const Row = styled(Flex)`
    align-items: center;
    margin-top: 4rem;
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
                        <Row fd={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content margin_right={!is_even ? '12.6rem' : '0'}>
                                <Header type="section-title">{item.title}</Header>
                                <Show.Desktop>
                                    <Text>{item.subtitle}</Text>
                                </Show.Desktop>
                                <Show.Mobile>
                                    <Text>{item.subtitle_mobile}</Text>
                                </Show.Mobile>
                                {two_title && (
                                    <>
                                        <Header type="section-title" mt="2.4rem">
                                            {item.second_title}
                                        </Header>
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
