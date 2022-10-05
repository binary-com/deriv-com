import React, { useState, useEffect, useRef } from 'react'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import { RedirectLink } from '../components/recent-featured-posts/_style'
import VideoCard from './_video-card'
import { VideosType } from 'components/hooks/use-academy-data'
import Pagination from 'components/elements/pagination'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { queryParams } from 'common/utility'

type AllVideosProps = {
    video_data: VideosType[]
}

const AllVideos = ({ video_data }: AllVideosProps) => {
    const url_page_number = Number(queryParams.get('page') || 1)

    // Our grid items change in 1333 width which is our tablet size
    const tablet_width = 1333
    const [show_pagination, setShowPagination] = useState(false)
    const [is_mobile] = useBrowserResize()
    const [is_tablet] = useBrowserResize(tablet_width)
    const [current_page, setCurrentPage] = useState(url_page_number)
    const desktop_max_videos = 18
    const tablet_max_videos = 12
    const mobile_max_videos = 10
    const videos_per_page =
        (is_mobile && mobile_max_videos) || (is_tablet && tablet_max_videos) || desktop_max_videos

    const index_of_last_post = current_page * videos_per_page
    const index_of_first_post = index_of_last_post - videos_per_page
    const current_videos = video_data.slice(index_of_first_post, index_of_last_post)

    const myRef = useRef(null)

    const paginate = (page_number) => {
        myRef.current.scrollIntoView({ behavior: 'smooth' })
        setCurrentPage(page_number)
    }

    useEffect(() => {
        if (is_mobile) {
            video_data.length >= mobile_max_videos && setShowPagination(true)
        } else if (is_tablet) {
            video_data.length >= tablet_max_videos && setShowPagination(true)
        } else if (!is_mobile && !is_tablet) {
            video_data.length >= desktop_max_videos && setShowPagination(true)
        } else {
            setShowPagination(false)
        }
    }, [is_mobile, is_tablet, video_data])

    return (
        <Container ref={myRef} m="0 auto" fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
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
                            key={item.video_slug}
                            to={`/academy/videos/${item.video_slug}/`}
                        >
                            <VideoCard item={item} />
                        </RedirectLink>
                    )
                })}
            </VideoGrid>
            {show_pagination && (
                <Pagination
                    items_per_page={videos_per_page}
                    total_items={video_data.length}
                    paginate={paginate}
                    current_page={current_page}
                />
            )}
        </Container>
    )
}

export default AllVideos
