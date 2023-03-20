import React from 'react'
import type { AccordionMultipleProps, AccordionSingleProps } from '@radix-ui/react-accordion'
import * as Accordion from '@radix-ui/react-accordion'
import dclsx from 'features/utils/dclsx'
import './accordion-root.scss'

const AccordionRoot = React.forwardRef<
    HTMLDivElement,
    AccordionSingleProps | AccordionMultipleProps
>(({ className, ...rest }, ref) => {
    return (
        <Accordion.Root
            className={dclsx(className, 'accordion_root', 'bg-color-primary')}
            {...rest}
            ref={ref}
        />
    )
})

AccordionRoot.displayName = 'AccordionRoot'

export default AccordionRoot
