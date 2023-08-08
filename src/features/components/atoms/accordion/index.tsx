import React, { ReactNode } from 'react'
import AccordionItem from './accordion-item'
import AccordionRoot from './accordion-root'
import AccordionShadowItem from './accordion-shadow-item'

type AccordionType = {
    Root: typeof AccordionRoot
    Item: typeof AccordionItem
    ShadowItem: typeof AccordionShadowItem
}

const Accordion: AccordionType = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Accordion.Root = AccordionRoot
Accordion.Item = AccordionItem
Accordion.ShadowItem = AccordionShadowItem
export default Accordion
