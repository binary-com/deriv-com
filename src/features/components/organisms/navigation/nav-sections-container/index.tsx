import React, { useMemo } from 'react'
import NavSectionColumn from './section-column'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import usePpc from 'features/hooks/use-ppc'
import { TNavConfig, TSmartNavSectionColumns } from 'features/components/templates/navigation/types'
import Flex from 'features/components/atoms/flex-box'

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
        <Flex.Box bgcolor="primary" direction={'col'} md={{ direction: 'row' }}>
            {data.map((sectionItem) => (
                <NavSectionColumn item={sectionItem} key={sectionItem.id} />
            ))}
        </Flex.Box>
    )
}

export default NavSectionContainer
