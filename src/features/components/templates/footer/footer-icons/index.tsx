import React from 'react'
import FooterSocialIcons from '../social-icons'
import DerivLogo from 'images/svg/layout/deriv-footer.svg'
import Image from 'features/components/atoms/image'
import FlexBox from 'features/components/atoms/flex-box'
import useBreakpoints from 'components/hooks/use-breakpoints'

const FooterIcons = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <FlexBox direction="column" padding_block="medium">
            <FlexBox
                justify="space-between"
                align="center"
                direction={is_mobile_or_tablet ? 'column' : 'row'}
                gap={'large'}
            >
                <Image src={DerivLogo} width={150} height={25} />
                <FooterSocialIcons />
            </FlexBox>
        </FlexBox>
    )
}

export default FooterIcons
