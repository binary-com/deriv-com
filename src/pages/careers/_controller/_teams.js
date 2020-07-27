import { accounts_and_payments_positions } from '../_model/_open-positions/_accounts-and-payments'
import { back_end_positions } from '../_model/_open-positions/_back-end'
import { business_intelligence_positions } from '../_model/_open-positions/_business-intelligence'
import { devops_positions } from '../_model/_open-positions/_devops'
import { compliance_positions } from '../_model/_open-positions/_compliance'
import { marketing_positions } from '../_model/_open-positions/_marketing'
import { quality_assurance_positions } from '../_model/_open-positions/_quality-assurance'
import { content_positions } from '../_model/_open-positions/_content'
import { crypto_development_positions } from '../_model/_open-positions/_crypto-development'
import { customer_support_positions } from '../_model/_open-positions/_customer-support'
import { disaster_recovery_positions } from '../_model/_open-positions/_disaster-recovery'
import { front_end_positions } from '../_model/_open-positions/_front-end'
import { hr_recruitment_positions } from '../_model/_open-positions/_hr-recruitment'
import { internal_audit_positions } from '../_model/_open-positions/_internal-audit'
import { it_admin_positions } from '../_model/_open-positions/_it-admin'
import { product_design_positions } from '../_model/_open-positions/_product-design'
import { project_management_positions } from '../_model/_open-positions/_project-management'
import { quants_positions } from '../_model/_open-positions/_quants'
import { security_positions } from '../_model/_open-positions/_security'
import { other_positions } from '../_model/_open-positions/_other'
import { job_types } from '../_model/_job_types/_job_types'
import { locations } from '../_model/_locations/_locations'
import { toHashFormat } from 'common/utility'

class Team {
    name = ''
    display_name = ''
    card_description = ''
    description = ''
    thumbnail = ''
    hero_image = ''
    positions = []

    constructor({
        name,
        display_name,
        card_description,
        positions,
        thumbnail,
        description,
        hero_image,
    }) {
        this.display_name = display_name
        this.name = name
        this.card_description = card_description
        this.positions = positions
        this.thumbnail = thumbnail
        this.description = description
        this.hero_image = hero_image
    }

    getAllPositions = () => this.positions
    getAllPositionsByLocation = (location) =>
        this.positions.filter((position) => position.location === location)
}

export const team_names = {
    devops: 'DevOps',
    compliance: 'Compliance',
    marketing: 'Marketing',
    'quality-assurance': 'Quality Assurance',
    'accounts-and-payments': 'Accounts and Payments',
    'back-end': 'Back-end',
    'business-intelligence': 'Business Intelligence',
    content: 'Content',
    'crypto-development': 'Cryptocurrency/Blockchain Development',
    'customer-support': 'Customer Support',
    'disaster-recovery': 'Disaster Recovery',
    'front-end': 'Front-end',
    'hr-recruitment': 'HR Operations and Recruitment',
    'internal-audit': 'Internal Audit',
    'it-admin': 'IT Administration',
    'product-design': 'Product Design',
    'project-management': 'Project Management',
    quants: 'Quants',
    security: 'Security',
}

export const all_queries = {
    ...team_names,
    ...job_types,
    ...locations,
}

export const all_teams = [
    new Team({
        name: 'devops',
        thumbnail: 'team-devops',
        description:
            'We collaborate with various teams to ensure successful code deployment, component testing, process re-engineering, and quality improvement. With a holistic view of our technical environment, we provide the best solutions that benefit the company and our clients.',
        card_description:
            'We build and sustain our IT infrastructure, the backbone of our entire service.',
        positions: devops_positions,
    }),
    new Team({
        name: 'compliance',
        thumbnail: 'team-compliance',
        description:
            'We see to it that the best industry practices are consistently applied in all business aspects. We perform a wide range of tasks, including ensuring operational compliance with regulations, conducting anti-fraud checks on clients, and analysing trade and payment activities for abuse.',
        card_description:
            'We navigate the legal and regulatory environment to help our business maintain the highest ethical standards.',
        positions: compliance_positions,
    }),
    new Team({
        name: 'marketing',
        thumbnail: 'team-marketing',
        description:
            'Fuelled by creativity, our team coordinates a wide range of marketing campaigns to help our business grow. We collaborate with designers, developers, analysts, and business development executives so that our marketing and advertising initiatives represent the exceptional online trading services we have to offer.',
        card_description:
            'We are the ones who conceptualise and implement creative marketing solutions to help our business grow.',
        positions: marketing_positions,
    }),
    new Team({
        name: 'quality-assurance',
        thumbnail: 'team-quality-assurance',
        description:
            'We’re a group of software testing engineers who run high-quality tests to refine our wide range of products and services. We look after the quality, usability, and stability of our websites and trading platforms.',
        card_description:
            'We ensure the quality and integrity of all our platforms, systems, and codebase.',
        positions: quality_assurance_positions,
    }),
    new Team({
        name: 'accounts-and-payments',
        thumbnail: 'team-accounts-payments',
        card_description:
            'We’re all about helping the company make good decisions about money so we can stay on course to fulfil our vision.',
        description:
            'Our team is in charge of managing the company’s financial and accounting health to ensure sustainable business growth. We control operational costs, pay the bills, and mitigate financial risks.',
        positions: accounts_and_payments_positions,
    }),
    new Team({
        name: 'back-end',
        description:
            "We’re responsible for designing, developing, testing, and debugging the company's server-side apps and databases so our customers enjoy a flawless digital experience. We collaborate with the QA team to resolve technical issues, and we empower the Front-end team by providing the components that they need.",
        thumbnail: 'team-back-end',
        card_description:
            'We fortify our website and app architecture that power our users’ experience.',
        positions: back_end_positions,
    }),
    new Team({
        name: 'business-intelligence',
        thumbnail: 'team-business-intelligence',
        description:
            'Our team leads the organisation in cultivating a data-driven culture as our company moves towards the future. We collect meaningful data and analytics to drive smart marketing decisions, optimise our business, and increase profitability.',
        card_description:
            'We provide data and valuable insights that help shape smart business decisions.',
        positions: business_intelligence_positions,
    }),
    new Team({
        name: 'content',
        thumbnail: 'team-content',
        description:
            "Whether it's marketing content, product descriptions, blog posts, social media, or UI/UX writing, we work with nearly every team within the company to create useful and meaningful content in our company's brand voice.",
        card_description:
            'From web pages to social media, we’re responsible for the ideation and execution of our content needs.',
        positions: content_positions,
    }),
    new Team({
        name: 'crypto-development',
        thumbnail: 'team-crypto-development',
        description:
            'We create transformative solutions to cryptocurrency challenges, build decentralised applications using blockchain technology, and design an effective architecture for our cryptocurrency transactions. Our aim is to create a secure and pleasant crypto-experience for our clients.',
        card_description:
            'Leading the business into digital transformation, we explore blockchain technology opportunities and solutions.',
        positions: crypto_development_positions,
    }),
    new Team({
        name: 'customer-support',
        thumbnail: 'team-customer-support',
        description:
            'We care about our customers and we love it when we see them succeed. Our team empowers our customers by keeping their needs at the forefront of every interaction.',
        card_description:
            'Genuine about making our clients happy, we’re here to provide them with helpful solutions.',
        positions: customer_support_positions,
    }),
    new Team({
        name: 'disaster-recovery',
        thumbnail: 'team-disaster-recovery',
        description:
            'Our team ensures business continuity by keeping our technology systems, data, and applications safe. Our team is responsible for building and implementing the processes and procedures that will facilitate data recovery and integrity in case of disruptions.',
        card_description:
            'We uphold business continuity by overcoming disruptions to our systems and security.',
        positions: disaster_recovery_positions,
    }),
    new Team({
        name: 'front-end',
        display_name: 'Front-end',
        thumbnail: 'team-front-end',
        description:
            'Our team combines the art of design with programming. Advocating for our clients’ needs, we help to develop customer-centric products by implementing engaging user interfaces for our online trading platforms.',
        card_description:
            'We translate our tech ideas into an effortless experience for our users.',
        positions: front_end_positions,
    }),
    new Team({
        name: 'hr-recruitment',
        thumbnail: 'team-hr-recruitment',
        description:
            'We’re the ones who build a creative, diverse, and thriving workforce. Our goals are to foster a great employer-employee relationship, advocate for the employees’ emotional and physical well being, and provide a safe and productive work environment.',
        card_description:
            'We bring in go-getters, link them with the right opportunities, and support them in every way to help them grow.',
        positions: hr_recruitment_positions,
    }),
    new Team({
        name: 'internal-audit',
        thumbnail: 'team-internal-audit',
        description:
            'Our mission is to help shape the future of Deriv by providing independent evaluations to reduce risk and improve operations. We develop and implement creative and innovative approaches to key issues affecting the business.',
        card_description:
            'We evaluate business and organisational processes to reinforce the company’s positive reputation.',
        positions: internal_audit_positions,
    }),
    new Team({
        name: 'it-admin',
        thumbnail: 'team-it-admin',
        description:
            'Our team provides support and solutions for our core system and IT infrastructure. We install, repair, and upgrade our networks, servers, and security systems. Our digital expertise and vigilance ensure a solid IT groundwork for the entire company.',
        card_description:
            'We safeguard our computer systems and networks to deliver maximum productivity.',
        positions: it_admin_positions,
    }),
    new Team({
        name: 'product-design',
        thumbnail: 'team-product-design',
        description:
            "We're a group of designers, developers, researchers, and illustrators. We solve complex problems to create beautiful products with seamless user experience. We test and iterate our designs while advocating for users throughout the product development cycle.",
        card_description:
            'We are designers and researchers who work to deliver excellent user experience.',
        positions: product_design_positions,
    }),
    new Team({
        name: 'project-management',
        thumbnail: 'team-project-management',
        description:
            'Our team oversees the development and implementation of project plans. We make possible effective communication among multiple teams to create a well-coordinated flow when working on a project. We also prepare contingency plans to mitigate risks and make sure that project goals are delivered.',
        card_description:
            'We are the bridge that connects our teams, finding the best ways to bring our ideas to life.',
        positions: project_management_positions,
    }),
    new Team({
        name: 'quants',
        thumbnail: 'team-quants',
        description:
            'Our team is central to the success of the company. We track the company’s performance, mitigate risk, and provide useful, actionable insights that aid our leaders in developing solid business strategies.',
        card_description:
            'We are the brains behind the product models that drive the success of our business.',
        positions: quants_positions,
    }),
    new Team({
        name: 'security',
        thumbnail: 'team-security',
        description:
            'We’re the first line of defence against hackers and security flaws that may impact our trading operations and global client base. We manage threats and potential security risks through smart strategies, airtight policies, meticulous communication, and technical execution.',
        card_description:
            'We’re always trying to hack Deriv, testing its vulnerabilities to stay ahead of all possible security threats.',
        positions: security_positions,
    }),
]

export const all_positions = [
    ...accounts_and_payments_positions,
    ...back_end_positions,
    ...business_intelligence_positions,
    ...compliance_positions,
    ...content_positions,
    ...crypto_development_positions,
    ...customer_support_positions,
    ...devops_positions,
    ...disaster_recovery_positions,
    ...front_end_positions,
    ...hr_recruitment_positions,
    ...internal_audit_positions,
    ...it_admin_positions,
    ...marketing_positions,
    ...product_design_positions,
    ...project_management_positions,
    ...quality_assurance_positions,
    ...quants_positions,
    ...security_positions,
    ...other_positions,
]

export const getTeamNames = () => all_teams.map((team) => team.name)

export const getAlphabeticTeams = () => all_teams.sort((a, b) => a.name.localeCompare(b.name))

export const getDisplayTeams = () => {
    const display_team_names = {
        devops: true,
        marketing: true,
        compliance: true,
        'quality-assurance': true,
    }
    const display_teams = []

    all_teams.forEach((t) => {
        if (display_team_names[t.name]) {
            display_teams.push(t)
        }
    })
    return display_teams
}
export const getTeamByName = (team_name) => all_teams.find((team) => team.name === team_name)

export const getPositionByName = (position_name) =>
    all_positions.find((position) => toHashFormat(position.title) === position_name)

export const getJobPositionById = (id) =>
    all_positions.find((position) => toHashFormat(position.id) === id)

export const getPositionsByLocation = (location_name) => {
    return all_positions.filter((position) => {
        return position.location.includes(location_name)
    })
}

export const getPositionsByQuery = (queries, filtered_positions) => {
    const current_positions = filtered_positions || all_positions
    if (!queries.length) return current_positions

    const location_filter_map = {}
    const team_filters_map = {}

    queries.forEach((q) => {
        if (locations[q]) location_filter_map[q] = q
        else team_filters_map[q] = q
    })

    const has_team_filters = Object.keys(team_filters_map).length
    const has_location_filters = Object.keys(location_filter_map).length
    const filterLocation = (p) => !!location_filter_map[p.location]
    const filterTeam = (p) => !!team_filters_map[p.team]

    if (has_team_filters && has_location_filters) {
        return current_positions.filter((c) => filterLocation(c) && filterTeam(c))
    }
    if (has_team_filters) return current_positions.filter(filterTeam)
    if (has_location_filters) return current_positions.filter(filterLocation)

    return current_positions
}
