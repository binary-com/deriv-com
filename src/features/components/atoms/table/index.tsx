import React, { ReactNode } from 'react'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

type Data = Record<string, string | ReactNode>

type TableProps = {
    data: Data[]
}

function Table({ data }: TableProps) {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th key={key}>
                                <Localize translate_text={key as TString} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {Object.keys(row).map((key) => {
                                return <td key={key}>{row[key]}</td>
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
