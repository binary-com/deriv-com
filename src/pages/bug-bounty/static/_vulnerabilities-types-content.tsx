import React from 'react'
import { localize, Localize } from 'components/localization'
import { Header } from 'components/elements'
import LowIcon from 'images/svg/bug-bounty/low.svg'
import MediumIcon from 'images/svg/bug-bounty/medium.svg'
import HighIcon from 'images/svg/bug-bounty/high.svg'
import CriticalIcon from 'images/svg/bug-bounty/critical.svg'

export const vulnerability_types_content = [
    {
        icon: CriticalIcon,
        title: <Localize translate_text="Critical" />,
        profit_condition: (
            <Localize
                translate_text="<0>*</0>We may pay higher for critical bug reports on a case-to-case basis."
                components={[<Header type="paragraph-2" as="span" color="red" key={0} />]}
            />
        ),
        profit_table: [
            {
                title: <Localize translate_text="Important business" />,
                content: (
                    <Localize
                        translate_text="Up to $10,000<0>*</0>"
                        components={[<Header type="paragraph-2" as="span" color="red" key={0} />]}
                    />
                ),
            },
            {
                title: <Localize translate_text="General business" />,
                content: (
                    <Localize
                        translate_text="Up to $5,000<0>*</0>"
                        components={[<Header type="paragraph-2" as="span" color="red" key={0} />]}
                    />
                ),
            },
            {
                title: <Localize translate_text="Edge business" />,
                content: (
                    <Localize
                        translate_text="Up to $2,500<0>*</0>"
                        components={[<Header type="paragraph-2" as="span" color="red" key={0} />]}
                    />
                ),
            },
        ],
        description: localize(
            'Critical severity issues present an enormous risk to our clients or to Deriv itself. They often affect relatively low-level components in our infrastructure. For example:',
        ),
        examples: [
            localize('Arbitrary code/command execution on a server in our production network'),
            localize('Arbitrary queries on a production database'),
            localize('Bypassing our sign-in process, either password or 2FA'),
            localize('Accessing sensitive production user data and internal production systems'),
            localize(
                'Payment-related vulnerabilities that could result in loss to our clients and the company',
            ),
        ],
    },
    {
        icon: HighIcon,
        title: <Localize translate_text="High" />,
        profit_table: [
            {
                title: <Localize translate_text="Important business" />,
                content: <Localize translate_text="Up to $5,000" />,
            },
            {
                title: <Localize translate_text="General business" />,
                content: <Localize translate_text="Up to $2,500" />,
            },
            {
                title: <Localize translate_text="Edge business" />,
                content: <Localize translate_text="Up to $1,000" />,
            },
        ],
        description: localize(
            'High severity issues are generally more narrow in scope than critical issues, but they may expose sensitive client and company data to attackers. For example:',
        ),
        examples: [
            localize('Cross-server scripting (XSS) that bypasses content security policy (CSP)'),
            localize(
                'The ability to bypass verification, log in to clients’ accounts or devices, extract clients’ sensitive data, and perform actions without consent',
            ),
            localize(
                'Gaining access to back-end code, internal session cookies, or other sensitive information',
            ),
            localize('Exploiting interactive logic issues that can cause loss to clients'),
        ],
    },
    {
        icon: MediumIcon,
        title: <Localize translate_text="Medium" />,
        profit_table: [
            {
                title: <Localize translate_text="Important business" />,
                content: <Localize translate_text="Up to $500" />,
            },
            {
                title: <Localize translate_text="General business" />,
                content: <Localize translate_text="Up to $250" />,
            },
            {
                title: <Localize translate_text="Edge business" />,
                content: <Localize translate_text="Up to $100" />,
            },
        ],
        description: localize(
            'Medium severity issues allow attackers to gain unauthorised access to read or modify a limited amount of sensitive data. This data is usually less sensitive than the data exposed by high severity issues. For example:',
        ),
        examples: [
            localize(
                'The ability to access a limited portion of clients’ sensitive information, our back-end code, or internal information on GitHub',
            ),
            localize(
                'XSS that does not bypass CSP and does not execute unauthorised actions in another user’s session',
            ),
            localize(
                'Cross-site and server-side request forgery (without access to our internal network)',
            ),
            localize('Subdomain takeover'),
        ],
    },
    {
        icon: LowIcon,
        title: <Localize translate_text="Low" />,
        profit: (
            <Localize
                translate_text="We’ll reward reports on low-level vulnerabilities <0>only</0> if they help us fix severe security issues, and we’ll decide the reward amount on a case-to-case basis."
                components={[<strong key={0} />]}
            />
        ),
        description: localize(
            'Low severity issues expose an extremely limited amount of data. They may violate an expectation of how something is intended to work, but without privilege escalation or the ability to trigger unintended behaviour. For example:',
        ),
        examples: [
            localize(
                'Triggering debug error pages without proof of exploitability or obtaining sensitive information',
            ),
            localize('Cross-site request forgery (non-critical)'),
            localize('Vulnerabilities depended on difficult scenarios or pre-conditions'),
            localize('Exposed logs without sensitive information'),
        ],
    },
]
