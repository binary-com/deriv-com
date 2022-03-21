import React, { useCallback, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import QueryImage from 'components/elements/query-image'
import device from 'themes/device'
import { getCountryRule } from 'components/containers/visibility'

const query = graphql`
    query {
        hero_platform1: file(relativePath: { eq: "home/hero_platform1.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform1_eu: file(relativePath: { eq: "home/hero_platform1_eu.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform1_uk: file(relativePath: { eq: "home/hero_platform1_uk.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform2: file(relativePath: { eq: "home/hero_platform2.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform2_eu: file(relativePath: { eq: "home/hero_platform2_eu.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform2_uk: file(relativePath: { eq: "home/hero_platform2_uk.png" }) {
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
    const { is_eu, is_uk } = getCountryRule()

    const slide_images = () => {
        if (is_eu) {
            return [
                { key: 'hero1_eu', image: data.hero_platform1_eu },
                { key: 'hero2_eu', image: data.hero_platform2_eu },
            ]
        }
        if (is_uk) {
            return [
                { key: 'hero1_uk', image: data.hero_platform1_uk },
                { key: 'hero2_uk', image: data.hero_platform2_uk },
            ]
        }
        return [
            { key: 'hero1', image: data.hero_platform1 },
            { key: 'hero2', image: data.hero_platform2 },
            { key: 'hero3', image: data.hero_platform3 },
            { key: 'hero4', image: data.hero_platform4 },
        ]
    }

    const setNextImage = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex >= slide_images().length - 1 ? 0 : prevIndex + 1))
    }, [slide_images])

    useEffect(() => {
        const slideshow_timer = setInterval(() => {
            setNextImage()
        }, 5000)

        return () => clearInterval(slideshow_timer)
    }, [slide_images])

    return (
        <Flex max_width="690px" max_height="626px" tablet={{ max_height: '360px', ai: 'center' }}>
            <Slides images={slide_images()} active_index={active_index} />
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
            {images.map((slide, index) => {
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
