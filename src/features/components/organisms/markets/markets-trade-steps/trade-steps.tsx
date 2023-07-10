import React from 'react'
import { TradeStepsType } from './types'
import Card from 'features/components/atoms/card'

interface TradeStepsProps {
    item: TradeStepsType
}

const TradeSteps = ({ item }: TradeStepsProps) => {
    return <Card.Basic header={item.title} description={item.description} />
}

export default TradeSteps
