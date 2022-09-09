import React from 'react'
import styled from 'styled-components'
import GetEbook from './_get-ebook'
import { HeaderAndHeroProps } from './_types'
import { Flex } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

type HeaderImageProps = {
    imgWidth: number
    imgHeight: number
}

type HeaderSectionProps = HeaderAndHeroProps & HeaderImageProps

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

const widthProps = (props) => (props.imgWidth ? `${props.imgWidth}px` : '557px')
const heightProps = (props) => (props.imgHeight ? `${props.imgHeight}px` : '703px')

const HeaderImage = styled(QueryImage)<HeaderImageProps>`
    width: ${widthProps};
    height: ${heightProps};
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
        margin-left: ${(props) => (props.imgWidth < 600 ? '-50px' : '-15px')};
    }

    @media ${device.tabletS} {
        width: ${(props) => (props.imgWidth < 600 ? '115%' : '105%')};
        height: ${(props) => props.imgWidth < 600 && '105%'};
        margin-left: ${(props) => (props.imgWidth < 600 ? '-110px' : '-50px')};
    }
    @media ${device.mobileS} {
        margin-left: ${(props) => (props.imgWidth < 600 ? '-85px' : '-50px')};
    }
`

const ContentWrapper = styled.div`
    width: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.tablet} {
        float: none;
    }
`

const Content = styled.div`
    width: 100%;
    margin: 0;
    padding: 0 30px 0 45px;

    @media ${device.laptopL} {
        padding-left: 45px;
        margin-right: 30px;
    }

    @media ${device.laptop} {
        padding: 0 60px 0 25px;
        max-width: 600px;
    }

    @media ${device.tablet} {
        float: none;
        max-width: 360px;
        padding: 0;
        margin: 0 auto;
        justify-content: center;
    }
`

const SubTitle = styled(Header)`
    @media screen and (min-width: 1200px) {
        max-width: 600px;
    }
    @media ${device.laptopL} {
        max-width: 400px;
    }
    @media ${device.tablet} {
        max-width: 300px;
    }
`

const AuthorText = styled(Text)`
    font-style: italic;
`

const AuthorNameText = styled(Text).attrs({ as: 'span' })``

const SignupWrapper = styled.div`
    margin: 0;
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
}: HeaderSectionProps) => {
    return (
        <MainWrapper bg={bg} bgMobile={bgMobile}>
            <HeaderBody>
                <TopHeaderImgWrapper>
                    <HeaderImage
                        data={mainHeaderImage}
                        alt="ebook"
                        imgWidth={imgWidth}
                        imgHeight={imgHeight}
                        height="100%"
                    />
                </TopHeaderImgWrapper>
                <ContentWrapper>
                    <Content>
                        <SubTitle
                            as="h2"
                            type="sub-section-title"
                            size="36px"
                            weight="400"
                            color="white"
                            mb="7px"
                        >
                            {introSub}
                        </SubTitle>
                        <Header
                            as="h1"
                            type="page-title"
                            size="48px"
                            mb="10px"
                            lh={1.1}
                            weight="600"
                            max_width="800px"
                            color="white"
                        >
                            {introMain}
                        </Header>
                        <Header
                            as="h3"
                            type="main-paragraph"
                            size="16px"
                            weight={300}
                            color="white"
                        >
                            {localize('Claim a FREE e-book now!')}
                        </Header>
                        <Header
                            as="h4"
                            type="main-paragraph"
                            size="16px"
                            weight={300}
                            color="white"
                        >
                            {localize('Plus a free demo account to practice.')}
                        </Header>
                        <AuthorText
                            m={0}
                            mt="10px"
                            size="14px"
                            color="white"
                            lh="16px"
                            weight={200}
                            max_width="586px"
                        >
                            {authorDesc}
                            <AuthorNameText size="14px" color="white" weight="bold">
                                {authorName}
                            </AuthorNameText>
                        </AuthorText>
                        <SignupWrapper>
                            <GetEbook ebook_utm_code={ebook_utm_code} />
                        </SignupWrapper>
                    </Content>
                </ContentWrapper>
            </HeaderBody>
        </MainWrapper>
    )
}

export default HeaderSection
