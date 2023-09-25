import React from 'react'
import styled from 'styled-components'
import Ticker from 'react-ticker'
import { TImageMarquee } from '../_types'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'

const CarouselSlide = styled.div`
    position: relative;
    padding-left: 20px;

    @media ${device.tablet} {
        padding-left: 10px;
    }

    &:nth-child(1) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(2) {
        min-width: 792px;

        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(3) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(4) {
        min-width: 792px;

        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(5) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 192px;
        }
    }
    &:nth-child(6) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 192px;
        }
    }
`
const StyledImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    height: 480px;

    @media ${device.tablet} {
        height: 240px;
    }
`
const StyledImage = styled.div<{ is_rtl: boolean; image: string }>`
    position: absolute;
    top: 50%;
    left: 50%;
    background: url(${({ image }) => image}) no-repeat fixed center;
    background-size: cover;
    width: 100%;
    height: 480px;
    transform: ${({ is_rtl }) => (is_rtl ? 'translate(50%, -50%)' : 'translate(-50%, -50%)')};

    @media ${device.tablet} {
        height: 240px;
    }
`

const ImageMarquee = ({ slider_medias }: TImageMarquee) => {
    const is_rtl = useIsRtl()
    const sliders_array = Object.keys(slider_medias || {}).map(function (slider_index) {
        return slider_medias[slider_index]
    })

    return (
        <Ticker speed={20}>
            {() => (
                <div style={{ display: 'flex' }}>
                    {sliders_array?.map((carousel_item) => (
                        <CarouselSlide key={carousel_item?.url}>
                            <StyledImageWrapper>
                                <StyledImage
                                    is_rtl={is_rtl}
                                    image={carousel_item?.localFile?.publicURL}
                                />
                            </StyledImageWrapper>
                        </CarouselSlide>
                    ))}
                </div>
            )}
        </Ticker>
    )
}

export default ImageMarquee
