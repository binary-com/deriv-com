import React from 'react'
import { Features } from '@deriv-com/blocks'
import { Section, FluidContainer, Heading, Tab } from '@deriv/quill-design'
import { cards, platformTabs } from './data'
import { localize } from 'components/localization'

const getTabContent = (tabId) => {
    switch (tabId) {
        case 'all':
            return cards
        case 'cfd':
            return cards.filter(
                (card) =>
                    card.header.includes('Deriv MT5') ||
                    card.header.includes('Deriv cTrader') ||
                    card.header.includes('Deriv X'),
            )
        case 'options':
            return cards.filter(
                (card) =>
                    card.header.includes('Deriv GO') ||
                    card.header.includes('Deriv Trader') ||
                    card.header.includes('Deriv Bot'),
            )
        case 'bots':
            return cards.filter((card) => card.header.includes('Deriv Bot'))
        case 'social':
            return cards.filter((card) => card.header.includes('Deriv cTrader'))
        default:
            return []
    }
}
const UserFriendlyPlatforms = () => {
    return (
        <Section className="py-general-4xl bg-background-primary-base">
            <FluidContainer className="flex flex-col items-center justify-center gap-gap-3xl">
                <Heading.H2>
                    {localize('_t_User-friendly trading platforms, on any device_t_')}
                </Heading.H2>

                <Tab.Container id="test" size="md">
                    <Tab.List className="justify-center">
                        {platformTabs.map((item) => (
                            <Tab.Trigger key={item.tabId}>{item.name}</Tab.Trigger>
                        ))}
                    </Tab.List>
                    <Tab.Content>
                        {platformTabs.map((item) => (
                            <Tab.Panel key={item.tabId}>
                                <Features.Card
                                    className="!bg-background-primary-base"
                                    cards={getTabContent(item.tabId)}
                                    cols="three"
                                />
                            </Tab.Panel>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </FluidContainer>
        </Section>
    )
}

export default UserFriendlyPlatforms
