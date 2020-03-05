import { cyberjaya } from '../_locations/_locations'
import { job_types } from '../_job_types/_job_types'
import { localize } from 'components/localization'

export const disaster_recovery_positions = [
    {
        title: localize('Head of Disaster Recovery'),
        id: '3e924fa4-c146-404a-9fe3-4fe1c61680b6',
        keywords: [localize('Head of Disaster Recovery')],
        location: cyberjaya,
        type: [job_types.full_time],
        team: 'disaster-recovery',
        description: [
            localize(
                'You will manage, develop, maintain, and lead disaster recovery strategies and risk management procedures. You will identify vulnerabilities in our IT infrastructure and determine critical processes required for the successful resumption of business operations in the event of system failure or disasters. To create business continuance scenarios and effective disaster recovery plans, you have an in-depth understanding of IT resilience and a hands-on integrated multidisciplinary approach.\n',
            ),
        ],
        responsibilities: [
            localize(
                'Develop, direct, and oversee risk management, business continuity, and disaster recovery plans across the company.',
            ),
            localize(
                'Develop and implement a functional Disaster Recovery program. This includes developing and maintaining all Disaster ',
            ),
            localize('Recovery policies, standards, procedures, and guidelines.'),
            localize(
                'Identify the critical processes and systems that are core to our company’s continued business operation.',
            ),
            localize(
                'Plan and execute a half-yearly disaster recovery testing to ensure the security and integrity of critical business processes.',
            ),
            localize(
                "Direct the vendor management of service providers who help with sustaining and improving the organisation's disaster recovery capabilities.",
            ),
            localize(
                'Provide rapid response and recovery by writing and implementing high standard, clear, and actionable disaster recovery plans.',
            ),
            localize(
                'Coordinate response and recovery activities and status communications in the event of a major incident.',
            ),
            localize(
                'Provide a methodology to oversee compliance with corporate business continuity standards.',
            ),
            localize('Serve as lead in internal and external audit requests.'),
            localize(
                'Work with third-party systems and suppliers to ensure access to data, and switch to alternatives if necessary.\n',
            ),
        ],
        qualifications: [
            localize('A university degree in Computer Science or its equivalent'),
            localize('Extensive management experience and strong interpersonal skills'),
            localize(
                'Strong communication and collaboration skills and ability to interface with all levels of the company',
            ),
            localize(
                '5+ years direct experience in building and implementing disaster recovery plans',
            ),
            localize('Hands-on experience in Linux and cloud computing (AWS, GCP, and other IAAS)'),
            localize(
                'Experience in networking and configuration management tools such as Chef, Ansible, and SaltStack',
            ),
            localize(
                'Thorough knowledge of and experience in database administration (PostgreSQL preferred)',
            ),
            localize('Hands-on experience in implementing high availability database clusters'),
            localize(
                'Thorough knowledge of industry standard information security and DR best practices',
            ),
            localize(
                'Familiarity with legacy and modern application architectures and related technologies (web applications, service-oriented architecture, microservices), network protocols, and storage and backup services',
            ),
            localize('Highly adaptable to new and different technologies'),
            localize('Exceptional English communication skills (both oral and written)\n'),
        ],
        preferences: [localize('Extensive experience with databases')],
    },
    {
        title: localize('Disaster Recovery Analyst'),
        id: '24612204-9a10-4811-ab9f-fce8970f190f',
        keywords: [localize('Disaster Recovery Analyst')],
        location: cyberjaya,
        type: [job_types.full_time],
        team: 'disaster-recovery',
        description: [
            localize(
                'You will help with the development, maintenance, and execution of disaster recovery strategies and risk management procedures. You will identify vulnerabilities in our IT infrastructure and determine critical processes required for the successful resumption of business operations in the event of system failure or disasters. You have an in-depth understanding of IT resilience and a hands-on integrated multidisciplinary approach, so you can create business continuance scenarios and effective disaster recovery plans.',
            ),
        ],
        responsibilities: [
            localize(
                'Execute risk management, business continuity, and disaster recovery plans across the company.',
            ),
            localize(
                'Ensure the continuous implementation of a disaster recovery programme that observes disaster recovery policies, standards, procedures, and guidelines.',
            ),
            localize(
                'Identify the critical processes and systems that are core to our company’s continued business operation.',
            ),
            localize(
                'Conduct periodical checks to ensure that backups are created regularly and flawlessly.',
            ),
            localize(
                'Plan and execute periodical live disaster recovery testing to ensure the functionality of backups as well as the security and integrity of critical business processes.',
            ),
            localize(
                'Coordinate the vendor management of service providers who help with sustaining and improving our disaster recovery capabilities.',
            ),
            localize(
                'Provide rapid response and recovery by adhering to clear, actionable, and high-standard disaster recovery plans.',
            ),
            localize(
                'Execute response and recovery activities and status communications in the event of a major incident.',
            ),
            localize(
                'Help to devise and execute a methodology to ensure compliance with corporate business continuity standards.',
            ),
            localize(
                'Work with internal and external auditors by responding to requests and providing the relevant, required information.',
            ),
            localize(
                'Work with third-party suppliers to ensure access to data, and switch to alternative suppliers if necessary',
            ),
        ],
        qualifications: [
            localize('A university degree in computer science or a related field'),
            localize(
                'A minimum of two years’ direct experience in executing disaster recovery plans',
            ),
            localize('Hands-on experience in Linux and cloud computing (AWS, GCP, and other IAAS)'),
            localize(
                'Experience in networking and configuration management tools such as Chef, Ansible, and SaltStack',
            ),
            localize('Comprehensive experience in database administration (PostgreSQL preferred)'),
            localize('Hands-on experience in implementing high availability database clusters'),
            localize(
                'Extensive knowledge of industry-standard information security and disaster recovery best practices',
            ),
            localize(
                'Familiarity with legacy and modern application architectures and related technologies (web applications, service-oriented architecture, microservices), network protocols, and storage and backup services',
            ),
            localize('Ability to predict, identify, and define potential threats'),
            localize(
                'Strong communication and collaboration skills and the ability to interface with all levels of the company',
            ),
            localize('Exceptional English communication skills (both oral and written)'),
        ],
        preferences: [localize('Extensive experience with databases')],
    },
]
