import React from 'react'
import { PlatformBlock } from '@deriv-com/blocks'
import { CardsContainer } from '@deriv-com/components'
import { RowCards, platformTabs, EUCards } from './data'
import { FilterKeyType } from './type'
import { Localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

const getTabContent = (tabId: FilterKeyType) => {
    if (tabId === 'All') {
        return RowCards
    } else {
        return RowCards.filter((card) => card.filterKey.includes(tabId))
    }
}

const tabs = platformTabs.map(({ content }) => ({ content }))

const UserFriendlyPlatforms = () => {
    const { region } = useBuildVariant()

    if (region === 'eu') {
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
    if (region == 'row') {
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
}

export default UserFriendlyPlatforms
