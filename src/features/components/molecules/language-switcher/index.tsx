import React, { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as styles from './language-switcher.module.scss'
import useLangSwitcher from './useLangSwitcher'
import Typography from 'features/components/atoms/typography'
import { LocaleContext, get_lang_direction } from 'components/localization'
import { useNavContext } from 'features/components/templates/navigation/template/nav-context'
import { useLangDirection } from 'components/hooks/use-lang-direction'

const LanguageSwitcher = () => {
    const { isSelected, languages, onSwitchLanguage, currentLang } = useLangSwitcher()
    const [open, setOpen] = useState(false)
    const { onCloseMenu, is_menu_open } = useNavContext()
    const lang_direction = useLangDirection()
    const { locale } = React.useContext(LocaleContext)
    const formatted_lang = locale.replace('_', '-')

    React.useEffect(() => {
        document.body.dir = lang_direction
        document.documentElement.lang = formatted_lang
    }, [lang_direction])

    useEffect(() => {
        if (open && is_menu_open) {
            onCloseMenu()
        }
    }, [open, is_menu_open, onCloseMenu])

    return (
        <DropdownMenu.Root
            modal={true}
            dir={get_lang_direction()}
            open={open}
            onOpenChange={setOpen}
        >
            <DropdownMenu.Trigger asChild>
                <div className={styles.trigger}>
                    <Typography.Paragraph size="medium" font_family={'UBUNTU'} weight="bold">
                        {currentLang.short_name}
                    </Typography.Paragraph>
                </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
                style={{ zIndex: 9 }}
                className={styles.menu_content}
                collisionPadding={{
                    right: 20,
                }}
                align="center"
                onMouseLeave={() => {
                    setOpen(false)
                }}
            >
                {languages.map((langItem) => (
                    <DropdownMenu.Item
                        key={langItem.key}
                        className={styles.menu_item}
                        onSelect={() => onSwitchLanguage(langItem.url)}
                    >
                        <Typography.Paragraph
                            align="left"
                            padding_block="3x"
                            padding_inline="6x"
                            font_family="UBUNTU"
                            textcolor={isSelected(langItem.key) ? 'brand' : 'primary'}
                        >
                            {langItem.display_name}
                        </Typography.Paragraph>
                    </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default LanguageSwitcher
