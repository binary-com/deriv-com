import React from 'react'
import BaseTable, { TableProps } from '../base'
import dclsx from 'features/utils/dclsx'

const ShadowTable = ({ className, ...rest }: TableProps) => {
    return <BaseTable className={dclsx('table-shadow', 'padding-12x', className)} {...rest} />
}

export default ShadowTable
