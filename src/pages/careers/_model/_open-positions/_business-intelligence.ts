import { cyberjaya, malta } from '../_locations/_locations'
import { job_types } from '../_job_types/_job_types'

export const business_intelligence_positions = [
    {
        title: 'Data Engineer/Analyst',
        id: '68590853-0756-4bf6-a9b4-4568e483e3ce',
        keywords: ['Data Engineer/Analyst'],
        location: cyberjaya.name,
        type: [job_types.full_time],
        team: 'business-intelligence',
        description: [
            'You will convert data into actionable insights that contribute to business strategies. You’ll also solve complex business problems using data-driven techniques.\n',
        ],
        responsibilities: [
            'Conduct full lifecycle data integration, encompassing requirements, activities, and design.',
            'Ask the right questions to identify potential problems, the scope of the operation, and the availability of relevant data.',
            'Use data governance tools to ensure data is accurate and consistent for effective analysis.',
            'Convert raw data into an easy-to-understand format for analysis and reporting purposes.',
            'Develop and implement databases by collecting, designing, processing, analysing, and presenting data in a meaningful way.',
            'Communicate and collaborate effectively with members of different teams across the organisation.\n',
        ],
        qualifications: [
            'Experience with data modelling techniques such as Kimball star schema, Anchor modelling and Data Vault',
            'Experience with database reporting tools such as SQL, programming languages such as Python and R, and ETL frameworks',
            'Strong analytical skills with the ability to transform data into optimal business decisions',
            'Strong communication skills',
            'Ability to present data using various tools to help the team to make informed business decisions\n',
        ],
        preferences: [
            'Experience with cybersecurity and data protection',
            'Experience with MDX query language',
            'Experience with AWS Cloud',
            'Experience with Google Cloud (BigQuery)',
        ],
    },
    {
        title: 'Data Scientist',
        id: '19aedff7-4f36-47b5-97ee-4321bd79edf6',
        keywords: ['Data Scientist'],
        location: malta.name,
        type: [job_types.full_time],
        team: 'business-intelligence',
        description: [
            'You will develop and implement databases by collecting, designing, processing, analysing, and presenting data in a meaningful way. You will convert data into actionable insights that contribute to business strategies and solve complex business problems using data-driven techniques. ',
        ],
        responsibilities: [
            'Conduct full lifecycle analysis that includes requirements, activities, and design.',
            'Ask the right questions to identify potential problems to be solved, the scope involved and the availability of relevant data.',
            'Use data governance tools to ensure data is accurate and consistent for effective analysis.',
            'Convert raw data into an easy-to-understand format for analysis and reporting purposes.',
            'Translate data into consumable information and assist in making data-driven decisions across departments.',
            'Employ data mining techniques and statistical analysis to create predictions systems in line with our products. ',
        ],
        qualifications: [
            'Experience with reporting packages, SQL, programming (Python/R) and ETL frameworks',
            'Experience with machine learning algorithms, decision trees, neural networks, clustering, etc.',
            'Experience with statistical and data mining techniques like GLM/Regression, Random ',
            'Forest, Boosting, text mining, social media analysis, etc.',
            'Strong analytical skills with the ability to transform data into optimal business decisions',
            'A strong background in statistics, mathematics or engineering',
            'Strong communication skills',
            'Ability to present data using various tools to help the team to make informed business decisions',
        ],
        preferences: [
            'Experience in data visualisation',
            'Experience in cybersecurity and data protection',
            'Experience with MDX query language',
        ],
    },
]
