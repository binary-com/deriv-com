import React from 'react'
import { OptionContentSingleItemData } from './type'
import { content_images, single_image } from './styles.module.scss'
import { Localize, localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

const SingleOptionContentItem = ({ item }: { item: OptionContentSingleItemData }) => {
    return (
        <Flex.Box justify="start" align="start" direction="col">
            <Flex.Box gap="4x" pb="8x" align="center">
                {item.icon && <img src={item.icon.src} alt={localize(item.icon.alt)} />}
                {item.title && (
                    <h4 className={dclsx('at-text-small')}>
                        <Localize translate_text={item.title} />
                    </h4>
                )}
            </Flex.Box>
            <Flex.Box direction="col" gap="6x" pb="16x">
                {item.texts.map((textItem) => (
                    <Typography.Paragraph key={textItem} size="small">
                        <Localize translate_text={textItem} />
                    </Typography.Paragraph>
                ))}
            </Flex.Box>
            <div className={`${content_images} ${item.images.length < 2 ? single_image : ''}`}>
                {item.images.map(({ src, alt }) => (
                    <img src={src} alt={localize(alt)} key={alt} width="100%" height="100%" />
                ))}
            </div>
        </Flex.Box>
    )
}

export default SingleOptionContentItem
