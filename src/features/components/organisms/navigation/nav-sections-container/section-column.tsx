import React, { useMemo } from 'react'
import NavCardItems from '../nav-card-items'
import * as styles from './render-section-items.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { NavConfig, SmartNavSectionColumns } from 'features/components/templates/navigation/types'
import { Localize } from 'components/localization'
import usePpc from 'features/hooks/use-ppc'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import dclsx from 'features/utils/dclsx'

interface NavSectionColumnProps {
    item: SmartNavSectionColumns
}

const NavSectionColumn = ({ item }: NavSectionColumnProps) => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row, is_eu } = useRegion()

    const filter_config: NavConfig = useMemo(() => {
        return {
            is_eu,
            is_ppc,
            is_ppc_redirect,
            is_row,
        }
    }, [is_eu, is_ppc, is_ppc_redirect, is_row])

    const content = useVisibleContent({ config: filter_config, content: item.data.section })

    if (content?.length) {
        return (
            <Flex.Box
                direction="col"
                gap="5x"
                padding_block="4x"
                padding_inline="5x"
                className={dclsx({
                    [styles.section_items_container]: !item.data.no_divider,
                })}
            >
                {!item.data.no_title && (
                    <Typography.Paragraph
                        className={styles.section_items_title}
                        textcolor="secondary"
                        align="left"
                        font_family="UBUNTU"
                        mb="2x"
                        visible={!item.data.title ? 'larger-than-tablet' : undefined}
                    >
                        {item.data.title ? <Localize translate_text={item.data.title} /> : ''}
                    </Typography.Paragraph>
                )}
                <NavCardItems items={content} />
            </Flex.Box>
        )
    }
    return null
}

export default NavSectionColumn
