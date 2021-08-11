import React from 'react'
import {
    ExtensiveNetworkIcon,
    ProfessionalGuidanceIcon,
    ResumeIcon,
    TechExperienceIcon,
} from '../images/_join-us'

export default {
    title: 'Join us and get the tools you need for a successful IT career',
    content: [
        {
            src: TechExperienceIcon,
            text: (
                <>
                    <strong>Hands-on tech experience</strong> by learning directly from all our
                    talented IT teams
                </>
            ),
        },
        {
            src: ExtensiveNetworkIcon,
            text: (
                <>
                    <strong>An extensive network</strong> of professionals, guest speakers, and
                    fellow participants
                </>
            ),
        },
        {
            src: ProfessionalGuidanceIcon,
            text: (
                <>
                    <strong>Professional guidance</strong> that helps you set clear career goals to
                    realise your potential
                </>
            ),
        },
        {
            src: ResumeIcon,
            text: (
                <>
                    <strong>An enriched résumé</strong> with tech and non-tech skills that set you
                    apart from other fresh grads
                </>
            ),
        },
    ],
}
