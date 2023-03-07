import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'
import * as styles from './nav-card.module.scss'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { Localize, LocalizedLink } from 'components/localization'
import Typography from 'features/components/typography'
import { TString } from 'types/generics'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'

interface INavigationCardProps extends HTMLAttributes<HTMLAnchorElement> {
    title?: TString
    content?: TString
    onClick?: () => void
    to: string
    external?: boolean
    target?: string
    icon_src?: string
    icon_alt?: string
    has_bold_title?: boolean
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
    has_bold_title,
}: INavigationCardProps) => {
    const is_rtl = useIsRtl()

    return (
        <LocalizedLink
            external={external}
            to={to}
            onClick={onClick}
            style={{ textDecoration: 'none' }}
            target={target}
        >
            <div className={styles.nav_card_container}>
                {icon_src && (
                    <div className={styles.nav_card_icon}>
                        <img src={icon_src} alt={icon_alt} />
                    </div>
                )}
                <div
                    className={clsx(styles.nav_card_content, {
                        [styles.nav_card_type]: has_bold_title,
                    })}
                >
                    <Typography
                        as={'h6'}
                        type={'heading-6'}
                        className={styles.nav_card_content_title}
                        semibold={has_bold_title}
                    >
                        <Localize translate_text={title} />
                    </Typography>
                    {content && (
                        <Typography
                            as={'p'}
                            type={'paragraph-2'}
                            className={styles.nav_card_content_description}
                        >
                            <Localize translate_text={content} />
                        </Typography>
                    )}
                </div>
                {external && (
                    <img
                        src={Diagonal}
                        alt="Diagonal"
                        className={clsx(styles.nav_right_diagonal, {
                            [styles.nav_right_diagonal_rtl]: is_rtl,
                        })}
                    />
                )}
            </div>
        </LocalizedLink>
    )
}

export default NavigationCard
