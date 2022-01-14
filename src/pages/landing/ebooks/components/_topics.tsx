import React from 'react'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { Header, Li, QueryImage } from 'components/elements'
import checkIcon from 'images/common/ebooks/check-icon.png'
import device from 'themes/device'
import { localize, Localize } from 'components/localization'

type TopicsProps = {
    title?: string
    topicsImage: ImageDataLike
    topicsList: string[]
}

const FullWidth = styled.div`
    background-image: linear-gradient(to bottom, #eaf4f5 1%, rgba(242, 245, 248, 0) 99%);

    @media ${device.tabletL} {
        margin-top: 0;

        h5 {
            margin-top: 0;
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 100px;

    @media ${device.tabletL} {
        width: 100%;
        flex-direction: column;
        padding: 0 50px;
    }
    @media ${device.mobileL} {
        padding: 0 15px;
    }
`

const ItemList = styled.ul`
    font-size: 20px;
    width: 40%;
    margin-bottom: 50px;

    @media ${device.tabletL} {
        order: 2;
        width: 100%;
    }

    li {
        margin-bottom: 15px;
        display: flex;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
    }
    img {
        width: 16px;
        height: 16px;
        margin-right: 10px;
        object-fit: contain;
    }
`

const TopicImgWrapper = styled.div`
    width: 60%;
    margin-top: -120px;
    margin-bottom: 20px;

    @media ${device.tabletL} {
        width: 60%;
        margin-top: -60px;
    }
    @media ${device.tablet} {
        width: 70%;
    }
    @media ${device.mobileL} {
        width: 100%;
        margin-top: -60px;
    }
`

const Topics = ({ title, topicsImage, topicsList }: TopicsProps) => {
    return (
        <FullWidth>
            <Wrapper>
                <ItemList>
                    <Header
                        as="h5"
                        className="header"
                        mt="25px"
                        size="24px"
                        weight="bold"
                        lh={1.5}
                        color="var(--color-black-3)"
                        mb="20px"
                    >
                        {title ? localize(title) : localize('Topics covered')}
                    </Header>
                    {topicsList?.map((topic, index) => {
                        return (
                            <Li key={index} className="topic-item">
                                <img src={checkIcon} alt="Check Icon" />
                                <Localize translate_text={topic} />
                            </Li>
                        )
                    })}
                </ItemList>
                <TopicImgWrapper className="topic-wrapper">
                    <QueryImage data={topicsImage} alt="Forex Topics" />
                </TopicImgWrapper>
            </Wrapper>
        </FullWidth>
    )
}

export default Topics
