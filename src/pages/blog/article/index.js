import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { Container, Flex, SectionContainer } from 'components/containers'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import bgImages from 'images/common/blog/article/bg-shape.png'
import bgImagesMobile from 'images/common/blog/article/bg-shape-mobile.png'
import mcBookPro from 'images/common/blog/article/mcbook-pro.png'

// remove this during merge
const ParentWrapper = styled(SectionContainer)`
    background: var(--color-white);
    padding: 40px 16px;
    display: flex;
    justify-content: center;
    @media ${device.tabletL} {
        margin: 0;
    }
`

const MainWrapper = styled(Flex)`
    background: ${(props) =>
        props.background_color ? props.background_color : 'var(--color-grey-41)'};
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    @media ${device.tabletL} {
        max-width: 360px;
        flex-direction: column;
        padding: 24px 16px 45px;
    }
`
const BackgroundImageWrapper = styled.div`
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: 1;
`
const BackgroundImage = styled.img`
    width: 100%;
`
const ContentWrapper = styled(Flex)`
    z-index: 3;
    @media ${device.tabletL} {
        justify-content: center;
        flex-direction: column;
        max-width: 360px;
    }
`
const ImageWrapper = styled(Flex)`
    width: 180px;
    overflow: hidden;
    @media ${device.tabletL} {
        width: 218px;
        padding-top: 0;
        margin-bottom: 16px;
    }
`
const ImgDiv = styled.img`
    width: 100%;
`
const TextWrapper = styled(Flex)`
    width: auto;
    @media ${device.tabletL} {
        margin-bottom: 16px;
    }
`
const CTAButton = styled(LinkButton)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 20px;
    background-color: ${(props) => props.background_color && props.background_color};
    color: ${(props) => props.color && props.color};
    border-color: ${(props) => props.border_color && props.border_color};
`
const DesktopImageWrapper = styled(Container)`
    width: 100%;
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileImageWrapper = styled(Container)`
    display: none;
    @media ${device.tabletL} {
        width: 100%;
        display: flex;
    }
`

// all commented value is by default from the code base,only if the value is not provided
const item_data = {
    banner_image: { mcBookPro },
    banner_image_alt: 'Article CTA Banner Image',
    background: {
        // color: '#F8FAFB',
        background_img: { bgImages },
        background_img_mobile: { bgImagesMobile },
    },
    main_title: 'Join over 1 million traders worldwide',
    small_desc: 'Sign up for an account now.',
    button: {
        // background_color: '#FF444F',
        // border_color: '#FF444F',
        text: 'Try free demo',
        redirect_link: '/signup/',
        // text_color: '#FFFFFF',
    },
}

const BottomCta = () => {
    return (
        <Layout>
            <ParentWrapper>
                <MainWrapper
                    p="0 32px 0 24px"
                    max_width="792px"
                    background_color={item_data.background.color}
                >
                    <ContentWrapper ai="center" jc="space-between">
                        <ImageWrapper pt="12px">
                            <ImgDiv src={mcBookPro} alt={item_data.banner_image_alt} />
                        </ImageWrapper>
                        <TextWrapper direction="column">
                            <Header
                                as="h3"
                                type="subtitle-2"
                                max_width="35rem"
                                mobile_max_width="100%"
                            >
                                {item_data.main_title}
                            </Header>
                            <Header as="p" type="paragraph-1" weight="normal">
                                {item_data.small_desc}
                            </Header>
                        </TextWrapper>
                        <CTAButton
                            secondary="true"
                            to={item_data.button.redirect_link}
                            background_color={item_data.button.background_color}
                            color={item_data.button.text_color}
                            border_color={item_data.button.border_color}
                        >
                            {item_data.button.text}
                        </CTAButton>
                    </ContentWrapper>
                    <BackgroundImageWrapper>
                        <DesktopImageWrapper>
                            <BackgroundImage src={bgImages} />
                        </DesktopImageWrapper>
                        <MobileImageWrapper>
                            <BackgroundImage
                                src={
                                    item_data.background.background_img_mobile
                                        ? bgImagesMobile
                                        : bgImages
                                }
                            />
                        </MobileImageWrapper>
                    </BackgroundImageWrapper>
                </MainWrapper>
            </ParentWrapper>
        </Layout>
    )
}

export default WithIntl()(BottomCta)
