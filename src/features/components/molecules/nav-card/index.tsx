import React from 'react'
import * as styles from './nav-card.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Icon from 'features/components/atoms/icon'
import { LinkUrlType } from 'features/types'
import Link from 'features/components/atoms/link'
import dclsx from 'features/utils/dclsx'
import Flex from 'features/components/atoms/flex-box'

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

    return (
        <Link url={url} onClick={onClick} no_hover>
            <div className={styles.nav_card_container}>
                {icon_src && <Icon size="large" src={icon_src} alt={icon_alt} />}
                <Typography.Heading
                    size={'xxs'}
                    as="h2"
                    align="left"
                    weight={content ? 'bold' : 'normal'}
                >
                    <Localize translate_text={title} />
                </Typography.Heading>
                {content && (
                    <div className={dclsx(styles.nav_card_content)}>
                        <Typography.Paragraph
                            size={is_mobile_or_tablet ? 'large' : 'medium'}
                            align="left"
                            textcolor="light"
                        >
                            <Localize translate_text={content} />
                        </Typography.Paragraph>
                    </div>
                )}
                {is_arrow_visible && (
                    <Icon
                        src={Diagonal}
                        alt="Diagonal"
                        has_rtl
                        className={dclsx(styles.nav_right_diagonal)}
                    />
                )}
            </div>
        </Link>
    )
}

export default NavigationCard
