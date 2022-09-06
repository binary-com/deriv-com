import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'

type TradingType = {
    title?: string
    subtitle?: string
    second_title?: string
    second_subtitle?: string
    image_name?: string
    image_alt?: string
}

type DTradingProps = {
    reverse?: boolean
    trading?: TradingType[]
    two_title?: boolean
}

type ContentProps = {
    margin_right?: string
}

type ImageWrapperProps = {
    margin_right?: string
}

type RowProps = {
    flex_direction?: string
}

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    border-top: solid 1px var(--color-grey-2);
    @media ${device.tabletL} {
        padding: 1.74rem 0 4rem 0;
        border-top: unset;
        border-bottom: unset;
    }
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
    max-width: 58.8rem;
    width: 100%;
    max-height: 30rem;
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto;
    }
`
const StyledHeader = styled(Header)`
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: 24px;
        line-height: 40px;
        margin-top: 2rem;
    }
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
    }
`
const DTrading = ({ trading, reverse, two_title }: DTradingProps) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <Container direction="column">
                {trading.map((item, index) => {
                    const is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content margin_right={!is_even ? '2.4rem' : '0'}>
                                <StyledHeader type="page-title" as="h2">
                                    {item.title}
                                </StyledHeader>
                                <Text>{item.subtitle}</Text>
                                {two_title && (
                                    <>
                                        <StyledHeader type="page-title" mt="2.4rem">
                                            {item.second_title}
                                        </StyledHeader>
                                        <Text>{item.second_subtitle}</Text>
                                    </>
                                )}
                            </Content>
                            <ImageWrapper margin_right={!is_even ? '0' : '2.4rem'}>
                                <QueryImage
                                    data={data[item.image_name]}
                                    alt={item.image_alt}
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
