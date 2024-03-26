import { ReactNode } from 'react'

export type TableColumnType<T, K extends keyof T> = {
    accessor: K extends string ? K : never
    header: ReactNode
}
