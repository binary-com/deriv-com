import React from 'react'
import { OptionContentSectionItemData } from './type'
import { content_images } from './styles.module.scss'
import { Localize, localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

const SectionOptionContentItem = ({ item }: { item: OptionContentSectionItemData }) => {
    return (
        <Flex.Box justify="start" align="start" direction="col">
            <Flex.Box gap="4x" align="center">
                {item.icon.src && <img src={item.icon.src} alt={localize(item.icon.alt)} />}
                {item.title && (
                    <h4 className={dclsx('at-text-small')}>
                        <Localize translate_text={item.title} />
                    </h4>
                )}
            </Flex.Box>
            {item.sections.map((sectionItem) => (
                <Flex.Box key={sectionItem.title} direction="col">
                    <h5 className={dclsx('at-text-small', 'at-padding-block-12x')}>
                        <Localize translate_text={sectionItem.title} />
                    </h5>
                    <Flex.Box direction="col" gap="6x" pb="16x">
                        {sectionItem.texts.map((textItem) => (
                            <Typography.Paragraph key={textItem} size="small">
                                <Localize translate_text={textItem} />
                            </Typography.Paragraph>
                        ))}
                    </Flex.Box>
                    <div className={content_images}>
                        {sectionItem.images.map(({ src, alt }) => (
                            <img src={src} alt={localize(alt)} key={alt} />
                        ))}
                    </div>
                </Flex.Box>
            ))}
        </Flex.Box>
    )
}

export default SectionOptionContentItem
