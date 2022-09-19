import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { VideoBannerProps } from '../../_video-banner'
import { RedirectLink } from '../recent-featured-posts/_style'
import VideoCarousel from './_VideoCarousel'
import { convertDate, getVideoObject } from 'common/utility'
import { Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const ParentWrapper = styled(Flex)`
    margin: 80px 0;
    position: relative;
    height: auto;
    padding: 160px 0 40px;

    @media ${device.tabletL} {
        padding: 73px 0 40px;
        margin: 40px 0;
    }
`
const BackgroundImageWrapper = styled.div`
    position: absolute;
    inset: 0 0 0 0;
    z-index: 1;
`
const BackgroundImageContainer = styled(Flex)`
    & > div {
        width: 100%;
    }
`
const GradientWrapper = styled.div`
    position: absolute;
    inset: 0 0 0 0;
    background: linear-gradient(
        251.14deg,
        rgba(14, 14, 14, 0.5632) 29.18%,
        rgba(7, 6, 6, 0.88) 85.14%
    );
    z-index: 2;

    @media ${device.tabletL} {
        background: linear-gradient(
            251.14deg,
            rgba(14, 14, 14, 0.5632) 29.18%,
            rgba(7, 6, 6, 0.88) 85.14%
        );
    }
`
const PlayerIconWrapper = styled(Flex)`
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    cursor: pointer;
    position: relative;
`
const PlayerIcon = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
`
const TagParentWrapper = styled(Flex)`
    @media ${device.tabletL} {
        margin-bottom: 8px;
    }
`
const TagWrapper = styled(Flex)`
    background: var(--color-orange-3);
    border-radius: 8px;
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px 4px;
`
const AllVideosButton = styled(LinkButton)`
    margin: 50px auto auto;

    &:hover {
        cursor: pointer;
    }
    @media ${device.laptopM} {
        width: 100%;
        margin: 30px auto 0;
    }
`

const Dbanner = ({ featured_video_list_data, non_featured_video_list_data }: VideoBannerProps) => {
    let featured_video
    if (featured_video_list_data && featured_video_list_data.length) {
        featured_video = featured_video_list_data[0]
    } else {
        featured_video = non_featured_video_list_data[0]
        non_featured_video_list_data.shift()
    }

    const {
        published_date,
        thumbnail_img,
        video_title,
        video_description,
        video_thumbnail,
        video_duration,
        video_slug,
        types,
    } = getVideoObject(featured_video)

    return (
        <>
            <ParentWrapper direction="column" bg_image={thumbnail_img}>
                <BackgroundImageWrapper>
                    <BackgroundImageContainer>
                        <GatsbyImage
                            image={getImage(video_thumbnail.imageFile)}
                            alt={thumbnail_img}
                        />
                    </BackgroundImageContainer>
                </BackgroundImageWrapper>
                <GradientWrapper />
                <Container direction="column" jc="flex-start" style={{ zIndex: 5 }}>
                    <Flex direction="column" jc="flex-start" height="auto">
                        <PlayerIconWrapper ai="center" width="64px" height="64px" mb="24px">
                            <RedirectLink to={`/academy/videos/${video_slug}/`}>
                                <PlayerIcon width="20px" height="20px" src={PlayIcon} />
                            </RedirectLink>
                        </PlayerIconWrapper>
                        <TagParentWrapper height="22px" jc="flex-start">
                            {types.slice(0, 2).map((t) => (
                                <TagWrapper key={t} ai="center" width="auto" p="1px 8px" mr="8px">
                                    <Header type="paragraph-2" color="orange-2">
                                        {t}
                                    </Header>
                                </TagWrapper>
                            ))}
                            {types.length > 2 && (
                                <TagWrapper ai="center" width="auto" p="1px 8px">
                                    <Header type="paragraph-2" color="orange-2">
                                        +2
                                    </Header>
                                </TagWrapper>
                            )}
                        </TagParentWrapper>

                        <Header as="h2" type="heading-2" color="white" mb="8px">
                            {video_title}
                        </Header>
                        <Header
                            as="p"
                            weight="normal"
                            type="subtitle-2"
                            mb="8px"
                            color="white"
                            max_width="894px"
                            mobile_max_width="100%"
                        >
                            {video_description}
                        </Header>
                        <Flex ai="center" jc="flex-start" height="24px">
                            <Header
                                as="p"
                                weight="normal"
                                type="paragraph-1"
                                color="grey-17"
                                width="auto"
                            >
                                {convertDate(published_date)}
                            </Header>
                            <StyledDot />
                            <Header
                                as="p"
                                weight="normal"
                                type="paragraph-1"
                                color="grey-17"
                                width="auto"
                            >
                                {video_duration}
                            </Header>
                        </Flex>
                    </Flex>
                    <VideoCarousel carousel_items={non_featured_video_list_data} />
                    <AllVideosButton tertiary_light to="/academy/videos/">
                        See all videos
                    </AllVideosButton>
                </Container>
            </ParentWrapper>
        </>
    )
}

export default Dbanner
