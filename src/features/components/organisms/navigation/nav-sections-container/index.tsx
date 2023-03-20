import React, { useMemo } from 'react'
import NavCardItems from '../nav-card-items'
import * as styles from './render-section-items.module.scss'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import usePpc from 'features/hooks/use-ppc'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { TNavConfig, TSmartNavSectionColumns } from 'features/components/templates/navigation/types'
import FlexBox from 'features/components/atoms/flex-box'

const NavSectionContainer = ({ items }: { items: TSmartNavSectionColumns[] }) => {
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

    const data = useVisibleContent({ config: filter_config, content: items })

    return (
        <FlexBox bgcolor="primary" className={styles.section_items}>
            {data.map((sectionItem) => (
                <FlexBox
                    direction="col"
                    gap="5x"
                    padding_block="4x"
                    padding_inline="5x"
                    key={sectionItem.id}
                    className={styles.section_items_container}
                >
                    <Typography.Paragraph
                        className={styles.section_items_title}
                        textcolor="secondary"
                        align="left"
                    >
                        {sectionItem.data.title ? (
                            <Localize translate_text={sectionItem.data.title} />
                        ) : (
                            ''
                        )}
                    </Typography.Paragraph>
                    <NavCardItems items={sectionItem.data.section} />
                </FlexBox>
            ))}
        </FlexBox>
    )
}

export default NavSectionContainer
