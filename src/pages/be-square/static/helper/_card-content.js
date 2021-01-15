import {
    ExtensiveNetworkIcon,
    ProfessionalGuidanceIcon,
    ResumeIcon,
    TechExperienceIcon,
} from '../images/_join-us'
import {
    CrossDomainTrainingIcon,
    NoExperienceIcon,
    PaidProgrammeIcon,
    TrainIcon,
    TopPerformersIcon,
    WorldExposureIcon,
} from '../images/_advantages'
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
import { List01, List02, List03, List04 } from '../images/_application-process'
import { localize } from 'components/localization'

export const card_content = [
    localize(
        'Start by gaining a comprehensive view of the IT industry by working with all tech teams. Enhance your career options.',
    ),
    localize(
        'Continue to explore your potentials and passions. Discover challenges that call to you.',
    ),
    localize(
        'Start the IT career of your choice. Your familiarity with all domains of the industry enables you to think outside the box.',
    ),
    localize(
        'Find unique solutions as a generalist who sees the big picture. Solve the problems that defeat everyone else.',
    ),
]

export const join_us_card_content = [
    {
        src: TechExperienceIcon,
        alt: 'tech experience icon',
        bold_text: localize('Hands-on tech experience'),
        normal_text: localize('by learning directly from all our talented IT teams'),
    },
    {
        src: ExtensiveNetworkIcon,
        alt: 'extensive network icon',
        bold_text: localize('An extensive network'),
        normal_text: localize('of professionals, guest speakers, and fellow participants'),
    },
    {
        src: ProfessionalGuidanceIcon,
        alt: 'professional guidance icon',
        bold_text: localize('Professional guidance'),
        normal_text: localize('that helps you set clear career goals to realise your potential'),
    },
    {
        src: ResumeIcon,
        alt: 'tech experience icon',
        bold_text: localize('An enriched résumé'),
        normal_text: localize(
            'with tech and non-tech skills that set you apart from other fresh grads',
        ),
    },
]

export const advantages_content = [
    {
        src: TopPerformersIcon,
        alt: 'Jobs for top performers icon',
        title: localize('Jobs for top performers'),
        text: localize('A job offer from Deriv for the best BeSquare graduates'),
    },
    {
        src: WorldExposureIcon,
        alt: 'Real-world exposure icon',
        title: localize('Real-world exposure'),
        text: localize('Real-life projects led by Deriv best IT minds'),
    },
    {
        src: CrossDomainTrainingIcon,
        alt: 'Cross-domain training icon',
        title: localize('Cross-domain training'),
        text: localize('Rotation through all Deriv tech teams'),
    },
    {
        src: NoExperienceIcon,
        alt: 'Zero experience needed icon',
        title: localize('Zero experience needed'),
        text: localize('Open to Malaysian graduates even with no work experience'),
    },
    {
        src: TrainIcon,
        alt: 'Train to get hired icon',
        title: localize('Train to get hired'),
        text: localize('A chance to boost your CV and your employability'),
    },
    {
        src: PaidProgrammeIcon,
        alt: 'Paid programme icon',
        title: localize('Paid programme'),
        text: localize('On-the-job experience with a sponsoring FinTech company'),
    },
]

export const who_can_apply_content = [
    localize('A Malaysian citizen'),
    localize(
        'A fresh graduate or last-term student in any science, technology, engineering, or maths (STEM) discipline ',
    ),
    localize('Passionate and ambitious about developing skills in technology'),
    localize('An excellent problem-solver and a team player'),
    localize('Proficient in spoken and written English'),
]

export const application_process_content = [
    {
        src: List01,
        alt: 'List item 1',
        text: localize('Complete the online application form.'),
    },
    {
        src: List02,
        alt: 'List item 2',
        text: localize('Complete our Self-Assessment Topgrading Interview (SATI).'),
    },
    {
        src: List03,
        alt: 'List item 3',
        text: localize('If you’ve been shortlisted, we’ll invite you for an interview.'),
    },
    {
        src: List04,
        alt: 'List item 4',
        text: localize('If you’re successful, we’ll send you a confirmation letter.'),
    },
]

export const what_lies_ahead_content = [
    {
        src: FrontEnd,
        alt: 'Front-end development Icon',
        title: localize('Front-end development'),
        content: [
            localize('Develop a responsive website on GitHub that looks good on all devices.'),
            localize('Connect to the WebSocket API and display data.'),
            localize('Debug issues using the browser console — a big step towards cleaner code.'),
        ],
    },
    {
        src: ProductDesign,
        alt: 'Product design Icon',
        title: localize('Product design'),
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
        title: localize('Mobile development'),
        content: [
            localize('Build iOS and Android apps with a single codebase.'),
            localize(
                'Apply version control to the codebase: seamless teamwork is no longer a headache.',
            ),
            localize('Use APIs in Flutter apps and store data on different storages.'),
            localize('Debug and log issues for resolution to create a flowing user experience.'),
        ],
    },
    {
        src: BackEnd,
        alt: 'Back-end development Icon',
        title: localize('Back-end development'),
        content: [
            localize('Master the basics of the software development life cycle (SDLC).'),
            localize('See how the system interacts using APIs and stores data for future usage.'),
            localize(
                'Discover the principles of blockchain and cryptocurrency. Is crypto the democratisation of finance or the newest fad of FinTech?',
            ),
        ],
    },
    {
        src: PlatformArchitecture,
        alt: 'Platform architecture Icon',
        title: localize('Platform architecture'),
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
        title: localize('Quality assurance'),
        content: [
            localize('Learn how to break a developer’s code: what flaws should you look out for?'),
            localize('Build robust systems you can be proud of.'),
            localize(
                'Polish the application by applying all manners of tests to turn it from a proof-of-concept into a quality product.',
            ),
        ],
    },
    {
        src: DevAndOperations,
        alt: 'Development and operations Icon',
        title: localize('Development and operations'),
        content: [
            localize(
                'DevOps, GitOps, CodeOps... NoOps? Explore evolving styles of deployment, maintenance, and monitoring.',
            ),
            localize('Automate and chill: build a recipe once, replicate to thousands of nodes.'),
            localize(
                'Discover cloud technologies: AWS, Google, AliCloud,... Who and what is out there?',
            ),
        ],
    },
    {
        src: Cybersecurity,
        alt: 'Cybersecurity Icon',
        title: localize('Cybersecurity'),
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
        title: localize('Business intelligence'),
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
        title: localize('Quantitative analysis'),
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
]
