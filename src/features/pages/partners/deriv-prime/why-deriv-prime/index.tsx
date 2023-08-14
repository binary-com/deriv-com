import React from 'react'
import * as styles from './why-deriv-prime.module.scss'
import { card_data } from './data'
import { WithIntl, Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'

const WhyDerivPrime = () => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            padding_inline={'4x'}
            pt={'20x'}
            md={{ padding_inline: '0x', padding_block: '40x' }}
        >
            <FlexBox.Box
                direction={'col'}
                margin_block={'40x'}
                className={styles.container}
                md={{ justify: 'center', margin_block: '40x' }}
            >
                <Typography.Heading align={'center'} as="h2" className={styles.header}>
                    <Localize translate_text={'_t_Why choose Deriv Prime?_t_'} />
                </Typography.Heading>
                <FlexBox.Box
                    direction={'col'}
                    align={'center'}
                    wrap="wrap"
                    md={{ direction: 'row', justify: 'center', mt: '20x' }}
                >
                    {card_data.map((card) => {
                        return (
                            <FlexBox.Box
                                key={card.title}
                                className={styles.card}
                                direction={'col'}
                                justify={'start'}
                                align={'start'}
                                radius={'8x'}
                                padding={'8x'}
                                mt={'12x'}
                                md={{ padding: '12x', mr: '12x', mt: '0x' }}
                            >
                                <Typography.Paragraph
                                    size={'xlarge'}
                                    weight={'bold'}
                                    mb={'4x'}
                                    mt={'10x'}
                                    md={{ mt: '4x' }}
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
        </FlexBox.Box>
    )
}

export default WithIntl()(WhyDerivPrime)
