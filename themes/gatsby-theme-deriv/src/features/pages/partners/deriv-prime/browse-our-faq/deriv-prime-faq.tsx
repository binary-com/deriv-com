import React from 'react'
import { wrapper } from './styles.module.scss'
import { DerivPrimeFAQDataItem } from './types'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize, get_lang_direction } from 'components/localization'
import Accordion from 'features/components/atoms/accordion'
import { TString } from 'types/generics'

interface DerivPrimeFaqProps {
    faqs: DerivPrimeFAQDataItem[]
    subsection?: TString
}

const DerivPrimeFaq = ({ faqs, subsection }: DerivPrimeFaqProps) => {
    return (
        <Flex.Box className={wrapper} direction="col" justify="center" align="center" pb="10x">
            <Typography.Paragraph
                padding_block="16x"
                align="center"
                font_family="UBUNTU"
                size="xlarge"
            >
                {subsection && <Localize translate_text={subsection} />}
            </Typography.Paragraph>
            <Accordion.Root type="multiple">
                {faqs.map((faqItem) => (
                    <Accordion.ShadowItem
                        item_title={faqItem.question}
                        key={faqItem.id}
                        value={faqItem.question}
                        icon_type="plus"
                        dir={get_lang_direction()}
                    >
                        <Flex.Box
                            padding_inline="3x"
                            padding_block="8x"
                            direction="col"
                            gap="4x"
                            dir={get_lang_direction()}
                            md={{ padding_inline: '7x', padding_block: '12x' }}
                        >
                            {faqItem.answers.map((answerItem) => (
                                <Flex.Box key={answerItem.id}>
                                    {answerItem.type === 'text' ? (
                                        <Typography.Paragraph>
                                            <Localize
                                                translate_text={answerItem.text}
                                                components={answerItem.components}
                                            />
                                        </Typography.Paragraph>
                                    ) : answerItem.type === 'list' ? (
                                        <ul>
                                            {answerItem.list_title && (
                                                <Typography.Paragraph>
                                                    <Localize
                                                        translate_text={answerItem.list_title}
                                                    />
                                                </Typography.Paragraph>
                                            )}
                                            {answerItem.list_items &&
                                                answerItem.list_items.map((answerListItem) => (
                                                    <li key={answerListItem}>
                                                        <Typography.Paragraph>
                                                            <Localize
                                                                translate_text={answerListItem}
                                                            />
                                                        </Typography.Paragraph>
                                                    </li>
                                                ))}
                                        </ul>
                                    ) : answerItem.type === 'custom_component' ? (
                                        <Flex.Box>{answerItem.component}</Flex.Box>
                                    ) : null}
                                </Flex.Box>
                            ))}
                        </Flex.Box>
                    </Accordion.ShadowItem>
                ))}
            </Accordion.Root>
        </Flex.Box>
    )
}

export default DerivPrimeFaq
