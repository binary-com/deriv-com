import React from 'react'
import { button_link, info_items, not_available_image } from './data'
import * as styles from './not-found.module.scss'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'
import FlexBox from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import { Localize } from 'components/localization'

const NotFoundContainer = () => {
    return (
        <FlexBox className={styles.not_found}>
            <Image
                src={not_available_image.src}
                alt={not_available_image.alt}
                width="96"
                height="96"
            />
            <FlexBox className={styles.not_found_info} margin={'8x'}>
                <Typography.Heading
                    as="h3"
                    size={'small'}
                    className={styles.not_found_description}
                    textcolor={'black-3'}
                >
                    <Localize translate_text={info_items.header} />
                </Typography.Heading>
                <Typography.Heading
                    as="h4"
                    size={'xxxs'}
                    className={styles.not_found_description}
                    weight={'normal'}
                    textcolor={'black-3'}
                >
                    <Localize translate_text={info_items.sub_header} />
                </Typography.Heading>
                <Button.Primary type={'button'} className={styles.not_found_button}>
                    <Link type={'internal'} url={button_link.url} textcolor={'white'}>
                        <Localize translate_text={button_link.text} />
                    </Link>
                </Button.Primary>
            </FlexBox>
        </FlexBox>
    )
}

export default NotFoundContainer
