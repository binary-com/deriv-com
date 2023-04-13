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

    const has_content = content ? true : false

    return (
        <Link url={url} onClick={onClick} no_hover>
            <Flex.Box
                className={styles.nav_card_container}
                justify="between"
                align={has_content ? 'start' : 'center'}
                padding_block={'4x'}
            >
                {icon_src && <Icon size="large" src={icon_src} alt={icon_alt} mr={'8x'} />}
                <Flex.Box
                    direction="col"
                    justify={has_content ? 'start' : 'center'}
                    gap={'4x'}
                    grow="1"
                    pt="3x"
                    className={dclsx(styles.nav_card_content, {
                        [styles.nav_card_type]: has_content,
                    })}
                >
                    <Typography.Paragraph
                        size={'medium'}
                        align="left"
                        weight={has_content ? 'bold' : 'normal'}
                    >
                        <Localize translate_text={title} />
                    </Typography.Paragraph>
                    {content && (
                        <Typography.Paragraph
                            size={is_mobile_or_tablet ? 'large' : 'medium'}
                            align="left"
                            textcolor="light"
                        >
                            <Localize translate_text={content} />
                        </Typography.Paragraph>
                    )}
                </Flex.Box>
                {is_arrow_visible && (
                    <Icon
                        src={Diagonal}
                        alt="Diagonal"
                        has_rtl
                        className={dclsx(styles.nav_right_diagonal)}
                    />
                )}
            </Flex.Box>
        </Link>
    )
}

export default NavigationCard
