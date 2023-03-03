import React, { HTMLAttributes, useMemo } from 'react'
import NavigationCard from '../../nav-card'
import { TNavConfig, TSmartNavContent } from '../../types'
import { noTitleSection, tradeTypesContent, tradingPlatformsContent } from './data'
import * as styles from './platform.module.scss'
import usePpc from 'features/hooks/use-ppc'
import { TString } from 'types/generics'
import useRegion from 'components/hooks/use-region'
import { filterVisibleContent } from 'components/hooks/use-visible-content'
import { Localize } from 'components/localization'
import Typography from 'features/components/typography'
interface IPlatformSectionProps extends HTMLAttributes<HTMLDivElement> {
    onClick?: () => void
}

type TSectionColumns = {
    id: number
    title?: TString
    content: TSmartNavContent[]
}

const PlatformSection = ({ onClick }: IPlatformSectionProps) => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row, is_eu } = useRegion()

    const filter_config: TNavConfig = useMemo(() => {
        return {
            is_eu,
            is_ppc,
            is_ppc_redirect,
            is_row,
        }
    }, [is_eu, is_ppc, is_ppc_redirect, is_row])

    const data: TSectionColumns[] = useMemo(() => {
        const temp_data: TSectionColumns[] = [
            {
                id: 0,
                title: '_t_Trade types_t_',
                content: filterVisibleContent(tradeTypesContent, filter_config),
            },
            {
                id: 1,
                title: '_t_Trading platforms_t_',
                content: filterVisibleContent(tradingPlatformsContent, filter_config),
            },
        ]

        if (is_row) {
            temp_data.push({
                id: 3,
                content: filterVisibleContent(noTitleSection, filter_config),
            })
        }

        return temp_data
    }, [filter_config, is_row])

    return (
        <div className={styles.platform_nav}>
            {data.map((sectionItem) => (
                <div key={sectionItem.id} className={styles.platform_nav_container}>
                    <Typography as={'p'} className={styles.platform_nav_section_title}>
                        {sectionItem.title ? <Localize translate_text={sectionItem.title} /> : ''}
                    </Typography>
                    {sectionItem.content.map(({ id, data }) => {
                        const { external, to, title, content, icon, target } = data
                        const nav_card_link = typeof to === 'function' ? to(filter_config) : to
                        const nav_card_content =
                            typeof content === 'function' ? content(filter_config) : content
                        return (
                            <NavigationCard
                                key={id}
                                to={nav_card_link}
                                title={title}
                                content={nav_card_content}
                                icon_src={icon.src}
                                icon_alt={icon.alt}
                                external={external}
                                target={target}
                                onClick={onClick}
                                has_bold_title
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

export default PlatformSection
