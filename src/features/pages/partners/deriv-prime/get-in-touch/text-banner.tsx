import React from 'react'
import { text_banner_container } from './get-in-touch.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const GetInTouchTextBanner = () => {
    return (
        <Flex.Box justify="center" align="center" className={text_banner_container} basis="7-12">
            <Flex.Box
                align="center"
                padding="15x"
                md={{ padding_inline: '30x', padding_block: '15x' }}
            >
                <Typography.Heading size="large" textcolor="white">
                    <Localize
                        translate_text={
                            '_t_Connect with us if you want to know more about our trailblazing liquidity solution_t_'
                        }
                    />
                </Typography.Heading>
            </Flex.Box>
        </Flex.Box>
    )
}

export default GetInTouchTextBanner
