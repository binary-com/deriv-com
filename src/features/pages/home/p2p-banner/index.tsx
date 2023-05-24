import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { p2p_banner, p2p_content_wrapper } from './styles.module.scss'
import P2PBannerDescription from './p2p-description'
import P2PBannerImage from './p2p-image'
import Flex from 'features/components/atoms/flex-box'

const P2PBanner = () => {
    return (
        <Flex.Box
            container="fixed"
            justify="center"
            align="center"
            as="section"
            direction="col"
            md={{
                direction: 'row',
            }}
            className={p2p_banner}
        >
            <Flex.Box
                container="fluid"
                direction="col-reverse"
                md={{ direction: 'row', justify: 'between' }}
                className={p2p_content_wrapper}
            >
                <P2PBannerImage />
                <P2PBannerDescription />
            </Flex.Box>
            <Flex.Box justify="center" align="center" visible="phone-and-tablet">
                <StaticImage
                    src="../../../../images/common/home/rebranding/p2p_mobile_banner.png"
                    alt="p2p banner"
                    height={700}
                    objectFit="cover"
                    placeholder="none"
                />
            </Flex.Box>
        </Flex.Box>
    )
}

export default P2PBanner
