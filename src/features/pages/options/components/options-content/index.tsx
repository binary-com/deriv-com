import React from 'react'
import { OptionContentAvailability, OptionContentItemData } from './type'
import { content_container } from './styles.module.scss'
import OptionContentItem from './option-content.item'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import Link from 'features/components/atoms/link'

export interface OptionsContentProps {
    items: OptionContentItemData[]
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

const OptionsContent = ({ items }: OptionsContentProps) => {
    return (
        <Flex.Box
            direction="col"
            container="fixed"
            justify="center"
            align="center"
            gap="40x"
            className={content_container}
            pt="12x"
            pb="24x"
            style={{ maxInlineSize: '100rem', marginInline: 'auto' }}
        >
            {items.map((contentItem) => (
                <OptionContentItem item={contentItem} key={contentItem.title} />
            ))}
        </Flex.Box>
    )
}

export default OptionsContent
