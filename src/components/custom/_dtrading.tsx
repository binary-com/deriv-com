import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { TString } from 'types/generics'
import { Localize, localize } from 'components/localization'

export type TradingType = {
    title: TString
    subtitle: TString
    image_name: string
    image_alt: TString
}

type Spacing = 1

type SpaceProps = {
    $spacing: Spacing
}

type DTradingProps = {
    reverse?: boolean
    trading?: TradingType[]
    spacing?: Spacing
    max_width?: string
    max_height?: string
}

type ContentProps = {
    margin_right?: string
}

type ImageWrapperProps = SpaceProps & {
    margin_right?: string
    max_width?: string
    max_height?: string
}

type RowProps = {
    flex_direction?: string
}

const StyledSection = styled(SectionContainer)<SpaceProps>`
    background-color: var(--color-white);
    @media ${device.tabletL} {
        padding: 1.74rem 0 4rem 0;
        border-top: unset;
        border-bottom: unset;
    }
    ${(props) =>
        props.$spacing === 1 &&
        css`
            @media ${device.tablet} {
                padding-block-end: 0;
            }
        `}
`
const Content = styled.div<ContentProps>`
    width: 100%;
    max-width: 58.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        margin-top: 2.2rem;
    }

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`
const ImageWrapper = styled.div<ImageWrapperProps>`
    max-width: ${(props) => props.max_width || '58.8rem'};
    width: 100%;
    max-height: ${(props) => props.max_height || '30rem'};
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto;
    }
    ${(props) =>
        props.$spacing === 1 &&
        css`
            @media ${device.tablet} {
                margin-block-end: 0;
                max-inline-size: 65rem;
                max-block-size: 37.7rem;
            }
            @media ${device.tabletS} {
                max-inline-size: 45rem;
                max-height: 27rem;
            }
            @media ${device.mobileL} {
                max-inline-size: 41rem;
                max-height: 24.7rem;
            }
            @media ${device.mobileM} {
                max-inline-size: 35rem;
                max-block-size: 21.5rem;
            }
        `}
`
const StyledHeader = styled(Header)`
    line-height: 1.25;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 28px;
        line-height: 40px;
        margin-top: 2rem;
    }
`
const StyledTitle = styled(Header)`
    font-weight: normal;
    margin: 8px 0 0;
`
const Row = styled.div<RowProps>`
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

const query = graphql`
    query {
        dbot_strategy: file(relativePath: { eq: "dbot/dbot-strategy.png" }) {
            ...fadeIn
        }
        dbot_build_strategy: file(relativePath: { eq: "dbot/dbot-build-strategy.png" }) {
            ...fadeIn
        }
        dbot_maximise_profits: file(relativePath: { eq: "dbot/dbot-maximise-profits.png" }) {
            ...fadeIn
        }
        dbot_track_your_performance: file(
            relativePath: { eq: "dbot/dbot-track-your-performance.png" }
        ) {
            ...fadeIn
        }
        dbot_get_integrated_help: file(relativePath: { eq: "dbot/dbot-get-integrated-help.png" }) {
            ...fadeIn
        }
        dbot_save_your_strategies: file(
            relativePath: { eq: "dbot/dbot-save-your-strategies.png" }
        ) {
            ...fadeIn
        }
        dmt_5_ipad_iphone: file(relativePath: { eq: "dmt5/dmt-5-ipad-iphone.png" }) {
            ...fadeIn
        }
        dmt_5_mac: file(relativePath: { eq: "dmt5/dmt-5-mac.png" }) {
            ...fadeIn
        }
        make_smarter: file(relativePath: { eq: "dtrader/make-smarter.png" }) {
            ...fadeIn
        }
        trade_what_you_want: file(relativePath: { eq: "dtrader/trade-what-you-want.png" }) {
            ...fadeIn
        }
        trade_what_you_want_eu: file(relativePath: { eq: "dtrader/trade-what-you-want-eu.png" }) {
            ...fadeIn
        }
        how_you_want: file(relativePath: { eq: "dtrader/how-you-want.png" }) {
            ...fadeIn
        }
        how_you_want_eu: file(relativePath: { eq: "dtrader/how-you-want_eu.png" }) {
            ...fadeIn
        }
        stocks_zero_fees: file(relativePath: { eq: "stock-indices/stocks-zero-fees.png" }) {
            ...fadeIn
        }
        stocks_blue_chip: file(relativePath: { eq: "stock-indices/stocks-blue-chip.png" }) {
            ...fadeIn
        }
        bespoke: file(relativePath: { eq: "deriv-x/bespoke.png" }) {
            ...fadeIn
        }
        feature_rich: file(relativePath: { eq: "deriv-x/feature-rich.png" }) {
            ...fadeIn
        }
        intuitive: file(relativePath: { eq: "deriv-x/intuitive.png" }) {
            ...fadeIn
        }
        margin: file(relativePath: { eq: "deriv-x/margin.png" }) {
            ...fadeIn
        }
        on_go_trading: file(relativePath: { eq: "deriv-ez/on-go-trading.png" }) {
            ...fadeIn
        }
        indicator: file(relativePath: { eq: "deriv-ez/indicator.png" }) {
            ...fadeIn
        }
        instant_platform: file(relativePath: { eq: "deriv-ez/instant-platform.png" }) {
            ...fadeIn
        }
    }
`

const DTrading = ({ trading, reverse, max_width, max_height, spacing }: DTradingProps) => {
    const data = useStaticQuery(query)

    return (
        <StyledSection $spacing={spacing}>
            <Container direction="column">
                {trading.map(({ image_alt, image_name, subtitle, title }, index) => {
                    const is_even = reverse ? (index + 1) % 2 : index % 2

                    return (
                        <Row flex_direction={is_even ? 'row-reverse' : 'row'} key={title}>
                            <Content margin_right={!is_even ? '2.4rem' : '0'}>
                                <StyledHeader type="page-title" as="h2">
                                    <Localize translate_text={title} />
                                </StyledHeader>
                                <StyledTitle as="p" type="paragraph-1">
                                    <Localize translate_text={subtitle} />
                                </StyledTitle>
                            </Content>
                            <ImageWrapper
                                margin_right={!is_even ? '0' : '2.4rem'}
                                $spacing={spacing}
                                max_width={max_width}
                                max_height={max_height}
                            >
                                <QueryImage
                                    data={data[image_name]}
                                    alt={localize(image_alt)}
                                    width="100%"
                                />
                            </ImageWrapper>
                        </Row>
                    )
                })}
            </Container>
        </StyledSection>
    )
}

export default DTrading
