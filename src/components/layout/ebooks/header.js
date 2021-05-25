import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'components/containers'
import device from 'themes/device.js'
// import { localize } from 'components/localization'
// import { QueryImage } from 'components/elements'
// import { LinkButton } from 'components/form'
// import mainHeaderImage from 'images/common/ebooks/minimal-cover-book-mockup.png'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: row;
    width: 100%;
    height: 664px;
`
const HeaderBody = styled(Flex)`
    width: 100%;
    height: 627px;
    margin: 0;
    padding: 117px 120px 61px 734px;
    background-image: linear-gradient(281deg, #0e0e0e, #1b1b1b);
    flex-direction: row;
`
const TopHeaderImgWrapper = styled(Flex)`
    margin: 0;
`
const DesktopImage = styled.img`
    width: 606px;
    position: absolute;
    top: 58px;
    left: 0;
    @media ${device.tabletL} {
        display: none;
    }
`

const HeaderSection = ({ mainHeaderImage }) => {
    // const data = useStaticQuery(query)

    return (
        <MainWrapper>
            <HeaderBody>
                <TopHeaderImgWrapper>
                    <DesktopImage src={mainHeaderImage} alt="stocks ebook" />
                </TopHeaderImgWrapper>
            </HeaderBody>
        </MainWrapper>
    )
}

HeaderSection.propTypes = {
    mainHeaderImage: PropTypes.any,
}

export default HeaderSection
