import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { crypto_cfds } from '../../static/content/_cfds'
import { crypto_multiplier } from '../../static/content/_multipliers'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import { StyledBox } from '../../static/style/_markets-style'
import { localize, Localize } from 'components/localization'
import TightSpread from 'images/svg/markets/tight-spread-new.svg'
import CryptoPairs from 'images/svg/markets/crypto-pairs-new.svg'
import ZeroCommission from 'images/svg/markets/zero-commission-new.svg'
import LeverageBalance from 'images/svg/markets/leveragebalance.svg'
import useRegion from 'components/hooks/use-region'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { TMarket, TSimpleStepContent } from 'pages/markets/static/content/_types'
import { TSmartContent } from 'types/generics'
import useVisibleContent from 'components/hooks/use-visible-content'
import useBuildVariant from 'features/hooks/use-build-variant'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))

type CryptocurrenciesProps = {
    simple_step_content: TSimpleStepContent[]
}

type MarketConfig = {
    is_eu: boolean
}

type SmartMarketItem = TSmartContent<TMarket, MarketConfig>

const crypto_content: SmartMarketItem[] = [
    {
        id: 0,
        data: {
            src: LeverageBalance,
            text: '_t_1:100 leverage_t_',
            alt: '_t_1 to 100 leverage_t_',
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 1,
        data: {
            src: LeverageBalance,
            text: '_t_1:2 leverage_t_',
            alt: '_t_1 to 100 leverage_t_',
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 2,
        data: {
            src: TightSpread,
            text: '_t_Tight spreads_t_',
            alt: '_t_tight spreads_t_',
        },
    },
    {
        id: 3,
        data: {
            src: CryptoPairs,
            text: '_t_30+ crypto pairs_t_',
            alt: '_t_Crypto currency pairs_t_',
        },
    },
    {
        id: 4,
        data: {
            src: ZeroCommission,
            text: '_t_Zero commission_t_',
            alt: '_t_zero commission_t_',
        },
    },
]

const Cryptocurrencies = ({ simple_step_content }: CryptocurrenciesProps) => {
    const { region } = useBuildVariant()
    const { is_deriv_go } = usePlatformQueryParam()
    const visible_items = useVisibleContent({ content: crypto_content, config: { is_eu : region === 'eu' ? true : false } })

    return (
        <>
            <AvailableTrades
                CFDs={<CFDs market_content={crypto_cfds} />}
                Multipliers={<Multipliers market_content={crypto_multiplier} is_crypto />}
                display_title="_t_Cryptocurrency trades available on Deriv_t_"
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
            <FullWidthMultiColumn header="_t_Why trade cryptocurrencies on Deriv_t_">
                {visible_items.map((item) => (
                    <StyledBox
                        key={item.id}
                        text={item.data.text}
                        icon={
                            <img
                                width="48px"
                                height="48px"
                                src={item.data.src}
                                alt={localize(item.data.alt)}
                            />
                        }
                    ></StyledBox>
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header="_t_Start trading cryptocurrencies on Deriv in 3 simple steps_t_"
                content={simple_step_content}
                sign_up
            />
            {!is_deriv_go && <OtherMarketsSlider current_market="cryptocurrencies" />}
        </>
    )
}

export default Cryptocurrencies
