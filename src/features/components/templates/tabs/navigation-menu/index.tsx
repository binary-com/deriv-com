import React from 'react'
import { OptionNavigationType } from '../../navigation/tab-nav-without-border/types'
import { text } from './styles.module.scss'
import { Localize, localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Tab from 'features/components/atoms/tab'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'

export type TabMenuProps = {
    class_name?: string
    tab_items: OptionNavigationType
    selected: boolean
    icon?: string
    is_no_border_bottom?: boolean
}
const NavigationTabMenu = ({
    class_name,
    tab_items,
    selected,
    icon,
    is_no_border_bottom = false,
}: TabMenuProps) => {
    const { button_text, to } = tab_items
    return (
        <FlexBox.Box className={class_name} justify="center">
            <Link url={{ type: 'internal', to: to }} no_hover key={button_text}>
                <Tab.MenuItem selected={selected} is_no_border_bottom={is_no_border_bottom}>
                    {icon && (
                        <FlexBox.Box justify="center" padding_block="6x">
                            <Image
                                srcSet={`${icon} 48w, ${icon} 64w`}
                                sizes="(min-width: 600px) 64px,
                                        48px"
                                src={icon}
                                alt={localize('_t_icon_t_')}
                            />
                        </FlexBox.Box>
                    )}
                    <Typography.Paragraph
                        size="small"
                        textcolor={selected ? 'brand' : 'light-black'}
                        className={text}
                    >
                        <Localize translate_text={button_text} />
                    </Typography.Paragraph>
                </Tab.MenuItem>
            </Link>
        </FlexBox.Box>
    )
}

export default NavigationTabMenu
