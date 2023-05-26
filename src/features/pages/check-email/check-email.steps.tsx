import React from 'react'
import { check_email_steps } from './check-email.module.scss'
import { TString } from 'types/generics'
import Spam from 'images/svg/check-email/spam.svg'
import Typo from 'images/svg/check-email/typo.svg'
import WorkEmail from 'images/svg/check-email/work-email.svg'
import Firewalls from 'images/svg/check-email/firewalls.svg'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Icon from 'features/components/atoms/icon'

type CheckEmailStepItemType = {
    id: number
    icon: string
    content: TString
    alt: string
}

const steps: CheckEmailStepItemType[] = [
    {
        id: 0,
        icon: Spam,
        content: '_t_The email is in your spam folder (sometimes things get lost there)._t_',
        alt: 'Check email in your spam',
    },
    {
        id: 1,
        icon: Typo,
        content:
            '_t_The email address you entered had a mistake or typo (happens to the best of us)._t_',
        alt: 'Email ID had a typo error',
    },
    {
        id: 2,
        icon: WorkEmail,
        content:
            '_t_You accidentally gave us another email address (usually a work or a personal one instead of the one you meant)._t_',
        alt: 'Gave incorrect email ID',
    },
    {
        id: 3,
        icon: Firewalls,
        content:
            '_t_We can’t deliver the email to this address (usually because of firewalls or filtering)._t_',
        alt: 'Firewall filter',
    },
]

const CheckEmailSteps = () => {
    return (
        <div className={check_email_steps}>
            {steps.map((item) => (
                <Flex.Box key={item.id} gap="8x" justify="start" align="center">
                    <Icon size="xlarge" src={item.icon} alt={item.alt} />
                    <Typography.Paragraph>
                        <Localize translate_text={item.content} />
                    </Typography.Paragraph>
                </Flex.Box>
            ))}
        </div>
    )
}

export default CheckEmailSteps
