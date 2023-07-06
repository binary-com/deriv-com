import React, { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as styles from './language-switcher.module.scss'
import useLangSwitcher from './useLangSwitcher'
import Typography from 'features/components/atoms/typography'
import { get_lang_direction } from 'components/localization'
import { useNavContext } from 'features/components/templates/navigation/template/nav-context'

const LanguageSwitcher = () => {
    const { isSelected, languages, onSwitchLanguage, currentLang } = useLangSwitcher()
    const [open, setOpen] = useState(false)
    const { onCloseMenu, is_menu_open } = useNavContext()

    useEffect(() => {
        if (open && is_menu_open) {
            onCloseMenu()
        }
    }, [open, is_menu_open, onCloseMenu])

    const openHandler = () => {
        // HOTFIX: Temporary solution - to be fixed in future
        setOpen((prev) => !prev)
        const langStyle = document.getElementById('lang_scroll_style')
        if (langStyle) return
        const styleTag = document.createElement('style')
        styleTag.type = 'text/css'
        styleTag.id = 'lang_scroll_style'
        styleTag.innerHTML = `
            body {
                overflow: auto !important;
                margin-right: 0 !important;
            }
        `
        document.body.insertAdjacentElement('beforeend', styleTag)
    }

    return (
        <DropdownMenu.Root
            modal={true}
            dir={get_lang_direction()}
            open={open}
            onOpenChange={openHandler}
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
