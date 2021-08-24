import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'

const StyledSection = styled(SectionContainer)`
    background: rgba(243, 246, 250, 1);
    padding: 8.9rem 0 8rem 0;
    @media ${device.tabletL} {
        padding: 40px 16px;
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
    display: flex;
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

const ImageWrapper = styled.div`
    width: 100%;
    margin-right: ${(props) => props.margin_right};
    @media ${device.tabletL} {
        margin: 2rem auto;
    }
`

const Row = styled(Flex)`
    align-items: center;
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
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
const DerivGoContent = ({ P2P, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <StyledContainer>
                {P2P.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row fd={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content margin_right={!is_even ? '12.6rem' : '0'}>
                                <Header type="heading-3">{item.title}</Header>
                                <Text>{item.subtitle}</Text>
                                {two_title && (
                                    <>
                                        <Header type="heading-3" mt="2.4rem">
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
