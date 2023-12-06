import { ReactNode } from 'react'

export type FAQData = {
    title: string
    answers?: (() => ReactNode)[] | undefined
}
export type FAQDataType = {
    header: string
    data: FAQData[]
}
