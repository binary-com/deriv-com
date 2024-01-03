import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import type { AccordionItemProps } from '@radix-ui/react-accordion'
import Typography from '../../typography'
import Icon from '../../icon'
import { TString } from 'types/generics'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import Minus from 'images/svg/elements/minus.svg'
import Plus from 'images/svg/elements/plus.svg'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

type AccordionIconType = 'chevron' | 'minus' | 'plus'

interface TAccordionItem extends AccordionItemProps {
    item_title: TString
    icon_type?: AccordionIconType
}

type AccordionIcons = {
    [key in AccordionIconType]: string
}

const icons: AccordionIcons = {
    chevron: Chevron,
    minus: Minus,
    plus: Plus,
}

const AccordionItem = React.forwardRef<HTMLDivElement, TAccordionItem>(
    ({ children, className, item_title, icon_type = 'chevron', ...props }, ref) => (
        <Accordion.Item className={'at-accordion_item'} ref={ref} {...props}>
            <Accordion.Header>
                <Accordion.Trigger className={dclsx('at-accordion_trigger', 'at-bg-color-primary')}>
                    <Typography.Heading size={'xs'}>
                        <Localize translate_text={item_title} />
                    </Typography.Heading>
                    <Icon
                        src={icons[icon_type]}
                        className={'at-accordion_icon'}
                        alt={'chevron'}
                        size={'large'}
                    />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={dclsx('at-accordion_content', className)}>
                <div className="AccordionContentText">{children}</div>
            </Accordion.Content>
        </Accordion.Item>
    ),
)

AccordionItem.displayName = 'AccordionItem'
export default AccordionItem
