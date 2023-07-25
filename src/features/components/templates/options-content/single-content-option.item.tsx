import React from 'react'
import { OptionContentSingleItemData } from './type'
import { content_images } from './styles.module.scss'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

const SingleOptionContentItem = ({ item }: { item: OptionContentSingleItemData }) => {
    return (
        <Flex.Box justify="start" align="start" direction="col">
            <Flex.Box gap="8x" pb="8x">
                {item.icon && <img src={item.icon.src} alt={item.icon.alt} />}
                {item.title && (
                    <Typography.Heading size="xxs">
                        <Localize translate_text={item.title} />
                    </Typography.Heading>
                )}
            </Flex.Box>
            <Flex.Box direction="col" gap="6x" pb="16x">
                {item.texts.map((textItem) => (
                    <Typography.Paragraph key={textItem}>
                        <Localize translate_text={textItem} />
                    </Typography.Paragraph>
                ))}
            </Flex.Box>
            <div className={content_images}>
                {item.images.map((imageItem) => (
                    <img
                        src={imageItem.src}
                        alt={imageItem.alt}
                        key={imageItem.alt}
                        width="100%"
                        height="100%"
                    />
                ))}
            </div>
        </Flex.Box>
    )
}

export default SingleOptionContentItem
