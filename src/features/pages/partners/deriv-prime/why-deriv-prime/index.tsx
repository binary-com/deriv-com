import React from 'react'
import * as styles from './why-deriv-prime.module.scss'
import { card_data } from './data'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import { Localize, WithIntl } from 'components/localization'

const WhyDerivPrime = () => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            padding_inline={'4x'}
            padding_block={'20x'}
            md={{ padding_inline: '0x', padding_block: '40x' }}
        >
            <FlexBox.Box direction={'col'} md={{ justify: 'center', margin_block: '20x' }}>
                <Typography.Heading
                    as="h2"
                    align={'center'}
                    mb="5x"
                    margin_inline="30x"
                    md={{ mb: '20x' }}
                >
                    <Localize translate_text={'_t_Why choose Deriv Prime?_t_'} />
                </Typography.Heading>
                <FlexBox.Box
                    direction={'col'}
                    align={'center'}
                    wrap="wrap"
                    gap="4x"
                    md={{ direction: 'row', justify: 'center', align: 'stretch' }}
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
                                md={{ padding: '12x' }}
                            >
                                <Typography.Heading
                                    size={'xs'}
                                    weight={'bold'}
                                    as="h3"
                                    mb={'4x'}
                                    mt={'5x'}
                                    font_family="UBUNTU"
                                    md={{ mt: '4x' }}
                                >
                                    <Localize translate_text={card.title} />
                                </Typography.Heading>
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
