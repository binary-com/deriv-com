import React, { useCallback, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import QueryImage from 'components/elements/query-image'
import device from 'themes/device'

const query = graphql`
    query {
        hero_platform1: file(relativePath: { eq: "home/hero_platform1.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform2: file(relativePath: { eq: "home/hero_platform2.png" }) {
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

const StyledImage = styled(QueryImage)<{ $is_hidden: boolean; $is_mounted: boolean }>`
    opacity: ${({ $is_hidden }) => ($is_hidden ? '0' : '1')};
    display: ${({ $is_hidden }) => ($is_hidden ? 'none' : 'block')};
    visibility: ${({ $is_hidden }) => ($is_hidden ? 'unset' : 'visible')};
    transform: ${({ $is_hidden }) => ($is_hidden ? 'scaleX(0)' : 'scaleX(1)')};
    -webkit-animation: fade 1s;
    animation: fade 1s;
    -moz-animation: fade 1s;
    -o-animation: fade 1s;

    @media ${device.tabletL} {
        -webkit-animation: unset;
        animation: unset;
        -moz-animation: unset;
        -o-animation: unset;
    }

    .gatsby-image-wrapper {
        div {
            @media ${device.tabletL} {
                transition: none;
            }
        }
    }

    @-webkit-keyframes fade {
        0% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fade {
        0% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fade {
        0% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
    @-o-keyframes fade {
        0% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`

const PlatformSlideshow = () => {
    const [active_index, setActiveIndex] = useState(0)
    const [is_mounted, setMounted] = useState(false)
    const data = useStaticQuery(query)

    const slide_images = [
        { key: 'hero1', image: data.hero_platform1 },
        { key: 'hero2', image: data.hero_platform2 },
        { key: 'hero3', image: data.hero_platform3 },
        { key: 'hero4', image: data.hero_platform4 },
    ]

    const setNextImage = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex >= slide_images.length - 1 ? 0 : prevIndex + 1))
    }, [slide_images])

    useEffect(() => {
        let slideshow_timer
        if (is_mounted) {
            slideshow_timer = setInterval(() => {
                setNextImage()
            }, 5000)
        }
        setTimeout(() => {
            setMounted(true)
        }, 5000)

        return () => clearInterval(slideshow_timer)
    }, [is_mounted])

    return (
        <Flex tablet={{ min_height: '280px', ai: 'center' }}>
            <Slides images={slide_images} active_index={active_index} is_mounted={is_mounted} />
        </Flex>
    )
}

type SlidesProps = {
    images: Array<{ key: string; image: ImageDataLike }>
    active_index: number
    is_mounted: boolean
}

const Slides = ({ images, active_index, is_mounted }: SlidesProps) => {
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
                        $is_mounted={is_mounted}
                        className="gatsby-image-wrapper"
                    />
                )
            })}
        </>
    )
}

export default PlatformSlideshow
