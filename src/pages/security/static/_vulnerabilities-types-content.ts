import LowIcon from 'images/svg/security/low.svg'
import MediumIcon from 'images/svg/security/medium.svg'
import HighIcon from 'images/svg/security/high.svg'
import CriticalIcon from 'images/svg/security/critical.svg'

export const vulnerabilitiesTypesContent = [
    {
        icon: CriticalIcon,
        title: 'Critical',
        profit_condition:
            '<0>*</0>We may pay higher for critical bug reports on a case-to-case basis.',
        profit_table: [
            {
                title: 'Important business',
                content: 'Up to $10,000<0>*</0>',
            },
            {
                title: 'General business',
                content: 'Up to $5,000<0>*</0>',
            },
            {
                title: 'Edge business',
                content: 'Up to $2,500<0>*</0>',
            },
        ],
        description:
            'Critical severity issues present an enormous risk to our clients or to Deriv itself. They often affect relatively low-level components in our infrastructure. For example:',
        examples: [
            'Arbitrary code/command execution on a server in our production network',
            'Arbitrary queries on a production database',
            'Bypassing our sign-in process, either password or 2FA',
            'Accessing sensitive production user data and internal production systems',
            'Payment-related vulnerabilities that could result in loss to our clients and the company',
        ],
    },
    {
        icon: HighIcon,
        title: 'High',
        profit_table: [
            {
                title: 'Important business',
                content: 'Up to $5,000',
            },
            {
                title: 'General business',
                content: 'Up to $2,500',
            },
            {
                title: 'Edge business',
                content: 'Up to $1,000',
            },
        ],
        description:
            'High severity issues are generally more narrow in scope than critical issues, but they may expose sensitive client and company data to attackers. For example:',
        examples: [
            'Cross-server scripting (XSS) that bypasses content security policy (CSP)',
            'The ability to bypass verification, log in to clients’ accounts or devices, extract clients’ sensitive data, and perform actions without consent',
            'Gaining access to back-end code, internal session cookies, or other sensitive information',
            'Exploiting interactive logic issues that can cause loss to clients',
        ],
    },
    {
        icon: MediumIcon,
        title: 'Medium',
        profit_table: [
            {
                title: 'Important business',
                content: 'Up to $500',
            },
            {
                title: 'General business',
                content: 'Up to $250',
            },
            {
                title: 'Edge business',
                content: 'Up to $100',
            },
        ],
        description:
            'Medium severity issues allow attackers to gain unauthorised access to read or modify a limited amount of sensitive data. This data is usually less sensitive than the data exposed by high severity issues. For example:',
        examples: [
            'The ability to access a limited portion of clients’ sensitive information, our back-end code, or internal information on GitHub',
            'XSS that does not bypass CSP and does not execute unauthorised actions in another user’s session',
            'Cross-site and server-side request forgery (without access to our internal network)',
            'Subdomain takeover',
        ],
    },
    {
        icon: LowIcon,
        title: 'Low',
        profit: 'We’ll reward reports on low-level vulnerabilities <0>only</0> if they help us fix severe security issues, and we’ll decide the reward amount on a case-to-case basis.',
        description:
            'Low severity issues expose an extremely limited amount of data. They may violate an expectation of how something is intended to work, but without privilege escalation or the ability to trigger unintended behaviour. For example:',
        examples: [
            'Triggering debug error pages without proof of exploitability or obtaining sensitive information',
            'Cross-site request forgery (non-critical)',
            'Vulnerabilities depended on difficult scenarios or pre-conditions',
            'Exposed logs without sensitive information',
        ],
    },
]
