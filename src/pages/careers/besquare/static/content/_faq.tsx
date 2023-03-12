import React, { ReactElement } from 'react'
import { Link } from '../style/_faq'
import { TString } from 'types/generics'

type TFAQContent = {
    title: TString
    content: Record<'title' | 'subtitle', string | ReactElement>[]
}

const faq_content: TFAQContent[] = [
    {
        title: '_t_Basic information_t_',
        content: [
            {
                title: 'Is the BeSquare graduate programme the same as an internship programme?',
                subtitle:
                    'No, it’s not. The BeSquare programme is a 5-month paid graduate programme where you will get essential skills and experience to boost your job application to any company, including Deriv.',
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
        title: '_t_Eligibility requirements_t_',
        content: [
            {
                title: 'I am an international student. Can I apply for this programme?',
                subtitle: 'This programme is open to Malaysian citizens only.',
            },
            {
                title: 'How do I qualify for the programme?',
                subtitle:
                    'You should have a degree, diploma, or relevant certification in information technology, computer science, software engineering, computer engineering, or any related field. However, if you are passionate and have proven work records in technology, we will consider your application.',
            },
        ],
    },
    {
        title: '_t_Application details_t_',
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

export default faq_content
