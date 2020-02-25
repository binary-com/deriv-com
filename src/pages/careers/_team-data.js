import { positions } from './_team-position-data'
import { localize } from 'components/localization'

export const all_teams = [
    new Team({
        name: localize('Accounts and Payments'),
        thumbnail: 'accounts-payment-thumbnail.png',
        card_description: localize(
            'We’re all about helping the company make good decisions about money so we can stay on course to fulfil our vision.',
        ),
        description: localize(''),
        positions: positions.accounts_and_payments,
    }),
    new Team({ name: '', card_description: '', positions: '', thumbnail: '' }),
    new Team({ name: '', card_description: '', positions: '', thumbnail: '' }),
    new Team({ name: '', card_description: '', positions: '', thumbnail: '' }),
    new Team({ name: '', card_description: '', positions: '', thumbnail: '' }),
]

// for location pages
export const getTeamsWithOpenPositionsInLocation = location => {}

// for home page
export const getTeamsWithMostOpenPositions = max_nr_of_teams => {
    // return sorted based on most open positions
}

// for jobs filtering
export const getPositionsByJobType = job_type => {}
export const getPositionsByTeam = job_type => {}
export const getPositionsByLocation = job_type => {}

// for sub-teams
export const getTeam = name => {}

class Team {
    name = ''
    card_description = ''
    thumbnail = ''
    positions = []

    constructor({ name, card_description, positions, thumbnail }) {
        this.name = name
        this.card_description = card_description
        this.positions = positions
        this.thumbnail = thumbnail
    }

    getAllPositions = () => this.positions
    getAllPositionsByLocation = location =>
        this.positions.filter(position => position.location === location)
}
