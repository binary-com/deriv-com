import React from 'react'
import styled from 'styled-components'
import { ImageTextAndIntroductionProps } from './_types'
import { Header, Text, Li } from 'components/elements'
import checkIcon from 'images/common/ebooks/check-icon.png'
import BackgroundPattern from 'images/svg/landing/ebook-intro-bg.svg'
import device from 'themes/device'
import { localize, Localize } from 'components/localization'

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

const Introduction = ({
    introImage,
    imageWidth,
    introPara,
    subPara,
    introList,
}: ImageTextAndIntroductionProps) => {
    return (
        <BacgroundWrapper>
            <MediaWapper>
                <img
                    className="intro-forex"
                    width={`${imageWidth}px`}
                    height="462 px"
                    src={introImage}
                    alt={localize('_t_Generic placeholder image_t_')}
                />
                <MediaBody>
                    <Header as="h3" className="mt-0 intro-text">
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
            </MediaWapper>
        </BacgroundWrapper>
    )
}

export default Introduction
