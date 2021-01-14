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
    },
    {
        src: ProductDesign,
        alt: 'Product design Icon',
        title: localize('Product design'),
    },
    {
        src: MobileDev,
        alt: 'Mobile development Icon',
        title: localize('Mobile development'),
    },
    {
        src: BackEnd,
        alt: 'Back-end development Icon',
        title: localize('Back-end development'),
    },
    {
        src: PlatformArchitecture,
        alt: 'Platform architecture Icon',
        title: localize('Platform architecture'),
    },
    {
        src: QualityAssurance,
        alt: 'Quality assurance Icon',
        title: localize('Quality assurance'),
    },
    {
        src: DevAndOperations,
        alt: 'Development and operations Icon',
        title: localize('Development and operations'),
    },
    {
        src: Cybersecurity,
        alt: 'Cybersecurity Icon',
        title: localize('Cybersecurity'),
    },
    {
        src: BusinessIntelligence,
        alt: 'Business Intelligence Icon',
        title: localize('Business intelligence'),
    },
    {
        src: QuantAnalysis,
        alt: 'Quantitative analysis  Icon',
        title: localize('Quantitative analysis'),
    },
]
