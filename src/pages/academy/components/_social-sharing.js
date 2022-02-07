import React, { useState } from 'react'
import styled from 'styled-components'
import { url } from './utility'
import { Flex, Show } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import FacebookIcon from 'images/svg/blog/facebook.svg'
import PinterestIcon from 'images/svg/blog/pinterest.svg'
import TwitterIcon from 'images/svg/blog/twitter.svg'
import LinkedInIcon from 'images/svg/layout/footer-linkedin.svg'
import ShareIcon from 'images/svg/academy/share.svg'

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

const SharingWrapper = styled.div`
    display: flex;
    position: absolute;
    right: 100px;
    top: 28px;

    img {
        width: 24px;
        height: 24px;
    }

    @media ${device.tabletL} {
        left: 85%;
        top: 8px;
    }
`

const SharingButton = styled.button`
    position: absolute;
    width: 32px;
    height: 32px;
    left: 0;
    top: 0;
    background: #ffffff;
    border: 0 solid rgba(236, 241, 247, 0.5);
    border-radius: 4px;

    :focus-within {
        background: #f2f3f4;
    }
    img {
        width: 24px;
        height: 24px;
        position: absolute;
        top: -10%;
        left: -10%;
    }
`

const DropDownSharingButton = styled.div`
    position: absolute;
    left: -5px;
    top: 50px;
    width: 40px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);

    &::after {
        border: 5px solid transparent;
        border-bottom: 10px solid white;
        content: '';
        position: absolute;
        right: 13px;
        top: -15px;
        z-index: 2;
    }
`

export const SocialWrapper = styled.div`
    grid-area: social;

    img {
        margin-right: 16px;
    }

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        margin: 3rem 0 1rem;

        img {
            margin: 1rem 1rem 1rem 1rem;
        }
    }
`

// clip-path: polygon(50% 60%, 20% 100%, 80% 100%);

const social_media = [
    {
        link: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        image: FacebookIcon,
    },
    {
        link: `http://www.linkedin.com/shareArticle?mini=true&url=${url}`,
        image: LinkedInIcon,
    },
    {
        link: `https://www.twitter.com/share?url=${url}`,
        image: TwitterIcon,
    },
    {
        link: `https://pinterest.com/pin/create/button/?url=${url}&media=&description=`,
        image: PinterestIcon,
    },
]

const SocialDesktopComponent = () => {
    return social_media.map((account, index) => (
        <LocalizedLink
            key={index}
            external="true"
            to={account.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={account.image} alt={account.image_alt} width="41" height="41" />
        </LocalizedLink>
    ))
}

const SocialMobileComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggling = () => setIsOpen(!isOpen)

    return (
        <SharingWrapper>
            <SharingButton onClick={toggling} autoFocus={false} onBlur={() => setIsOpen(false)}>
                <img src={ShareIcon} />
            </SharingButton>
            {isOpen && (
                <DropDownSharingButton>
                    {social_media.map((account, index) => (
                        <LocalizedLink
                            key={index}
                            external="true"
                            to={account.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={account.image}
                                alt={account.image_alt}
                                width="41"
                                height="41"
                            />
                        </LocalizedLink>
                    ))}
                </DropDownSharingButton>
            )}
        </SharingWrapper>
    )
}

const SocialSharing = () => {
    return (
        url && (
            <SocialWrapper>
                <Flex>
                    <StyledFlex
                        jc="flex-end"
                        ai="center"
                        tablet_direction="column"
                        tablet_jc="flex-end"
                        tablet_ai="flex-end"
                    >
                        <HeaderWrapper>
                            <IconWrapper>
                                <Flex jc="space-between">
                                    <Header type="paragraph-2" weight="normal">
                                        <Show.Desktop>
                                            <SharingWrapper>
                                                <SocialDesktopComponent />
                                            </SharingWrapper>
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <SharingWrapper>
                                                <SocialMobileComponent />
                                            </SharingWrapper>
                                        </Show.Mobile>
                                    </Header>
                                </Flex>
                            </IconWrapper>
                        </HeaderWrapper>
                    </StyledFlex>
                </Flex>
            </SocialWrapper>
        )
    )
}

export default SocialSharing
