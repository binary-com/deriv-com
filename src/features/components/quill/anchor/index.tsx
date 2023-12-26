import React, { ComponentProps } from 'react'
import clsx from 'clsx'

type AnchorProps = ComponentProps<'a'>

const Anchor = ({ className, ...restProps }: AnchorProps) => {
    return (
        <a
            className={clsx(
                'font-bold inline text-75 transition-colors lg:text-100 hover:underline hover:text-solid-coral-700',
                className,
            )}
            {...restProps}
        />
    )
}

export default Anchor
