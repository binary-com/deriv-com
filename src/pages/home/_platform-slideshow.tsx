import React, { useState, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { Flex } from 'components/containers'
import QueryImage from 'components/elements/query-image'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

const ImagePlaceHolder = styled.div`
    width: 690px;

    @media ${device.tabletL} {
        width: 100%;
        height: 360px;
    }
`

const query = graphql`
    query {
        hero_platform1: file(relativePath: { eq: "home/hero_platform1.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform1_uk_and_eu: file(relativePath: { eq: "home/hero_platform1_uk_and_eu.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform2: file(relativePath: { eq: "home/hero_platform2.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform2_uk_and_eu: file(relativePath: { eq: "home/hero_platform2_uk_and_eu.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform3: file(relativePath: { eq: "home/hero_platform3.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform4: file(relativePath: { eq: "home/hero_platform4.png" }) {
            ...homePageHeroFadeIn
        }
    }
`

const StyledImage = styled(QueryImage)<{ $is_hidden: boolean }>`
    opacity: ${({ $is_hidden }) => ($is_hidden ? '0' : '1')};
    display: ${({ $is_hidden }) => ($is_hidden ? 'none' : 'block')};
    animation: fade 1s ease-in-out;

    @media ${device.tabletL} {
        animation: unset;
    }

    .gatsby-image-wrapper {
        div {
            @media ${device.tabletL} {
                transition: none;
            }
        }
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const PlatformSlideshow = () => {
    const [active_index, setActiveIndex] = useState(0)
    const data = useStaticQuery(query)

    const { is_row, is_eu, is_uk, is_loading } = useCountryRule()

    const slide_images = useMemo(() => {
        if (is_row)
            return [
                { key: 'hero1', image: data.hero_platform1 },
                { key: 'hero2', image: data.hero_platform2 },
                { key: 'hero3', image: data.hero_platform3 },
                { key: 'hero4', image: data.hero_platform4 },
            ]

        if (is_eu)
            return [
                { key: 'hero1', image: data.hero_platform1_uk_and_eu },
                { key: 'hero2', image: data.hero_platform2_uk_and_eu },
            ]

        if (is_uk)
            return [
                { key: 'hero1', image: data.hero_platform1_uk_and_eu },
                { key: 'hero2', image: data.hero_platform2_uk_and_eu },
            ]
    }, [
        data.hero_platform1,
        data.hero_platform1_uk_and_eu,
        data.hero_platform2,
        data.hero_platform2_uk_and_eu,
        data.hero_platform3,
        data.hero_platform4,
        is_eu,
        is_row,
        is_uk,
    ])

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

    if (is_loading) {
        return <ImagePlaceHolder />
    }

    return (
        <Flex max_width="690px" max_height="626px" tablet={{ max_height: '360px', ai: 'center' }}>
            <Slides images={slide_images} active_index={active_index} />
        </Flex>
    )
}

type SlidesProps = {
    images: Array<{ key: string; image: ImageDataLike }>
    active_index: number
}

const Slides = ({ images, active_index }: SlidesProps) => {
    return (
        <>
            {images?.map((slide, index) => {
                const { key, image } = slide
                return (
                    <StyledImage
                        key={key}
                        data={image}
                        alt="platform devices"
                        width="100%"
                        loading="eager"
                        $is_hidden={active_index !== index}
                        className="gatsby-image-wrapper"
                    />
                )
            })}
        </>
    )
}

export default PlatformSlideshow
