// import React, { useState, useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
import introForexEbook from 'images/common/ebooks/introduction-forex-ebook.png'
import checkIcon from 'images/common/ebooks/check-icon.png'
import { WithIntl } from 'components/localization'
// import { size } from 'themes/device'
// import { isBrowser } from 'common/utility'

const MediaWapper = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: 200px auto 0;
    padding: 0 50px;

    > img {
        align-self: center;
        width: 142px;
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
`
const MediaBody = styled.div`
    flex: 1;
    font-size: 20px;
    align-self: center;

    p.intro-desc {
        margin-bottom: 20px;
    }
    p.intro-desc, li {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        color: #333333;
    }
    li {
        margin-bottom: 10px;
        display: flex;
    }
    h5 {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        color: #333333;
        margin-bottom: 20px;
    }
    img {
        width: 16px;
        margin-right: 10px;
        object-fit: contain;
    }
`

const MediaItemList = styled.ul`
    font-size: 20px;
`

const Introduction = () => {
    return (
        <MediaWapper>
            <img src={introForexEbook} alt="Generic placeholder image" />
            <MediaBody>
                <h3 className="mt-0 intro-text">Introduction</h3>
                <p className="intro-desc">
                    Foreign exchange – forex or the FX market, as it iscommonly known – is one of the biggestmarketplaces in the world, offering endless tradingopportunities. In this 75-page book, experttrader Vince Stanzione will teach you how to spotand take advantage of trading opportunities inthe forex markets, using Deriv’s DTrader and MetaTrader5 platforms.
                </p>
                <h5>In this book you’ll learn:</h5>
                <MediaItemList>
                    <li>
                        <img src={checkIcon} alt="Check Icon" />
                        The simple basics of forex
                    </li>
                    <li>
                        <img src={checkIcon} alt="Check Icon" />
                        How to make more profitable forex trades and loweryour trading risks
                    </li>
                    <li>
                        <img src={checkIcon} alt="Check Icon" />
                        How to use digital options to profit from up, down,and even sideways moves
                    </li>
                    <li>
                        <img src={checkIcon} alt="Check Icon" />
                        How to trade like professionals without spending hourseach day analysing the worldmarket
                    </li>
                </MediaItemList>
            </MediaBody>
        </MediaWapper>
    )
}

export default WithIntl()(Introduction)
