import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as style from '../deriv-ez.module.scss'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

type CardType = {
    icon?: React.ReactElement
    title?: TString
    subtitle?: TString
}

const card_data: CardType[] = [
    {
        title: '_t_Easy to start_t_',
        subtitle:
            '_t_Start trading CFDs in two easy steps — click to get an account, start trading. No need to remember another login ID and password._t_',
        icon: (
            <StaticImage
                src="../../images/svg/deriv-ez/easy-to-start.svg"
                alt="easy to start deriv ez"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={30}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade anytime you want, including weekends and holidays, on cryptocurrencies and our proprietary derived indices._t_',
        icon: (
            <StaticImage
                src="../../images/svg/dmt5/twenty-four-seven.svg"
                alt="24/7 trading"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={30}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        title: '_t_All your favourite assets, one platform_t_',
        subtitle:
            '_t_Access over 150 assets in multiple markets simultaneously on one platform._t_',
        icon: (
            <StaticImage
                src="../../images/svg/deriv-ez/favourite-assets.svg"
                alt="favourite assets"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={30}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
]

const WhyTradeDerivEZ = () => {
    return (
        <FlexBox.Box
            direction={'col'}
            margin_block={'20x'}
            margin_inline={'8x'}
            md={{ justify: 'center', margin_block: '40x' }}
        >
            <Typography.Heading align={'center'}>
                <Localize translate_text={'_t_Why trade with Deriv EZ_t_'} />
            </Typography.Heading>
            <FlexBox.Box
                direction={'col'}
                align={'center'}
                mt={'4x'}
                md={{ direction: 'row', justify: 'center', mt: '20x' }}
            >
                {card_data.map((card) => {
                    return (
                        <FlexBox.Box
                            key={card.title}
                            style={{
                                boxShadow:
                                    '0px 12px 16px -4px rgba(14, 14, 14, 0.08), 0px 4px 6px -2px rgba(14, 14, 14, 0.03)',
                            }}
                            className={style.styled_card}
                            direction={'col'}
                            justify={'start'}
                            radius={'8x'}
                            padding={'8x'}
                            mt={'12x'}
                            md={{ padding: '12x', mr: '12x' }}
                        >
                            <div>{card.icon}</div>
                            <Typography.Paragraph
                                size={'xlarge'}
                                weight={'bold'}
                                mb={'4x'}
                                mt={'10x'}
                                md={{ mt: '14x' }}
                            >
                                <Localize translate_text={card.title} />
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                <Localize translate_text={card.subtitle} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                    )
                })}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default WhyTradeDerivEZ
