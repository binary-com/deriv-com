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
        <FlexBox.Box
            className={styles.not_found}
            direction={'col'}
            wrap={'wrap'}
            justify={'center'}
            align={'center'}
        >
            <Image
                src={not_available_image.src}
                alt={not_available_image.alt}
                width="96"
                height="96"
            />
            <FlexBox.Box
                direction={'col'}
                wrap={'wrap'}
                justify={'center'}
                align={'center'}
                margin={'8x'}
            >
                <Typography.Heading as="h3" size={'small'} textcolor={'black'} mt={'8x'}>
                    <Localize translate_text={info_items.header} />
                </Typography.Heading>
                <Typography.Paragraph
                    size={'medium'}
                    weight={'normal'}
                    textcolor={'black'}
                    align={'center'}
                    margin_block={'8x'}
                >
                    <Localize translate_text={info_items.sub_header} />
                </Typography.Paragraph>
                <Button.Primary
                    type={'button'}
                    className={styles.not_found_button}
                    radius={'2x'}
                    textsize={'medium'}
                    padding_inline={'8x'}
                    padding_block={'5x'}
                >
                    <Link type={'internal'} url={button_link.url} textcolor={'white'}>
                        <Localize translate_text={button_link.text} />
                    </Link>
                </Button.Primary>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default NotFoundContainer
