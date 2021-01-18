import React from 'react'
import {
    ExtensiveNetworkIcon,
    ProfessionalGuidanceIcon,
    ResumeIcon,
    TechExperienceIcon,
} from '../images/_join-us'
import { Localize } from 'components/localization'

export default [
    {
        src: TechExperienceIcon,
        alt: 'tech experience icon',
        text: (
            <Localize
                translate_text="<0>Hands-on tech experience</0> by learning directly from all our talented IT teams"
                components={[<strong key={0} />]}
            />
        ),
    },
    {
        src: ExtensiveNetworkIcon,
        alt: 'extensive network icon',
        text: (
            <Localize
                translate_text="<0>An extensive network</0> of professionals, guest speakers, and fellow participants"
                components={[<strong key={0} />]}
            />
        ),
    },
    {
        src: ProfessionalGuidanceIcon,
        alt: 'professional guidance icon',
        text: (
            <Localize
                translate_text="<0>Professional guidance</0> that helps you set clear career goals to realise your potential"
                components={[<strong key={0} />]}
            />
        ),
    },
    {
        src: ResumeIcon,
        alt: 'tech experience icon',
        text: (
            <Localize
                translate_text="<0>An enriched résumé</0> with tech and non-tech skills that set you apart from other fresh grads"
                components={[<strong key={0} />]}
            />
        ),
    },
]
