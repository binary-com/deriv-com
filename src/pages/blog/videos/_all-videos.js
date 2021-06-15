import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import Triangle from 'images/svg/triangle.svg'
import RightArrow from 'images/svg/black-right-arrow.svg'

const VideoGrid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin: 8rem 0;
    grid-template-columns: repeat(3, 384px);
    grid-row-gap: 60px;
    grid-column-gap: 24px;
    grid-template-rows: auto;

    @media (max-width: 1240px) {
        grid-template-columns: repeat(2, 384px);
    }
    @media (max-width: 815px) {
        grid-template-columns: 384px;
        grid-row-gap: 40px;
    }
    @media ${device.mobileL} {
        grid-template-columns: 100%;
    }
`

const VideoCardWrapper = styled.div`
    max-width: 384px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    height: ${(props) => (props.height ? props.height : 'auto')};
    width: 100%;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
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

const StyledCategories = styled(Text)`
    width: auto;
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 3;
    border-radius: 8px;
    background-color: #33140e;
    color: #ff7457;
    padding: 1px 8px;
`

const PlayButtonOval = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
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
    transform: translateX(-50%) translateY(-50%);
`

const VideoDuration = styled(Text)`
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

const VideoCard = ({ item }) => {
    return (
        <VideoCardWrapper>
            <ImageWrapper>
                <ImageOverlay />
                <StyledCategories weight="bold" size="14px">
                    {item.category}
                </StyledCategories>
                <PlayButtonOval />
                <StyledTriangle src={Triangle} alt="play button" height={25} width={20} />
                <VideoDuration size="14px" lh="20px">
                    {item.video_duration}
                </VideoDuration>
                <img src={item.image} alt={localize('Office')} height={200} width={384} />
            </ImageWrapper>
            <div style={{ padding: '16px 24px' }}>
                <Header as="h3" size="20px">
                    {item.title}
                </Header>
                <Text size="12px" mt="8px" color="grey-40">
                    {item.date}
                </Text>
            </div>
        </VideoCardWrapper>
    )
}

VideoCard.propTypes = {
    item: PropTypes.arrayOf(Object),
}

const AllVideos = ({ video_data }) => {
    return (
        <Container fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/blog" color="grey-5">
                    {localize('Home')}
                </LocalizedLinkText>
                <img
                    src={RightArrow}
                    alt={localize('right arrow')}
                    height="16"
                    width="16"
                    style={{ margin: '0 8px' }}
                />
                <Text>{localize('All videos')}</Text>
            </Flex>
            <VideoGrid style={{ justifyContent: 'center' }}>
                {video_data.map((item) => {
                    return (
                        <VideoCard
                            title={item.title}
                            image={item.image}
                            category={item.category}
                            key={item.id}
                            item={item}
                        />
                    )
                })}
            </VideoGrid>
            {/* <video width="80%" height="480" controls autoPlay>
                <source src="../../markets/static/video/globe.mp4" type="video/mp4" />
                <source src="../../markets/static/video/globe.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video> */}
        </Container>
    )
}

AllVideos.propTypes = {
    video_data: PropTypes.arrayOf(Object),
}

export default AllVideos
