import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'

const query = graphql`
    query {
        multiply_profit: file(relativePath: { eq: "deriv-go/multiply-profit.png" }) {
            ...fadeIn
        }
        forex: file(relativePath: { eq: "deriv-go/forex.png" }) {
            ...fadeIn
        }
        synthetic_indices: file(relativePath: { eq: "deriv-go/synthetic-indices.png" }) {
            ...fadeIn
        }
        better_risk: file(relativePath: { eq: "deriv-go/better-risk.png" }) {
            ...fadeIn
        }
    }
`

const StyledContainer = styled(Container)`
    flex-direction: column;
    max-width: 996px;
    @media ${device.tabletL} {
        max-width: 360px;
    }
`
const Content = styled(Flex)`
    width: 100%;
    max-width: 38.4rem;
    flex-direction: column;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        font-size: 2.4rem;
        margin-top: 0.8rem;
    }
    @media ${device.tabletL} {
        margin: 0 auto;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        text-align: center;
        font-size: 18px;
    }
`
const Row = styled(Flex)`
    align-items: center;

    & .content-wrapper {
        width: 100%;
        margin-right: ${(props) => props.margin_right};
        @media ${device.tabletL} {
            margin: 2rem auto;
        }
    }
    @media ${device.tabletL} {
        flex-direction: column-reverse;
    }
`

const DerivGoContent = ({ P2P, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer
            p="8.9rem 0 8rem 0"
            background="rgba(243, 246, 250, 1)"
            tabletL={{ pt: '40px' }}
        >
            <StyledContainer>
                {P2P.map((item, index) => {
                    const is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row
                            fd={!is_even ? 'row' : 'row-reverse'}
                            key={index}
                            margin_right={!is_even ? '0' : '12.6rem'}
                        >
                            <Content margin_right={!is_even ? '12.6rem' : '0'}>
                                <StyledHeader as="h4" type="heading-3">
                                    {item.title}
                                </StyledHeader>
                                <StyledText>{item.subtitle}</StyledText>
                                {two_title && (
                                    <>
                                        <StyledHeader as="h3" type="heading-3" mt="2.4rem">
                                            {item.second_title}
                                        </StyledHeader>
                                        <StyledText>{item.second_subtitle}</StyledText>
                                    </>
                                )}
                            </Content>
                            <QueryImage
                                data={data[item.image_name]}
                                alt={item.image_alt}
                                width="100%"
                                className="content-wrapper"
                            />
                        </Row>
                    )
                })}
            </StyledContainer>
        </SectionContainer>
    )
}

DerivGoContent.propTypes = {
    P2P: PropTypes.array,
    reverse: PropTypes.bool,
    two_title: PropTypes.bool,
}

export default DerivGoContent
