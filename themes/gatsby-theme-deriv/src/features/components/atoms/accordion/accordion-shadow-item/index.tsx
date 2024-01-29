import React, { ReactNode } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import type { AccordionItemProps } from '@radix-ui/react-accordion'
import Typography from '../../typography'
import Icon from '../../icon'
import { TString } from 'types/generics'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

interface TAccordionItem extends AccordionItemProps {
    item_title: TString
    icon_type?: 'chevron' | 'plus'
    renderHeader?: (header_title: TString) => ReactNode
}

const AccordionShadowItem = React.forwardRef<HTMLDivElement, TAccordionItem>(
    ({ children, className, renderHeader, item_title, icon_type = 'chevron', ...props }, ref) => (
        <Accordion.Item className={'accordion_item accordion_shadow_item'} ref={ref} {...props}>
            <Accordion.Header>
                <Accordion.Trigger
                    className={dclsx(
                        'accordion_trigger accordion_shadow_item_trigger',
                        'bg-color-primary',
                        'padding-block-8x',
                        'border-radius-4x',
                    )}
                >
                    {renderHeader ? (
                        renderHeader(item_title)
                    ) : (
                        <Typography.Paragraph weight="bold" font_family="UBUNTU">
                            <Localize translate_text={item_title} />
                        </Typography.Paragraph>
                    )}
                    {icon_type === 'chevron' ? (
                        <Icon
                            src={Chevron}
                            className={'accordion_icon'}
                            alt={'chevron'}
                            size={'large'}
                        />
                    ) : (
                        <span className="accordion_icon plus_icon" />
                    )}
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
                className={dclsx('accordion_content accordion_shadow_item_content', className)}
            >
                <div className="AccordionContentText">{children}</div>
            </Accordion.Content>
        </Accordion.Item>
    ),
)

AccordionShadowItem.displayName = 'AccordionShadowItem'
export default AccordionShadowItem
