import React, { useMemo } from 'react'
import NavSectionColumn from './section-column'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import usePpc from 'features/hooks/use-ppc'
import { NavConfig, SmartNavSectionColumns } from 'features/components/templates/navigation/types'
import Flex from 'features/components/atoms/flex-box'
import useBreakpoints from 'components/hooks/use-breakpoints'

const NavSectionContainer = ({ items }: { items: SmartNavSectionColumns[] }) => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row, is_eu } = useRegion()
    const { is_mobile_or_tablet } = useBreakpoints()

    const filter_config: NavConfig = useMemo(() => {
        return {
            is_eu,
            is_ppc,
            is_ppc_redirect,
            is_row,
            is_mobile: is_mobile_or_tablet,
        }
    }, [is_eu, is_ppc, is_ppc_redirect, is_row, is_mobile_or_tablet])

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
