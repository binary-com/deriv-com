import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import './banner.styles.scss'

const PublicSignupBanner = () => {
    return (
        <Flex.Box
            justify="around"
            align="center"
            grow="1"
            margin_inline="20x"
            className={'public_signup_banner_container'}
        >
            <div className={'public_signup_banner'}>
                <StaticImage
                    src="../../../../../../images/common/sign-up/banner-phone.png"
                    alt="signup banner logo"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            </div>
            <Link url={{ type: 'company', url_name: 'deriv_app' }} no_hover>
                <Flex.Box justify="around" align="center" gap="4x">
                    <Typography.Heading
                        size="medium"
                        textcolor="white"
                        className={'public_signup_title'}
                    >
                        <Localize translate_text={'_t_Get a taste of the Deriv experience_t_'} />
                    </Typography.Heading>
                    <Typography.Heading size="large" textcolor="white">
                        {'>'}
                    </Typography.Heading>
                </Flex.Box>
            </Link>
        </Flex.Box>
    )
}

export default PublicSignupBanner
