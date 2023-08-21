import React, { ReactNode } from 'react'
import BaseTable from './base'
import ShadowTable from './shadow-table'

type BaseTypes = {
    Base: typeof BaseTable
    Shadow: typeof ShadowTable
}

const Table: BaseTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Table.Base = BaseTable
Table.Shadow = ShadowTable

export default Table
