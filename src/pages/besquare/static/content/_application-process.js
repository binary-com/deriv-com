import React from 'react'
import { List01, List02, List03, List04 } from '../images/_application-process'
import { LineBreakContainer } from '../style/_application-process'
import { Localize, localize } from 'components/localization'

export default {
    title: localize('Application process'),
    content: [
        {
            src: List01,
            alt: 'List item 1',
            text: localize('Complete the online application form.'),
        },
        {
            src: List02,
            alt: 'List item 2',
            text: (
                <Localize
                    translate_text="Complete our <0><1/></0>Self-Assessment Topgrading Interview (SATI)."
                    components={[<LineBreakContainer key={0} />, <br key={1} />]}
                />
            ),
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
    ],
}
