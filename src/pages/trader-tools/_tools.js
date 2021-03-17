import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`
const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-right: ${(props) => props.margin_right};
    margin-left: ${(props) => props.margin_left};

    @media ${device.tabletL} {
        margin: 24px 0 0;
    }
`

const Content = styled(Flex)`
    max-width: 39rem;
    margin-right: ${(props) => props.margin_right};
    margin-left: ${(props) => props.margin_left};
`
const StyledLinkButton = styled(LinkButton)`
    margin-top: 16px;
    width: fit-content;

    &:hover {
        cursor: pointer;
    }

    @media ${device.tabletL} {
        margin-top: 32px;
        width: 100%;
    }
`
const Divider = styled.div`
    :not(:last-child) {
        height: 1px;
        width: 100%;
        background: var(--color-grey-21);
        margin: 80px 0;
    }

    @media ${device.tabletL} {
        :not(:last-child) {
            margin: 40px 0;
        }
    }
`
const DesktopWrapper = styled(Flex)`
    flex-direction: ${(props) => props.flex_direction};
    align-items: space-between;

    @media ${device.tabletL} {
        display: none;
    }
`
const MobileWrapper = styled(Flex)`
    display: none;
    @media ${device.tabletL} {
        display: block;
        max-width: 500px;
    }
`

const query = graphql`
    query {
        margin: file(relativePath: { eq: "trade-tools/landing/margin-calculator.png" }) {
            ...fadeIn
        }
        swap: file(relativePath: { eq: "trade-tools/landing/swap-calculator.png" }) {
            ...fadeIn
        }
        pip: file(relativePath: { eq: "trade-tools/landing/pip-calculator.png" }) {
            ...fadeIn
        }
        pnl_margin: file(relativePath: { eq: "trade-tools/landing/pnl-margin.png" }) {
            ...fadeIn
        }
        pnl_multipliers: file(relativePath: { eq: "trade-tools/landing/pnl-multipliers.png" }) {
            ...fadeIn
        }
    }
`

const TradingTools = ({ tools, reverse }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection background="white">
            <Container fd="column">
                {tools.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <>
                            <DesktopWrapper
                                flex_direction={is_even ? 'row-reverse' : 'row'}
                                key={index}
                            >
                                <ImageWrapper
                                    margin_right={is_even ? '102px' : '0'}
                                    margin_left={is_even ? '0' : '102px'}
                                >
                                    <QueryImage
                                        data={data[item.image_name]}
                                        alt={item.image_alt}
                                        width="100%"
                                    />
                                </ImageWrapper>
                                <Content
                                    height="auto"
                                    fd="column"
                                    margin_right={is_even ? '126px' : '102px'}
                                    margin_left={is_even ? '102px' : '126px'}
                                >
                                    <Header as="h3" type="section-title" mb="8px">
                                        {item.title}
                                    </Header>
                                    <Text>{item.subtitle}</Text>
                                    <StyledLinkButton tertiary to={item.link.route}>
                                        {item.link.text}
                                    </StyledLinkButton>
                                </Content>
                            </DesktopWrapper>
                            <MobileWrapper>
                                <Header as="h3" type="section-title" mb="8px">
                                    {item.title}
                                </Header>
                                <Text>{item.subtitle}</Text>
                                <ImageWrapper>
                                    <QueryImage
                                        data={data[item.image_name]}
                                        alt={item.image_alt}
                                        width="100%"
                                    />
                                </ImageWrapper>
                                <Flex>
                                    <StyledLinkButton tertiary to={item.link.route}>
                                        {item.link.text}
                                    </StyledLinkButton>
                                </Flex>
                            </MobileWrapper>
                            <Divider />
                        </>
                    )
                })}
            </Container>
        </StyledSection>
    )
}

TradingTools.propTypes = {
    reverse: PropTypes.bool,
    tools: PropTypes.array,
}

export default TradingTools
