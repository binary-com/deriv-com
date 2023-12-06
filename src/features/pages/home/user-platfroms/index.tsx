import React from 'react'
import { PlatformBlock } from '@deriv-com/blocks'
import { CardsContainer } from '@deriv-com/components'
import { RowCards, platformTabs } from './data'
import { localize } from 'components/localization'

const getTabContent = (tabId) => {
    switch (tabId) {
        case 'All':
            return RowCards
        case 'CFDs':
            return RowCards.filter(
                (card) =>
                    card.header.includes('Deriv MT5') ||
                    card.header.includes('Deriv cTrader') ||
                    card.header.includes('Deriv X'),
            )
        case 'Options':
            return RowCards.filter(
                (card) =>
                    card.header.includes('Deriv GO') ||
                    card.header.includes('Deriv Trader') ||
                    card.header.includes('Deriv Bot'),
            )
        case 'Bots':
            return RowCards.filter((card) => card.header.includes('Deriv Bot'))
        case 'Social':
            return RowCards.filter((card) => card.header.includes('Deriv cTrader'))
        default:
            return []
    }
}
const UserFriendlyPlatforms = () => {
    return (
        <PlatformBlock.Tab
            className="bg-background-primary-base"
            header={localize('_t_User-friendly trading platforms, on any device_t_')}
            tabs={platformTabs}
        >
            {platformTabs.map((item, i) => (
                <CardsContainer
                    variant="ContentBottom"
                    cards={getTabContent(item.children)}
                    cols="three"
                    key={i}
                />
            ))}
        </PlatformBlock.Tab>
    )
}

export default UserFriendlyPlatforms
