import React, { ReactNode } from 'react'
import Box, { BoxProps } from '../../box'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'
import { ClassProps } from 'features/types'

type Data = Record<string, string | ReactNode>

export interface TableProps extends BoxProps, ClassProps {
    striped?: boolean
    data: Data[]
}

const BaseTable = ({ data, striped, className, ...rest }: TableProps) => {
    return (
        <Box
            className={dclsx('table-responsive', { ['table-striped']: striped }, className)}
            {...rest}
        >
            <table className={dclsx('table')}>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th
                                key={key}
                                className={dclsx(
                                    'typography-color-black',
                                    'typography-align-center',
                                    'typography-font-UBUNTU',
                                    'typography-weight-bold',
                                    'text-small',
                                    'padding-block-6x',
                                )}
                            >
                                <Localize translate_text={key as TString} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {Object.keys(row).map((key) => {
                                return (
                                    <td
                                        key={key}
                                        className={dclsx(
                                            'typography-color-black',
                                            'typography-align-center',
                                            'typography-font-UBUNTU',
                                            'text-small',
                                            'padding-block-6x',
                                        )}
                                    >
                                        {row[key]}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    )
}

export default BaseTable
