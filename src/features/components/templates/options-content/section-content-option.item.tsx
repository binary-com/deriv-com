import React from 'react'
import { OptionContentSectionItemData } from './type'
import { content_images } from './styles.module.scss'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

const SectionOptionContentItem = ({ item }: { item: OptionContentSectionItemData }) => {
    return (
        <Flex.Box container="fluid" justify="start" align="start" direction="col">
            <Flex.Box gap="8x">
                {item.icon.src && <img src={item.icon.src} alt={item.icon.alt} />}
                {item.title && (
                    <Typography.Heading size="xxs">
                        <Localize translate_text={item.title} />
                    </Typography.Heading>
                )}
            </Flex.Box>
            {item.sections.map((sectionItem) => (
                <Flex.Box key={sectionItem.title} direction="col">
                    <Typography.Heading size="xxs" padding_block="12x">
                        <Localize translate_text={sectionItem.title} />
                    </Typography.Heading>
                    <Flex.Box direction="col" gap="6x" pb="16x">
                        {sectionItem.texts.map((textItem) => (
                            <Typography.Paragraph key={textItem}>
                                <Localize translate_text={textItem} />
                            </Typography.Paragraph>
                        ))}
                    </Flex.Box>
                    <div className={content_images}>
                        {sectionItem.images.map((imageItem) => (
                            <img src={imageItem.src} alt={imageItem.alt} key={imageItem.alt} />
                        ))}
                    </div>
                </Flex.Box>
            ))}
        </Flex.Box>
    )
}

export default SectionOptionContentItem
