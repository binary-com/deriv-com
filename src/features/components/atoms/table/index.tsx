import React, { ReactNode } from 'react'
import BaseTable from './base'

type BaseTypes = {
    Base: typeof BaseTable
}

const Table: BaseTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Table.Base = BaseTable

export default Table
