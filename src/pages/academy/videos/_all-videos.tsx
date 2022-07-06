import React from 'react'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import { RedirectLink } from '../components/recent-featured-posts/_style'
import VideoCard from './_video-card'
import { VideoDataType } from './index'
import Pagination from 'components/elements/pagination'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

type AllVideosProps = {
    video_data: VideoDataType
}

const AllVideos = ({ video_data }: AllVideosProps) => {
    const [is_mobile] = useBrowserResize()
    const [current_page, setCurrentPage] = React.useState(1)
    const desktop_max_posts = 9
    const mobile_max_posts = 9
    const posts_per_page = is_mobile ? mobile_max_posts : desktop_max_posts

    const index_of_last_post = current_page * posts_per_page
    const index_of_first_post = index_of_last_post - posts_per_page
    const current_videos = video_data.slice(index_of_first_post, index_of_last_post)

    const myRef = React.useRef(null)

    const paginate = (page_number) => {
        myRef.current.scrollIntoView()
        setCurrentPage(page_number)
    }

    return (
        <Container m="0 auto" fd="column">
            <Flex ref={myRef} jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/academy/" color="grey-5">
                    Home
                </LocalizedLinkText>
                <StyledImg src={RightArrow} alt="Right arrow" height={16} width={16} />
                <Text>All videos</Text>
            </Flex>
            <VideoGrid margin="8rem 0">
                {current_videos.map((item) => {
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
            {video_data.length > 8 && (
                <Pagination
                    posts_per_page={posts_per_page}
                    total_posts={video_data.length - 1}
                    paginate={paginate}
                    current_page={current_page}
                />
            )}
        </Container>
    )
}

export default AllVideos
