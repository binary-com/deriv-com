import React from 'react'
import Link, { LinkProps } from '../../link'
import dclsx from 'features/utils/dclsx'

export interface SecondaryLinkButtonProps extends LinkProps {
    outlined?: boolean
    hero?: boolean
}

const SecondaryLinkButton = ({ className, hero, outlined, ...rest }: SecondaryLinkButtonProps) => {
    return (
        <Link
            no_hover
            className={dclsx(className, 'link-button', 'secondary', { outlined, hero })}
            {...rest}
        />
    )
}

export default SecondaryLinkButton
