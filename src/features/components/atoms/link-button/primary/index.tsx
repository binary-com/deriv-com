import React from 'react'
import Link, { LinkProps } from '../../link'
import dclsx from 'features/utils/dclsx'

export interface PrimaryLinkButtonProps extends LinkProps {
    outlined?: boolean
    hero?: boolean
}

const PrimaryLinkButton = ({ className, hero, outlined, ...rest }: PrimaryLinkButtonProps) => {
    return (
        <Link
            no_hover
            className={dclsx(className, 'link-button', 'primary', { outlined, hero })}
            {...rest}
        />
    )
}

export default PrimaryLinkButton
