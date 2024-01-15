import React from 'react'
import { copy_trading_header } from './styles.module.scss'
import { why_copy_trade } from './data'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import FlexBoxContainer from 'features/components/atoms/flex-box/box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const CopyTrading = () => {
    return (
        <Container.Fluid>
            <FlexBoxContainer
                direction="col"
                margin_block="15x"
                align="start"
                justify="start"
                margin_inline="10x"
                md={{
                    direction: 'row',
                    margin_block: '40x',
                    align: 'stretch',
                    justify: 'center',
                    gap: '40x',
                }}
            >
                <Flex.Box direction={'col'} align="start">
                    <Typography.Heading
                        size="small"
                        align="left"
                        mb={'12x'}
                        className={copy_trading_header}
                        font_family="IBM"
                    >
                        <Localize translate_text={'_t_Copy trading on Deriv cTrader_t_'} />
                    </Typography.Heading>
                    <Typography.Paragraph
                        size="large"
                        align="left"
                        mb={'20x'}
                        className={copy_trading_header}
                    >
                        <Localize
                            translate_text={
                                '_t_Copy trade on Deriv cTrader by subscribing to the strategies of established traders for a fee. Find a strategy you like, and apply it to your trades at the tap of a button._t_'
                            }
                        />
                    </Typography.Paragraph>
                </Flex.Box>

                <Flex.Box direction={'col'}>
                    <Typography.Paragraph
                        size="xxl"
                        align={'left'}
                        mb={'12x'}
                        font_family="IBM"
                        weight="bold"
                    >
                        <Localize translate_text={'_t_Why copy trade?_t_'} />
                    </Typography.Paragraph>
                    <Flex.Box direction={'col'} align={'start'} gap="8x">
                        {why_copy_trade.map((card) => {
                            return (
                                <Flex.Box
                                    key={card.title}
                                    direction={'row'}
                                    justify={'center'}
                                    align={'start'}
                                    mt={'12x'}
                                    gap="8x"
                                    md={{ gap: '12x' }}
                                >
                                    {card.icon}
                                    <Flex.Box direction="col">
                                        <Typography.Paragraph
                                            size={'large'}
                                            weight={'bold'}
                                            mb={'4x'}
                                        >
                                            <Localize translate_text={card.title} />
                                        </Typography.Paragraph>
                                        <Typography.Paragraph size="medium">
                                            <Localize translate_text={card.subtitle} />
                                        </Typography.Paragraph>
                                    </Flex.Box>
                                </Flex.Box>
                            )
                        })}
                    </Flex.Box>
                </Flex.Box>
            </FlexBoxContainer>
        </Container.Fluid>
    )
}

export default CopyTrading
