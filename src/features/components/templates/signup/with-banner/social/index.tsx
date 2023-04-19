import React from 'react'
import { public_signup_social_links } from './social.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Button from 'features/components/atoms/button'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import AppleLogo from 'images/svg/apple_logo.svg'
import FacebookLogo from 'images/svg/facebook_logo.svg'
import GoogleLogo from 'images/svg/google_logo.svg'
import { TString } from 'types/generics'
import Login, { TSocialProvider } from 'common/login'

type SocialButtonContent = {
    provider: TSocialProvider
    id: string
    img: string
    title: TString
}

const social_button_content: SocialButtonContent[] = [
    {
        provider: 'apple',
        id: 'gtm-signup-apple',
        img: AppleLogo,
        title: '_t_Apple_t_',
    },
    {
        provider: 'facebook',
        id: 'gtm-signup-facebook',
        img: FacebookLogo,
        title: '_t_Facebook_t_',
    },
    {
        provider: 'google',
        id: 'gtm-signup-google',
        img: GoogleLogo,
        title: '_t_Google_t_',
    },
]

const PublicSignupSocial = () => {
    const handleSocialSignup = (data_provider: TSocialProvider) => {
        Login.initOneAll(data_provider)
    }

    return (
        <Flex.Box justify="between" className={public_signup_social_links} gap={'4x'}>
            {social_button_content.map((buttonItem) => (
                <Button.Secondary
                    key={buttonItem.id}
                    onClick={(event) => {
                        event.preventDefault()
                        handleSocialSignup(buttonItem.provider)
                    }}
                    outlined
                >
                    <Flex.Box justify="center" align="end" gap={'2x'}>
                        <Image src={buttonItem.img} />
                        <Typography.Paragraph
                            size="small"
                            weight="bold"
                            visible="larger-than-tablet"
                        >
                            <Localize translate_text={buttonItem.title} />
                        </Typography.Paragraph>
                    </Flex.Box>
                </Button.Secondary>
            ))}
        </Flex.Box>
    )
}

export default PublicSignupSocial
