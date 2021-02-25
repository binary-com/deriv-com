import React from 'react'
import { Link } from '../style/_faq'
import { localize, Localize } from 'components/localization'

export default [
    {
        title: localize('Basic information'),
        content: [
            {
                title: localize(
                    'Is the BeSquare graduate programme the same as an internship programme?',
                ),
                subtitle: localize(
                    'No, it’s not. The BeSquare programme is a 6-month paid graduate programme where you will get essential skills and experience to boost your job application to any company, including Deriv.',
                ),
            },
            {
                title: localize(
                    'Am I allowed to accept job offers from other companies during the programme?',
                ),
                subtitle: localize(
                    'You have the option to accept any job offers you receive during the programme.',
                ),
            },
            {
                title: localize('What advice can you give me for the final interview session?'),
                subtitle: localize(
                    'Know why you want to join the  BeSquare programme. Be confident, honest, and most importantly, be yourself.',
                ),
            },
        ],
    },
    {
        title: localize('Eligibility requirements'),
        content: [
            {
                title: localize('I am an international student. Can I apply for this programme?'),
                subtitle: localize('This programme is open to Malaysian citizens only.'),
            },
            {
                title: localize('How do I qualify for the programme?'),
                subtitle: localize(
                    'You should have a degree, diploma, or relevant certification in science, technology, engineering, or mathematics (STEM). However, if you are passionate and have proven work records in technology, we will consider your application.',
                ),
            },
        ],
    },
    {
        title: localize('Application details'),
        content: [
            {
                title: localize('I made a mistake on my application. What should I do?'),
                subtitle: localize(
                    'You may resubmit your application through the BeSquare website.',
                ),
            },
            {
                title: localize('When is the application deadline?'),
                subtitle: localize('The application closing date is 31 May 2021.'),
            },
            {
                title: localize(
                    'I still have questions about this programme. How can I contact you?',
                ),
                subtitle: (
                    <Localize
                        translate_text="You can contact us for general enquiries at <0>info@besquare.my</0>."
                        components={[<Link href="mailto:info@besquare.my" key={0} />]}
                    />
                ),
            },
            {
                title: localize('How can I find out about my application status?'),
                subtitle: (
                    <Localize
                        translate_text="To find out about your application status, email us at <0>apply@besquare.my</0>."
                        components={[<Link href="mailto:apply@besquare.my" key={0} />]}
                    />
                ),
            },
        ],
    },
]
