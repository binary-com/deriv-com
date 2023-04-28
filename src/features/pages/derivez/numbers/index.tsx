import React from 'react'
import * as style from '../deriv-ez.module.scss'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'

type SellingPointsType = {
    title: TString
    subtitle: TString
}

const selling_points: SellingPointsType[] = [
    {
        title: '_t_150+_t_',
        subtitle: '_t_tradable assets_t_',
    },
    {
        title: '_t_All-in-one_t_',
        subtitle: '_t_Financial and derived assets_t_',
    },
    {
        title: '_t_24/7_t_',
        subtitle: '_t_trading_t_',
    },
]

const Numbers = () => {
    return (
        <FlexBox.Box direction={'col'} className={style.number_box} md={{ mt: '20x' }}>
            <FlexBox.Box
                direction={'col'}
                align={'center'}
                mb={'20x'}
                md={{ direction: 'row', justify: 'around' }}
            >
                {selling_points.map((item) => (
                    <FlexBox.Item basis={'1-3'} key={item.title}>
                        <Typography.Heading align={'center'}>
                            <Localize translate_text={item.title} />
                        </Typography.Heading>
                        <Typography.Paragraph align={'center'}>
                            <Localize translate_text={item.subtitle} />
                        </Typography.Paragraph>
                    </FlexBox.Item>
                ))}
            </FlexBox.Box>
            <FlexBox.Box
                justify={'center'}
                margin_block={'20x'}
                margin_inline={'8x'}
                md={{ margin_block: '40x' }}
            >
                <FlexBox.Box direction={'col'} md={{ basis: '2-3' }}>
                    <Typography.Heading align={'center'}>
                        <Localize translate_text={'_t_What is Deriv EZ_t_'} />
                    </Typography.Heading>
                    <Typography.Paragraph align={'center'} mt={'8x'} weight={'normal'}>
                        <Localize
                            translate_text={
                                '_t_Deriv EZ is a user-friendly CFDs trading platform that offers instant access to all your favourite assets._t_'
                            }
                        />
                    </Typography.Paragraph>
                    <Typography.Paragraph align={'center'} weight={'normal'}>
                        <Localize
                            translate_text={
                                '_t_There is no additional account ID or password to remember, so you can fully focus on your trading._t_'
                            }
                        />
                    </Typography.Paragraph>
                    <Typography.Paragraph align={'center'} weight={'normal'}>
                        <Localize
                            translate_text={
                                '_t_Trade on Deriv EZ and access a wide variety of assets in forex, stocks and indices, commodities, cryptocurrencies, and derived indices._t_'
                            }
                        />
                    </Typography.Paragraph>
                </FlexBox.Box>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default Numbers
