import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'
import device from 'themes/device'
import Triangle from 'images/svg/triangle.svg'

const VideoCardWrapper = styled.div`
    max-width: 384px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    height: auto;
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
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    height: 200px;
    width: 384px;
    position: relative;
    z-index: 1;
    overflow: hidden;

    @media ${device.mobileL} {
        width: 100%;
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
    padding: 1px 8px;
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

const VideoCard = ({ item, openVideo }) => {
    return (
        <VideoCardWrapper onClick={openVideo}>
            <ImageWrapper>
                <ImageOverlay />
                <CategoriesContainer jc="flex-start" fw="wrap">
                    {item.category.slice(0, 2).map((item_category) => (
                        <StyledCategories as="h4" type="paragraph-2" key={item_category}>
                            {item_category}
                        </StyledCategories>
                    ))}
                    {item.category.length > 2 && (
                        <StyledCategories as="h4" type="paragraph-2">
                            {`+${item.category.slice(2).length.toString()}`}
                        </StyledCategories>
                    )}
                </CategoriesContainer>
                <PlayButtonOval />
                <StyledTriangle src={Triangle} alt="play button" height={25} width={20} />
                <VideoDuration as="h5" type="paragraph-2" weight="bold">
                    {item.video_duration}
                </VideoDuration>
                <img
                    src={item.image}
                    alt="Video card"
                    width="100%"
                    style={{ objectFit: 'contain' }}
                />
            </ImageWrapper>
            <ContentWrapper>
                <Header as="h3" type="subtitle-2">
                    {item.title}
                </Header>
                <Header as="h4" type="paragraph-2" weight="normal" mt="8px" color="grey-40">
                    {item.date}
                </Header>
            </ContentWrapper>
        </VideoCardWrapper>
    )
}

VideoCard.propTypes = {
    item: PropTypes.arrayOf(Object),
    openVideo: PropTypes.func,
}

export default VideoCard
