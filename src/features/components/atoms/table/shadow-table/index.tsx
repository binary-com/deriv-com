import React from 'react'
import BaseTable, { TableProps } from '../base'
import dclsx from 'features/utils/dclsx'

function ShadowTable<T, K extends keyof T>({ className, ...rest }: TableProps<T, K>) {
    return <BaseTable className={dclsx('at-table-shadow', 'at-padding-12x', className)} {...rest} />
}

export default ShadowTable
