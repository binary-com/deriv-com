import { List01, List02, List03, List04 } from '../images/_application-process'
import { localize } from 'components/localization'

export default [
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
