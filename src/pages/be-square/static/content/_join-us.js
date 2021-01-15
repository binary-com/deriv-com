import {
    ExtensiveNetworkIcon,
    ProfessionalGuidanceIcon,
    ResumeIcon,
    TechExperienceIcon,
} from '../images/_join-us'
import { localize } from 'components/localization'

export default [
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
