import React from 'react'
import { Header } from 'components/elements'
import LowIcon from 'images/svg/bug-bounty/low.svg'
import MediumIcon from 'images/svg/bug-bounty/medium.svg'
import HighIcon from 'images/svg/bug-bounty/high.svg'
import CriticalIcon from 'images/svg/bug-bounty/critical.svg'
import { TString } from 'types/generics'

type TVulnerabilityTypesContent = {
    id: number
    icon: string
    title: TString
    profit_condition?: {
        text: TString
        components: React.ReactElement[]
    }
    profit_table?: {
        id: number
        title: TString
        content:
            | {
                  text: TString
                  components?: React.ReactElement[]
              }
            | TString
    }[]
    description: TString
    examples: { id: number; text: TString }[]
    profit?: { text: TString; components: React.ReactElement[] }
}[]

export const vulnerability_types_content: TVulnerabilityTypesContent = [
    {
        id: 0,
        icon: CriticalIcon,
        title: '_t_Critical_t_',
        profit_condition: {
            text: '_t_<0>*</0>We may pay higher for critical bug reports on a case-to-case basis._t_',
            components: [<Header type="paragraph-2" as="span" color="red" key={0} />],
        },
        profit_table: [
            {
                id: 0,
                title: '_t_Important business_t_',
                content: {
                    text: '_t_Up to $10,000<0>*</0>_t_',
                    components: [<Header type="paragraph-2" as="span" color="red" key={0} />],
                },
            },
            {
                id: 1,
                title: '_t_General business_t_',
                content: {
                    text: '_t_Up to $5,000<0>*</0>_t_',
                    components: [<Header type="paragraph-2" as="span" color="red" key={0} />],
                },
            },
            {
                id: 2,
                title: '_t_Edge business_t_',
                content: {
                    text: '_t_Up to $2,500<0>*</0>_t_',
                    components: [<Header type="paragraph-2" as="span" color="red" key={0} />],
                },
            },
        ],
        description:
            '_t_Critical severity issues present an enormous risk to our clients or to Deriv itself. They often affect relatively low-level components in our infrastructure. For example:_t_',

        examples: [
            {
                id: 0,
                text: '_t_Arbitrary code/command execution on a server in our production network_t_',
            },
            {
                id: 1,
                text: '_t_Arbitrary queries on a production database_t_',
            },
            {
                id: 2,
                text: '_t_Bypassing our sign-in process, either password or 2FA_t_',
            },
            {
                id: 3,
                text: '_t_Accessing sensitive production user data and internal production systems_t_',
            },
            {
                id: 4,
                text: '_t_Payment-related vulnerabilities that could result in loss to our clients and the company_t_',
            },
        ],
    },
    {
        id: 1,
        icon: HighIcon,
        title: '_t_High_t_',
        profit_table: [
            {
                id: 0,
                title: '_t_Important business_t_',
                content: '_t_Up to $5,000_t_',
            },
            {
                id: 1,
                title: '_t_General business_t_',
                content: '_t_Up to $2,500_t_',
            },
            {
                id: 2,
                title: '_t_Edge business_t_',
                content: '_t_Up to $1,000_t_',
            },
        ],
        description:
            '_t_High severity issues are generally more narrow in scope than critical issues, but they may expose sensitive client and company data to attackers. For example:_t_',
        examples: [
            {
                id: 0,
                text: '_t_Cross-server scripting (XSS) that bypasses content security policy (CSP)_t_',
            },
            {
                id: 1,
                text: '_t_The ability to bypass verification, log in to clients’ accounts or devices, extract clients’ sensitive data, and perform actions without consent_t_',
            },

            {
                id: 2,
                text: '_t_Gaining access to back-end code, internal session cookies, or other sensitive information_t_',
            },

            {
                id: 3,
                text: '_t_Exploiting interactive logic issues that can cause loss to clients_t_',
            },
        ],
    },
    {
        id: 2,
        icon: MediumIcon,
        title: '_t_Medium_t_',
        profit_table: [
            {
                id: 0,
                title: '_t_Important business_t_',
                content: '_t_Up to $500_t_',
            },
            {
                id: 1,
                title: '_t_General business_t_',
                content: '_t_Up to $250_t_',
            },
            {
                id: 2,
                title: '_t_Edge business_t_',
                content: '_t_Up to $100_t_',
            },
        ],
        description:
            '_t_Medium severity issues allow attackers to gain unauthorised access to read or modify a limited amount of sensitive data. This data is usually less sensitive than the data exposed by high severity issues. For example:_t_',
        examples: [
            {
                id: 0,
                text: '_t_The ability to access a limited portion of clients’ sensitive information, our back-end code, or internal information on GitHub_t_',
            },
            {
                id: 1,
                text: '_t_XSS that does not bypass CSP and does not execute unauthorised actions in another user’s session_t_',
            },

            {
                id: 2,
                text: '_t_Cross-site and server-side request forgery (without access to our internal network)_t_',
            },

            {
                id: 3,
                text: '_t_Subdomain takeover_t_',
            },
        ],
    },
    {
        id: 3,
        icon: LowIcon,
        title: '_t_Low_t_',
        profit: {
            text: '_t_We’ll reward reports on low-level vulnerabilities <0>only</0> if they help us fix severe security issues, and we’ll decide the reward amount on a case-to-case basis._t_',
            components: [<strong key={0} />],
        },
        description:
            '_t_Low severity issues expose an extremely limited amount of data. They may violate an expectation of how something is intended to work, but without privilege escalation or the ability to trigger unintended behaviour. For example:_t_',
        examples: [
            {
                id: 0,
                text: '_t_Triggering debug error pages without proof of exploitability or obtaining sensitive information_t_',
            },
            {
                id: 1,
                text: '_t_Cross-site request forgery (non-critical)_t_',
            },
            {
                id: 2,
                text: '_t_Vulnerabilities depended on difficult scenarios or pre-conditions_t_',
            },
            {
                id: 3,
                text: '_t_Exposed logs without sensitive information_t_',
            },
        ],
    },
]
