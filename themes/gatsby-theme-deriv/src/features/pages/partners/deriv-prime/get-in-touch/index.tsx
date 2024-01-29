import React from 'react'
import ContactForm from './contact-form'
import { get_in_touch_container, banner_container, container_box } from './get-in-touch.module.scss'
import GetInTouchTextBanner from './text-banner'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const GetInTouchBanner = () => {
    return (
        <Container.Fixed
            pt="20x"
            md={{ padding_block: '30x', margin_block: '30x' }}
            id="getintouch"
            className={container_box}
        >
            <Flex.Box bgcolor="primary" className={banner_container}>
                <Flex.Box
                    direction={'col-reverse'}
                    className={get_in_touch_container}
                    bgcolor="brand"
                    align="stretch"
                    md={{
                        direction: 'row',
                    }}
                >
                    <ContactForm />
                    <GetInTouchTextBanner />
                </Flex.Box>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default GetInTouchBanner
