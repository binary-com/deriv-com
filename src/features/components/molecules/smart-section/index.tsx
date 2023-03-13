import React, { HTMLAttributes } from 'react'
import { useInView } from 'react-intersection-observer'
interface ISmartSectionProps extends HTMLAttributes<HTMLElement> {
    name: string
}
const SmartSection = ({ name, children, ...rest }: ISmartSectionProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        fallbackInView: true,
        threshold: 1,
    })

    return (
        <section {...rest} style={{ position: 'relative', minBlockSize: '30rem' }}>
            <>
                <div
                    ref={ref}
                    style={{
                        position: 'absolute',
                        border: '10px solid red',
                        width: '100%',
                        insetBlockStart: '-300px',
                    }}
                ></div>
                {inView ? <>{children}</> : null}
            </>
        </section>
    )
}

export default SmartSection
