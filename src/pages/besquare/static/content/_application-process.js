import React from 'react'
import { List01, List02, List03, List04 } from '../images/_application-process'
import { LineBreak } from '../style/_application-process'

export default {
    title: 'Application process',
    content: [
        {
            src: List01,
            alt: 'List item 1',
            text: 'Complete the online application form.',
        },
        {
            src: List02,
            alt: 'List item 2',
            text: (
                <>
                    Complete our <LineBreak />
                    Self-Assessment Topgrading Interview (SATI).
                </>
            ),
        },
        {
            src: List03,
            alt: 'List item 3',
            text: 'If you’ve been shortlisted, we’ll invite you for an interview.',
        },
        {
            src: List04,
            alt: 'List item 4',
            text: 'If you’re successful, we’ll send you a confirmation letter.',
        },
    ],
}
