import React from 'react'
import FooterSocialIcons from '../social-icons'
import DerivLogo from 'images/svg/layout/deriv-footer.svg'
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
                <Image src={DerivLogo} width={150} height={25} />
                <FooterSocialIcons />
            </FlexBox>
        </FlexBox>
    )
}

export default FooterIcons
