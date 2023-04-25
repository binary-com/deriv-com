import React from 'react'
import FooterSocialIcons from '../social-icons'
import DerivFooterLogo from 'images/svg/layout/deriv_footer_logo.svg'
import Image from 'features/components/atoms/image'
import Flex from 'features/components/atoms/flex-box'

const FooterIcons = () => {
    return (
        <Flex.Box direction="col">
            <Flex.Box
                justify="between"
                align="center"
                direction="col"
                gap={'30x'}
                md={{
                    direction: 'row',
                }}
            >
                <Image src={DerivFooterLogo} alt="deriv logo image" width={110} height={40} />
                <FooterSocialIcons />
            </Flex.Box>
        </Flex.Box>
    )
}

export default FooterIcons
