import React from 'react'
import { OptionContentAvailability, OptionContentItemData } from './type'
import { content_images, content_container } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import Link from 'features/components/atoms/link'

export interface OptionsContentProps {
    items: OptionContentItemData[]
    markets: OptionContentAvailability[]
    trade_platforms?: OptionContentAvailability[]
}

const OptionContentItem = ({ item }: { item: OptionContentItemData }) => {
    return (
        <Flex.Box container="fluid" justify="start" align="start" direction="col">
            <Flex.Box gap="8x" pb="8x">
                <img src={item.icon.src} alt={item.icon.alt} />
                <Typography.Heading size="xxs">
                    <Localize translate_text={item.title} />
                </Typography.Heading>
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
                    <img src={imageItem.src} alt={imageItem.alt} key={imageItem.alt} />
                ))}
            </div>
        </Flex.Box>
    )
}

const OptionsAvailability = ({
    markets,
    title,
}: {
    title: TString
    markets: OptionContentAvailability[]
}) => {
    return (
        <Flex.Box gap="10x">
            <Typography.Paragraph font_family="UBUNTU">
                <Localize translate_text={title} />
            </Typography.Paragraph>
            {markets.map((marketItem) => (
                <Flex.Box gap="2x" key={marketItem.title} justify="center" align="center">
                    <img
                        src={marketItem.icon.src}
                        alt={marketItem.icon.alt}
                        width="24"
                        height="24"
                    />
                    <Link url={marketItem.link} key={marketItem.title} size="medium">
                        <Localize translate_text={marketItem.title} />
                    </Link>
                </Flex.Box>
            ))}
        </Flex.Box>
    )
}

const OptionsContent = ({ items, markets, trade_platforms }: OptionsContentProps) => {
    return (
        <Flex.Box
            direction="col"
            justify="center"
            align="center"
            gap={'20x'}
            style={{ maxInlineSize: '100rem', marginInline: 'auto' }}
        >
            <Flex.Box
                direction="col"
                container="fixed"
                justify="center"
                align="center"
                gap="40x"
                className={content_container}
                mt="20x"
                padding_block="20x"
            >
                {items.map((contentItem) => (
                    <OptionContentItem item={contentItem} key={contentItem.title} />
                ))}
            </Flex.Box>
            <OptionsAvailability markets={markets} title={'_t_Markets available_t_'} />
            <OptionsAvailability markets={trade_platforms} title={'_t_Trade on_t_'} />
        </Flex.Box>
    )
}

export default OptionsContent
