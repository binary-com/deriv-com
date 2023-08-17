import React, { ReactNode } from 'react'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'
import { ClassProps } from 'features/types'

type Data = Record<string, string | ReactNode>

type TableProps = React.ComponentProps<'table'> &
    ClassProps & {
        data: Data[]
    }

const BaseTable = ({ data, className, ...rest }: TableProps) => {
    return (
        <div className={dclsx('table-responsive', className)}>
            <table className={dclsx('table')} {...rest}>
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
        </div>
    )
}

export default BaseTable
