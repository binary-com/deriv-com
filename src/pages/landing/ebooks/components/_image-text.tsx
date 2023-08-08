import React from 'react'
import styled from 'styled-components'
import { ImageTextAndIntroductionProps } from './_types'
import { Header, Text, Li } from 'components/elements'
import checkIcon from 'images/common/ebooks/check-icon.png'
import BackgroundPattern from 'images/svg/landing/ebook-intro-bg.svg'
import device from 'themes/device'
import { localize, Localize } from 'components/localization'

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 50px 60px 80px;
    background-image: url(${BackgroundPattern});
    background-size: cover;
    @media ${device.tabletL} {
        padding: 5% 35px 10%;
    }
    @media ${device.tabletS} {
        padding: 10% 15px 18%;
    }
`

const MediaWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;

    img.intro-forex {
        align-self: center;
        margin-right: 82px;
        object-fit: contain;
    }
    h3.intro-text {
        font-size: 48px;
        font-weight: bold;
        line-height: 1.25;
        color: var(--color-black-3);
        margin-bottom: 20px;
    }

    @media ${device.tabletL} {
        margin: 0 auto;

        img.intro-forex {
            margin: 0 auto 20px;
            padding: 25px;
        }
        h3.intro-text {
            font-size: 30px;
            text-align: center;
        }
    }

    @media ${device.tabletS} {
        h3.intro-text {
            font-size: 30px;
        }
    }
`
const MediaBody = styled.div`
    flex: 1;
    font-size: 20px;
    align-self: center;

    p.intro-desc,
    li {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        color: var(--color-black-3);
        margin-bottom: 15px;
        display: flex;
    }
    li {
        line-height: 18px;
        margin-bottom: 20px;
    }
    li > img {
        height: 16px;
        width: 16px;
        margin-right: 10px;
        object-fit: contain;
    }
`

const MediaItemList = styled.ul`
    font-size: 20px;
`

const ImageText = ({
    introImage,
    imageWidth,
    introPara,
    subPara,
    introList,
}: ImageTextAndIntroductionProps) => {
    return (
        <BackgroundWrapper>
            <MediaWrapper>
                <img
                    className="intro-forex"
                    width={`${imageWidth}px`}
                    src={introImage}
                    alt={localize('_t_Generic placeholder image_t_')}
                />
                <MediaBody>
                    <Header as="h3" className="intro-text">
                        <Localize translate_text="_t_Introduction_t_" />
                    </Header>
                    <Text className="intro-desc" mb="20px">
                        <Localize translate_text={introPara} />
                    </Text>
                    {subPara && (
                        <Text className="intro-desc">
                            <Localize translate_text={subPara} />
                        </Text>
                    )}
                    {introList && (
                        <>
                            <Header
                                as="h5"
                                type="sub-section-title"
                                weight="bold"
                                lh="1.5"
                                color="var(--color-black-3)"
                                mb="20px"
                                mt="30px"
                            >
                                <Localize translate_text="_t_In this book you’ll learn:_t_" />
                            </Header>
                            <MediaItemList>
                                {introList?.map((point) => {
                                    return (
                                        <Li key={point}>
                                            <img
                                                src={checkIcon}
                                                alt={localize('_t_Check Icon_t_')}
                                            />
                                            <Localize translate_text={point} />
                                        </Li>
                                    )
                                })}
                            </MediaItemList>
                        </>
                    )}
                </MediaBody>
            </MediaWrapper>
        </BackgroundWrapper>
    )
}

export default ImageText
