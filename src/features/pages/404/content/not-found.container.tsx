import React from 'react'
import { button_link, info_items, not_available_image } from './data'
import { button, container, info } from './not-found.module.scss'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import Container from 'features/components/atoms/container'
import { Localize } from 'components/localization'

const NotFoundContainer = () => {
    return (
        <Container.Fixed className={container}>
            <Image
                src={not_available_image.src}
                alt={not_available_image.alt}
                width="96"
                height="96"
            />

            <Container.Fixed className={info}>
                <Typography.Heading as="h3" size={'xxl'}>
                    <Localize translate_text={info_items.header} />
                </Typography.Heading>
                <Typography.Heading as="h4" size={'xs'}>
                    <Localize translate_text={info_items.sub_header} />
                </Typography.Heading>
                <Button.Primary className={button}>
                    <Link url={button_link.url}>
                        <Localize translate_text={button_link.text} />
                    </Link>
                </Button.Primary>
            </Container.Fixed>
        </Container.Fixed>
    )
}

export default NotFoundContainer
