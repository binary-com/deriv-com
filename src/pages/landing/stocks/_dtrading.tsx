import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { StyledProps } from 'pages/landing/_types'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    padding: 40px 120px;
    @media ${device.tabletL} {
        padding: 40px 16px 32px;
    }
`
const Wrapper = styled(Container)`
    width: 100%;
`
const Content = styled.div<StyledProps>`
    width: 689px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};
    margin-left: ${(props) => props.margin_left};

    ${Text} {
        margin-top: 16px;
        font-size: 24px;
        @media ${device.tabletL} {
            font-size: 20px;
            text-align: center;
            margin-top: 8px;
        }
    }

    @media ${device.tabletL} {
        width: 100%;
        max-width: 58.8rem;
        margin: 0 auto;
    }
`
const DesktopImageWrapper = styled(Container)`
    width: 100%;
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileImageWrapper = styled(Container)`
    display: none;
    @media ${device.tabletL} {
        display: flex;
        width: 100%;
    }
`

const ImageWrapper = styled(Flex)<StyledProps>`
    width: ${(props) => props.width};
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto 0;
        max-width: 58.8rem;
        width: 100%;
    }
    @media ${device.mobileL} {
        max-width: 216px;
    }
`
const StyledHeader = styled(Header)`
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: 40px;
        line-height: 40px;
        margin-top: 24px;
        text-align: center;
    }
`

const Row = styled.div<StyledProps>`
    flex-direction: ${(props) => props.flex_direction};
    width: 100%;
    display: flex;
    margin-top: 4rem;

    &:first-child {
        margin-top: 0;
    }
    @media ${device.desktopS} {
        justify-content: center;
    }
    @media ${device.tabletL} {
        flex-direction: ${(props) => props.flex_direction_mobile};
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
        stocks_blue_chip_mobile: file(
            relativePath: { eq: "stock-indices/stocks-blue-chip-m.png" }
        ) {
            ...fadeIn
        }
    }
`

type DTradingProps = {
    contentMargin: string
    reverse: boolean
    setWidth: string
    trading: TradingType[]
}

type TradingType = {
    title: ReactElement
    subtitle: ReactElement
    image_name: string
    image_alt: string
    image_name_mobile?: string
}

const DTrading = ({ contentMargin, trading, reverse, setWidth }: DTradingProps) => {
    const data = useStaticQuery(query)

    return (
        <StyledSection>
            <Wrapper fd="column" ai="center">
                {trading.map((item, index) => {
                    const is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row
                            flex_direction={!is_even ? 'row' : 'row-reverse'}
                            flex_direction_mobile={!is_even ? 'column' : 'column-reverse'}
                            key={index}
                        >
                            <Content
                                margin_right={!is_even ? contentMargin : '0'}
                                margin_left={!is_even ? '0' : contentMargin}
                            >
                                <StyledHeader type="display-title">{item.title}</StyledHeader>
                                <Text>{item.subtitle}</Text>
                            </Content>
                            {item.image_name_mobile && (
                                <ImageWrapper width={setWidth ? setWidth : '448px;'} ai="center">
                                    <DesktopImageWrapper>
                                        <QueryImage
                                            data={data[item.image_name]}
                                            alt={item.image_alt}
                                            width="100%"
                                        />
                                    </DesktopImageWrapper>
                                    <MobileImageWrapper>
                                        <QueryImage
                                            data={data[item.image_name_mobile]}
                                            alt={item.image_alt}
                                            width="100%"
                                        />
                                    </MobileImageWrapper>
                                </ImageWrapper>
                            )}
                            {!item.image_name_mobile && (
                                <ImageWrapper width={setWidth ? setWidth : '448px;'} ai="center">
                                    <QueryImage
                                        data={data[item.image_name]}
                                        alt={item.image_alt}
                                        width="100%"
                                    />
                                </ImageWrapper>
                            )}
                        </Row>
                    )
                })}
            </Wrapper>
        </StyledSection>
    )
}

export default DTrading
