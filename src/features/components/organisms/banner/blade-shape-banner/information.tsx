import React from 'react'
import { InformationTypes } from './types'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'

interface InformationProps {
    item: InformationTypes
}

const BannerInfo = ({ item }: InformationProps) => {
    const { is_mobile } = useBreakpoints()
    return (
        <Flex.Box basis="full" align="center" md={{ basis: '7-12' }}>
            <Image src={item.img_src} alt="Deriv P2P" width={64} height={64} />
            <Typography.Heading
                as="h2"
                size={is_mobile ? 'small' : 'large'}
                textcolor="inverted"
                ml="6x"
            >
                <Localize translate_text={item.heading} />
            </Typography.Heading>
        </Flex.Box>
    )
}

export default BannerInfo
