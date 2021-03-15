import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-30);
    clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 96%);
    padding: 64px 16px;
`
const MainWrapper = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`

const Content = styled(Flex)`
    width: 60%;
    flex-direction: column;
    margin-right: ${(props) => props.margin_right};
    margin-left: ${(props) => props.margin_left};

    ${Text} {
        margin-top: 2.2rem;
        font-size: 2.4rem;
        @media ${device.tabletL} {
            margin-top: 8px;
            font-size: 20px;
            text-align: center;
        }
    }

    @media ${device.tabletL} {
        width: 100%;
        max-width: 58.8rem;
        margin: 0 auto;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    width: 40%;
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto;
        max-width: 58.8rem;
        width: 100%;
    }
`
const StyledHeader = styled(Header)`
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: 40px;
        line-height: 50px;
        text-align: center;
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
const query = graphql`
    query {
        dbot_strategy: file(relativePath: { eq: "dbot-strategy.png" }) {
            ...fadeIn
        }
        dbot_build_strategy: file(relativePath: { eq: "dbot-build-strategy.png" }) {
            ...fadeIn
        }
        dbot_maximise_profits: file(relativePath: { eq: "dbot-maximise-profits.png" }) {
            ...fadeIn
        }
        dbot_track_your_performance: file(relativePath: { eq: "dbot-track-your-performance.png" }) {
            ...fadeIn
        }
        dbot_get_integrated_help: file(relativePath: { eq: "dbot-get-integrated-help.png" }) {
            ...fadeIn
        }
        dbot_save_your_strategies: file(relativePath: { eq: "dbot-save-your-strategies.png" }) {
            ...fadeIn
        }
        dmt_5_ipad_iphone: file(relativePath: { eq: "dmt-5-ipad-iphone.png" }) {
            ...fadeIn
        }
        dmt_5_mac: file(relativePath: { eq: "dmt-5-mac.png" }) {
            ...fadeIn
        }
        make_smarter: file(relativePath: { eq: "make-smarter.png" }) {
            ...fadeIn
        }
        trade_what_you_want: file(relativePath: { eq: "trade-what-you-want.png" }) {
            ...fadeIn
        }
        how_you_want: file(relativePath: { eq: "how-you-want.png" }) {
            ...fadeIn
        }
        stocks_zero_fees: file(relativePath: { eq: "stock-indices/stocks-zero-fees.png" }) {
            ...fadeIn
        }
        stocks_blue_chip: file(relativePath: { eq: "stock-indices/stocks-blue-chip.png" }) {
            ...fadeIn
        }
    }
`
const Parallelogram = ({ trading, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <MainWrapper fd="column">
                {trading.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content>
                                <StyledHeader type="display-title">{item.title}</StyledHeader>
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
                            {item.image_name && (
                                <ImageWrapper margin_right={!is_even ? '0' : '2.4rem'}>
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
            </MainWrapper>
        </StyledSection>
    )
}

Parallelogram.propTypes = {
    reverse: PropTypes.bool,
    trading: PropTypes.array,
    two_title: PropTypes.bool,
}

export default Parallelogram
