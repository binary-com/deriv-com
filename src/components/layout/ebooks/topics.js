// import React, { useState, useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { graphql, useStaticQuery } from 'gatsby'
import checkIcon from 'images/common/ebooks/check-icon.png'
// import { size } from 'themes/device'
// import { isBrowser } from 'common/utility'

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

    h5 {
        margin-top: 25px;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        color: #333333;
        margin-bottom: 20px;
    }
`

const Topics = ({ topicsImage }) => {
    return (
        <FullWidth>
            <Wrapper>
                <div>
                    <h5>Topics covered</h5>
                    <ItemList>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            The basics of forex
                        </li>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            Who uses the forex market?
                        </li>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            Which currencies are on the forex market?
                        </li>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            Why trade forex on Deriv?
                        </li>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            Advantages of trading forex on DTrader
                        </li>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            Advantages of trading forex on DMT5
                        </li>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            Currency pairs you can trade on Deriv
                        </li>
                        <li>
                            <img src={checkIcon} alt="Check Icon" />
                            Forex in more detail
                        </li>
                    </ItemList>
                </div>
                <Image src={topicsImage} alt="Forex Topics" />
            </Wrapper>
        </FullWidth>
    )
}

Topics.propTypes = {
    topicsImage: PropTypes.any,
}

export default Topics
