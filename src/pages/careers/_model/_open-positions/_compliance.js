import { job_types } from '../_job_types/_job_types'
import { cyberjaya, dubai, asuncion, malta, labuan } from '../_locations/_locations'
import { localize } from 'components/localization'

export const compliance_positions = [
    {
        title: localize('Compliance Executive'),
        id: '5b3946a8-2769-48b2-8e64-7170ea907105',
        keywords: [localize('Compliance Executive')],
        location: cyberjaya.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will ensure that our group companies worldwide conduct business operations in full compliance with regulatory requirements in their registered jurisdictions and globally.\n',
            ),
        ],
        responsibilities: [
            localize(
                'Work with the Head of Compliance to ensure group companies comply with AML, KYC, and data protection laws and regulations.',
            ),
            localize(
                'Plan and direct internal programmes and policies to empower all departments with the knowledge, awareness, and practices of regulatory compliance.',
            ),
            localize(
                'Track laws and regulations that may affect group companies and amend internal policies as needed in order to manage our risk and exposure.',
            ),
            localize('Screen and approve website content and marketing communication.'),
            localize('Analyse payment transactions for potential abuse by third-parties.'),
            localize('Review and monitor business contracts and agreements.'),
            localize('Assist with regulatory audits and annual statutory audits.\n'),
        ],
        qualifications: [
            localize('University degree in finance, economics, law, or risk management'),
            localize('Firm grasp of corporate or legal compliance'),
            localize('Thorough understanding of AML and KYC processes'),
            localize(
                'Ability to draft and review legal documents, as well as prepare licence applications',
            ),
            localize(
                'Ability to absorb and understand regulatory requirements in a number of international jurisdictions\n',
            ),
        ],
    },
    {
        title: localize('Payments Management Executive'),
        id: '9f35cfa2-10f8-4b23-8ac4-02b1630bd44f',
        keywords: [localize('Payments Management Executive')],
        location: cyberjaya.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will help us to improve and maintain current payment systems, while onboarding new payment systems that are specific to our target markets.',
            ),
        ],
        responsibilities: [
            localize(
                'Work closely with the Head of Payments Management, plus the payments, customer support, and compliance teams on all payment-related matters.',
            ),
            localize('Contact prospective payment systems and provide the required documentation.'),
            localize('Negotiate better terms and rates with new payment system providers.'),
            localize(
                'Troubleshoot issues encountered by our cashier system and liaise with the respective providers if escalation is required.',
            ),
            localize(
                'Monitor clients’ payment transactions to improve user experience through data gathering and analysis.',
            ),
            localize('Analyse deposit patterns and recommend new areas of focus.'),
            localize(
                'Liaise with banks for new accounts, providing the required KYC and any other related tasks necessary to maintain a healthy relationship.',
            ),
        ],
        qualifications: [
            localize('University degree in business, commerce, or IT'),
            localize('Firm grasp of payments and a keen interest in cryptocurrencies'),
            localize('Proficiency in Microsoft Excel\n'),
        ],
        preferences: [
            localize(
                'Ability to analyse payment transactions, particularly e-wallets and cryptocurrencies',
            ),
        ],
    },
    // {
    //     title: localize('Systems Integrator'),
    //     id: '2f2cf255-038a-4a33-adfa-36ade20ff304',
    //     keywords: [localize('Systems Integrator')],
    //     location: cyberjaya.name,
    //     type: [job_types.full_time],
    //     team: 'compliance',
    //     description: [
    //         localize(
    //             'You will make sure that our new products and services work in harmony with our current system. You will use your strong command of IT and keen interest in business to make unique contributions to high-impact projects and data analyses.',
    //         ),
    //     ],
    //     responsibilities: [
    //         localize(
    //             'Analyse the integration of the new APIs, crypto facilities, and other products and services.',
    //         ),
    //         localize(
    //             'Participate in devising innovative payments solution strategies by competitor mapping and analysis.',
    //         ),
    //         localize(
    //             'Maximise the efficacy of our existing partners within each market by using design, functionalities, source PSPs, regular partner reviews, and service level agreements.',
    //         ),
    //         localize(
    //             'Identify the best strategic partners to help us succeed in developing online solutions.',
    //         ),
    //         localize('Prepare risk and fraud documentation for our third-party stakeholders.'),
    //         localize(
    //             'Develop stable online infrastructure services that will support our cutting-edge products.',
    //         ),
    //         localize(
    //             'Collaborate with the Product team to achieve high-level business requirements.',
    //         ),
    //         localize(
    //             'Work closely with every department to facilitate a seamless introduction of new products and services.',
    //         ),
    //     ],
    //     qualifications: [
    //         localize('University degree in IT, business, or commerce'),
    //         localize(
    //             'Firm understanding of payment processes and a lively interest in cryptocurrencies',
    //         ),
    //         localize('Proficiency in Microsoft Excel'),
    //     ],
    //     preferences: [
    //         localize(
    //             'Ability to analyse online financial transactions, particularly e-wallets and cryptocurrencies',
    //         ),
    //         localize('Experience in software testing or QA '),
    //     ],
    // },
    {
        title: localize('Risk Management Executive'),
        id: '5e06db19-5887-48aa-bb58-d635c80bdb35',
        keywords: [localize('Risk Management Executive')],
        location: cyberjaya.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will assist in flagging, analysing, and managing regulatory risks. You will ensure that the company adheres to the risk policies and procedures in relation to AML-CTF as well as internal policies and bylaws to mitigate potential compliance risks.\n',
            ),
        ],
        responsibilities: [
            localize('Investigate, review, and analyse flagged client accounts.'),
            localize('Draft complaints and investigations reports.'),
            localize('Conduct KYC, CDD, EDD, and AML-CTF checks.'),
            localize('Verify and approve deposit and withdrawal requests.'),
            localize('Evaluate and improve policies to manage potential risks.'),
            localize(
                'Guide and support our other operational teams on AML-CTF, anti-fraud, and authentication matters.',
            ),
            localize(
                'Provide advice regarding AML-CTF regulations, internal policies and procedures, and other related inquiries from the company employees and management.',
            ),
        ],
        qualifications: [
            localize(
                'University degree in finance, economics, law, risk management, criminology, business studies, data science, or management',
            ),
            localize(
                'Knowledge of fraud processes and applications, including AML-CTF regulations and red flags',
            ),
            localize(
                'Strong qualitative and quantitative analytical capabilities in a similar capacity or keen interest to move into this area',
            ),
            localize('Proficiency in Excel and big data analysis'),
            localize('Excellent command of written and spoken English'),
            localize('Meticulous attention to detail'),
            localize('Self-motivation and flexibility at task rotations'),
            localize('Ability to make sound judgement based on limited information '),
            localize('Strong organisational skills and ability to work proactively'),
            localize('High level of integrity, reliability, and work ethic'),
        ],
        preferences: [localize('Excellent command of written and spoken Portuguese or Indonesian')],
    },
    // {
    //     title: localize('Systems Integrator'),
    //     id: '99fd8d35-1a50-4bef-a6ba-45cc26cb9063',
    //     keywords: [localize('Systems Integrator')],
    //     location: dubai.name,
    //     type: [job_types.full_time],
    //     team: 'compliance',
    //     description: [
    //         localize(
    //             'You will make sure that our new products and services work in harmony with our current system. You will use your strong command of IT and keen interest in business to make unique contributions to high-impact projects and data analyses.',
    //         ),
    //     ],
    //     responsibilities: [
    //         localize(
    //             'Analyse the integration of the new APIs, crypto facilities, and other products and services.',
    //         ),
    //         localize(
    //             'Participate in devising innovative payments solution strategies by competitor mapping and analysis.',
    //         ),
    //         localize(
    //             'Maximise the efficacy of our existing partners within each market by using design, functionalities, source PSPs, regular partner reviews, and service level agreements.',
    //         ),
    //         localize(
    //             'Identify the best strategic partners to help us succeed in developing online solutions.',
    //         ),
    //         localize('Prepare risk and fraud documentation for our third-party stakeholders.'),
    //         localize(
    //             'Develop stable online infrastructure services that will support our cutting-edge products.',
    //         ),
    //         localize(
    //             'Collaborate with the Product team to achieve high-level business requirements.',
    //         ),
    //         localize(
    //             'Work closely with every department to facilitate a seamless introduction of new products and services. ',
    //         ),
    //     ],
    //     qualifications: [
    //         localize('University degree in IT, business, or commerce'),
    //         localize(
    //             'Firm understanding of payment processes and a lively interest in cryptocurrencies',
    //         ),
    //         localize('Proficiency in Microsoft Excel\n'),
    //     ],
    //     preferences: [
    //         localize(
    //             'Ability to analyse online financial transactions, particularly e-wallets and cryptocurrencies',
    //         ),
    //         localize('Experience in software testing or QA \n'),
    //     ],
    // },
    {
        title: localize('Risk Management Executive'),
        id: '0e2c6592-736f-47c4-80f2-34203b5bee9d',
        keywords: [localize('Risk Management Executive')],
        location: dubai.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will assist in flagging, analysing, and managing regulatory risks. You will ensure that the company adheres to the risk policies and procedures in relation to AML-CTF as well as internal policies and bylaws to mitigate potential compliance risks.',
            ),
        ],
        responsibilities: [
            localize('Investigate, review, and analyse flagged client accounts.'),
            localize('Draft complaints and investigations reports.'),
            localize('Conduct KYC, CDD, EDD, and AML-CTF checks.'),
            localize('Verify and approve deposit and withdrawal requests.'),
            localize('Evaluate and improve policies to manage potential risks.'),
            localize(
                'Guide and support our other operational teams on AML-CTF, anti-fraud, and authentication matters.',
            ),
            localize(
                'Provide advice regarding AML-CTF regulations, internal policies and procedures, and other related inquiries from the company employees and management.',
            ),
        ],
        qualifications: [
            localize(
                'University degree in finance, economics, law, risk management, criminology, business studies, data science, or management',
            ),
            localize(
                'Knowledge of fraud processes and applications, including AML-CTF regulations and red flags',
            ),
            localize(
                'Strong qualitative and quantitative analytical capabilities in a similar capacity or keen interest to move into this area',
            ),
            localize('Proficiency in Excel and big data analysis'),
            localize('Excellent command of written and spoken English'),
            localize('Meticulous attention to detail'),
            localize('Self-motivation and flexibility at task rotations'),
            localize('Ability to make sound judgement based on limited information '),
            localize('Strong organisational skills and ability to work proactively'),
            localize('High level of integrity, reliability, and work ethic'),
        ],
    },
    {
        title: localize('Risk Management Executive '),
        id: 'c9903ba2-2a99-49ad-b2e0-9e1bc9918ba5',
        keywords: [localize('Risk Management Executive ')],
        location: asuncion.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will assist in flagging, analysing, and managing regulatory risks. You will ensure that the company adheres to the risk policies and procedures in relation to AML-CTF as well as internal policies and bylaws to mitigate potential compliance risks.\n',
            ),
        ],
        responsibilities: [
            localize('Investigate, review, and analyse flagged client accounts.'),
            localize('Draft complaints and investigations reports.'),
            localize('Conduct KYC, CDD, EDD, and AML-CTF checks.'),
            localize('Verify and approve deposit and withdrawal requests.'),
            localize('Evaluate and improve policies to manage potential risks.'),
            localize(
                'Guide and support our other operational teams on AML-CTF, anti-fraud, and authentication matters.',
            ),
            localize(
                'Provide advice regarding AML-CTF regulations, internal policies and procedures, and other related inquiries from the company employees and management.',
            ),
        ],
        qualifications: [
            localize(
                'University degree in finance, economics, law, risk management, criminology, business studies, data science, or management',
            ),
            localize(
                'Knowledge of fraud processes and applications, including AML-CTF regulations and red flags',
            ),
            localize(
                'Strong qualitative and quantitative analytical capabilities in a similar capacity or keen interest to move into this area',
            ),
            localize('Proficiency in Excel and big data analysis'),
            localize('Excellent command of written and spoken English'),
            localize('Meticulous attention to detail'),
            localize('Self-motivation and flexibility at task rotations'),
            localize('Ability to make sound judgement based on limited information '),
            localize('Strong organisational skills and ability to work proactively'),
            localize('High level of integrity, reliability, and work ethic'),
        ],
        preferences: [localize('Excellent command of written and spoken Portuguese or Indonesian')],
    },
    {
        title: localize('Compliance Executive'),
        id: 'c6a14f59-ff81-40b3-a095-6e52414935b2',
        keywords: [localize('Compliance Executive')],
        location: malta.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will ensure that our group of companies worldwide conduct their business operations in full compliance with relevant national and international laws and regulations. \n',
            ),
        ],
        responsibilities: [
            localize(
                'Work with the Head of Compliance to ensure group companies comply with AML, KYC, and Data Protection laws and regulations.',
            ),
            localize(
                'Plan and direct internal programmes and policies to empower all departments with the knowledge, awareness, and practices of regulatory compliance.',
            ),
            localize(
                'Track laws and regulations that may affect all group companies and implement necessary changes to internal policies in order to manage and mitigate our risk and exposure.',
            ),
            localize('Screen and approve website content and marketing promotions.'),
            localize(
                'Review and monitor business contracts and agreements entered into by group companies worldwide.',
            ),
            localize(
                'Assist with regulatory audits and annual statutory audits of group companies worldwide.\n',
            ),
        ],
        qualifications: [
            localize(
                'A bachelor’s degree in commerce or any business-related field, law, or risk management',
            ),
            localize('A good understanding of corporate, legal or regulatory compliance'),
            localize(
                'Thorough understanding of Anti-Money Laundering (AML) and Know Your Customer (KYC) processes',
            ),
            localize(
                'The ability to draft and review legal documents and prepare licence applications',
            ),
            localize('A proactive approach in problem-solving'),
            localize(
                'The ability to absorb and understand varied compliance matters in a number of international jurisdictions',
            ),
            localize('Excellent communication and interpersonal skills'),
            localize('Excellent proficiency in spoken and written English'),
        ],
        preferences: [localize('Diploma in risk management and compliance (ICA)')],
    },
    {
        title: localize('Compliance and Payments Analyst (PayOps)'),
        id: '2b1a58d2-e3bf-443e-b86c-d564ea8f81d4',
        keywords: [localize('Compliance and Payments Analyst (PayOps)')],
        location: malta.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will be responsible for sourcing, contacting, and negotiating with new payment system providers, banks, and payment processors in general.\n',
            ),
        ],
        responsibilities: [
            localize(
                'Administer overall payment systems, including monitoring and reporting clients activity as well as success rates.',
            ),
            localize(
                'Use to the utmost benefit any possible additional features that some payment processors offer.',
            ),
            localize(
                'Assist cashier providers in setting up new payment systems and risk management settings.',
            ),
            localize('Negotiate competitive rates with new payment system providers.'),
            localize(
                'Work closely with the Head of Payments to proactively suggest improvements to cashier setup and success rates by various strategies including monitoring customer activity and overall fraud and payment performances (card success rates, chargebacks, and the like).',
            ),
            localize('Collaborate with the Customer Support, Compliance, and Payments teams.'),
            localize('Support the Payments team in daily analyses when needed.'),
            localize(
                'Coordinate with payment system service providers in offering cryptocurrencies and digital wallets as a payment method.',
            ),
            localize('Research new payment systems that are available in the market.'),
        ],
        qualifications: [
            localize(
                'A bachelor’s degree in commerce or any business-related field, IT-related field, or criminology',
            ),
            localize(
                'Good understanding of payments functionality and a keen interest in cryptocurrencies',
            ),
            localize('Proficiency in Microsoft Excel '),
            localize('Proficiency in spoken and written English\n'),
        ],
        preferences: [
            localize(
                'Knowledge of payment transaction analysis, in particular e-wallets and cryptocurrencies ',
            ),
        ],
    },
    {
        title: localize('Risk Management Executive'),
        id: '5f113694-1b61-423d-bc08-41c2ca6be6fc',
        keywords: [localize('Risk Management Executive')],
        location: malta.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will assist in flagging, analysing, and managing regulatory risks. You will ensure that the company adheres to the risk policies and procedures in relation to AML-CTF as well as internal policies and bylaws to mitigate potential compliance risks.\n',
            ),
        ],
        responsibilities: [
            localize('Investigate, review, and analyse flagged client accounts.'),
            localize('Draft complaints and investigations reports.'),
            localize('Conduct KYC, CDD, EDD, and AML-CTF checks.'),
            localize('Verify and approve deposit and withdrawal requests.'),
            localize('Evaluate and improve policies to manage potential risks.'),
            localize(
                'Guide and support our other operational teams on AML-CTF, anti-fraud, and authentication matters.',
            ),
            localize(
                'Provide advice regarding AML-CTF regulations, internal policies and procedures, and other related inquiries from the company employees and management.',
            ),
        ],
        qualifications: [
            localize(
                'University degree in finance, economics, law, risk management, criminology, business studies, data science, or management',
            ),
            localize(
                'Knowledge of fraud processes and applications, including AML-CTF regulations and red flags',
            ),
            localize(
                'Strong qualitative and quantitative analytical capabilities in a similar capacity or keen interest to move into this area',
            ),
            localize('Proficiency in Excel and big data analysis'),
            localize('Excellent command of written and spoken English'),
            localize('Meticulous attention to detail'),
            localize('Self-motivation and flexibility at task rotations'),
            localize('Ability to make sound judgement based on limited information '),
            localize('Strong organisational skills and ability to work proactively'),
            localize('High level of integrity, reliability, and work ethic'),
        ],
        preferences: [localize('Excellent command of written and spoken Portuguese or Indonesian')],
    },
    {
        title: localize('Compliance Executive'),
        id: 'c139a8fe-0223-4414-a12d-73e1018854ad',
        keywords: [localize('Compliance Executive')],
        location: labuan.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will ensure that our group companies worldwide conduct business operations in full compliance with regulatory requirements in their registered jurisdictions and globally.\n',
            ),
        ],
        responsibilities: [
            localize(
                'Work with the Head of Compliance to ensure group companies comply with AML, KYC, and data protection laws and regulations.',
            ),
            localize(
                'Plan and direct internal programmes and policies to empower all departments with the knowledge, awareness, and practices of regulatory compliance.',
            ),
            localize(
                'Track laws and regulations that may affect group companies and amend internal policies as needed in order to manage our risk and exposure.',
            ),
            localize('Screen and approve website content and marketing communication.'),
            localize('Analyse payment transactions for potential abuse by third-parties.'),
            localize('Review and monitor business contracts and agreements.'),
            localize('Assist with regulatory audits and annual statutory audits.\n'),
        ],
        qualifications: [
            localize('University degree in finance, economics, law, or risk management'),
            localize('Firm grasp of corporate or legal compliance'),
            localize('Thorough understanding of AML and KYC processes'),
            localize(
                'Ability to draft and review legal documents, as well as prepare licence applications',
            ),
            localize(
                'Ability to absorb and understand regulatory requirements in a number of international jurisdictions\n',
            ),
        ],
    },
    {
        title: localize('Risk Management Executive'),
        id: '8e94a1d2-6a32-489a-bf33-3777b1a70a67',
        keywords: [localize('Risk Management Executive')],
        location: labuan.name,
        type: [job_types.full_time],
        team: 'compliance',
        description: [
            localize(
                'You will assist in flagging, analysing, and managing regulatory risks. You will ensure that the company adheres to the risk policies and procedures in relation to AML-CTF as well as internal policies and bylaws to mitigate potential compliance risks.\n',
            ),
        ],
        responsibilities: [
            localize('Investigate, review, and analyse flagged client accounts.'),
            localize('Draft complaints and investigations reports.'),
            localize('Conduct KYC, CDD, EDD, and AML-CTF checks.'),
            localize('Verify and approve deposit and withdrawal requests.'),
            localize('Evaluate and improve policies to manage potential risks.'),
            localize(
                'Guide and support our other operational teams on AML-CTF, anti-fraud, and authentication matters.',
            ),
            localize(
                'Provide advice regarding AML-CTF regulations, internal policies and procedures, and other related inquiries from the company employees and management.',
            ),
        ],
        qualifications: [
            localize(
                'University degree in finance, economics, law, risk management, criminology, business studies, data science, or management',
            ),
            localize(
                'Knowledge of fraud processes and applications, including AML-CTF regulations and red flags',
            ),
            localize(
                'Strong qualitative and quantitative analytical capabilities in a similar capacity or keen interest to move into this area',
            ),
            localize('Proficiency in Excel and big data analysis'),
            localize('Excellent command of written and spoken English'),
            localize('Meticulous attention to detail'),
            localize('Self-motivation and flexibility at task rotations'),
            localize('Ability to make sound judgement based on limited information '),
            localize('Strong organisational skills and ability to work proactively'),
            localize('High level of integrity, reliability, and work ethic'),
        ],
        preferences: [localize('Excellent command of written and spoken Portuguese or Indonesian')],
    },
]
