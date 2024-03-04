import React, { useMemo } from 'react'
import NavSectionColumn from './section-column'
import useVisibleContent from 'components/hooks/use-visible-content'
import usePpc from 'features/hooks/use-ppc'
import { NavConfig, SmartNavSectionColumns } from 'features/components/templates/navigation/types'
import Flex from 'features/components/atoms/flex-box'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useBuildVariant from 'features/hooks/use-build-variant'

const NavSectionContainer = ({ items }: { items: SmartNavSectionColumns[] }) => {
    const { region } = useBuildVariant()
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_mobile_or_tablet } = useBreakpoints()

    const filter_config: NavConfig = useMemo(() => {
        return {
            is_eu: region === "eu",
            is_ppc,
            is_ppc_redirect,
            is_row: region === "row",
            is_mobile: is_mobile_or_tablet,
        }
    }, [region, is_ppc, is_ppc_redirect, is_mobile_or_tablet])

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
