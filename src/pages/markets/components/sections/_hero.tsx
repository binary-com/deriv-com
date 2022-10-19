import React from 'react'
import styled from 'styled-components'
import Globe from '../../static/video/globe.mp4'
import Globe2 from '../../static/video/globe.webm'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import { useLazyVideo } from 'components/hooks/use-lazy-video'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

const BackgroundWrapper = styled.div`
    position: relative;
    height: 60rem;
    background: var(--color-black-6);
    width: 100%;
    overflow: hidden;

    @media ${device.tabletL} {
        height: unset;
    }
`
const StyledContainer = styled(Container)`
    padding-top: 20.7rem;

    h4,
    h1 {
        max-width: 76.1rem;
        z-index: 10;
    }
    h1 {
        line-height: 1.25;
    }
    h4 {
        line-height: 1.5;
    }
    @media ${device.tabletL} {
        padding: 12.5rem 0;

        h1 {
            text-align: left;
        }
        h4 {
            text-align: left;
        }
    }
`
const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) scale(2);
    width: 100%;
    height: 100%;

    @media ${device.tabletL} {
        transform: translate(-40%, -50%) scale(1.5);
    }
`

const MarketSubHeader = styled(Header)`
    font-size: 24px;
    @media ${device.tabletL} {
        font-size: 18px;
        margin-top: 16px;
        line-height: 28px;
    }
`
export const Hero = () => {
    useLazyVideo()

    const { is_eu, is_uk, is_row } = useCountryRule()

    return (
        <BackgroundWrapper>
            <Video className="lazy" width="100%" height="100%" autoPlay muted playsInline loop>
                <source data-src={Globe} type="video/mp4" />
                <source data-src={Globe2} type="video/webm" />
            </Video>
            <StyledContainer direction="column">
                <Header as="h1" type="display-title" color="white" lh="1.15" align="center">
                    <Localize translate_text="Markets to trade on Deriv" />
                </Header>
                <MarketSubHeader
                    as="h4"
                    type="sub-section-title"
                    color="white"
                    lh="1.5"
                    font_size="var(--text-size-m)"
                    weight="normal"
                    align="center"
                    mt="1.6rem"
                >
                    {is_eu && (
                        <>
                            <Localize translate_text="Learn about the markets that you can trade online with Deriv, including forex, synthetic indices, stocks & indices, cryptocurrencies and commodities." />
                        </>
                    )}
                    {is_uk && (
                        <>
                            <Localize translate_text="Learn about the markets that you can trade online with Deriv, including forex, stocks & indices and commodities." />
                        </>
                    )}
                    {is_row && (
                        <>
                            <Localize translate_text=" Learn about the markets that you can trade online with Deriv, including forex, synthetic indices, stocks & indices, cryptocurrencies, basket indices, and commodities." />
                        </>
                    )}
                </MarketSubHeader>
            </StyledContainer>
        </BackgroundWrapper>
    )
}
