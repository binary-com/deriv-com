import { localize } from 'components/localization'
import Shield from 'images/svg/about-us/shield.svg'
import Star from 'images/svg/about-us/star.svg'
import People from 'images/svg/about-us/people.svg'
import Hands from 'images/svg/about-us/hands.svg'

export default [
    {
        title: localize('Integrity'),
        text: localize(
            'We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully.',
        ),
        icon: Shield,
    },
    {
        title: localize('Customer focus'),
        text: localize(
            'We put the customer first and strive to build products that deliver the best customer experience.',
        ),
        icon: People,
    },
    {
        title: localize('Competence'),
        text: localize(
            'We value smart colleagues with an aptitude to learn, use good judgement, grow and succeed.',
        ),
        icon: Star,
    },
    {
        title: localize('Teamwork'),
        text: localize(
            'We value team players that collaborate freely across departments with humility and ambition.',
        ),
        icon: Hands,
    },
]
