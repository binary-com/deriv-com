import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GetEbook from './_get-ebook'
import { Flex } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const MainWrapper = styled(Flex)`
    width: 100%;
    background-image: ${(props) =>
        props.bg ? props.bg : 'linear-gradient(281deg, #0e0e0e, #1b1b1b)'};

    @media screen and (min-width: 1600px) {
        height: 720px;
    }
    @media ${device.tablet} {
        background-image: ${(props) =>
            props.bgMobile ? props.bgMobile : 'linear-gradient(281deg, #1b1b1b, #0e0e0e)'};
    }
`
const HeaderBody = styled(Flex)`
    max-width: 1440px;
    margin: 0;
    @media ${device.tablet} {
        flex-direction: column;
        height: auto;
        padding: 40px 15px;
    }
`

const TopHeaderImgWrapper = styled(Flex)`
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    position: relative;

    @media ${device.tablet} {
        order: 2;
    }

    @media screen and (max-width: 991px) {
        margin-top: 110px;
    }

    @media screen and (max-width: 768px) {
        margin-top: -70px;
    }
`
const HeaderImage = styled(QueryImage)`
    position: relative;
    top: 75px;
    margin: 0;

    @media ${device.laptop} {
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }

    @media ${device.tablet} {
        top: 110px;
        height: auto;
        margin: initial;
        width: 80%;
        margin-left: ${(props) => (props.width < 600 ? '-50px' : '-15px')};
    }

    @media ${device.tabletS} {
        width: 100%;
        margin-left: ${(props) => (props.width < 600 ? '-70px' : '-20px')};
    }
`

const ContentWrapper = styled.div`
    float: right;
    width: 100%;
    margin: 0;
    padding: 45px 120px 0 45px;

    @media ${device.laptopL} {
        padding: 45px 0 0 45px;
        margin-right: 30px;
    }

    @media ${device.laptop} {
        padding: 45px 120px 0 45px;
    }

    @media ${device.tablet} {
        float: none;
        max-width: 360px;
        padding: 0;
        margin: 0 auto;
        justify-content: center;
    }
`

const AuthorText = styled(Text)`
    font-style: italic;
`

const AuthorNameText = styled(Text).attrs({ as: 'span' })``

const SignupWrapper = styled.div`
    margin-bottom: 10px;
`

const HeaderSection = ({
    mainHeaderImage,
    imgWidth,
    imgHeight,
    introSub,
    introMain,
    authorDesc,
    authorName,
    bg,
    bgMobile,
    ebook_utm_code,
}) => {
    return (
        <MainWrapper bg={bg} bgMobile={bgMobile}>
            <HeaderBody>
                <TopHeaderImgWrapper>
                    <HeaderImage
                        data={mainHeaderImage}
                        alt="ebook"
                        width={imgWidth ? `${imgWidth}px` : '557px'}
                        height={imgHeight ? `${imgHeight}px` : '703px'}
                    />
                </TopHeaderImgWrapper>
                <ContentWrapper>
                    <Header
                        className="sub-title"
                        as="h1"
                        type="sub-section-title"
                        weight="500"
                        color="white"
                    >
                        {introSub}
                    </Header>
                    <Header
                        className="title"
                        as="h1"
                        type="page-title"
                        mb="10px"
                        lh={1.2}
                        max_width="400px"
                        color="white"
                    >
                        {introMain}
                    </Header>
                    <Header as="h1" type="main-paragraph" weight="normal" color="white">
                        {localize('Claim a FREE e-book now!')}
                    </Header>
                    <Header as="h1" type="main-paragraph" weight="normal" color="white">
                        {localize('Plus a free demo account to practice.')}
                    </Header>
                    <AuthorText
                        m={0}
                        mt="10px"
                        size="1.4rem"
                        color="white"
                        lh="16px"
                        max_width="586px"
                    >
                        {authorDesc}
                        <AuthorNameText color="white" weight="bold">
                            {authorName}
                        </AuthorNameText>
                    </AuthorText>
                    <SignupWrapper>
                        <GetEbook ebook_utm_code={ebook_utm_code} />
                    </SignupWrapper>
                </ContentWrapper>
            </HeaderBody>
        </MainWrapper>
    )
}

HeaderSection.propTypes = {
    authorDesc: PropTypes.string,
    authorName: PropTypes.string,
    bg: PropTypes.any,
    bgMobile: PropTypes.any,
    ebook_utm_code: PropTypes.string,
    imgHeight: PropTypes.number,
    imgWidth: PropTypes.number,
    introMain: PropTypes.any,
    introSub: PropTypes.any,
    mainHeaderImage: PropTypes.any,
}

export default HeaderSection
