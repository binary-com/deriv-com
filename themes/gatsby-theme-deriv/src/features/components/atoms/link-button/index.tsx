import React, { ReactNode } from 'react'
import PrimaryLinkButton from './primary'
import SecondaryLinkButton from './secondary'

type LinkButtonTypes = {
    Primary: typeof PrimaryLinkButton
    Secondary: typeof SecondaryLinkButton
}

const LinkButton: LinkButtonTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

LinkButton.Primary = PrimaryLinkButton
LinkButton.Secondary = SecondaryLinkButton

export default LinkButton
