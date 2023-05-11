import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import P2PImage from 'images/svg/p2p/deriv_p2p.svg'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'

const DP2BannerInfo = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <Flex.Box basis="full" align="center" md={{ basis: '7-12' }}>
            <Image src={P2PImage} alt="Deriv P2P" width={64} height={64} />
            <Typography.Heading
                as="h2"
                size={is_mobile ? 'small' : 'large'}
                textcolor="inverted"
                ml="6x"
            >
                <Localize translate_text="_t_Make hassle-free deposits and withdrawals today_t_" />
            </Typography.Heading>
        </Flex.Box>
    )
}

export default DP2BannerInfo
