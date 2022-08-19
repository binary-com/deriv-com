import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { NonFeaturedVideoListDataType } from '../../index'
import { StandardImgWrapper } from '../../common/_styles'
import { RedirectLink } from '../recent-featured-posts/_style'
import { CustomCarousel } from './carousel/_custom-carousel'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { convertDate, getVideoObject } from 'common/utility'
import device from 'themes/device'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

type VideoCarouselProps = {
    carousel_items: NonFeaturedVideoListDataType
}

const SmallDetailsWrapper = styled(Flex)`
    @media ${device.tabletL} {
        padding-top: 0;
    }
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px 4px;
`
const ItemsMainWrapper = styled(Flex)`
    min-width: 327px;
    cursor: pointer;

    @media ${device.tabletL} {
        min-width: 300px;
        height: auto;
    }
`

const PlayerIconWrapper = styled(Flex)`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    cursor: pointer;
    position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
    top: ${(props) => (props.absolute ? '50%' : 'unset')};
    left: 50%;
    transform: ${(props) => (props.absolute ? 'translate(-50%, -50%)' : 'translate(-50%, 0)')};
    @media ${device.tabletL} {
        width: 32px;
        height: 32px;
    }
`
const IconDiv = styled.div`
    position: relative;
    width: 100%;
`
const PlayerIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    width: 16px;
    height: 16px;
    @media ${device.tabletL} {
        width: 10px;
        height: 10px;
    }
`

const VideoCarousel = ({ carousel_items }: VideoCarouselProps) => {
    const settings = {
        options: {
            align: 0,
            draggable: false,
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
            overflow: 'hidden',
        },
        slide_style: {
            width: '372px',
            marginRight: '24px',
        },
        slide_mobile_style: {
            width: '100%',
            paddingRight: '16px',
        },
        view_port: {
            overflow: 'hidden',
        },
        custom_blog_video_nav: 'true',
        custom_blog_video_nav_style: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bottom: 'unset',
            right: 'unset',
            custom_chevron_color: 'custom',
            custom_is_displayed_on_mobile: true,
        },
    }

    return (
        <>
            <Flex direction="column" jc="flex-start">
                <Flex height="auto">
                    <CustomCarousel {...settings} custom_blog_video_nav>
                        {carousel_items.map((item, index) => {
                            const {
                                published_date,
                                thumbnail_img_alt,
                                video_title,
                                video_slug,
                                video_duration,
                            } = getVideoObject(item)
                            return (
                                <RedirectLink key={index} to={`/academy/videos/${video_slug}/`}>
                                    <ItemsMainWrapper jc="flex-start">
                                        <StandardImgWrapper
                                            width="160px"
                                            height="96px"
                                            tabletL_width="120px"
                                            tabletL_height="72px"
                                            border_radius="unset"
                                            tabletL_border_radius="unset"
                                        >
                                            <GatsbyImage
                                                image={
                                                    item.video_thumbnail.imageFile.childImageSharp
                                                        .gatsbyImageData
                                                }
                                                alt={thumbnail_img_alt}
                                            />
                                            <PlayerIconWrapper absolute ai="center">
                                                <IconDiv>
                                                    <PlayerIcon src={PlayIcon} />
                                                </IconDiv>
                                            </PlayerIconWrapper>
                                        </StandardImgWrapper>
                                        <Flex direction="column" ml="8px" width="180px">
                                            <Header
                                                as="p"
                                                type="paragraph-1"
                                                color="white"
                                                mb="4px"
                                            >
                                                {video_title}
                                            </Header>
                                            <SmallDetailsWrapper
                                                height="24px"
                                                jc="flex-start"
                                                ai="center"
                                            >
                                                <Header
                                                    as="p"
                                                    type="paragraph-2"
                                                    weight="normal"
                                                    color="grey-17"
                                                    width="auto"
                                                >
                                                    {convertDate(published_date)}
                                                </Header>
                                                <StyledDot />
                                                <Header
                                                    as="p"
                                                    type="paragraph-2"
                                                    weight="normal"
                                                    color="grey-17"
                                                    width="auto"
                                                >
                                                    {video_duration}
                                                </Header>
                                            </SmallDetailsWrapper>
                                        </Flex>
                                    </ItemsMainWrapper>
                                </RedirectLink>
                            )
                        })}
                    </CustomCarousel>
                </Flex>
            </Flex>
        </>
    )
}

export default VideoCarousel
