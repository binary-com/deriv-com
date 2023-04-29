import React from 'react';
import { ExtensiveNetworkIcon, ProfessionalGuidanceIcon, ResumeIcon, TechExperienceIcon } from '../images/_join-us';

export default {
    title: 'Join us and get the tools you need for a successful IT career',
    content: [
        {
            src: TechExperienceIcon,
            alt: 'Hands-on tech experience',
            text: (
                <>
                    <strong>Hands-on tech experience</strong> by learning directly from our talented IT teams
                </>
            ),
        },
        {
            src: ExtensiveNetworkIcon,
            alt: 'Extensive network',
            text: (
                <>
                    <strong>An extensive network</strong> of professionals, guest speakers, and fellow participants
                </>
            ),
        },
        {
            src: ProfessionalGuidanceIcon,
            alt: 'Professional guidance',
            text: (
                <>
                    <strong>Professional guidance</strong> that helps you set clear career goals to realise your
                    potential
                </>
            ),
        },
        {
            src: ResumeIcon,
            alt: 'Enriched resume',
            text: (
                <>
                    <strong>An enriched résumé</strong> with tech and non-tech skills that set you apart from other
                    fresh grads
                </>
            ),
        },
    ],
};
