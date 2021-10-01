import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import FacebookIcon from 'images/svg/blog/facebook.svg'
import PinterestIcon from 'images/svg/blog/pinterest.svg'
import TwitterIcon from 'images/svg/blog/twitter.svg'
import LinkedInIcon from 'images/svg/layout/footer-linkedin.svg'

const IconWrapper = styled.div`
    width: 120px;
`

const HeaderWrapper = styled.span`
    margin-right: 16px;

    @media ${device.tablet} {
        margin: 0 auto 8px;
    }
`

const StyledFlex = styled(Flex)`
    @media ${device.tablet} {
        width: 120px;
        margin-left: auto;
    }
`

const SocialSharing = () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    return (
        url && (
            <Flex>
                <StyledFlex
                    jc="flex-end"
                    ai="center"
                    tablet_direction="column"
                    tablet_jc="flex-end"
                    tablet_ai="flex-end"
                >
                    <HeaderWrapper>
                        <Header type="paragraph-2" weight="normal">
                            Share this post
                        </Header>
                    </HeaderWrapper>
                    <IconWrapper>
                        <Flex jc="space-between">
                            <LocalizedLink
                                external
                                to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={FacebookIcon} width="24px" height="24px" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={LinkedInIcon} width="24px" height="24px" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={`https://www.twitter.com/share?url=${url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={TwitterIcon} width="24px" height="24px" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={`https://pinterest.com/pin/create/button/?url=${url}&media=&description=`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={PinterestIcon} width="24px" height="24px" />
                            </LocalizedLink>
                        </Flex>
                    </IconWrapper>
                </StyledFlex>
            </Flex>
        )
    )
}

export default SocialSharing
