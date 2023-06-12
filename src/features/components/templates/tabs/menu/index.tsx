import React from 'react'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Tab from 'features/components/atoms/tab'
import { TString } from 'types/generics'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'

export type TabMenuProps = {
    class_name?: string
    tab_names: TString[] | string[]
    current_tab: TString | string
    setCurrentTab: (name: TString) => void
    icon?: string
}
const TabMenu = ({ class_name, tab_names, current_tab, icon, setCurrentTab }: TabMenuProps) => {
    return (
        <FlexBox.Box
            className={class_name}
            direction={'row'}
            justify={'start'}
            md={{ justify: 'center' }}
        >
            {tab_names.map((tab_name) => {
                return (
                    <Tab.MenuItem
                        key={tab_name}
                        selected={tab_name == current_tab}
                        onClick={() => {
                            setCurrentTab(tab_name)
                        }}
                    >
                        {icon && (
                            <FlexBox.Box justify="center" padding_block="6x">
                                {icon && <Image src={icon} width="24px" height="24px" />}
                            </FlexBox.Box>
                        )}

                        <Typography.Paragraph
                            size="large"
                            font_family="UBUNTU"
                            textcolor={tab_name === current_tab ? 'brand' : 'light'}
                        >
                            <Localize translate_text={tab_name} />
                        </Typography.Paragraph>
                    </Tab.MenuItem>
                )
            })}
        </FlexBox.Box>
    )
}

export default TabMenu
