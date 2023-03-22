import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as styles from './language-switcher.module.scss'
import useLangSwitcher from './useLangSwitcher'
import Typography from 'features/components/atoms/typography'
import { get_lang_direction } from 'components/localization'

const LanguageSwitcher = () => {
    const { isSelected, languages, onSwitchLanguage, currentLang } = useLangSwitcher()

    return (
        <DropdownMenu.Root modal={false} dir={get_lang_direction()}>
            <DropdownMenu.Trigger asChild>
                <div className={styles.trigger}>
                    <Typography.Paragraph size="medium" weight="bold">
                        {currentLang.short_name}
                    </Typography.Paragraph>
                </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className={styles.menu_content} sideOffset={20} alignOffset={-50}>
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
