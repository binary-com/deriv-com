import React, { MouseEventHandler, ReactElement } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

export type QueryImageProps = {
    alt: ReactElement | string
    className?: string
    data: ImageDataLike | IGatsbyImageData
    keyName: string
    height?: string
    width?: string
    max_width?: string
    loading?: 'eager' | 'lazy'
    disable_transition?: boolean
    onMouseOver?: MouseEventHandler<HTMLDivElement>
    onMouseOut?: MouseEventHandler<HTMLDivElement>
    onClick?: MouseEventHandler<HTMLDivElement>
}

export type ImageWrapperProps = {
    bimage: string
    width: string
    height: string
    className?: string
    loading: 'eager' | 'lazy'
    disable_transition?: boolean
}

const query = graphql`
    query {
        sprite_hero: file(relativePath: { eq: "home/MergedImages-new.png" }) {
            ...homePageHeroFadeIn
        }
        background_hero: file(relativePath: { eq: "home/hero_bg.png" }) {
            ...homePageHeroFadeIn
        }
    }
`

export const ImageWrapper = styled.div<ImageWrapperProps>`
    & .gatsby-image-wrapper {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height};
    }
    .gatsby-image-wrapper [data-main-image] {
        ${({ loading, disable_transition }) => {
            if (disable_transition && loading === 'eager') {
                return css`
                    transition: none;
                    opacity: 1;
                `
            }
        }};
    }
    .gatsby-image-wrapper img {
        height: 700px !important;
    }
    .gatsby-image-wrapper .hero1 {
        background: url(${(props) => props.bimage}) 120px 35px;
        background-repeat: no-repeat;
        background-size: 1911px;
    }
    .gatsby-image-wrapper .hero2 {
        background: url(${(props) => props.bimage}) -590px 35px;
        background-repeat: no-repeat;
        background-size: 1911px;
    }
    .gatsby-image-wrapper .hero3 {
        background: url(${(props) => props.bimage}) -1280px 35px;
        background-repeat: no-repeat;
        background-size: 1911px;
    }
`

const QueryImageCarousel = ({
    alt,
    className,
    data,
    keyName,
    disable_transition = false,
    height,
    loading = 'lazy',
    onClick,
    width,
    ...props
}: QueryImageProps) => {
    const image = getImage(data)
    const heroe_data = useStaticQuery(query)
    //console.log('heroe_data heroe_data heroe_data1', heroe_data)
    console.log(
        'background_hero',
        heroe_data.background_hero.childImageSharp.gatsbyImageData.images.fallback.src,
    )
    console.log('key', keyName)
    if (data) {
        return (
            <ImageWrapper
                bimage={heroe_data.sprite_hero.childImageSharp.gatsbyImageData.images.fallback.src}
                loading={loading}
                width={width}
                height={height}
                disable_transition={disable_transition}
                className={className}
                onClick={onClick}
            >
                <GatsbyImage
                    key={keyName}
                    class={keyName}
                    image={image}
                    alt={alt as string}
                    loading={loading}
                    {...props}
                />
                {/* <div className={'gatsby-image-wrapper ' + keyName}>
                    <img
                        className={keyName}
                        key={keyName}
                        src="http://localhost:8000/static/6290c51829490e27027998612fa3cf2d/d7128/hero_bg.avif"
                        alt="carousel"
                        loading={loading}
                    />
                </div> */}
                {/* <img
                    className={keyName}
                    key={keyName}
                    src="http://localhost:8000/static/96fd9c5b4bbde1494f22e49dfda80529/920d3/sprite_hero.webp"
                    alt="carousel"
                    loading={loading}
                /> */}
                {/* <StaticImage
                    src="http://localhost:8000/static/96fd9c5b4bbde1494f22e49dfda80529/920d3/sprite_hero.webp"
                    alt="imgs"
                /> */}
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImageCarousel
