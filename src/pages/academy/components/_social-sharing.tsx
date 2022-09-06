import React, { useState } from 'react'
import styled from 'styled-components'
import { url } from './_utility'
import { Desktop, Mobile, Container } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import FacebookIcon from 'images/svg/blog/facebook.svg'
import PinterestIcon from 'images/svg/blog/pinterest.svg'
import TwitterIcon from 'images/svg/blog/twitter.svg'
import LinkedInIcon from 'images/svg/layout/footer-linkedin.svg'
import ShareIcon from 'images/svg/academy/share.svg'

type SharingButtonInterface = {
    is_open: boolean
}

type SocialMediaType = {
    image_alt?: string
    link: string
    image: string
}

const SharingButton = styled.button<SharingButtonInterface>`
    width: 32px;
    height: 32px;
    background: ${(props) => (props.is_open ? 'var(--color-grey-8)' : 'rgb(255, 255, 255, 0.0)')};
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
    background-color: var(--color-white);
    border: 1px solid var(--color-white);
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
    justify-content: flex-end;

    img {
        margin-right: 16px;
        width: 24px;
        height: 24px;
    }
`

const SocialSharing = () => {
    const [is_open, setIsOpen] = useState(false)
    const hideBurger = () => setIsOpen(false)
    const toggleBurger = () => setIsOpen(!is_open)

    const social_media: Array<SocialMediaType> = [
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
                <Desktop>
                    {social_media.map((account, index) => (
                        <LocalizedLink
                            key={index}
                            external
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
                </Desktop>
                <Mobile>
                    <SharingButton
                        onClick={toggleBurger}
                        autoFocus={true}
                        onMouseLeave={hideBurger}
                        is_open={is_open}
                    >
                        {is_open && (
                            <DropDownSharingButtons>
                                {social_media.map((account, index) => (
                                    <LocalizedLink
                                        key={index}
                                        external
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
                </Mobile>
            </SocialWrapper>
        )
    )
}

export default SocialSharing
