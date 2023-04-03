import React from 'react'
import FooterSocialIcons from '../social-icons'
import DerivFooterLogo from 'images/svg/layout/deriv_footer_logo.svg'
import Image from 'features/components/atoms/image'
import FlexBox from 'features/components/atoms/flex-box'

const FooterIcons = () => {
    return (
        <FlexBox direction="col">
            <FlexBox
                justify="between"
                align="center"
                direction="col"
                md={{
                    direction: 'row',
                }}
                gap={'10x'}
            >
                <Image src={DerivFooterLogo} width={100} height={40} />
                <FooterSocialIcons />
            </FlexBox>
        </FlexBox>
    )
}

export default FooterIcons
