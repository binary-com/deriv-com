import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { basket_indices_content, basket_indices_content_eu } from '../../static/content/_basket'
import { StyledBox } from '../../static/style/_markets-style'
import { basket_cfds } from '../../static/content/_cfds'
import { basket_multiplier } from '../../static/content/_multipliers'
import { basket_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { TradeDetails } from '../sections/_trade-details'
import PageNotFound from 'features/pages/404'
import { Localize, localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { TSimpleStepContent } from 'pages/markets/static/content/_types'
import useBuildVariant from 'features/hooks/use-build-variant'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))

type BasketIndicesProps = {
    simple_step_content: TSimpleStepContent[]
}

const BasketIndices = ({ simple_step_content }: BasketIndicesProps) => {
    const { region } = useBuildVariant()
    return (
        <>
            {region === 'row' && (
                <>
                    <TradeDetails description="_t_Trade your favourite currency against a basket of major currencies and benefit from reduced risk and volatility._t_" />
                    <AvailableTrades
                        CFDs={<CFDs market_content={basket_cfds} />}
                        DigitalOptions={
                            <DigitalOptions
                                market_type="basket-indices"
                                market_name="basket indices"
                                options_list={basket_options}
                            />
                        }
                        Multipliers={<Multipliers market_content={basket_multiplier} />}
                        display_title="_t_Basket indices trades available on Deriv_t_"
                    />
                    <Flex.Box
                        direction="col"
                        container="fluid"
                        justify="center"
                        align="center"
                        pb="10x"
                        md={{ pb: '40x', mb: '20x' }}
                    >
                        <Typography.Paragraph mb="10x" textcolor="black" align="center">
                            <Localize translate_text="_t_Want to know more about CFD trading conditions for the instruments we offer?_t_" />
                        </Typography.Paragraph>
                        <LinkButton.Primary
                            font_family="UBUNTU"
                            aria-label="check trading specs"
                            url={{
                                type: 'internal',
                                to: '/trading-specification',
                            }}
                        >
                            <Localize translate_text="_t_Check trading specs_t_" />
                        </LinkButton.Primary>
                    </Flex.Box>
                    <FullWidthMultiColumn header="_t_Why trade basket indices on Deriv_t_">
                        {(region === 'row' ? basket_indices_content : basket_indices_content_eu).map(
                            ({ alt, src, text }) => (
                                <StyledBox
                                    key={text}
                                    text={text}
                                    icon={
                                        <img
                                            width="48px"
                                            height="48px"
                                            src={src}
                                            alt={localize(alt)}
                                        />
                                    }
                                />
                            ),
                        )}
                    </FullWidthMultiColumn>
                    <SimpleSteps
                        header="_t_Start trading basket indices on Deriv in 3 simple steps_t_"
                        content={simple_step_content}
                        sign_up
                    />
                    <OtherMarketsSlider current_market="synthetic" />
                </>
            )}
            {region === 'eu' && <PageNotFound region={region}/>}
        </>
    )
}

export default BasketIndices
