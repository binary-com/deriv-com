import React from 'react'
import { button_link, info_items, not_available_image } from './data'
import * as styles from './not-found.module.scss'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import { Localize, localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import Container from 'features/components/atoms/container'

const NotFoundContainer = () => {
    return (
        <Container.Fluid>
            <FlexBox.Box
                className={styles.not_found}
                direction={'col'}
                justify={'center'}
                align={'center'}
                padding_inline="20x"
            >
                <Typography.Heading
                    as="h3"
                    size={'large'}
                    textcolor={'black'}
                    pb="20x"
                    lg={{ pb: '40x' }}
                >
                    <Localize translate_text={info_items.header} />
                </Typography.Heading>
                <Image
                    src={not_available_image.src}
                    alt={localize(not_available_image.alt)}
                    className={styles.image_logo}
                />

                <Typography.Heading
                    as="h3"
                    size={'large'}
                    textcolor={'black'}
                    align="center"
                    lg={{ pt: '40x', pb: '20x' }}
                    padding_block="20x"
                    className={styles.sub_header}
                >
                    <Localize translate_text={info_items.sub_header} />
                </Typography.Heading>
                <FlexBox.Item pb="36x" md={{ pb: '23x' }}>
                    <LinkButton.Primary url={button_link.url} hero>
                        <Localize translate_text={button_link.text} />
                    </LinkButton.Primary>
                </FlexBox.Item>
            </FlexBox.Box>
        </Container.Fluid>
    )
}

export default NotFoundContainer
