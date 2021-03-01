import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
// import NavArrow from 'images/svg/navigation.svg'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    width: 100vw;
    @media ${device.tabletL} {
        padding: 1.74rem 0 4rem 0;
    }
`

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`

const ImageWrapper = styled.div`
    width: 720px;
    height: 374px;
    margin: 0 24px 0 0;
    object-fit: contain;
    @media ${device.mobileL} {
        width: 328px;
        height: 219px;
        margin: 2rem auto;
        object-fit: contain;
    }
`

const Content = styled.div`
    width: 100%;
    max-width: 39rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};
    @media ${device.mobileL} {
        width: 326px;
    }

    ${Text} {
        font-size: 16px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--color-black-3);
    }
    @media ${device.tabletL} {
        margin: 0 auto;
    }
`

const Row = styled.div`
    flex-direction: ${(props) => props.flex_direction};
    width: 100%;
    display: flex;
    margin-top: 4rem;
    
    &:first-child {
        margin-top: 0;
    }
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const StyledHeader = styled(Header)`
    line-height: 1.25;
    font-size: 3rem !important;
    @media ${device.tabletL} {
        font-size: 24px;
        line-height: 40px;
        margin-top: 2rem;
    }
`

const query = graphql`
    query {
        margin: file(relativePath: { eq: "tt-homepage/margin_calculator.png" }) {
            ...fadeIn
        }
        swap: file(relativePath: { eq: "tt-homepage/swap_calculator.png" }) {
            ...fadeIn
        }
        pip: file(relativePath: { eq: "tt-homepage/pip_calculator.png" }) {
            ...fadeIn
        }
        pnl_margin: file(relativePath: { eq: "tt-homepage/pnl_margin.png" }) {
            ...fadeIn
        }
        pnl_multipliers: file(relativePath: { eq: "tt-homepage/pnl_multipliers.png" }) {
            ...fadeIn
        }
    }
`

const TradingTools = ({ tools, reverse }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <StyledContainer>
                {tools.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row flex_direction={is_even ? 'row-reverse' : 'row'} key={index}>
                            <ImageWrapper margin_right={is_even ? '13rem' : '0'}>
                                <QueryImage
                                    data={data[item.image_name]}
                                    alt={item.image_alt}
                                    width="100%"
                                />
                            </ImageWrapper>
                            <Content margin_right={!is_even ? '13rem' : '0'}>
                                <StyledHeader type="section-title">{item.title}</StyledHeader>
                                <Text>
                                    {item.subtitle}
                                    {/* <img
                                        src={NavArrow}
                                        alt="move down arrow"
                                        width="24"
                                        height="14"
                                    /> */}
                                </Text>
                            </Content>
                        </Row>
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

TradingTools.propTypes = {
    reverse: PropTypes.bool,
    tools: PropTypes.array,
}

export default TradingTools