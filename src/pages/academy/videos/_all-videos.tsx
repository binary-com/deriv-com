import React from 'react'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import { RedirectLink } from '../components/recent-featured-posts/_style'
import VideoCard from './_video-card'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { VideosType } from 'components/hooks/use-academy-data'

type AllVideosProps = {
    video_data: VideosType[]
}

const AllVideos = ({ video_data }: AllVideosProps) => {
    return (
        <Container m="0 auto" fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/academy/" color="grey-5">
                    Home
                </LocalizedLinkText>
                <StyledImg src={RightArrow} alt="Right arrow" height={16} width={16} />
                <Text>All videos</Text>
            </Flex>
            <VideoGrid margin="8rem 0">
                {video_data.map((item) => {
                    return (
                        <RedirectLink
                            key={item.video_id}
                            to={`/academy/videos/${item.video_slug}/`}
                        >
                            <VideoCard item={item} />
                        </RedirectLink>
                    )
                })}
            </VideoGrid>
        </Container>
    )
}

export default AllVideos
