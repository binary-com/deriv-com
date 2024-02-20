import React from 'react'
import { TableColumnType } from '../types'
import Box, { BoxProps } from '../../box'
import TableHeader from './table-header'
import TableRow from './table-row'
import dclsx from 'features/utils/dclsx'
import { ClassProps } from 'features/types'

export interface TableProps<T, K extends keyof T> extends BoxProps, ClassProps {
    striped?: boolean
    layout?: 'fixed' | 'auto'
    data: T[]
    columns: Array<TableColumnType<T, K>>
}

function BaseTable<T, K extends keyof T>({
    data,
    columns,
    striped,
    layout,
    className,
    ...rest
}: TableProps<T, K>) {
    return (
        <Box
            className={dclsx('at-table-responsive', { ['at-table-striped']: striped }, className)}
            {...rest}
        >
            <table className={dclsx('at-table', { [`at-table-layout-${layout}`]: layout })}>
                <TableHeader columns={columns} />
                <TableRow data={data} columns={columns} />
            </table>
        </Box>
    )
}

export default BaseTable
