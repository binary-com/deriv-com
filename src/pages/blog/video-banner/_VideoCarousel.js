import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Carousel, Header, QueryImage } from 'components/elements'
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
    max-width: 1200px;
`
const DetailsWrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 8px;
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
    }

    return (
        <MainWrapper>
            <CarouselWrapper>
                <Carousel {...settings}>
                    {carousel_items.map((item, index) => {
                        return (
                            <ItemsMainWrapper key={index}>
                                <QueryImage data={data[item['image']]} />
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
