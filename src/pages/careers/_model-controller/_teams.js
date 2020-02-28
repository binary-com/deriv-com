import { accounts_and_payments_positions } from '../_open-positions/_accounts-and-payments'
import { back_end_positions } from '../_open-positions/_back-end'
import { business_intelligence_positions } from '../_open-positions/_business-intelligence'
import { devops_positions } from '../_open-positions/_devops'
import { compliance_positions } from '../_open-positions/_compliance'
import { marketing_positions } from '../_open-positions/_marketing'
import { quality_assurance_positions } from '../_open-positions/_quality-assurance'
import { content_positions } from '../_open-positions/_content'
import { crypto_development_positions } from '../_open-positions/_crypto-development'
import { customer_support_positions } from '../_open-positions/_customer-support'
import { disaster_recovery_positions } from '../_open-positions/_disaster-recovery'
import { front_end_positions } from '../_open-positions/_front-end'
import { hr_recruitment_positions } from '../_open-positions/_hr-recruitment'
import { internal_audit_positions } from '../_open-positions/_internal-audit'
import { it_admin_positions } from '../_open-positions/_it-admin'
import { product_design_positions } from '../_open-positions/_product-design'
import { project_management_positions } from '../_open-positions/_project-management'
import { quants_positions } from '../_open-positions/_quants'
import { security_positions } from '../_open-positions/_security'
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
        name: 'devops',
        display_name: localize('Devops'),
        thumbnail: 'team-devops.png',
        card_description: localize(
            'We provide data and valuable insights that help shape smart business decisions.',
        ),
        positions: devops_positions,
    }),
    new Team({
        name: 'compliance',
        display_name: localize('Compliance'),
        thumbnail: 'team-compliance.png',
        card_description: localize(
            'We provide data and valuable insights that help shape smart business decisions.',
        ),
        positions: compliance_positions,
    }),
    new Team({
        name: 'marketing',
        display_name: localize('Marketing'),
        thumbnail: 'team-marketing.png',
        card_description: localize(
            'We provide data and valuable insights that help shape smart business decisions.',
        ),
        positions: marketing_positions,
    }),
    new Team({
        name: 'quality-assurance',
        display_name: localize('Quality Assurance'),
        thumbnail: 'team-quality-assurance.png',
        card_description: localize(
            'We provide data and valuable insights that help shape smart business decisions.',
        ),
        positions: quality_assurance_positions,
    }),
    new Team({
        name: 'accounts-and-payments',
        display_name: localize('Accounts and Payments'),
        thumbnail: 'team-accounts-payments.png',
        card_description: localize(
            'We’re all about helping the company make good decisions about money so we can stay on course to fulfil our vision.',
        ),
        positions: accounts_and_payments_positions,
    }),
    new Team({
        name: 'back-end',
        display_name: localize('Back-end'),
        thumbnail: 'team-backend.png',
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
    new Team({
        name: 'content',
        display_name: localize('Content'),
        thumbnail: 'business-intelligence-thumbnail.png',
        card_description: localize(
            'From web pages to social media, we’re responsible for the ideation and execution of our content needs.',
        ),
        positions: content_positions,
    }),
    new Team({
        name: 'crypto-development',
        display_name: localize('Cryptocurrency/Blockchain Development'),
        thumbnail: 'business-intelligence-thumbnail.png',
        card_description: localize(
            'Leading the business into digital transformation, we explore blockchain technology opportunities and solutions.',
        ),
        positions: crypto_development_positions,
    }),
    new Team({
        name: 'customer-support',
        display_name: localize('Customer Support'),
        thumbnail: 'business-intelligence-thumbnail.png',
        card_description: localize(
            'Genuine about making our clients happy, we’re here to provide them with helpful solutions.',
        ),
        positions: customer_support_positions,
    }),
    new Team({
        name: 'disaster-recovery',
        display_name: localize('Disaster Recovery'),
        thumbnail: 'business-intelligence-thumbnail.png',
        card_description: localize(
            'We uphold business continuity by overcoming disruptions to our systems and security.',
        ),
        positions: disaster_recovery_positions,
    }),
]

// import { disaster_recovery_positions } from '../_open-positions/_disaster-recovery'
// import { front_end_positions } from '../_open-positions/_front-end'
// import { hr_recruitment_positions } from '../_open-positions/_hr-recruitment'
// import { internal_audit_positions } from '../_open-positions/_internal-audit'
// import { it_admin_positions } from '../_open-positions/_it-admin'
// import { product_design_positions } from '../_open-positions/_product-design'
// import { project_management_positions } from '../_open-positions/_project-management'
// import { quants_positions } from '../_open-positions/_quants'
// import { security_positions } from '../_open-positions/_security'

export const all_positions = [
    ...accounts_and_payments_positions,
    ...back_end_positions,
    ...business_intelligence_positions,
]

export const getTop4Teams = () =>
    all_teams.sort((a, b) => a.positions.length - b.positions.length).slice(0, 4)
