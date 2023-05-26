import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { p2p_image_container } from '../styles.module.scss'
import { useIsRtl } from 'components/hooks/use-isrtl'
import Flex from 'features/components/atoms/flex-box'

const P2PBannerImage = () => {
    const is_rtl = useIsRtl()

    return (
        <Flex.Item basis={'6-12'} shrink="0" visible="larger-than-tablet">
            <Flex.Box justify="start" align="center" className={p2p_image_container}>
                {is_rtl ? (
                    <StaticImage
                        src="../../../../../images/common/home/rebranding/p2p_home_banner_rtl.png"
                        alt="p2p banner"
                        height={400}
                        objectFit="cover"
                        placeholder="none"
                        formats={['avif', 'webp']}
                    />
                ) : (
                    <StaticImage
                        src="../../../../../images/common/home/rebranding/p2p_home_banner.png"
                        alt="p2p banner"
                        height={400}
                        objectFit="cover"
                        placeholder="none"
                        formats={['avif', 'webp']}
                    />
                )}
            </Flex.Box>
        </Flex.Item>
    )
}

export default P2PBannerImage
