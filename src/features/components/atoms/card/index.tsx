import React, { ReactNode } from 'react'
import CardBasic from './card-basic'
import CardPrimary from './card-primary'

type CardTypes = {
    Basic: typeof CardBasic
    Primary: typeof CardPrimary
}

const Card: CardTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Card.Basic = CardBasic
Card.Primary = CardPrimary

export default Card
