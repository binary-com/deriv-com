import React, { useMemo } from 'react'
import { OptionNavigationType } from '../../navigation/tab-nav-without-border/types'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Tab from 'features/components/atoms/tab'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { isActiveLink } from 'features/components/atoms/link/internal'

export type TabMenuProps = {
    class_name?: string
    tab_items: OptionNavigationType[]
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
    const { is_mobile } = useBreakpoints()

    console.log(selected, tab_items, 'www')

    return (
        <FlexBox.Box className={class_name} justify={'start'} md={{ justify: 'center' }}>
            {tab_items.map(({ to, button_text }) => {
                return (
                    <Link url={{ type: 'internal', to: to }} no_hover key={button_text}>
                        <Tab.MenuItem selected={selected} is_no_border_bottom={is_no_border_bottom}>
                            {icon && (
                                <FlexBox.Box justify="center" padding_block="6x">
                                    <Image src={icon} width="64px" height="64px" />
                                </FlexBox.Box>
                            )}
                            <Typography.Paragraph
                                size={is_mobile ? 'medium' : 'small'}
                                textcolor={selected ? 'brand' : 'light-black'}
                            >
                                <Localize translate_text={button_text} />
                            </Typography.Paragraph>
                        </Tab.MenuItem>
                    </Link>
                )
            })}
        </FlexBox.Box>
    )
}

export default NavigationTabMenu
