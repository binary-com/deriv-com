import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import bgImages from 'images/common/blog/article/bg-shape.png'
import mcBookPro from 'images/common/blog/article/mcbook-pro.png'

const ParentWrapper = styled(SectionContainer)`
    background: var(--color-white);
    margin: 120px 0 80px;
    display: flex;
    justify-content: center;
`

const MainWrapper = styled(Flex)`
    background: var(--color-grey-40);
    border-radius: 8px;
    position: relative;
    height: 118px;
    overflow: hidden;

    @media ${device.tabletL} {
        flex-direction: column;
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
const ImageWrapper = styled(Flex)`
    width: 180px;
    z-index: 2;
`
const ImgDiv = styled.img`
    width: 100%;
`
const TextWrapper = styled(Flex)`
    max-width: 350px;
    padding: 0 43px 0 40px;
`
const CTAButton = styled(LinkButton)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BottomCta = () => {
    return (
        <Layout>
            <ParentWrapper>
                <MainWrapper max_width="792px">
                    <Flex ai="center" tablet_direction="column" tablet_jc="center">
                        <ImageWrapper>
                            <ImgDiv src={mcBookPro} alt="Article CTA Banner Image" />
                        </ImageWrapper>
                        <TextWrapper direction="column">
                            <Header
                                as="p"
                                type="subtitle-2"
                                max_width="35rem"
                                mobile_max_width="100%"
                            >
                                Join over 1 million traders worldwide
                            </Header>
                            <Header as="p" type="paragraph-1" weight="normal">
                                Join over 1 million traders worldwide
                            </Header>
                        </TextWrapper>
                        <CTAButton secondary="true" to="/signup/">
                            Try free demo
                        </CTAButton>
                    </Flex>
                    <BackgroundImageWrapper>
                        <BackgroundImage src={bgImages} />
                    </BackgroundImageWrapper>
                </MainWrapper>
            </ParentWrapper>
        </Layout>
    )
}

export default WithIntl()(BottomCta)
