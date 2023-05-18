import React, { ReactNode } from 'react'
import AccordionItem from './accordion-item'
import AccordionRoot from './accordion-root'

type AccordionType = {
    Root: typeof AccordionRoot
    Item: typeof AccordionItem
}

const Accordion: AccordionType = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Accordion.Root = AccordionRoot
Accordion.Item = AccordionItem
export default Accordion
