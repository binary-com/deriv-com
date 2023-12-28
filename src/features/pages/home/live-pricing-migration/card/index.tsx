import { ReactNode } from 'react'
import { LiveMarketCard } from './live-market'

export type CardVariants = {
    LiveMarketCard: typeof LiveMarketCard
}

export const Card: CardVariants = ({ children }: { children: ReactNode }) => {
    return children
}

Card.LiveMarketCard = LiveMarketCard

export default Card

export * from './types'
