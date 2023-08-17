import React from 'react'
import BaseTable from '../base'
import dclsx from 'features/utils/dclsx'

type ShadowTableProps = React.ComponentProps<typeof BaseTable>

const ShadowTable = ({ ...rest }: ShadowTableProps) => {
    return <BaseTable className={dclsx('table-shadow')} {...rest} />
}

export default ShadowTable
