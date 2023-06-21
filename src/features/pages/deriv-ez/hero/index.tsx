import React from 'react'
import { hero_big_image, hero_button, hero_image, hero_wrapper } from '../deriv-ez.module.scss'
import { hero_images } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Button from 'features/components/atoms/button'
import Typography from 'features/components/atoms/typography'
import TradeHeroContainer from 'features/components/templates/hero-banners/trade'
import { Localize } from 'components/localization'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleGetTrading } from 'components/custom/utils'

const DerivEZHero = () => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    return (
        <TradeHeroContainer
            container={'fixed'}
            direction={'col-reverse'}
            justify={'center'}
            align={'center'}
            md={{ direction: 'row' }}
        >
            <FlexBox.Box container={'fluid'} justify={'center'} md={{ justify: 'start' }}>
                <FlexBox.Box
                    className={hero_wrapper}
                    direction={'col'}
                    ml={'8x'}
                    margin_block={'15x'}
                    md={{ ml: '0x' }}
                >
                    <FlexBox.Item className={hero_image} align_self="start">
                        <div className="visible-phone-and-tablet">{hero_images['mobile_logo']}</div>
                        <div className="visible-larger-than-tablet">{hero_images['logo']}</div>
                    </FlexBox.Item>
                    <Typography.Heading
                        size={'xlarge'}
                        color={'secondary'}
                        weight={'bold'}
                        align={'left'}
                        pt={'4x'}
                        mb={'12x'}
                        md={{ pt: '8x', mb: '20x' }}
                    >
                        <Localize translate_text="_t_An intuitive CFD trading platform for desktop and mobile_t_" />
                    </Typography.Heading>
                    {is_logged_in ? (
                        <Button.Primary
                            className={hero_button}
                            type={'button'}
                            onClick={handleGetTrading}
                        >
                            <Localize translate_text={'_t_Get trading_t_'} />
                        </Button.Primary>
                    ) : (
                        <Button.Primary
                            className={hero_button}
                            type={'button'}
                            onClick={handleSignup}
                        >
                            <Localize translate_text={'_t_Create free demo account_t_'} />
                        </Button.Primary>
                    )}
                </FlexBox.Box>
                <FlexBox.Item className={hero_big_image} align_self={'center'}>
                    <div className="visible-phone-and-tablet">{hero_images['hero_mobile']}</div>
                    <div className="visible-larger-than-tablet">{hero_images['hero']}</div>
                </FlexBox.Item>
            </FlexBox.Box>
        </TradeHeroContainer>
    )
}
export default DerivEZHero
