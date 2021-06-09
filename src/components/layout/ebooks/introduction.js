import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header, Text, Li } from 'components/elements'
import checkIcon from 'images/common/ebooks/check-icon.png'
import BackgroundPattern from 'images/svg/ebook-intro-bg.svg'
import device from 'themes/device'

const BacgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${BackgroundPattern});
    background-size: cover;
`

const MediaWapper = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 50px;

    img.intro-forex {
        align-self: center;
        margin-right: 82px;
        object-fit: contain;
    }
    h3.intro-text {
        font-size: 48px;
        font-weight: bold;
        line-height: 1.25;
        color: #333333;
        margin-bottom: 20px;
    }

    @media ${device.tabletL} {
        margin: 0 auto;
        padding: 120px 15px;

        h3.intro-text {
            font-size: 30px;
            text-align: center;
        }
    }

    @media ${device.tabletS} {
        img.intro-forex {
            display: none;
        }
        h3.intro-text {
            font-size: 30px;
        }
    }
`
const MediaBody = styled.div`
    flex: 1;
    font-size: 20px;
    align-self: center;

    p.intro-desc {
        margin-bottom: 20px;
    }
    p.intro-desc,
    li {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        color: #333333;
        margin-bottom: 15px;
        display: flex;
    }
    li {
        line-height: 18px;
        margin-bottom: 20px;
    }
    h5 {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        color: #333333;
        margin-bottom: 20px;
        margin-top: 30px;
    }
    img {
        height: 476px;
    }
    li > img {
        height: 16px;
        margin-right: 10px;
        object-fit: contain;
    }
`

const MediaItemList = styled.ul`
    font-size: 20px;
`

const Introduction = ({ introImage, imageWidth, introPara, subPara, introList }) => {
    return (
        <BacgroundWrapper>
            <MediaWapper>
                <img
                    className="intro-forex"
                    width={`${imageWidth}px`}
                    src={introImage}
                    alt="Generic placeholder image"
                />
                <MediaBody>
                    <Header as="h3" className="mt-0 intro-text">
                        Introduction
                    </Header>
                    <Text className="intro-desc">{introPara}</Text>
                    {subPara && <Text className="intro-desc">{subPara}</Text>}
                    {introList && (
                        <>
                            <Header as="h5">In this book you’ll learn:</Header>
                            <MediaItemList>
                                {introList?.map((point, index) => {
                                    return (
                                        <Li key={index}>
                                            <img src={checkIcon} alt="Check Icon" />
                                            {point}
                                        </Li>
                                    )
                                })}
                            </MediaItemList>
                        </>
                    )}
                </MediaBody>
            </MediaWapper>
        </BacgroundWrapper>
    )
}

Introduction.propTypes = {
    imageWidth: PropTypes.number,
    introImage: PropTypes.any,
    introList: PropTypes.array,
    introPara: PropTypes.string,
    subPara: PropTypes.string,
}

export default Introduction
