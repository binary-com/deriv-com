import { job_types } from '../_job_types/_job_types'
import { cyberjaya } from '../_locations/_locations'
import { localize } from 'components/localization'

export const internal_audit_positions = [
    {
        title: localize('Internal Audit Executive'),
        id: 'b84082d8-2382-48f9-a99f-7dcd832cf146',
        keywords: [localize('Internal Audit Executive')],
        location: cyberjaya.name,
        type: [job_types.full_time],
        team: 'internal-audit',
        description: [
            localize(
                'You will provide an objective and independent evaluation of our company’s operations. You will use a methodical approach to make sure that our risk management, governance, and internal control processes are operating effectively. Delivering first-rate internal auditing, you will handle issues that are fundamentally important in the future of our company. \n',
            ),
        ],
        responsibilities: [
            localize(
                'Evaluate and improve the effectiveness of internal controls, risk management, regulatory compliance, financial and operational processes. ',
            ),
            localize(
                'Assist in preparing audit plans and programmes which includes operational activities, objectives, scope, and methodology. ',
            ),
            localize(
                'Perform audit assignments and identify control gaps, risks and opportunities for improvement. ',
            ),
            localize(
                'Summarise audit findings and work with department heads to create effective and efficient solutions. ',
            ),
            localize(
                'Prepare reports expressing audit opinions on the adequacy and effectiveness of the internal controls and operational efficiency. ',
            ),
            localize(
                'Follow up on the recommendations and timelines for corrective actions with department heads. ',
            ),
            localize(
                'Assist and/or advise management during the internal controls implementation phase. \n',
            ),
        ],
        qualifications: [
            localize('A university degree in Accounting/Finance or its equivalent'),
            localize('Exceptional English communication skills (both oral and written)'),
            localize('Advanced knowledge of Microsoft Office'),
            localize('A strong understanding of internal controls and business processes'),
            localize('Exceptional ability to work and excel in a team-oriented environment'),
            localize('Ability to work independently and multitask'),
            localize('A meticulous, organised, results-driven, and proactive personality\n'),
        ],
    },
]
