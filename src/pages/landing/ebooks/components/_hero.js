import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GetEbook from './_get-ebook'
import { Flex } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const MainWrapper = styled(Flex)`
    width: 100%;
    padding: 4% 3%;
    background-image: ${(props) =>
        props.bg1 ? props.bg1 : 'linear-gradient(281deg, #0e0e0e, #1b1b1b)'};

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
    }
`

const TopHeaderImgWrapper = styled(Flex)`
    justify-content: flex-start;
    margin: 0;
    padding: 0;

    @media ${device.tablet} {
        order: 2;
    }
`
const HeaderImage = styled(QueryImage)`
    margin: auto;
    padding: 15px;
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
    padding: 10px 30px 0 45px;

    @media ${device.laptopL} {
        padding-left: 45px;
        margin-right: 30px;
    }

    @media ${device.laptop} {
        padding: 10px 60px 0 25px;
        max-width: 600px;
    }

    @media ${device.tablet} {
        float: none;
        max-width: 360px;
        padding: 10px 0;
        margin: 0 auto;
        justify-content: center;
    }
`
const SubTitle = styled(Header)`
    color: ${(props) => (props.color ? `${props.color}` : 'white')};
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
    color: ${(props) => (props.color ? `${props.color}` : 'white')};
    font-style: italic;
`

const AuthorNameText = styled(Text).attrs({ as: 'span' })`
    color: ${(props) => (props.color ? `${props.color}` : 'white')};
`

const SignupWrapper = styled.div`
    margin: 10px;
`

const Hero = ({
    authorDesc,
    authorName,
    bg,
    bgMobile,
    color,
    ebook_utm_code,
    introMain,
    introSub,
    mainHeaderImage,
}) => {
    const [is_mobile] = useBrowserResize()
    return (
        <MainWrapper bg1={bg} bgMobile={bgMobile}>
            <HeaderBody>
                <ContentWrapper>
                    <Content>
                        <SubTitle
                            as="h2"
                            type="sub-section-title"
                            size="36px"
                            weight="400"
                            color={color}
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
                            color={color}
                        >
                            {introMain}
                        </Header>
                        {is_mobile && <HeaderImage data={mainHeaderImage} alt="ebook" />}
                        <Header
                            as="h3"
                            type="main-paragraph"
                            size="16px"
                            weight={300}
                            color={color}
                        >
                            {localize('Claim a FREE e-book now!')}
                        </Header>
                        <Header
                            as="h4"
                            type="main-paragraph"
                            size="16px"
                            weight={300}
                            color={color}
                        >
                            {localize('Plus a free demo account to practice.')}
                        </Header>
                        <AuthorText
                            m={0}
                            mt="10px"
                            size="14px"
                            color={color}
                            lh="16px"
                            weight={200}
                            max_width="586px"
                        >
                            {authorDesc}
                            <AuthorNameText size="14px" color={color} weight="bold">
                                {authorName}
                            </AuthorNameText>
                        </AuthorText>
                        <SignupWrapper>
                            <GetEbook ebook_utm_code={ebook_utm_code} color="black" />
                        </SignupWrapper>
                    </Content>
                </ContentWrapper>
                {!is_mobile && (
                    <TopHeaderImgWrapper>
                        <HeaderImage data={mainHeaderImage} alt="ebook" />
                    </TopHeaderImgWrapper>
                )}
            </HeaderBody>
        </MainWrapper>
    )
}

Hero.propTypes = {
    authorDesc: PropTypes.string,
    authorName: PropTypes.string,
    bg: PropTypes.any,
    bgMobile: PropTypes.any,
    color: PropTypes.any,
    ebook_utm_code: PropTypes.string,
    introMain: PropTypes.any,
    introSub: PropTypes.any,
    mainHeaderImage: PropTypes.any,
}

export default Hero
