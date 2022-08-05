import React from 'react'
import styled from 'styled-components'
import { StandardImgWrapper } from '../common/_styles'
import { RedirectLink } from '../components/recent-featured-posts/_style'
import { Header, QueryImage } from 'components/elements'
import { convertDate } from 'common/utility'
import { Flex } from 'components/containers'
import device from 'themes/device'
import Triangle from 'images/svg/triangle.svg'
import { VideosType } from 'components/hooks/use-academy-data'

const VideoCardWrapper = styled.div`
    max-width: 384px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--color-grey-8);
    background: var(--color-white);
    transition: transform 0.3s;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
    }

    @media ${device.mobileL} {
        max-width: 328px;
        width: 328px;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    z-index: 1;
    width: 384px;
    height: 230px;

    @media ${device.mobileL} {
        width: 328px;
        height: 196px;
    }
`

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(14, 14, 14, 0.5);
`

const CategoriesContainer = styled(Flex)`
    position: absolute;
    align-items: flex-start;
    justify-content: flex-start;
    height: fit-content;
    padding: 8px;
    z-index: 3;
`

const StyledCategories = styled(Header)`
    width: fit-content;
    padding: 2px 8px 0;
    border-radius: 8px;
    background-color: var(--color-brown);
    color: var(--color-orange-2);
    margin: 0 8px 8px 0;
`

const PlayButtonOval = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80px;
    width: 80px;
    background-color: var(--color-white);
    opacity: 0.32;
    border-radius: 50%;
`

const StyledTriangle = styled.img`
    position: absolute;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
`

const VideoDuration = styled(Header)`
    width: auto;
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 3;
    border-radius: 3px;
    background-color: var(--color-black);
    color: var(--color-white);
    padding: 0 4px;
`

const ContentWrapper = styled.div`
    padding: 16px 24px;
`

type VideoCardProps = {
    item: VideosType
}

const VideoCard = ({ item }: VideoCardProps) => {
    const first_2_tags = item.tags?.slice(0, 2)
    const another_tags_number = item.tags.length > 2 ? `+${item.tags.length - 2}` : ''
    const converted_date = convertDate(item.published_date)
    return (
        // the extra div surrounding the videocard is to get around Safari's different
        // interpretation of height: 100%
        <RedirectLink to={`/academy/videos/${item.video_slug}/`}>
            <VideoCardWrapper>
                <ImageWrapper>
                    <ImageOverlay />
                    <CategoriesContainer jc="flex-start" fw="wrap">
                        {item.tags &&
                            first_2_tags.map((tag) => (
                                <StyledCategories
                                    as="h4"
                                    type="paragraph-2"
                                    key={tag?.tags_id?.tag_name}
                                >
                                    {tag?.tags_id?.tag_name}
                                </StyledCategories>
                            ))}
                        {another_tags_number && (
                            <StyledCategories as="h4" type="paragraph-2">
                                {another_tags_number}
                            </StyledCategories>
                        )}
                    </CategoriesContainer>
                    <PlayButtonOval />
                    <StyledTriangle src={Triangle} alt="play button" height={25} width={20} />
                    <VideoDuration as="h5" type="paragraph-2" weight="bold">
                        {item.video_duration}
                    </VideoDuration>
                    <StandardImgWrapper width="384px" height="230.40px">
                        <QueryImage
                            data={item.video_thumbnail.imageFile}
                            alt={item.video_description}
                            className="standard-query-img"
                        />
                    </StandardImgWrapper>
                </ImageWrapper>
                <ContentWrapper>
                    <Header as="h3" type="subtitle-2">
                        {item.video_title}
                    </Header>
                    <Header as="h4" type="paragraph-2" weight="normal" mt="8px" color="grey-40">
                        {converted_date}
                    </Header>
                </ContentWrapper>
            </VideoCardWrapper>
        </RedirectLink>
    )
}

export default VideoCard
