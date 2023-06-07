import React from 'react'
import * as styles from '../deriv-ez.module.scss'
import { card_data } from './data'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'

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
                mb={'12x'}
                md={{ direction: 'row', justify: 'center', mt: '20x', shrink: '1' }}
            >
                {card_data.map((card) => {
                    return (
                        <FlexBox.Box
                            key={card.title}
                            className={styles.styled_card}
                            direction={'col'}
                            justify={'start'}
                            radius={'8x'}
                            padding={'8x'}
                            md={{ padding: '12x', mr: '12x' }}
                        >
                            {card.icon}
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
