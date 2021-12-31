import React, { useCallback, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { DesktopWrapper, MobileWrapper } from 'components/containers/wrapper'
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
        hero_platform1_m: file(relativePath: { eq: "home/hero_platform1_m.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform2_m: file(relativePath: { eq: "home/hero_platform2_m.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform3_m: file(relativePath: { eq: "home/hero_platform3_m.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform4_m: file(relativePath: { eq: "home/hero_platform4_m.png" }) {
            ...homePageHeroFadeIn
        }
    }
`

const StyledImage = styled(QueryImage)<{ $is_hidden: boolean; $is_mounted: boolean }>`
    display: ${({ $is_hidden }) => ($is_hidden ? 'none' : 'block')};
    opacity: ${({ $is_hidden }) => ($is_hidden ? '0' : '1')};

    .gatsby-image-wrapper {
        div {
            transition: ${({ $is_mounted }) => ($is_mounted ? 'opacity ease-in-out 2s' : 'none')};
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

    const mobile_slide_images = [
        { key: 'hero1', image: data.hero_platform1_m },
        { key: 'hero2', image: data.hero_platform2_m },
        { key: 'hero3', image: data.hero_platform3_m },
        { key: 'hero4', image: data.hero_platform4_m },
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
        }, 6000)

        return () => clearInterval(slideshow_timer)
    }, [is_mounted])

    return (
        <div>
            <DesktopWrapper media={device.tablet}>
                <Slides images={slide_images} active_index={active_index} is_mounted={is_mounted} />
            </DesktopWrapper>
            <MobileWrapper media={device.tablet}>
                <Flex min_height="280px" ai="center">
                    <Slides
                        images={mobile_slide_images}
                        active_index={active_index}
                        is_mounted={is_mounted}
                    />
                </Flex>
            </MobileWrapper>
        </div>
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
                        height="346"
                        loading={active_index === index ? 'eager' : 'lazy'}
                        $is_hidden={active_index !== index}
                        $is_mounted={is_mounted}
                    />
                )
            })}
        </>
    )
}

export default PlatformSlideshow
