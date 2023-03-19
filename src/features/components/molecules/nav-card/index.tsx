import React from 'react'
import clsx from 'clsx'
import * as styles from './nav-card.module.scss'
import { Localize, LocalizedLink } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Icon from 'features/components/atoms/icon'

interface INavigationCardProps {
    title?: TString
    content?: TString
    onClick?: () => void
    to: string
    external?: boolean
    target?: string
    icon_src?: string
    icon_alt?: string
}

const NavigationCard = ({
    external,
    onClick,
    to,
    title,
    content,
    target,
    icon_src,
    icon_alt,
}: INavigationCardProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    const has_content = content ? true : false

    return (
        <LocalizedLink
            external={external}
            to={to}
            onClick={onClick}
            style={{ textDecoration: 'none' }}
            target={target}
        >
            <div className={styles.nav_card_container}>
                {icon_src && <Icon size="large" src={icon_src} alt={icon_alt} mr={'extra-small'} />}
                <div
                    className={clsx(styles.nav_card_content, {
                        [styles.nav_card_type]: has_content,
                    })}
                >
                    <Typography.Heading
                        as={'h6'}
                        // size={is_mobile_or_tablet ? 5 : 6}
                        size={is_mobile_or_tablet ? 'xs' : 'small'}
                        className={styles.nav_card_content_title}
                        weight={has_content ? 'bold' : 'normal'}
                        // weight={'normal'}
                    >
                        <Localize translate_text={title} />
                    </Typography.Heading>
                    {content && (
                        <Typography.Paragraph
                            // size={is_mobile_or_tablet ? 1 : 2}
                            size={is_mobile_or_tablet ? 'large' : 'medium'}
                            className={styles.nav_card_content_description}
                        >
                            <Localize translate_text={content} />
                        </Typography.Paragraph>
                    )}
                </div>
                {external && (
                    <Icon
                        src={Diagonal}
                        alt="Diagonal"
                        has_rtl
                        className={clsx(styles.nav_right_diagonal)}
                    />
                )}
            </div>
        </LocalizedLink>
    )
}

export default NavigationCard
