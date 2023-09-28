import React from 'react'
import { EmployerAwardsType } from './_types'
import Link from 'features/components/atoms/link'

export const employer_award_content: EmployerAwardsType[] = [
    {
        id: 0,
        title: '_t_Investors in People_t_',
        text_with_link: {
            text: '_t_We were awarded Gold accreditation by <0>Investors in People</0> (IIP) for our commitment to building trust within Deriv, motivating employee growth, and adapting to change. We are honoured to be recognised for our leadership approach, people practices, career advancement opportunities, and culture of trust._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: 'https://www.investorsinpeople.com/',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
    },
    {
        id: 1,
        title: '_t_Great Place to Work®_t_',
        text_with_link: {
            text: "_t_Deriv's offices in Dubai, Paraguay, Cyprus, France, Malta, Rwanda, and UK have received the <0>Great Place to Work®</0> (GPTW) 2023 certification for fair treatment of employees regardless of gender or race, ethical business practices, and supportive work culture._t_",

            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: 'https://www.greatplacetowork.com/',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        sub_text:
            '_t_ In the year 2022, 20 Deriv offices worldwide, including Cyberjaya, Dubai, Asunción, Birkirkara, Limassol, Kigali, Ipoh, Malaka, and Labuan, were recognised by GPTW._t_',
    },
]
