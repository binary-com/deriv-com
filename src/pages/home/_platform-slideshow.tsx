import React, { useState, useEffect, useMemo, useRef, ReactNode } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Flex } from 'components/containers'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { localize } from 'components/localization'

const ImagePlaceHolder = styled.div`
    width: 690px;

    @media ${device.tablet} {
        width: 100%;
        height: 360px;
    }
`

const ImageWrapper = styled.div<{ $is_hidden: boolean }>`
    opacity: ${({ $is_hidden }) => ($is_hidden ? '0' : '1')};
    display: ${({ $is_hidden }) => ($is_hidden ? 'none' : 'block')};
    animation: fade 1s ease-in-out;

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const SlideContainer = styled(Flex)`
    outline: none;
    border: none;
`

const PlatformSlideshow = () => {
    const [active_index, setActiveIndex] = useState(0)
    const { is_row, is_eu, is_region_loading } = useRegion()

    const slide_images = useMemo(() => {
        if (is_row)
            return [
                {
                    key: 'hero1',
                    image: (
                        <StaticImage
                            src="../../images/common/home/hero_platform1.png"
                            alt={localize('_t_mobile app deriv go_t_')}
                            formats={['avif', 'webp', 'auto']}
                            quality={36}
                            loading="eager"
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero2',
                    image: (
                        <StaticImage
                            src="../../images/common/home/hero_platform2.png"
                            alt={localize('_t_laptop dtrader_t_')}
                            formats={['avif', 'webp', 'auto']}
                            quality={44}
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero3',
                    image: (
                        <StaticImage
                            src="../../images/common/home/hero_platform3.png"
                            alt={localize('_t_laptop mt5_t_')}
                            formats={['avif', 'webp', 'auto']}
                            quality={38}
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero4',
                    image: (
                        <StaticImage
                            src="../../images/common/home/hero_platform4.png"
                            alt={localize('_t_laptop deriv x_t_')}
                            formats={['avif', 'webp', 'auto']}
                            quality={44}
                            placeholder="none"
                        />
                    ),
                },
            ]

        if (is_eu)
            return [
                {
                    key: 'hero1_eu',
                    image: (
                        <StaticImage
                            src="../../images/common/home/hero_platform1_eu.png"
                            alt={localize('_t_laptop dtrader eu_t_')}
                            formats={['avif', 'webp', 'auto']}
                            quality={44}
                            loading="eager"
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero2_eu',
                    image: (
                        <StaticImage
                            src="../../images/common/home/hero_platform2_eu.png"
                            alt={localize('_t_laptop dmt5 eu_t_')}
                            formats={['avif', 'webp', 'auto']}
                            quality={38}
                            placeholder="none"
                        />
                    ),
                },
            ]
    }, [is_eu, is_row])

    const intervalRef = useRef(null)

    useEffect(() => {
        const setNextImage = () => {
            setActiveIndex((prevIndex) =>
                prevIndex >= slide_images?.length - 1 ? 0 : prevIndex + 1,
            )
        }

        const slideshow_timer = setInterval(() => {
            setNextImage()
        }, 5000)

        intervalRef.current = slideshow_timer

        return () => clearInterval(intervalRef.current)
    }, [slide_images])

    if (is_region_loading) {
        return <ImagePlaceHolder />
    }

    return (
        <SlideContainer
            max_width="690px"
            max_height="626px"
            tablet={{ height: '360px', ai: 'center' }}
            z_index="2"
        >
            <Slides images={slide_images} active_index={active_index} />
        </SlideContainer>
    )
}

type SlidesProps = {
    images: Array<{ key: string; image: ReactNode }>
    active_index: number
}

const Slides = ({ images, active_index }: SlidesProps) => {
    return (
        <>
            {images?.map((slide, index) => {
                const { key, image } = slide
                return (
                    <ImageWrapper
                        key={`platform-slideshow__${key}`}
                        $is_hidden={active_index !== index}
                        style={{ height: '100%' }}
                    >
                        {image}
                    </ImageWrapper>
                )
            })}
        </>
    )
}

export default PlatformSlideshow
