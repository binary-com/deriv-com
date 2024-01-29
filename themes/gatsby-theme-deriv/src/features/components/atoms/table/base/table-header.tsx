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
                            'typography-color-black',
                            'typography-align-center',
                            'typography-font-UBUNTU',
                            'typography-weight-bold',
                            'text-small',
                            'padding-block-5x',
                            'padding-inline-10x',
                            'md-padding-block-6x',
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
