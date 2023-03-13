import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { SmallContainer, Grid, HowItWorksItem } from '../components/_style'
import SideTab from '../components/_tabs'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import DefinePosition from 'images/svg/trade-types/define-your-position.svg'
import SetOptionalParameters from 'images/svg/trade-types/set-optional-parameters.svg'
import PurchaseContract from 'images/svg/trade-types/purchase-your-contract.svg'
import useRegion from 'components/hooks/use-region'

const OptionGrid = styled(Grid)`
    grid-gap: 2.4rem;
`

const OptionItems = styled(Flex)`
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-bottom: 0.8rem;
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 28px;
    }
`

const StyledText = styled(Text)`
    font-weight: bold;
    margin-top: 1.8rem;
`

const StyledDtraderHeader = styled(Header)`
    margin-top: 3.2rem;

    @media ${device.tablet} {
        margin-top: 2rem;
    }
`

const StyledFirstMultiplierHeader = styled(Header)`
    @media ${device.tablet} {
        margin-top: 8rem;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tablet} {
        padding-top: 4rem;
    }
`

const HowOptionsWorks = () => {
    const { is_eu } = useRegion()

    return (
        <StyledSectionContainer padding="8rem 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <StyledHeader as="h2" size="4.8rem" mb="3.2rem">
                    {localize('How multipliers contracts work')}
                </StyledHeader>
                <OptionGrid>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <img src={DefinePosition} alt="Define your target" />
                            </div>
                            <StyledText>{localize('Define your position')}</StyledText>
                        </OptionItems>

                        <Text>
                            {localize(
                                'Select the market you want to trade and set other essential parameters including trade type, stake amount, and multiplier value.',
                            )}
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <img src={SetOptionalParameters} alt="Set parameters" />
                            </div>
                            <StyledText>{localize('Set optional parameters')}</StyledText>
                        </OptionItems>
                        <Text>
                            {localize(
                                'Define optional parameters that give you more control over your trading, including stop loss, take profit, and deal cancellation.',
                            )}
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <img src={PurchaseContract} alt="Buy your contract" />
                            </div>
                            <StyledText>{localize('Purchase your contract')}</StyledText>
                        </OptionItems>
                        <Text>
                            {localize(
                                'Purchase the contract if you are satisfied with the position you have defined.',
                            )}
                        </Text>
                    </HowItWorksItem>
                </OptionGrid>
                <StyledFirstMultiplierHeader as="h3" size="3.2rem" mt="4rem">
                    {localize('How to buy your first multipliers contract on Deriv Trader')}
                </StyledFirstMultiplierHeader>
                <Header as="h4" size="2.4rem" mb="2.4rem" mt="3.2rem">
                    {localize('Define your position')}
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="1. Market" />}
                        description={
                            <Localize translate_text="Choose an asset from the list of markets offered on Deriv." />
                        }
                    >
                        {is_eu ? (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-market-eu.png"
                                alt="Select market to trade"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-market.png"
                                alt="Select market to trade"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        )}
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="2. Trade type" />}
                        description={
                            <Localize translate_text="Choose ‘Multipliers’ from the list of trade types." />
                        }
                    >
                        {is_eu ? (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-trade-type-eu.png"
                                alt="Selecting multiplier"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-trade-type.png"
                                alt="Selecting multiplier"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        )}
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="3. Stake" />}
                        description={
                            <Localize translate_text="Enter the amount you wish to trade with." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-stake.png"
                            alt="Enter stake amount"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="4. Multiplier value" />}
                        description={
                            is_eu ? (
                                <Localize translate_text="Your profit or loss is multiplied by the multiplier value, which depending on the asset you trade, can be from 1 to 30. Your loss will never be more than your stake." />
                            ) : (
                                <Localize translate_text="Enter the multiplier value of your choice. Your profit or loss will be multiplied by this amount." />
                            )
                        }
                    >
                        {is_eu ? (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-value-eu.png"
                                alt="Enter multiplier value"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-value.png"
                                alt="Enter multiplier value"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        )}
                    </SideTab.Panel>
                </SideTab>
                <StyledDtraderHeader as="h4" size="2.4rem" mb="2.4rem" mt="3.2rem">
                    {localize('Set optional parameters for your trade')}
                </StyledDtraderHeader>
                <SideTab is_reverse>
                    <SideTab.Panel
                        label={<Localize translate_text="5. Take profit" />}
                        description={
                            <Localize translate_text="This feature allows you to set the level of profit that you are comfortable with when the market moves in your favour. Once the amount is reached, your position will be closed automatically and your earnings will be deposited into your Deriv account." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-take-profit.png"
                            alt="Set profit level"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="6. Stop loss" />}
                        description={
                            <Localize translate_text="This feature allows you to set the amount of loss you are willing to take in case the market moves against your position. Once the amount is reached, your contract will be closed automatically." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-stop-loss.png"
                            alt="Set stop loss"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="7. Deal cancellation" />}
                        description={
                            is_eu ? (
                                <Localize translate_text="This feature allows you to cancel your contract within one hour of buying it, without losing your stake amount. We charge a small non-refundable fee for this service. Deal cancellation isn't available for Crash and Boom indices or cryptocurrency pairs." />
                            ) : (
                                <Localize translate_text="This feature allows you to cancel your contract within one hour of buying it, without losing your stake amount. We charge a small non-refundable fee for this service." />
                            )
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-deal-cancellation.png"
                            alt="Set deal cancellation time"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                </SideTab>
                <StyledDtraderHeader as="h4" size="2.4rem" mb="2.4rem">
                    {localize('Purchase your contract')}
                </StyledDtraderHeader>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="8. Purchase your contract" />}
                        description={
                            <Localize translate_text="Once you are satisfied with the parameters that you have set, select either ‘Up’ or ‘Down’ to purchase your contract. Otherwise, continue to customise the parameters and place your order when you are satisfied with the conditions." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-purchase.png"
                            alt="Purchase the contract"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default HowOptionsWorks
