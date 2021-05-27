// import React, { useState, useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
import ebookForex from 'images/common/ebooks/ebook-forex.png'
import checkIcon from 'images/common/ebooks/check-icon.png'
import { WithIntl } from 'components/localization'
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
    max-width: 1022px;
    margin: 100px auto 0;
    padding: 0 10px;
    background-image: linear-gradient(to bottom, #eaf4f5 1%, rgba(242, 245, 248, 0) 99%);

    img.ebook-forex{
        width: 650px;
        position: relative;
        top: -57px;
    }
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

const Topics = () => {
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
                        Why trade forex on Deriv
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
                <img className="ebook-forex" src={ebookForex} alt="Generic placeholder image" />
            </Wrapper>
        </FullWidth>
    )
}

export default WithIntl()(Topics)
