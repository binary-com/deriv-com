import React, { ComponentProps } from 'react'
import { qtMerge } from '@deriv/quill-design'

type AnchorProps = ComponentProps<'a'>

const Anchor = ({ className, ...restProps }: AnchorProps) => {
    return (
        <a
            className={qtMerge(
                'font-bold inline text-75 transition-colors hover:underline hover:text-solid-coral-700',
                className,
            )}
            {...restProps}
        />
    )
}

export default Anchor
