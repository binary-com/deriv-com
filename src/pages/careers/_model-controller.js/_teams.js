import { accounts_and_payments_positions } from '../_open-positions/_accounts-and-payments'
import { back_end_positions } from '../_open-positions/_back-end'
import { business_intelligence_positions } from '../_open-positions/_business-intelligence'
import { localize } from 'components/localization'

class Team {
    name = ''
    display_name = ''
    card_description = ''
    thumbnail = ''
    positions = []

    constructor({ name, display_name, card_description, positions, thumbnail }) {
        this.display_name = display_name
        this.name = name
        this.card_description = card_description
        this.positions = positions
        this.thumbnail = thumbnail
    }

    getAllPositions = () => this.positions
    getAllPositionsByLocation = location =>
        this.positions.filter(position => position.location === location)
}

export const all_teams = [
    new Team({
        name: 'accounts-and-payments',
        display_name: localize('Accounts and Payments'),
        thumbnail: 'accounts-payment-thumbnail.png',
        card_description: localize(
            'We’re all about helping the company make good decisions about money so we can stay on course to fulfil our vision.',
        ),
        positions: accounts_and_payments_positions,
    }),
    new Team({
        name: 'back-end',
        display_name: localize('Back-end'),
        thumbnail: 'back-end-thumbnail.png',
        card_description: localize(
            'We fortify our website and app architecture that power our users’ experience.',
        ),
        positions: back_end_positions,
    }),
    new Team({
        name: 'business-intelligence',
        display_name: localize('Business Intelligence'),
        thumbnail: 'business-intelligence-thumbnail.png',
        card_description: localize(
            'We provide data and valuable insights that help shape smart business decisions.',
        ),
        positions: business_intelligence_positions,
    }),
]

export const all_positions = [
    ...accounts_and_payments_positions,
    ...back_end_positions,
    ...business_intelligence_positions,
]

export const getTop4Teams = () => {
    all_teams
}
