import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Image from 'features/components/atoms/image'
import Arrow from 'images/svg/custom/chevron-right.svg'
import './banner.styles.scss'

const PublicSignupBanner = () => {
    return (
        <Flex.Box
            grow="1"
            justify="center"
            align="center"
            className={'public_signup_banner_container'}
        >
            <StaticImage
                src="../../../../../../images/common/sign-up/banner-phone.png"
                alt="signup banner logo"
                width={264}
                style={{
                    insetBlockEnd: '-16px',
                }}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
                className={'public_signup_image'}
            />
            <Link
                url={{ type: 'company', url_name: 'deriv_app' }}
                no_hover
                className={'public_signup_link'}
            >
                <Flex.Box align="center" gap="4x">
                    <Typography.Heading size="large" as="h2" textcolor="white">
                        <Localize translate_text={'_t_Get a taste of the Deriv experience_t_'} />
                    </Typography.Heading>
                    <Image has_rtl src={Arrow} width={32} height={32} alt={'right icon'} />
                </Flex.Box>
            </Link>
        </Flex.Box>
    )
}

export default PublicSignupBanner
