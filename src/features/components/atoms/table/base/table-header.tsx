import React from 'react'
import { TableColumnType } from '../types'
import dclsx from 'features/utils/dclsx'

type TableHeaderProps<T, K extends keyof T> = {
    columns: Array<TableColumnType<T, K>>
}

const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>) => {
    return (
        <thead>
            <tr>
                {columns.map((col) => (
                    <th
                        key={col.accessor}
                        className={dclsx(
                            'at-typography-color-black',
                            'at-typography-align-center',
                            'at-typography-font-UBUNTU',
                            'at-typography-weight-bold',
                            'at-text-small',
                            'at-padding-block-5x',
                            'at-padding-inline-10x',
                            'md-at-padding-block-6x',
                        )}
                    >
                        {col.header}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
