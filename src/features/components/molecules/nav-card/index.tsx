import React from 'react'
import clsx from 'clsx'
import * as styles from './nav-card.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Icon from 'features/components/atoms/icon'
import { LinkUrlType } from 'features/types'
import Link from 'features/components/atoms/link'

interface INavigationCardProps {
    title?: TString
    content?: TString
    onClick?: () => void
    url: LinkUrlType
    icon_src?: string
    icon_alt?: string
}

const NavigationCard = ({
    onClick,
    url,
    title,
    content,
    icon_src,
    icon_alt,
}: INavigationCardProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    const is_arrow_visible =
        url.type === 'company' || (url.type === 'non-company' && url.target === '_blank')

    const has_content = content ? true : false

    return (
        <Link url={url} onClick={onClick} style={{ textDecoration: 'none' }}>
            <div className={styles.nav_card_container}>
                {icon_src && <Icon size="large" src={icon_src} alt={icon_alt} mr={'4x'} />}
                <div
                    className={clsx(styles.nav_card_content, {
                        [styles.nav_card_type]: has_content,
                    })}
                >
                    <Typography.Paragraph
                        size={'medium'}
                        className={styles.nav_card_content_title}
                        weight={has_content ? 'bold' : 'normal'}
                    >
                        <Localize translate_text={title} />
                    </Typography.Paragraph>
                    {content && (
                        <Typography.Paragraph
                            size={is_mobile_or_tablet ? 'large' : 'medium'}
                            className={styles.nav_card_content_description}
                        >
                            <Localize translate_text={content} />
                        </Typography.Paragraph>
                    )}
                </div>
                {is_arrow_visible && (
                    <Icon
                        src={Diagonal}
                        alt="Diagonal"
                        has_rtl
                        className={clsx(styles.nav_right_diagonal)}
                    />
                )}
            </div>
        </Link>
    )
}

export default NavigationCard
