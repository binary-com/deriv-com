import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header, Li } from 'components/elements'
import checkIcon from 'images/common/ebooks/check-icon.png'

const ItemList = styled.ul`
    font-size: 20px;

    li {
        margin-bottom: 10px;
        display: flex;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
    }
    img {
        width: 16px;
        margin-right: 10px;
        object-fit: contain;
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 100px auto 0;
    padding: 0 50px;
`

const Image = styled.img`
    width: 650px;
    position: relative;
    top: -57px;
`

const FullWidth = styled.div`
    background-image: linear-gradient(to bottom, #eaf4f5 1%, rgba(242, 245, 248, 0) 99%);

    .header {
        margin-top: 25px;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        color: #333333;
        margin-bottom: 20px;
    }
`

const Topics = ({ topicsImage, topicsList }) => {
    return (
        <FullWidth>
            <Wrapper>
                <ItemList>
                    <Header as="h5" className="header">
                        Topics covered
                    </Header>
                    {topicsList.map((topic, index) => {
                        return (
                            <Li key={index} className="topic-item">
                                <img src={checkIcon} alt="Check Icon" />
                                {topic}
                            </Li>
                        )
                    })}
                </ItemList>
                <Image src={topicsImage} alt="Forex Topics" />
            </Wrapper>
        </FullWidth>
    )
}

Topics.propTypes = {
    topicsImage: PropTypes.any,
    topicsList: PropTypes.array,
}

export default Topics
