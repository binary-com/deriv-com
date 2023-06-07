import React, { ReactNode } from 'react'
import CardBase from './card-base'
import CardPrimary from './card-primary'

type CardTypes = {
    Basic: typeof CardBase
    Primary: typeof CardPrimary
}

const Card: CardTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Card.Basic = CardBase
Card.Primary = CardPrimary

export default Card
