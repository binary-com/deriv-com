import React from 'react'
import * as styles from './meet-us-there.module.scss'
import { expo_cards } from './data'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import { Divider } from 'components/elements'

const MeetUsThere = () => {
    return (
        <>
            <Divider className="at-visible-larger-than-tablet" />
            <FlexBox.Box
                container={'fluid'}
                direction={'col'}
                padding_inline={'4x'}
                md={{ padding_inline: '0x' }}
            >
                <FlexBox.Box
                    direction={'col'}
                    mb="40x"
                    mt="30x"
                    md={{ justify: 'center', mb: '40x' }}
                >
                    <Typography.Heading as="h2" align={'center'}>
                        <Localize translate_text={'_t_Meet us there_t_'} />
                    </Typography.Heading>
                    <FlexBox.Box
                        direction={'col'}
                        align={'center'}
                        wrap="nowrap"
                        basis="1-3"
                        md={{ direction: 'row', gap: '12x', justify: 'center', mt: '7x' }}
                    >
                        {expo_cards.map((card) => {
                            return (
                                <Link
                                    style={{ textDecoration: 'none', flex: 1 }}
                                    url={{
                                        type: 'non-company',
                                        href: `${card.link}`,
                                        target: '_blank',
                                    }}
                                    key={card.id}
                                >
                                    <FlexBox.Box
                                        key={card.title}
                                        className={styles.styled_card}
                                        direction={'col'}
                                        justify={'start'}
                                        align={'start'}
                                        radius={'8x'}
                                        mt={'12x'}
                                        md={{ mt: '0x' }}
                                    >
                                        {card.image}
                                        <FlexBox.Box
                                            padding="8x"
                                            direction={'col'}
                                            md={{ padding: '12x' }}
                                        >
                                            <Typography.Paragraph
                                                size={'xlarge'}
                                                weight={'bold'}
                                                mb={'4x'}
                                                font_family="UBUNTU"
                                            >
                                                {card.title}
                                            </Typography.Paragraph>
                                            <Typography.Paragraph size="small">
                                                <Localize translate_text={card.date} />
                                            </Typography.Paragraph>
                                        </FlexBox.Box>
                                    </FlexBox.Box>
                                </Link>
                            )
                        })}
                    </FlexBox.Box>
                </FlexBox.Box>
            </FlexBox.Box>
        </>
    )
}

export default MeetUsThere
