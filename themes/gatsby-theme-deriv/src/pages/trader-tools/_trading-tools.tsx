import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { isIndexEven } from 'common/utility'
import { Container, SectionContainer, Flex, Desktop } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

export type ToolsType = {
    title: TString
    subtitle: TString
    link: { text: TString; route: string }
    image_name: string
    image_alt: string
}[]

type TradingToolsProps = {
    reverse?: boolean
    tools: ToolsType
}

type ColumnProps = {
    margin_left?: string
    margin_right?: string
}

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`
const ToolWrapper = styled(Flex)<{ flex_direction?: string }>`
    flex-direction: ${(props) => props.flex_direction};
    align-items: space-between;

    .margin-calculator-btn {
        display: flex;
    }

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        max-width: 500px;
    }
`
const Column = styled.div<ColumnProps>`
    width: 100%;
    height: 100%;
    margin-right: ${(props) => props.margin_right};
    margin-left: ${(props) => props.margin_left};
    @media ${device.tabletL} {
        margin: 24px 0 0;
    }

    .margin-calculator-btn {
        flex-direction: column;
    }
`
const Content = styled(Flex)<{ margin_left: string; margin_right: string }>`
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

const StyledDesktop = styled.div`
    display: none;
    @media (min-width: 993px) {
        display: block;
    }
`

const StyledMobile = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 993px) {
        display: none;
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
        margin_mobile: file(
            relativePath: { eq: "trade-tools/landing/margin-calculator-mobile.png" }
        ) {
            ...fadeIn
        }
        swap_mobile: file(relativePath: { eq: "trade-tools/landing/swap-calculator-mobile.png" }) {
            ...fadeIn
        }
        pip_mobile: file(relativePath: { eq: "trade-tools/landing/pip-calculator-mobile.png" }) {
            ...fadeIn
        }
        pnl_margin_mobile: file(relativePath: { eq: "trade-tools/landing/pnl-margin-mobile.png" }) {
            ...fadeIn
        }
        pnl_multipliers_mobile: file(
            relativePath: { eq: "trade-tools/landing/pnl-multipliers-mobile.png" }
        ) {
            ...fadeIn
        }
    }
`

const TradingTools = ({ tools }: TradingToolsProps) => {
    const inner_margin = '24px'
    const outer_margin = '102px'
    const data = useStaticQuery(query)
    return (
        <StyledSection background="white">
            <Container fd="column">
                {tools.map((item, index) => {
                    const is_even = isIndexEven(index)

                    return (
                        <React.Fragment key={item.image_alt}>
                            <ToolWrapper flex_direction={is_even ? 'row-reverse' : 'row'}>
                                <Column>
                                    <StyledDesktop>
                                        <QueryImage
                                            data={data[item.image_name]}
                                            alt={item.image_alt}
                                            height="100%"
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                    </StyledDesktop>
                                    <StyledMobile>
                                        <QueryImage
                                            data={data[item.image_name + '_mobile']}
                                            alt={item.image_alt}
                                            height="100%"
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                        <StyledLinkButton tertiary to={item.link.route}>
                                            <Localize translate_text={item.link.text} />
                                        </StyledLinkButton>
                                    </StyledMobile>
                                </Column>
                                <Content
                                    height="auto"
                                    fd="column"
                                    margin_right={is_even ? inner_margin : outer_margin}
                                    margin_left={is_even ? outer_margin : inner_margin}
                                >
                                    <Header as="h3" type="section-title" mb="8px">
                                        <Localize translate_text={item.title} />
                                    </Header>
                                    <Text>
                                        <Localize translate_text={item.subtitle} />
                                    </Text>
                                    <Desktop className="margin-calculator-btn">
                                        <StyledLinkButton tertiary to={item.link.route}>
                                            <Localize translate_text={item.link.text} />
                                        </StyledLinkButton>
                                    </Desktop>
                                </Content>
                            </ToolWrapper>
                            <Divider />
                        </React.Fragment>
                    )
                })}
            </Container>
        </StyledSection>
    )
}

export default TradingTools
