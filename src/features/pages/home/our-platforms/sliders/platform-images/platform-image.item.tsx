import React from 'react'
import { PlatformItem } from '../../types'
import { platform_images_item, platform_image_caption } from './platform-images.module.scss'
import Flex from 'features/components/atoms/flex-box'
import useRegion from 'components/hooks/use-region'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
interface PlatformImageItemProps {
    item: PlatformItem
}

const PlatformImageItem = ({ item }: PlatformImageItemProps) => {
    const { is_eu } = useRegion()

    const image = typeof item.image === 'function' ? item.image({ is_eu }) : item.image

    return (
        <Flex.Box
            direction="col"
            justify="center"
            align="center"
            className={platform_images_item}
            gap="10x"
        >
            {image}
            {item.image_caption && (
                <Typography.Paragraph className={platform_image_caption}>
                    <Localize
                        translate_text={item.image_caption.text}
                        components={item.image_caption.components}
                    />
                </Typography.Paragraph>
            )}
        </Flex.Box>
    )
}

export default PlatformImageItem
