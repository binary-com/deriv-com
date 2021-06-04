import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GetEbook from './get-ebook'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
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
const HeaderImage = styled.img`
    width: ${(props) => (props.width ? `${props.width}px` : '557px')};
    height: ${(props) => (props.height ? `${props.height}px` : '703px')};
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

    h1 {
        color: white;
    }
    .title {
        margin-bottom: 10px;
        line-height: 1.2;
        max-width: 400px;
    }

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

const AuthorText = styled.p`
    font-style: italic;
    margin: 0;
    margin-top: 10px;
    font-size: 1.4rem;
    color: white;
    line-height: 16px;
    max-width: 586px;
`

const AuthorNameText = styled.span`
    font-weight: bold;
`

const SignupWrapper = styled.div`
    margin-bottom: 10px;
`

const HeaderSection = ({
    mainHeaderImage,
    imgWidth,
    imgHeight,
    introSub,
    introMain,
    bg,
    bgMobile,
    ebook_utm_code,
}) => {
    return (
        <MainWrapper bg={bg} bgMobile={bgMobile}>
            <HeaderBody>
                <TopHeaderImgWrapper>
                    <HeaderImage
                        src={mainHeaderImage}
                        alt="stocks ebook"
                        width={imgWidth}
                        height={imgHeight}
                    />
                </TopHeaderImgWrapper>
                <ContentWrapper>
                    <Header type="sub-section-title" className="sub-title" weight="500">
                        {introSub || ''}
                    </Header>
                    <Header type="page-title" className="title">
                        {introMain || localize('Learn to trade Stock derivatives the smart way')}
                    </Header>
                    <Header type="main-paragraph" weight="normal">
                        {localize('Claim a FREE e-book now!')}
                    </Header>
                    <Header type="main-paragraph" weight="normal">
                        {localize('Plus a free demo account to practice.')}
                    </Header>
                    <AuthorText>
                        {localize(
                            'This e-book has been brought to you by a veteran online trader and New York Times bestselling author, ',
                        )}
                        <AuthorNameText>{localize('Vince Stanzione.')}</AuthorNameText>
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
    bg: PropTypes.any,
    bgMobile: PropTypes.any,
    ebook_utm_code: PropTypes.string,
    imgHeight: PropTypes.string,
    imgWidth: PropTypes.string,
    introMain: PropTypes.any,
    introSub: PropTypes.any,
    mainHeaderImage: PropTypes.any,
}

export default HeaderSection
