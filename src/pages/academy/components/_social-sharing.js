import React, { useState } from 'react'
import styled from 'styled-components'
import { url } from './utility'
import { Show, Container } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import FacebookIcon from 'images/svg/blog/facebook.svg'
import PinterestIcon from 'images/svg/blog/pinterest.svg'
import TwitterIcon from 'images/svg/blog/twitter.svg'
import LinkedInIcon from 'images/svg/layout/footer-linkedin.svg'
import ShareIcon from 'images/svg/academy/share.svg'
import { useOutsideClick } from 'components/hooks/use-outside-click'

const SharingButton = styled.button`
    width: 32px;
    height: 32px;
    background: ${(props) => (props.isOpen ? '#f2f3f4' : 'rgb(255, 255, 255, 0.0)')};
    background-image: url(${ShareIcon});
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    border: 0 solid rgba(236, 241, 247, 0.5);
    border-radius: 4px;

    img {
        width: 24px;
        height: 24px;
        margin: 12px 8px 4px 8px;
    }
`

const DropDownSharingButtons = styled.div`
    width: 40px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    position: absolute;
    right: 12px;
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

export const SocialWrapper = styled(Container)`
    display: flex;
    justify-content: flex-end;

    img {
        margin-right: 16px;
        width: 24px;
        height: 24px;
    }
`

const SocialSharing = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdown_ref = React.useRef(null)

    useOutsideClick(dropdown_ref, () => setIsOpen(false))

    const toggling = () => setIsOpen(!isOpen)

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

    return (
        url && (
            <SocialWrapper>
                <Show.Desktop>
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
                </Show.Desktop>
                <Show.Mobile>
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
                </Show.Mobile>
            </SocialWrapper>
        )
    )
}

export default SocialSharing
