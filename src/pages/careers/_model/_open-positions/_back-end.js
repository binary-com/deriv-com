import { job_types } from '../_job_types/_job_types'
import { cyberjaya, dubai, malta } from '../_locations/_locations'
import { localize } from 'components/localization'

export const back_end_positions = [
    {
        title: localize('Database Administrator '),
        id: '43130a72-bcd8-4927-8465-9458d43f7a12',
        keywords: [localize('Database Administrator ')],
        location: cyberjaya,
        type: [job_types.full_time],
        team: 'back-end',
        description: [
            localize(
                'You will plan, install, and maintain database systems to ensure the security, integrity and seamless flow of information for our high-traffic online trading platform. ',
            ),
        ],
        responsibilities: [
            localize(
                'Plan, install, and configure world-class database systems that meet business objectives and the needs of end users.',
            ),
            localize('Plan and carry out the upgrade and migration of databases.'),
            localize('Develop, implement, and test database backup and recovery plans.'),
            localize(
                'Manage database and data security by controlling access to data through authentication, authorisation, and auditing.',
            ),
            localize(
                'Perform tests to ensure database performance and security, as well as data integrity.',
            ),
            localize('Document and administer database policies, procedures, and standards.'),
            localize(
                'Troubleshoot and debug problems in existing database systems, and find new ways to improve their speed, functionality, and scalability.',
            ),
        ],
        qualifications: [
            localize(
                'Experience as a DBA, with a focus on:\n    database setup\n    security\n    replication\n    performance tuning\n     disaster recovery',
            ),
            localize('SQL queries and optimisation'),
            localize('Excellent troubleshooting skills'),
            localize('Experience with database testing tools such as pgTAP'),
            localize(
                'Knowledge of Linux system administration, preferably including configuration and automation tools such as Chef as well as shell scripting',
            ),
            localize('Experience with PostgreSQL and/or SQL Server preferred'),
            localize('Experience with OLAP and MDX would be an advantage\n'),
        ],
    },
    {
        title: localize('Senior Back-end Developer'),
        id: '72a07983-844e-471b-aeee-920dcf0d8103',
        keywords: [localize('Senior Back-end Developer')],
        location: cyberjaya,
        type: [job_types.full_time],
        team: 'back-end',
        description: [
            localize(
                'You are a seasoned leader who can inspire your team and bolster the databases, scripting, and IT architecture of our company. You take pride in mentoring the junior members of your team and involving them in facing and overcoming new challenges, which you see as an opportunity to gain knowledge and experience. With your advanced object-oriented programming skills, you are eager to take on heavy responsibilities that go above and beyond the regular back-end workload of testing and improving the performance, speed, stability, and security of the company’s website and applications. \n',
            ),
        ],
        responsibilities: [
            localize('Design and launch large, complex back-end projects autonomously.'),
            localize(
                'Communicate with other teams to clearly identify the requirements, goals, and road map of joint projects.',
            ),
            localize(
                'Undertake massive architecture challenges to reach high availability and scalability aims.',
            ),
            localize(
                'Build, maintain, and optimise the technology that powers our servers, applications, and databases.',
            ),
            localize(
                'Define the priority of the Back-end team’s tasks according to the company’s direction.',
            ),
            localize(
                'Take the initiative to learn and work with the new technologies that are often introduced to the arsenal of our engineering teams.',
            ),
            localize(
                'Collaborate with front-end developers and other teams to develop high-quality web and mobile apps.',
            ),
            localize(
                'Lead your team in writing, reviewing, and documenting code to support and improve the functionality of our digital products.',
            ),
            localize(
                'Detect and fix complex bugs that might result in high-risk issues during development and deployment.',
            ),
            localize(
                'Elevate our data storage design to achieve greater speed, efficiency, and scalability.',
            ),
            localize('Supervise and engage in all aspects of the product life cycle.'),
        ],
        qualifications: [
            localize(
                'Expertise in any programming language, preferably Perl, Python, PHP, C/C++, Go, or Ruby, and a willingness to become highly proficient with Perl',
            ),
            localize(
                'Vast experience with relational database design, and/or open-source RDBMS systems such as MySQL and PostgreSQL',
            ),
            localize('Extensive knowledge of information security and data protection'),
            localize('Proficiency in Linux system administration'),
            localize(
                'Familiarity with Perl DBI, Moose, PSGI/Plack, NGINX, JavaScript, Redis, and Git',
            ),
            localize('Experience working with microservices and scalable systems'),
            localize(
                'Expert-level ability to produce high-quality, self-documenting code by using test-driven development (TDD) techniques',
            ),
            localize('Extensive experience in Linux and other open-source platforms'),
        ],
    },
    {
        title: localize('Database Administrator'),
        id: 'a3bc0300-9dfb-4327-8eac-84cd6e31414a',
        keywords: [localize('Database Administrator')],
        location: dubai,
        type: [job_types.full_time],
        team: 'back-end',
        description: [
            localize(
                'You will plan, install, and maintain database systems to ensure the security, integrity and seamless flow of information for our high-traffic online trading platform. \n',
            ),
        ],
        responsibilities: [
            localize(
                'Plan, install, and configure world-class database systems that meet business objectives and the needs of end users.',
            ),
            localize('Plan and carry out the upgrade and migration of databases.'),
            localize('Develop, implement, and test database backup and recovery plans.'),
            localize(
                'Manage database and data security by controlling access to data through authentication, authorisation, and auditing.',
            ),
            localize(
                'Perform tests to ensure database performance and security, as well as data integrity.',
            ),
            localize('Document and administer database policies, procedures, and standards.'),
            localize(
                'Troubleshoot and debug problems in existing database systems, and find new ways to improve their speed, functionality, and scalability.',
            ),
        ],
        qualifications: [
            localize(
                'Experience as a DBA, with a focus on:\n      database setup\n      security\n      replication\n      performance tuning\n      disaster recovery\n      SQL queries and optimisation',
            ),
            localize('Excellent troubleshooting skills'),
            localize('Experience with database testing tools such as pgtap'),
            localize(
                'Knowledge of Linux system administration, preferably including configuration and automation tools such as Chef as well as shell scripting',
            ),
            localize('Experience with PostgreSQL and/or SQL Server preferred'),
            localize('Experience with OLAP and MDX would be an advantage'),
        ],
    },
    {
        title: localize('Back-end Developer'),
        id: '27afa7da-e5e9-4c00-b146-a3569f7901f5',
        keywords: [localize('Back-end Developer')],
        location: malta,
        type: [job_types.full_time, job_types.internship],
        team: 'back-end',
        description: [
            localize(
                'You will be involved in troubleshooting and improving our back-end applications and processes. You will help create a more efficient process and work closely with other team members to ensure seamless user experience for our clients.\n',
            ),
        ],
        responsibilities: [
            localize('Develop and maintain world-class web applications.'),
            localize(
                'Build, maintain, and optimise the technology that powers our servers, applications, and databases.',
            ),
            localize(
                'Collaborating with front-end developers and other teams to develop an effective architecture to support the deployment of new products and features.',
            ),
            localize(
                'Troubleshoot and debug problems in applications during development and deployment.',
            ),
            localize('Optimize applications for speed, efficiency and scalability.'),
            localize('Participate in all aspects of the product life cycle.'),
        ],
        qualifications: [
            localize(
                'Expertise in any programming language, preferably Perl, Python, PHP, C/C++, Go, or Ruby, and a willingness to become highly proficient with Perl.',
            ),
            localize('Extensive knowledge of information security and data protection.'),
            localize('Expertise in Linux system administration.'),
            localize(
                'Extensive experience with relational database design, and/or open-source RDBMS systems such as MySQL and PostgreSQL.',
            ),
            localize(
                'Familiarity with Perl DBI, Moose, PSGI/Plack, NGINX, JavaScript, Redis, and Git.',
            ),
            localize('Experience working with microservices and scalable systems.'),
            localize(
                'Ability to produce high-quality, self-documenting code by using test-driven development (TDD) techniques.',
            ),
            localize('Extensive experience in Linux and other open-source platforms.'),
        ],
    },
    {
        title: localize('PostgreSQL Database Programmer and Administrator'),
        id: 'd7ebb3c9-8e84-4b2c-9171-34cead27eb57',
        keywords: [localize('PostgreSQL Database Programmer and Administrator')],
        location: malta,
        type: [job_types.full_time],
        team: 'back-end',
        description: [
            localize(
                'You will plan, install, and maintain database systems to ensure the security, integrity, and seamless flow of information for our high-traffic online trading platform. \n',
            ),
        ],
        responsibilities: [
            localize(
                'Plan, install, and configure world-class database systems that meet business objectives and the needs of end-users.',
            ),
            localize('Assist Back-end developers in writing production-ready SQL code.'),
            localize('Plan and carry out the upgrade and migration of databases.'),
            localize('Develop, implement, and test database backup and recovery plans.'),
            localize(
                'Manage database and data security by controlling access to data through authentication, authorisation, and auditing.',
            ),
            localize(
                'Perform tests to ensure database performance and security, as well as data integrity.',
            ),
            localize('Document and administer database policies, procedures, and standards.'),
            localize(
                'Plan and execute data extraction for efficient loading in our data warehouse, and ensure extracted data is useful and properly formatted.',
            ),
            localize(
                'Troubleshoot and debug problems in existing database systems, and find new ways to improve their speed, functionality, and scalability.\n',
            ),
        ],
        qualifications: [
            localize(
                'Experience as a Postgres DBA, with advanced hands-on knowledge of:\n       Database Setup\n       Security\n       Replication\n       Performance Tuning\n       Disaster Recovery\n       SQL\n       Stored Procedures',
            ),
            localize('Experience with database testing tools such as pgTAP'),
            localize('Experience with data extraction and reporting for data warehouse/cube'),
            localize(
                'Knowledge of Linux system administration, including configuration and automation tools such as Chef as well as Shell scripting is preferred',
            ),
            localize('Knowledge of Perl and other scripting languages is a plus'),
            localize('Experience with Multidimensional Expressions (MDX) is an advantage'),
        ],
    },
]
