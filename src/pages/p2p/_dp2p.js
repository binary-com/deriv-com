import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);

    @media ${device.tabletL} {
        padding: 1.74rem 0 4rem 0;
    }
`
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`
const Content = styled.div`
    width: 100%;
    max-width: 58.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        font-size: 2.4rem;
        margin-top: 2.2rem;
    }

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`

const ImageWrapper = styled.div`
    max-width: 47.1rem;
    width: 100%;
    max-height: 30rem;
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto;
    }
`
const StyledHeader = styled(Header)`
    font-size: var(--text-size-l);
    line-height: 1.25;

    @media ${device.tabletL} {
        margin-top: 2rem;
    }
`

const StyledText = styled(Text)`
    font-size: 3.2rem;
    text-align: center;
`

const Row = styled.div`
    flex-direction: ${(props) => props.flex_direction};
    width: 100%;
    display: flex;
    margin-top: 8rem;

    &:first-child {
        margin-top: 0;
    }

    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const query = graphql`
    query {
        buy_sell: file(relativePath: { eq: "p2p_buy_sell.png" }) {
            ...fadeIn
        }
        local_currency: file(relativePath: { eq: "p2p_local_currency.png" }) {
            ...fadeIn
        }
        web_and_mobile: file(relativePath: { eq: "p2p_web_and_mobile.png" }) {
            ...fadeIn
        }
    }
`
const DP2P = ({ trading, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <StyledContainer>
                <StyledText>
                    {localize(
                        'DP2P is Deriv’s peer-to-peer deposit and withdrawal service. It’s where you can get money in and out of your Deriv account via exchanges with fellow traders.',
                    )}
                </StyledText>
                {trading.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content margin_right={!is_even ? '12.6rem' : '0'}>
                                <StyledHeader>{item.title}</StyledHeader>
                                <Text>{item.subtitle}</Text>
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
                                    alt={data[item.image_alt]}
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

DP2P.propTypes = {
    reverse: PropTypes.bool,
    trading: PropTypes.array,
    two_title: PropTypes.bool,
}

export default DP2P
