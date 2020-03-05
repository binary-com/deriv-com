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
import { localize } from 'components/localization'
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
    getAllPositionsByLocation = location =>
        this.positions.filter(position => position.location === location)
}

export const team_names = {
    devops: localize('Devops'),
    compliance: localize('Compliance'),
    marketing: localize('Marketing'),
    'quality-assurance': localize('Quality Assurance'),
    'accounts-and-payments': localize('Accounts and Payments'),
    'back-end': localize('Back-end'),
    'business-intelligence': localize('Business Intelligence'),
    content: localize('Content'),
    'crypto-development': localize('Cryptocurrency/Blockchain Development'),
    'customer-support': localize('Customer Support'),
    'disaster-recovery': localize('Disaster Recovery'),
    'front-end': localize('Front-end'),
    'hr-recruitment': localize('HR Operations and Recruitment'),
    'internal-audit': localize('Internal Audit'),
    'it-admin': localize('IT Administration'),
    'product-design': localize('Product Design'),
    'project-management': localize('Project Management'),
    quants: localize('Quants'),
    security: localize('Security'),
}

export const all_teams = [
    new Team({
        name: 'devops',
        thumbnail: 'team-devops',
        description: localize(
            'We collaborate with various teams to ensure successful code deployment, component testing, process re-engineering, and quality improvement. With a holistic view of our technical environment, we provide the best solutions that benefit the company and our clients.',
        ),
        card_description: localize(
            'We build and sustain our IT infrastructure, the backbone of our entire service.',
        ),
        positions: devops_positions,
    }),
    new Team({
        name: 'compliance',
        thumbnail: 'team-compliance',
        description: localize(
            'We see to it that the best industry practices are consistently applied in all business aspects. We perform a wide range of tasks, including ensuring operational compliance with regulations, conducting anti-fraud checks on clients, and analysing trade and payment activities for abuse.',
        ),
        card_description: localize(
            'We navigate the legal and regulatory environment to help our business maintain the highest ethical standards.',
        ),
        positions: compliance_positions,
    }),
    new Team({
        name: 'marketing',
        thumbnail: 'team-marketing',
        description: localize(
            'Fuelled by creativity, our team coordinates a wide range of marketing campaigns to help our business grow. We collaborate with designers, developers, analysts, and business development executives so that our marketing and advertising initiatives can represent the exceptional online trading services that we have to offer.',
        ),
        card_description: localize(
            'We are the ones who conceptualise and implement creative marketing solutions to help our business grow.',
        ),
        positions: marketing_positions,
    }),
    new Team({
        name: 'quality-assurance',
        thumbnail: 'team-quality-assurance',
        description: localize(
            'We’re a group of software testing engineers who run high-quality tests to refine our wide range of products and services. We look after the quality, usability, and stability of our websites and trading platforms.',
        ),
        card_description: localize(
            'We ensure the quality and integrity of all our platforms, systems, and codebase.',
        ),
        positions: quality_assurance_positions,
    }),
    new Team({
        name: 'accounts-and-payments',
        thumbnail: 'team-accounts-payments',
        card_description: localize(
            'We’re all about helping the company make good decisions about money so we can stay on course to fulfil our vision.',
        ),
        description: localize(
            'Our team is in charge of managing the company’s financial and accounting health to ensure sustainable business growth. We control operational costs, pay the bills, and mitigate financial risks.',
        ),
        positions: accounts_and_payments_positions,
    }),
    new Team({
        name: 'back-end',
        description: localize(
            "We’re responsible for designing, developing, testing, and debugging the company's server-side apps and databases so our customers enjoy a flawless digital experience. We collaborate with the QA team to resolve technical issues, and we empower the Front-end team by providing the components and features that they need.",
        ),
        thumbnail: 'team-back-end',
        card_description: localize(
            'We fortify our website and app architecture that power our users’ experience.',
        ),
        positions: back_end_positions,
    }),
    new Team({
        name: 'business-intelligence',
        thumbnail: 'team-business-intelligence',
        description: localize(
            'Our team leads the organisation in cultivating a data-driven culture as our company moves towards the future. We collect meaningful data and analytics to drive smart marketing decisions, optimise our business, and increase profitability.',
        ),
        card_description: localize(
            'We provide data and valuable insights that help shape smart business decisions.',
        ),
        positions: business_intelligence_positions,
    }),
    new Team({
        name: 'content',
        thumbnail: 'team-content',
        description: localize(
            "We work with nearly all teams within the company to create useful and meaningful content for our users. Whether it's product descriptions, blog posts, website content, social media, UI/UX writing, or marketing, we're here to help.",
        ),
        card_description: localize(
            'From web pages to social media, we’re responsible for the ideation and execution of our content needs.',
        ),
        positions: content_positions,
    }),
    new Team({
        name: 'crypto-development',
        thumbnail: 'team-crypto-development',
        description: localize(
            'We create transformative solutions to cryptocurrency challenges, build decentralised applications using blockchain technology, and design an effective architecture for our cryptocurrency transactions. Our aim is to create a secure and pleasant crypto-experience for our clients.',
        ),
        card_description: localize(
            'Leading the business into digital transformation, we explore blockchain technology opportunities and solutions.',
        ),
        positions: crypto_development_positions,
    }),
    new Team({
        name: 'customer-support',
        thumbnail: 'team-customer-support',
        description: localize(
            'We care about our customers and we love it when we see them succeed. Our team is always looking for ways to help our clients better understand our products and overcome any challenges that they might have.',
        ),
        card_description: localize(
            'Genuine about making our clients happy, we’re here to provide them with helpful solutions.',
        ),
        positions: customer_support_positions,
    }),
    new Team({
        name: 'disaster-recovery',
        thumbnail: 'team-disaster-recovery',
        description: localize(
            'Our team ensures business continuity by keeping our technology systems, data, and applications safe. Our team is responsible for building and implementing the processes and procedures that will facilitate data recovery and integrity in case of disruptions.',
        ),
        card_description: localize(
            'We uphold business continuity by overcoming disruptions to our systems and security.',
        ),
        positions: disaster_recovery_positions,
    }),
    new Team({
        name: 'front-end',
        display_name: localize('Front-end'),
        thumbnail: 'team-front-end',
        description: localize(
            'Our team combines the art of design with programming. Advocating for our clients’ needs, we help to develop customer-centric products by implementing engaging user interfaces for our online trading platforms.',
        ),
        card_description: localize(
            'We translate our tech ideas into an effortless experience for our users.',
        ),
        positions: front_end_positions,
    }),
    new Team({
        name: 'hr-recruitment',
        thumbnail: 'team-hr-recruitment',
        description: localize(
            'We’re the ones who build a creative, diverse, and thriving workforce. Our goals are to foster a great employer-employee relationship, advocate for the employees’ emotional and physical well being, and provide a safe and productive work environment.',
        ),
        card_description: localize(
            'We bring in go-getters, link them with the right opportunities, and support them in every way to help them grow.',
        ),
        positions: hr_recruitment_positions,
    }),
    new Team({
        name: 'internal-audit',
        thumbnail: 'team-internal-audit',
        description: localize(
            'Our mission is to help shape the future of Deriv by providing independent evaluations to reduce risk and improve operations. Objectivity is our superpower and enables us to collaborate and make an impact across the entire organisation. We develop and implement creative and innovative approaches to key issues affecting the business.',
        ),
        card_description: localize(
            'We evaluate business and organisational processes to reinforce the company’s positive reputation.',
        ),
        positions: internal_audit_positions,
    }),
    new Team({
        name: 'it-admin',
        thumbnail: 'team-it-admin',
        description: localize(
            'Our team provides support and solutions for our core system and IT infrastructure. We install, repair, and upgrade our networks, servers, and security systems. Our digital expertise and vigilance ensure a solid IT groundwork for the entire company.',
        ),
        card_description: localize(
            'We safeguard our computer systems and networks to deliver maximum productivity.',
        ),
        positions: it_admin_positions,
    }),
    new Team({
        name: 'product-design',
        thumbnail: 'team-product-design',
        description: localize(
            "We're a group of designers, developers, researchers, and illustrators. We solve complex problems to create beautiful products with seamless user experience. We test and iterate our designs while advocating for users throughout the product development cycle.",
        ),
        card_description: localize(
            'We are designers and researchers who work to deliver excellent user experience.',
        ),
        positions: product_design_positions,
    }),
    new Team({
        name: 'project-management',
        thumbnail: 'team-project-management',
        description: localize(
            'Our team oversees the development and implementation of project plans. We make possible effective communication among multiple teams to create a well-coordinated flow when working on a project. We also prepare contingency plans to mitigate risks and make sure that project goals are delivered.',
        ),
        card_description: localize(
            'We are the bridge that connects our teams, finding the best ways to bring our ideas and projects to life.',
        ),
        positions: project_management_positions,
    }),
    new Team({
        name: 'quants',
        thumbnail: 'team-quants',
        description: localize(
            'Our team is central to the success of the company. We track the company’s performance, mitigate risk, and provide useful, actionable insights that aid our leaders in developing solid business strategies.',
        ),
        card_description: localize(
            'We are the brains behind the product models that drive the success of our business.',
        ),
        positions: quants_positions,
    }),
    new Team({
        name: 'security',
        thumbnail: 'team-security',
        description: localize(
            'We’re the first line of defence against hackers and security flaws that may impact our trading operations and global client base. We manage threats and potential security risks through smart strategies, airtight policies, meticulous communication, and technical execution.',
        ),
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
    ...devops_positions,
    ...compliance_positions,
    ...marketing_positions,
    ...quality_assurance_positions,
    ...content_positions,
    ...crypto_development_positions,
    ...customer_support_positions,
    ...disaster_recovery_positions,
    ...front_end_positions,
    ...hr_recruitment_positions,
    ...internal_audit_positions,
    ...it_admin_positions,
    ...product_design_positions,
    ...project_management_positions,
    ...quants_positions,
    ...security_positions,
    ...quants_positions,
]

export const getTeamNames = () => all_teams.map(team => team.name)

export const getAlphabeticTeams = () => all_teams.sort((a, b) => a.name.localeCompare(b.name))

export const getTop4Teams = () =>
    all_teams.sort((a, b) => a.positions.length - b.positions.length).slice(0, 4)

export const getTeamByName = team_name => all_teams.find(team => team.name === team_name)

export const getPositionByName = position_name =>
    all_positions.find(position => toHashFormat(position.title) === position_name)

export const getJobPositionById = id =>
    all_positions.find(position => toHashFormat(position.id) === id)

export const getPositionsByLocation = location_name => {
    return all_positions.filter(position => {
        return position.location.name
            .toLowerCase()
            .includes(location_name === 'asuncion' ? 'paraguay' : location_name)
    })
}
