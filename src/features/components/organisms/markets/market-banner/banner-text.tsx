import React from 'react'
import { HomepageBannerType } from './types'
import { item_box, text_description } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import useHandleSignup from 'components/hooks/use-handle-signup'

interface HomepageBannerProps {
    item: HomepageBannerType
}

const BannerText = ({ item }: HomepageBannerProps) => {
    const handleSignup = useHandleSignup()
    return (
        <Flex.Box
            direction="col"
            className={item_box}
            align="center"
            padding="8x"
            lg={{ align: 'start', justify: 'start', pt: '32x', padding: '0x' }}
        >
            <Typography.Heading as="h1" size="medium" pb="4x" pt="13x" align="center">
                <Localize translate_text={item.title} />
            </Typography.Heading>

            <Typography.Paragraph className={text_description} size="medium" pb="12x">
                <Localize translate_text={item.description} />
            </Typography.Paragraph>

            <Button.Primary
                type={'button'}
                aria-label="create free demo account"
                onClick={handleSignup}
                id="dm-hero-signup"
            >
                <Localize translate_text={'_t_Create free demo account_t_'} />
            </Button.Primary>
        </Flex.Box>
    )
}

export default BannerText
