import React from 'react'
import styled from 'styled-components'
import { useLocation } from '@gatsbyjs/reach-router'
import { SectionContainer, Container, Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import InstagramIcon from 'images/svg/blog/instagram.svg'
import FacebookIcon from 'images/svg/blog/facebook.svg'
import PinterestIcon from 'images/svg/blog/pinterest.svg'
import TwitterIcon from 'images/svg/blog/twitter.svg'

const IconWrapper = styled.div`
    width: 120px;
`

const HeaderWrapper = styled.span`
    margin-right: 16px;

    @media ${device.tablet}{
        margin: 0 auto 8px;
    }
`

const StyledFlex = styled(Flex)`
    @media ${device.tablet}{
        width: 120px;
        margin-left: auto;
    }
`

const SocialSharing = () => {
    const url = useLocation().href
    console.log(url) //eslint-disable-line

    return (
        <SectionContainer>
            <Container>
                <StyledFlex jc="flex-end" ai="center" tablet_direction="column" tablet_jc="flex-end" tablet_ai="flex-end">
                    <HeaderWrapper>
                        <Header type="paragraph-2" weight="normal">
                            Share this post
                        </Header>
                    </HeaderWrapper>
                    <IconWrapper>
                        <Flex jc="space-between">
                            <LocalizedLink external to={"https://www.facebook.com/sharer/sharer.php?u=" + url} target="_blank" rel="noopener noreferrer">
                                <img src={FacebookIcon} width="24px" height="24px" />
                            </LocalizedLink>
                            <LocalizedLink external to="" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramIcon} width="24px" height="24px" />
                            </LocalizedLink>
                            <LocalizedLink external to={`https://www.twitter.com/share?url=${url}`} target="_blank" rel="noopener noreferrer">
                                <img src={TwitterIcon} width="24px" height="24px" />
                            </LocalizedLink>
                            <LocalizedLink external to={`https://pinterest.com/pin/create/button/?url=${url}`} target="_blank" rel="noopener noreferrer">
                                <img src={PinterestIcon} width="24px" height="24px" />
                            </LocalizedLink>
                        </Flex>
                    </IconWrapper>
                </StyledFlex>
            </Container>
        </SectionContainer>
    )
}

export default SocialSharing
