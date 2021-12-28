import React from 'react'
import { Link } from '../style/_faq'

export default [
    {
        title: 'Basic information',
        content: [
            {
                title: 'Is the BeSquare graduate programme the same as an internship programme?',
                subtitle:
                    'No, it’s not. The BeSquare programme is a 6-month paid graduate programme where you will get essential skills and experience to boost your job application to any company, including Deriv.',
            },
            {
                title: 'Am I allowed to accept job offers from other companies during the programme?',
                subtitle:
                    'You have the option to accept any job offers you receive during the programme.',
            },
            {
                title: 'What advice can you give me for the final interview session?',
                subtitle:
                    'Know why you want to join the  BeSquare programme. Be confident, honest, and most importantly, be yourself.',
            },
        ],
    },
    {
        title: 'Eligibility requirements',
        content: [
            {
                title: 'I am an international student. Can I apply for this programme?',
                subtitle: 'This programme is open to Malaysian citizens only.',
            },
            {
                title: 'How do I qualify for the programme?',
                subtitle:
                    'You should have a degree, diploma, or relevant certification in science, technology, engineering, or mathematics (STEM). However, if you are passionate and have proven work records in technology, we will consider your application.',
            },
        ],
    },
    {
        title: 'Application details',
        content: [
            {
                title: 'I made a mistake on my application. What should I do?',
                subtitle: 'You may resubmit your application through the BeSquare website.',
            },
            {
                title: 'I still have questions about this programme. How can I contact you?',
                subtitle: (
                    <p>
                        You can contact us for general enquiries at{' '}
                        <Link href="mailto:info@besquare.my">info@besquare.my</Link>.
                    </p>
                ),
            },
            {
                title: 'How can I find out about my application status?',
                subtitle: (
                    <p>
                        To find out about your application status, email us at{' '}
                        <Link href="mailto:apply@besquare.my">apply@besquare.my</Link>.
                    </p>
                ),
            },
        ],
    },
]
