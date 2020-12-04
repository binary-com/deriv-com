import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    box-shadow: inset 1px 0 0 1px var(--color-grey-2);

    @media ${device.tabletL} {
        padding: 1.74rem 0 4rem 0;
    }
`
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`
const Content = styled.div`
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

const ImageWrapper = styled.div`
    max-width: 58.8rem;
    width: 100%;
    max-height: 30rem;
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto;
    }
`
const StyledHeader = styled(Header)`
    font-size: var(--text-size-l);
    line-height: 1.25;

    @media ${device.tabletL} {
        margin-top: 2rem;
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
    }
`
const DTrading = ({ trading, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <StyledContainer>
                {trading.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content margin_right={!is_even ? '2.4rem' : '0'}>
                                <StyledHeader>{item.title}</StyledHeader>
                                <Text>{item.subtitle}</Text>
                                {two_title && (
                                    <>
                                        <StyledHeader mt="2.4rem">{item.second_title}</StyledHeader>
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
            </StyledContainer>
        </StyledSection>
    )
}

DTrading.propTypes = {
    reverse: PropTypes.bool,
    trading: PropTypes.array,
    two_title: PropTypes.bool,
}

export default DTrading
