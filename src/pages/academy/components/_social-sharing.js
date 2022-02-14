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
import { useOutsideClick } from 'components/hooks/use-outside-click'

const IconWrapper = styled.div`
    width: 40px;
`

const HeaderWrapper = styled.span`
    margin-right: 16px;
`

const StyledFlex = styled(Flex)``

const SharingWrapper = styled.div`
    width: 16rem;

    img {
        width: 24px;
        height: 24px;
    }
    @media ${device.laptop} {
        width: 18rem;
    }
    @media ${device.tabletL} {
        width: 0;
    }
`

const SharingButton = styled.button`
    width: 32px;
    height: 32px;
    background: ${(props) => (props.isOpen ? '#f2f3f4' : 'rgb(255, 255, 255, 0.0)')};
    background-image: url(${ShareIcon});
    background-position: center;
    border: 0 solid rgba(236, 241, 247, 0.5);
    border-radius: 4px;

    img {
        width: 24px;
        height: 24px;
        margin: 8px 8px 8px 8px;
    }
`

const DropDownSharingButtons = styled.div`
    width: 40px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    position: absolute;
    right: 20px;
    top: 60px;

    &::after {
        border: 5px solid transparent;
        border-bottom: 14px solid white;
        content: '';
        position: absolute;
        right: 13px;
        top: -12px;
        z-index: 2;
    }
`

export const SocialWrapper = styled.div`
    grid-area: social;

    img {
        margin-right: 16px;
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
    const [isOpen, setIsOpen] = useState(true)
    const dropdown_ref = React.useRef(null)

    useOutsideClick(dropdown_ref, () => setIsOpen(false))

    const toggling = () => setIsOpen(!isOpen)

    return (
        <SharingButton
            onClick={toggling}
            autoFocus={false}
            onBlur={() => setIsOpen(false)}
            onFocus={() => setIsOpen(false)}
            isOpen={isOpen}
            ref={dropdown_ref}
        >
            {isOpen && (
                <DropDownSharingButtons>
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
                </DropDownSharingButtons>
            )}
        </SharingButton>
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
