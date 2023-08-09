import React from 'react'
import { available_wrapper } from './styles.module.scss'
import { Localize, localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import { OptionContentAvailability } from 'features/components/templates/options-content/type'

const AvailableList = ({
    items,
    title,
}: {
    title: TString
    items: OptionContentAvailability[]
}) => {
    return (
        <Flex.Box
            gap="12x"
            wrap="wrap"
            className={available_wrapper}
            md={{ wrap: 'nowrap' }}
            justify="center"
            align="center"
        >
            <Flex.Item
                grow="1"
                shrink="0"
                basis="full"
                md={{
                    basis: 'auto',
                }}
            >
                <Typography.Paragraph
                    font_family="UBUNTU"
                    pt="12x"
                    pb="4x"
                    md={{ pb: '0x', pt: '0x' }}
                    align="center"
                >
                    <Localize translate_text={title} />
                </Typography.Paragraph>
            </Flex.Item>
            {items.map((marketItem) => (
                <Flex.Box
                    gap="2x"
                    key={marketItem.title}
                    justify="center"
                    align="center"
                    grow="1"
                    shrink="1"
                    basis="2-5"
                    md={{
                        basis: 'auto',
                    }}
                >
                    <img
                        src={marketItem.icon.src}
                        alt={localize(marketItem.icon.alt)}
                        width="24"
                        height="24"
                    />
                    <Link
                        url={marketItem.link}
                        key={marketItem.title}
                        size="medium"
                        font_family="UBUNTU"
                    >
                        <Localize translate_text={marketItem.title} />
                    </Link>
                </Flex.Box>
            ))}
        </Flex.Box>
    )
}

export default AvailableList
