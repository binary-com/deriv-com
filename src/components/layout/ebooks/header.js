import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GetEbook from './get-ebook'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: row;
    width: 100%;
    height: 664px;

    @media ${device.tablet} {
        height: 100%;
    }
`
const HeaderBody = styled(Flex)`
    width: 100%;
    height: 640px;
    margin: 0;
    background-image: ${(props) =>
        props.bg ? props.bg : 'linear-gradient(281deg, #0e0e0e, #1b1b1b)'};

    @media ${device.tablet} {
        flex-direction: column;
        height: auto;
        padding: 40px 15px;
        background-image: ${(props) =>
            props.bgMobile ? props.bgMobile : 'linear-gradient(281deg, #1b1b1b, #0e0e0e)'};
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

    @media ${device.mobile} {
        margin-top: -70px;
    }
`
const HeaderImage = styled.img`
    width: 606px;
    position: relative;
    top: 58px;
    margin: 0;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
        height: 390px;
        margin: 0 auto;
        width: 100% !important;
    }

    @media ${device.mobile} {
        top: 110px;
        height: auto;
        margin: initial;
        width: 100%;
        margin-left: -15px;
    }

    @media ${device.mobile} {
        top: 110px;
        height: auto;
        margin: 0 auto;
        width: 70%;
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
        margin-bottom: 30px;
    }

    @media ${device.tablet} {
        float: none;
        max-width: 360px;
        padding: 0;
        margin: 0 auto;
        justify-content: center !important;
    }
`

const AuthorText = styled.p`
    font-style: italic;
    margin: 16px 0 24px 0;
    font-size: 1.4rem;
    color: white;
    line-height: 16px;
`

const AuthorNameText = styled.span`
    font-weight: bold;
`

const SignupWrapper = styled.div`
    margin-bottom: 10px;
`

const HeaderSection = ({ mainHeaderImage, introSub, introMain, bg, bgMobile, ebook_utm_code }) => {
    return (
        <MainWrapper>
            <HeaderBody bg={bg} bgMobile={bgMobile}>
                <TopHeaderImgWrapper>
                    <HeaderImage src={mainHeaderImage} alt="stocks ebook" />
                </TopHeaderImgWrapper>
                <ContentWrapper>
                    <Header type="sub-section-title" className="sub-title">
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
    introMain: PropTypes.any,
    introSub: PropTypes.any,
    mainHeaderImage: PropTypes.any,
}

export default HeaderSection
