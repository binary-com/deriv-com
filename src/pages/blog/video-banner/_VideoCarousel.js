import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Carousel, Header, QueryImage } from 'components/elements'
import { NextButton, PrevButton } from 'components/elements/carousel'
import device from 'themes/device'

const query = graphql`
    query {
        video_banner_1: file(relativePath: { eq: "blog/video/img-thumbnail-1.png" }) {
            ...fadeIn
        }
        video_banner_2: file(relativePath: { eq: "blog/video/img-thumbnail-2.png" }) {
            ...fadeIn
        }
        video_banner_3: file(relativePath: { eq: "blog/video/img-thumbnail-3.png" }) {
            ...fadeIn
        }
        video_banner_4: file(relativePath: { eq: "blog/video/img-thumbnail.png" }) {
            ...fadeIn
        }
        video_banner_5: file(relativePath: { eq: "blog/video/img-thumbnail-1.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
`
const DetailsWrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 8px;
    max-width: 180px;
`
const StyledHeader = styled(Header)`
    margin-bottom: 4px;
    color: var(--color-white);
    @media ${device.tabletL} {
        font-size: 40px;
    }
`
const CarouselWrapper = styled(Flex)`
    height: auto;
`
// const DividerWrapper = styled(Flex)`
//     height: auto;
//     align-items: center;
//     padding: 20px 0 32px;
//     border-top: rgba(230, 233, 233, 0.6) solid 1px;
// `
// const Divider = styled.hr`
//     color: rgba(230, 233, 233, 0.6);
//     height: 1px;
// `
const SmallDetailsWrapper = styled(Flex)`
    padding-top: 8px;
    height: 24px;
    font-weight: normal;
    justify-content: flex-start;
    align-items: center;
`
const StyledPublishedDate = styled(Header)`
    color: var(--color-grey-17);
    font-weight: normal;
    width: auto;
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px;
`
const StyledDuration = styled(Header)`
    color: var(--color-grey-17);
    width: auto;
    font-weight: normal;
`
const ItemsMainWrapper = styled(Flex)`
    min-width: 327px;
`
const NavigationWrapper = styled(Flex)`
    align-items: center;
    margin: 41.5px 0 31.5px;
`
const Divider = styled(Flex)`
    width: 1120px;
    height: 1px;
    border-top: 1px solid rgba(230, 233, 233, 0.6);
`
const NavIconWrapper = styled(Flex)`
    width: auto;
`
const IconWrapper = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid var(--color-white);
    position: relative;

    &:first-child {
        margin-right: 16px;
    }
`

const VideoCarousel = ({ carousel_items }) => {
    const data = useStaticQuery(query)

    const settings = {
        options: {
            align: 'start',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        slide_style: {
            maxWidth: '327px',
            flex: '0 0 80%',
            height: 'auto',
            position: 'relative',
            marginRight: '20px',
            marginLeft: '20px',
        },
        vertical_container: {
            marginLeft: '-21px',
        },
        chevron_style: {
            chevron_color: 'white',
        },
    }

    const prev_btn_style = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bottom: 'unset',
        right: 'unset',
    }

    const next_btn_style = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bottom: 'unset',
        right: 'unset',
    }

    return (
        <MainWrapper>
            <NavigationWrapper>
                <Divider />
                <NavIconWrapper>
                    <IconWrapper>
                        <PrevButton enabled={true} is_reviews={true} style={prev_btn_style} />
                    </IconWrapper>
                    <IconWrapper>
                        <NextButton enabled={true} is_reviews={true} style={next_btn_style} />
                    </IconWrapper>
                </NavIconWrapper>
            </NavigationWrapper>
            <CarouselWrapper>
                <Carousel {...settings} has_autoplay autoplay_interval={6000}>
                    {carousel_items.map((item, index) => {
                        return (
                            <ItemsMainWrapper key={index}>
                                <QueryImage data={data[item['image']]} width="145px" />
                                <DetailsWrapper>
                                    <StyledHeader type="main-paragraph">{item.title}</StyledHeader>
                                    <SmallDetailsWrapper>
                                        <StyledPublishedDate type="main-paragraph">
                                            {item.date}
                                        </StyledPublishedDate>
                                        <StyledDot />
                                        <StyledDuration type="main-paragraph">
                                            {item.duration}
                                        </StyledDuration>
                                    </SmallDetailsWrapper>
                                </DetailsWrapper>
                            </ItemsMainWrapper>
                        )
                    })}
                </Carousel>
            </CarouselWrapper>
        </MainWrapper>
    )
}

VideoCarousel.propTypes = {
    carousel_items: PropTypes.array,
}
export default VideoCarousel
