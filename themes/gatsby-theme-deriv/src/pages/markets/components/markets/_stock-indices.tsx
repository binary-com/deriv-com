import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import stock_content from '../../static/content/_stock'
import { stock_cfds } from '../../static/content/_cfds'
import { stock_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { localize, Localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { TSimpleStepContent } from 'pages/markets/static/content/_types'
import useBuildVariant from 'features/hooks/use-build-variant'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))

type StockIndicesProps = {
    simple_step_content: TSimpleStepContent[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    const [is_mobile] = useBrowserResize()
    const { region } = useBuildVariant()

    simple_step_content[1].text = region === 'eu'
        ? '_t_Open a real account, make a deposit, and start trading stocks, stock indices, and other markets._t_'
        : '_t_Open a real account, make a deposit, and start trading stocks, indices and other markets._t_'

    return (
        <div>
            <AvailableTrades
                CFDs={<CFDs market_content={stock_cfds} />}
                DigitalOptions={
                    <DigitalOptions market_name="stocks & indices" options_list={stock_options} />
                }
                display_title="_t_Stocks & indices trades available on Deriv_t_"
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
            <FullWidthMultiColumn
                header="_t_Why trade stocks & indices on Deriv_t_"
                subtext_width="180px"
                header_width={is_mobile ? '186px' : '996px'}
            >
                {stock_content.map(({ alt, src, text }) => (
                    <StyledBox
                        key={text}
                        text={text}
                        icon={<img width="48px" height="48px" src={src} alt={localize(alt)} />}
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header="_t_Start trading stocks & indices on Deriv in 3 simple steps_t_"
                content={simple_step_content}
                sign_up
            />
            <OtherMarketsSlider current_market="stock" />
        </div>
    )
}

export default StockIndices
