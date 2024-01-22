import React from 'react'
import { TableColumnType } from '../types'
import dclsx from 'features/utils/dclsx'

type TableRowProps<T, K extends keyof T> = {
    data: T[]
    columns: Array<TableColumnType<T, K>>
}

const TableRow = <T, K extends keyof T>({ data, columns }: TableRowProps<T, K>) => {
    return (
        <tbody>
            {data.map((row, i) => (
                <tr key={i}>
                    {columns.map((col) => (
                        <td
                            key={col.accessor}
                            className={dclsx(
                                'typography-color-black',
                                'typography-align-center',
                                'typography-font-UBUNTU',
                                'text-small',
                                'padding-block-4x',
                                'padding-inline-10x',
                                'md-padding-block-6x',
                            )}
                        >
                            {row[col.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default TableRow
