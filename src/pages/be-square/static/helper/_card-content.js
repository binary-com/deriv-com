import {
    ExtensiveNetworkIcon,
    TechExperienceIcon,
    ProfessionalGuidanceIcon,
    ResumeIcon,
} from './_image-extractor'
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
        bold_text: 'Hands-on tech experience',
        normal_text: 'by learning directly from all our talented IT teams',
    },
    {
        src: ExtensiveNetworkIcon,
        alt: 'extensive network icon',
        bold_text: 'An extensive network',
        normal_text: 'of professionals, guest speakers, and fellow participants',
    },
    {
        src: ProfessionalGuidanceIcon,
        alt: 'professional guidance icon',
        bold_text: 'Professional guidance',
        normal_text: 'that helps you set clear career goals to realise your potential',
    },
    {
        src: ResumeIcon,
        alt: 'tech experience icon',
        bold_text: 'An enriched résumé',
        normal_text: 'with tech and non-tech skills that set you apart from other fresh grads',
    },
]
