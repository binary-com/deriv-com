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
            'We build and sustain our IT infrastructure, the backbone of our entire service.',
        ),
        positions: devops_positions,
    }),
    new Team({
        name: 'compliance',
        display_name: localize('Compliance'),
        thumbnail: 'team-compliance.png',
        card_description: localize(
            'We navigate the legal and regulatory environment to help our business maintain the highest ethical standards.',
        ),
        positions: compliance_positions,
    }),
    new Team({
        name: 'marketing',
        display_name: localize('Marketing'),
        thumbnail: 'team-marketing.png',
        card_description: localize(
            'We are the ones who conceptualise and implement creative marketing solutions to help our business grow.',
        ),
        positions: marketing_positions,
    }),
    new Team({
        name: 'quality-assurance',
        display_name: localize('Quality Assurance'),
        thumbnail: 'team-quality-assurance.png',
        card_description: localize(
            'We ensure the quality and integrity of all our platforms, systems, and codebase.',
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
        thumbnail: 'team-back-end.png',
        card_description: localize(
            'We fortify our website and app architecture that power our users’ experience.',
        ),
        positions: back_end_positions,
    }),
    new Team({
        name: 'business-intelligence',
        display_name: localize('Business Intelligence'),
        thumbnail: 'team-business-intelligence.png',
        card_description: localize(
            'We provide data and valuable insights that help shape smart business decisions.',
        ),
        positions: business_intelligence_positions,
    }),
    new Team({
        name: 'content',
        display_name: localize('Content'),
        thumbnail: 'team-content.png',
        card_description: localize(
            'From web pages to social media, we’re responsible for the ideation and execution of our content needs.',
        ),
        positions: content_positions,
    }),
    new Team({
        name: 'crypto-development',
        display_name: localize('Cryptocurrency/Blockchain Development'),
        thumbnail: 'team-crypto-development.png',
        card_description: localize(
            'Leading the business into digital transformation, we explore blockchain technology opportunities and solutions.',
        ),
        positions: crypto_development_positions,
    }),
    new Team({
        name: 'customer-support',
        display_name: localize('Customer Support'),
        thumbnail: 'team-customer-support.png',
        card_description: localize(
            'Genuine about making our clients happy, we’re here to provide them with helpful solutions.',
        ),
        positions: customer_support_positions,
    }),
    new Team({
        name: 'disaster-recovery',
        display_name: localize('Disaster Recovery'),
        thumbnail: 'team-disaster-recovery.png',
        card_description: localize(
            'We uphold business continuity by overcoming disruptions to our systems and security.',
        ),
        positions: disaster_recovery_positions,
    }),
    new Team({
        name: 'front-end',
        display_name: localize('Front-end'),
        thumbnail: 'team-front-end.png',
        card_description: localize(
            'We translate our tech ideas into an effortless experience for our users.',
        ),
        positions: front_end_positions,
    }),
    new Team({
        name: 'hr-recruitment',
        display_name: localize('HR Operations and Recruitment'),
        thumbnail: 'team-hr-recruitment.png',
        card_description: localize(
            'We bring in go-getters, link them with the right opportunities, and support them in every way to help them grow.',
        ),
        positions: hr_recruitment_positions,
    }),
    new Team({
        name: 'internal-audit',
        display_name: localize('Internal Audit'),
        thumbnail: 'team-internal-audit.png',
        card_description: localize(
            'We evaluate business and organisational processes to reinforce the company’s positive reputation.',
        ),
        positions: internal_audit_positions,
    }),
    new Team({
        name: 'it-admin',
        display_name: localize('IT Administration'),
        thumbnail: 'team-it-admin.png',
        card_description: localize(
            'We safeguard our computer systems and networks to deliver maximum productivity.',
        ),
        positions: it_admin_positions,
    }),
    new Team({
        name: 'product-design',
        display_name: localize('Product Design'),
        thumbnail: 'team-product-design.png',
        card_description: localize(
            'We are designers and researchers who work to deliver excellent user experience.',
        ),
        positions: product_design_positions,
    }),
    new Team({
        name: 'project-management',
        display_name: localize('Project Management'),
        thumbnail: 'team-project-management.png',
        card_description: localize(
            'We are the bridge that connects our teams, finding the best ways to bring our ideas and projects to life.',
        ),
        positions: project_management_positions,
    }),
    new Team({
        name: 'quants',
        display_name: localize('Quants'),
        thumbnail: 'team-quants.png',
        card_description: localize(
            'We are the brains behind the product models that drive the success of our business.',
        ),
        positions: quants_positions,
    }),
    new Team({
        name: 'security',
        display_name: localize('Security'),
        thumbnail: 'team-security.png',
        card_description: localize(
            'We’re always trying to hack Deriv, testing its vulnerability to stay ahead of all possible security threats.',
        ),
        positions: security_positions,
    }),
]

export const all_positions = [
    ...accounts_and_payments_positions,
    ...back_end_positions,
    ...business_intelligence_positions,
]

export const getTop4Teams = () =>
    all_teams.sort((a, b) => a.positions.length - b.positions.length).slice(0, 4)

export const getTeamByName = team_name =>
    all_teams.find(team => team.name.toLowerCase() === team_name.toLowerCase())
