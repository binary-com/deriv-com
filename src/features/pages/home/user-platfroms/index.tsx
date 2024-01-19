import React from 'react'
import { PlatformBlock } from '@deriv-com/blocks'
import { CardsContainer } from '@deriv-com/components'
import { RowCards, platformTabs, EUCards } from './data'
import { FilterKeyType } from './type'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const getTabContent = (tabId: FilterKeyType) => {
    if (tabId === 'All') {
        return RowCards
    } else {
        return RowCards.filter((card) => card.filterKey.includes(tabId))
    }
}

const tabs = platformTabs.map(({ content }) => ({ content }))

const UserFriendlyPlatforms = () => {
    const { is_eu } = useRegion()

    if (is_eu) {
        return (
            <PlatformBlock.Card
                className="bg-background-primary-base"
                header={
                    <Localize translate_text="_t_User-friendly trading platforms, on any device_t_" />
                }
                variant="ContentBottom"
                cols="three"
                cards={EUCards}
            />
        )
    }

    return (
        <PlatformBlock.Tab
            className="bg-background-primary-base"
            tabId="platformtab"
            header={
                <Localize translate_text="_t_User-friendly trading platforms, on any device_t_" />
            }
            tabs={tabs}
        >
            {platformTabs.map((item, i) => (
                <CardsContainer
                    variant="ContentBottom"
                    cards={getTabContent(item.tabId)}
                    cols="three"
                    key={i}
                />
            ))}
        </PlatformBlock.Tab>
    )
}

export default UserFriendlyPlatforms
