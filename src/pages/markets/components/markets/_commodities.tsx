import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import commodities from '../../static/content/_commodities'
import { commodities_cfds } from '../../static/content/_cfds'
import { commodities_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { Localize, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type CommoditiesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const Commodities = ({ simple_step_content }: CommoditiesProps) => {
    const { is_eu } = useRegion()
    simple_step_content[1].text = (
        <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
    )

    return (
        <>
            {is_eu ? (
                <AvailableTrades
                    CFDs={<CFDs market_content={commodities_cfds} />}
                    display_title={
                        <Localize translate_text="Commodity trades available on Deriv" />
                    }
                />
            ) : (
                <AvailableTrades
                    CFDs={<CFDs market_content={commodities_cfds} />}
                    DigitalOptions={
                        <DigitalOptions
                            market_name={localize('commodities')}
                            options_list={commodities_options}
                        />
                    }
                    display_title={
                        <Localize translate_text="Commodity trades available on Deriv" />
                    }
                />
            )}
            <Flex.Box
                direction="col"
                container="fluid"
                justify="center"
                align="center"
                pb="10x"
                md={{ pb: '40x', mb: '20x' }}
            >
                <Typography.Paragraph size="medium" mb="10x" textcolor="black" align="center">
                    <Localize translate_text="_t_Want to know more about CFD trading conditions for the instruments we offer?_t_" />
                </Typography.Paragraph>
                <LinkButton.Primary
                    font_family="UBUNTU"
                    size="medium"
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
                header={<Localize translate_text="Why trade commodities on Deriv" />}
            >
                {commodities.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={
                            <img width="48px" height="48px" src={content.src} alt={content.alt} />
                        }
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading commodities on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="commodities" />
        </>
    )
}

export default Commodities
