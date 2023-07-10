import React from 'react'
import { OptionContentAvailability } from '../options-content/type'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'

const AvailableList = ({
    items,
    title,
}: {
    title: TString
    items: OptionContentAvailability[]
}) => {
    return (
        <Flex.Box gap="10x">
            <Typography.Paragraph font_family="UBUNTU">
                <Localize translate_text={title} />
            </Typography.Paragraph>
            {items.map((marketItem) => (
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

export default AvailableList
