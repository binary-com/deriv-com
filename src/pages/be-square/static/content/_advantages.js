import {
    CrossDomainTrainingIcon,
    NoExperienceIcon,
    PaidProgrammeIcon,
    TrainIcon,
    TopPerformersIcon,
    WorldExposureIcon,
} from '../images/_advantages'
import { localize } from 'components/localization'

export default [
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
