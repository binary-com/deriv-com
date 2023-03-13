import React, { HTMLAttributes } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'
import { TSmartNavItemsContent, TSmartNavContent, TSmartNavSectionColumns } from '../../types'
import * as styles from './mobile-menu.module.scss'
import { TString } from 'types/generics'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import NavSectionContainer from 'features/components/organisms/navigation/nav-sections-container'
import NavCardItems from 'features/components/organisms/navigation/nav-card-items'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import Icon from 'features/components/atoms/icon'

interface INavMenuProps<T extends string> extends HTMLAttributes<HTMLDivElement> {
    is_open: boolean
    items: TSmartNavItemsContent<T>[]
}

type TAccordionContent = Accordion.AccordionContentProps & {
    item_title: TString
}

const renderNavItems = (nav_items: TSmartNavContent[] | TSmartNavSectionColumns[]) => {
    if ('section' in nav_items[0].data) {
        return <NavSectionContainer items={nav_items as TSmartNavSectionColumns[]} />
    }
    return <NavCardItems items={nav_items as TSmartNavContent[]} />
}

const AccordionContent = React.forwardRef<HTMLDivElement, TAccordionContent>(
    ({ children, className, item_title, ...props }, forwardedRef) => (
        <>
            <Accordion.Header className={styles.accordion_header}>
                <Accordion.Trigger className={styles.accordion_trigger}>
                    <Typography.Heading
                        as={'h3'}
                        size={5}
                        className={styles.accordion_trigger_title}
                    >
                        <Localize translate_text={item_title} />
                    </Typography.Heading>
                    <Icon
                        src={Chevron}
                        className={styles.arrow_icon}
                        alt={'chevron'}
                        size={'large'}
                    />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
                className={clsx(styles.accordion_content, className)}
                {...props}
                ref={forwardedRef}
            >
                <div className="AccordionContentText">{children}</div>
            </Accordion.Content>
        </>
    ),
)

AccordionContent.displayName = 'AccordionContent'

const MobileMenu = <T extends string>({ is_open, className, items }: INavMenuProps<T>) => {
    return (
        <div
            className={clsx(className, styles.mobile_menu, {
                [styles.visible_nav_menu]: is_open,
            })}
        >
            <Accordion.Root type="single" collapsible className={styles.accordion_root}>
                {items.map((contentItem) => {
                    return (
                        <Accordion.Item
                            key={contentItem.id}
                            className={styles.accordion_item}
                            value={contentItem.data.active}
                        >
                            <AccordionContent item_title={contentItem.data.title}>
                                {renderNavItems(contentItem.data.content)}
                            </AccordionContent>
                        </Accordion.Item>
                    )
                })}
            </Accordion.Root>
        </div>
    )
}

export default MobileMenu
