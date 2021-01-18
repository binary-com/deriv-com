import {
    FrontEnd,
    ProductDesign,
    MobileDev,
    BackEnd,
    PlatformArchitecture,
    QualityAssurance,
    DevAndOperations,
    Cybersecurity,
    BusinessIntelligence,
    QuantAnalysis,
} from '../images/_what-lies-ahead'
import { localize } from 'components/localization'

export default {
    title: localize('What lies ahead'),
    subtitle: localize(
        "Over the course of 6 months, you'll go through 10 modules and face exciting challenges",
    ),
    content: [
        {
            src: FrontEnd,
            alt: 'Front-end development Icon',
            text: localize('Front-end development'),
            content: [
                localize('Develop a responsive website on GitHub that looks good on all devices.'),
                localize('Connect to the WebSocket API and display data.'),
                localize(
                    'Debug issues using the browser console — a big step towards cleaner code.',
                ),
            ],
        },
        {
            src: ProductDesign,
            alt: 'Product design Icon',
            text: localize('Product design'),
            content: [
                localize(
                    'Grasp UX design and principles — why is design so essential and how to use it best?',
                ),
                localize('Define solutions with a user-centric design approach.'),
                localize('Sketch and prototype the solutions you’ve defined in Stage 2.'),
                localize('Test and validate prototypes.'),
            ],
        },
        {
            src: MobileDev,
            alt: 'Mobile development Icon',
            text: localize('Mobile development'),
            content: [
                localize('Build iOS and Android apps with a single codebase.'),
                localize(
                    'Apply version control to the codebase: seamless teamwork is no longer a headache.',
                ),
                localize('Use APIs in Flutter apps and store data on different storages.'),
                localize(
                    'Debug and log issues for resolution to create a flowing user experience.',
                ),
            ],
        },
        {
            src: BackEnd,
            alt: 'Back-end development Icon',
            text: localize('Back-end development'),
            content: [
                localize('Master the basics of the software development life cycle (SDLC).'),
                localize(
                    'See how the system interacts using APIs and stores data for future usage.',
                ),
                localize(
                    'Discover the principles of blockchain and cryptocurrency. Is crypto the democratisation of finance or the newest fad of FinTech?',
                ),
            ],
        },
        {
            src: PlatformArchitecture,
            alt: 'Platform architecture Icon',
            text: localize('Platform architecture'),
            content: [
                localize(
                    'Design and plan systems from high-level system concepts down to low-level details.',
                ),
                localize(
                    'Explore horizontal and vertical scaling — service, database, cache, and code patterns.',
                ),
                localize('Work with the CAP theorem of distributed systems.'),
                localize(
                    'Study cloud technologies — what’s out there and how to choose the right pieces for the puzzle.',
                ),
            ],
        },
        {
            src: QualityAssurance,
            alt: 'Quality assurance Icon',
            text: localize('Quality assurance'),
            content: [
                localize(
                    'Learn how to break a developer’s code: what flaws should you look out for?',
                ),
                localize('Build robust systems you can be proud of.'),
                localize(
                    'Polish the application by applying all manners of tests to turn it from a proof-of-concept into a quality product.',
                ),
            ],
        },
        {
            src: DevAndOperations,
            alt: 'Development and operations Icon',
            text: localize('Development and operations'),
            content: [
                localize(
                    'DevOps, GitOps, CodeOps... NoOps? Explore evolving styles of deployment, maintenance, and monitoring.',
                ),
                localize(
                    'Automate and chill: build a recipe once, replicate to thousands of nodes.',
                ),
                localize(
                    'Discover cloud technologies: AWS, Google, AliCloud,... Who and what is out there?',
                ),
            ],
        },
        {
            src: Cybersecurity,
            alt: 'Cybersecurity Icon',
            text: localize('Cybersecurity'),
            content: [
                localize(
                    'Master the concepts of network security and web application security — can we stop the enemy at the gate?',
                ),
                localize(
                    'Understand and apply the fundamentals of digital forensics: how to identify the culprit.',
                ),
            ],
        },
        {
            src: BusinessIntelligence,
            alt: 'Business Intelligence Icon',
            text: localize('Business intelligence'),
            content: [
                localize('Understand business intelligence concepts and their vital importance.'),
                localize('Learn about data warehousing, data collection and modelling principles.'),
                localize(
                    'Get a good grasp on intelligence metrics (marketing, retention, digital products).',
                ),
                localize('Understand data governance, data quality, and integrity checks.'),
            ],
        },
        {
            src: QuantAnalysis,
            alt: 'Quantitative analysis Icon',
            text: localize('Quantitative analysis'),
            content: [
                localize(
                    'Explore the role of financial markets and its participants in the economic machine.',
                ),
                localize(
                    'Apply the concepts of probability and statistics to solve concrete problems.',
                ),
                localize('Evaluate option trading strategies for different market conditions.'),
                localize(
                    'Analyse financial time series data to grasp the impact of market microstructure.',
                ),
            ],
        },
    ],
    text: localize(
        'Besides these hard skills, you’ll learn essential soft skills that are based on Harvard Business Review principles. You’ll also get the chance to extend your professional network and connect with veteran techies as they share their professional experience.',
    ),
}
