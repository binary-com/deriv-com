import React from 'react'
import * as style from '../deriv-ctrader.module.scss'
import { selling_points } from './data'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

const Numbers = () => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            className={style.number_box}
            margin_block={'20x'}
        >
            <FlexBox.Box
                direction={'col'}
                align={'center'}
                md={{ direction: 'row', justify: 'between' }}
            >
                {selling_points.map((item) => (
                    <FlexBox.Item basis={'3-12'} key={item.title} pb={'12x'}>
                        <Typography.Heading align={'center'} md={{ mb: '4x' }}>
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
                <FlexBox.Box direction={'col'} className={style.item_description}>
                    <Typography.Heading align={'center'}>
                        <Localize translate_text={'_t_What is Deriv cTrader_t_'} />
                    </Typography.Heading>
                    <Typography.Paragraph align={'center'} mt={'8x'} weight={'normal'}>
                        <Localize
                            translate_text={
                                '_t_Deriv cTrader is an easy-to-use, multi-asset CFD trading platform packed with a wide range of features on a user-friendly interface. Enhance your trading experience further with features such as limit order and stop order, chart trading, and custom indicators. With Deriv cTrader, take advantage of our deep liquidity to execute trades quickly and efficiently._t_'
                            }
                        />
                    </Typography.Paragraph>
                </FlexBox.Box>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default Numbers
