import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { isIndexEven } from 'common/utility'
import { Container, SectionContainer, Flex, Show } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`
const ToolWrapper = styled(Flex)`
    flex-direction: ${(props) => props.flex_direction};
    align-items: space-between;

    .fresnel-container {
        display: flex;
    }

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        max-width: 500px;
    }
`
const Column = styled.div`
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

    @media ${device.tabletL} {
        max-width: 100%;
        margin: 0;
    }
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

const TradingTools = ({ tools }) => {
    const inner_margin = '126px'
    const outer_margin = '102px'
    const data = useStaticQuery(query)
    return (
        <StyledSection background="white">
            <Container fd="column">
                {tools.map((item, index) => {
                    let is_even = isIndexEven(index)
                    return (
                        <>
                            <ToolWrapper
                                flex_direction={is_even ? 'row-reverse' : 'row'}
                                key={index}
                            >
                                <Column
                                    margin_right={is_even ? outer_margin : '0'}
                                    margin_left={is_even ? '0' : outer_margin}
                                >
                                    <QueryImage
                                        data={data[item.image_name]}
                                        alt={item.image_alt}
                                        height="100%"
                                    />
                                    <Show.Mobile>
                                        <StyledLinkButton tertiary to={item.link.route}>
                                            {item.link.text}
                                        </StyledLinkButton>
                                    </Show.Mobile>
                                </Column>
                                <Content
                                    height="auto"
                                    fd="column"
                                    margin_right={is_even ? inner_margin : outer_margin}
                                    margin_left={is_even ? outer_margin : inner_margin}
                                >
                                    <Header as="h3" type="section-title" mb="8px">
                                        {item.title}
                                    </Header>
                                    <Text>{item.subtitle}</Text>
                                    <Show.Desktop>
                                        <StyledLinkButton tertiary to={item.link.route}>
                                            {item.link.text}
                                        </StyledLinkButton>
                                    </Show.Desktop>
                                </Content>
                            </ToolWrapper>
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
