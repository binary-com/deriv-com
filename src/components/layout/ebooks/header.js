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
`
const HeaderBody = styled(Flex)`
    width: 100%;
    height: 627px;
    margin: 0;
    background-image: ${(props) => (props.bg ? props.bg : 'linear-gradient(281deg, #0e0e0e, #1b1b1b)')};
    flex-direction: row;
`

const TopHeaderImgWrapper = styled(Flex)`
    margin: 0;
`
const DesktopImage = styled.img`
    width: 606px;
    position: relative;
    top: 58px;
    @media ${device.tabletL} {
        display: none;
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
`

const AuthorText = styled.p`
    font-style: italic;
    margin: 16px 0 24px 0;
    font-size: 1.4rem;
    color: white;
`

const AuthorNameText = styled.span`
    font-weight: bold;
`

const SignupWrapper = styled.div`
    margin-bottom: 10px;
`

const HeaderSection = ({ mainHeaderImage, introSub, introMain, bg }) => {
    return (
        <MainWrapper>
            <HeaderBody bg={bg}>
                <TopHeaderImgWrapper>
                    <DesktopImage src={mainHeaderImage} alt="stocks ebook" />
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
                        <GetEbook />
                    </SignupWrapper>
                </ContentWrapper>
            </HeaderBody>
        </MainWrapper>
    )
}

HeaderSection.propTypes = {
    bg: PropTypes.any,
    introMain: PropTypes.any,
    introSub: PropTypes.any,
    mainHeaderImage: PropTypes.any,
}

export default HeaderSection
