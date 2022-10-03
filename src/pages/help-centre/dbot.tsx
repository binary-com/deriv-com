import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, StyledText, ExternalLink } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import device from 'themes/device'
// Images
import ClearStatImage from 'images/common/help-centre/dbot-clear-stat.png'
import AreYouSureImage from 'images/common/help-centre/dbot-are-you-sure.png'
import LossesImage from 'images/common/help-centre/dbot-losses.png'
import VariablesImage from 'images/common/help-centre/dbot-variables.png'
import LogicBlockImage from 'images/common/help-centre/dbot-logic-block.png'
import UpdateCurrentPlImage from 'images/common/help-centre/dbot-update-currentPL.png'
import BlockMenuImage from 'images/common/help-centre/dbot-block-menu.png'
import BlockMenuSearchBarImage from 'images/common/help-centre/dbot-block-menu-search-bar.png'

const ImageWrapper = styled.div`
    display: flex;
    padding: 2.4rem 0;
    @media ${device.laptopL} {
        width: auto;
    }
    @media ${device.mobileL} {
        & > img {
            max-width: 100% !important;
        }
    }
`

const Th = styled.th`
    vertical-align: middle;
    padding: 1.6rem 2rem;
    border: 1px solid var(--color-grey-7);

    :first-child {
        p {
            text-align: center;
        }
    }
`

const Thead = styled.thead`
    font-size: var(--text-size-s);
    font-weight: bold;
    text-align: left;
    border: 1px solid var(--color-grey-7);
`

const Td = styled.td`
    text-align: left;
    width: 100%;
    max-width: 48.6rem;
    display: inline-block;
    padding: 1.6rem;
`
const Tr = styled.tr`
    border: 1px solid var(--color-grey-7);
`
const StyledTable = styled.table<ArticleProps>`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: ${(props) => (props.has_note ? '2.4rem' : 0)};
`
const StyledLink = styled(ExternalLink)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const WhatIsDBot = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "DBot is a web-based strategy builder for trading digital options. It’s a platform where you can build your own trading bot using drag-and-drop 'blocks'.",
            )}
        </Text>
    </ArticleWrapper>
)

const FindBlocks = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.6rem">{localize('Follow these steps:')}</Text>
        <Text mb="0.6rem">
            <Localize
                translate_text="1. Go to <0>Bot Builder</0>."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text text-indent="30px">
            <Localize
                translate_text={
                    "2. Under the <0>Blocks menu</0>, you'll see a list of categories. Blocks are grouped within these categories. Choose the block you want and drag them to the workspace."
                }
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={BlockMenuImage}
                alt={localize('Get Started')}
                style={{ width: '60rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            {localize(
                '3. You can also search for the blocks you want using the search bar above the categories.',
            )}
        </Text>
        <ImageWrapper>
            <img
                src={BlockMenuSearchBarImage}
                alt={localize('Get Started')}
                style={{ width: '60rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="For more info, <0>check out this blog post</0> on the basics of building a trading bot."
                components={[
                    <StyledLink
                        to="/academy/blog/posts/how-to-build-a-basic-trading-bot-with-dbot/"
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const RemoveBlocks = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text={
                    'Click on the block you want to remove and press <0>Delete</0> on your keyboard.'
                }
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const CreateVariables = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <StyledList listStyle="decimal" paddingLeft="2rem">
            <StyledListItem marginTop="0">
                <Localize
                    translate_text={
                        'Under the <0>Blocks</0> menu, go to <0>Utility > Variables.</0>'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="0.8rem">
                <Localize
                    translate_text="Enter a name for your variable, and hit <0>Create</0>. New blocks containing your new variable will appear below."
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="0.8rem">
                {localize('Choose the block you want and drag it to the workspace.')}
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const PreBuilt = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text width="110%">
            <Localize
                translate_text={
                    "Yes, you can get started with a pre-built bot using the <0>Quick strategy</0> feature. You’ll find some of the most popular trading strategies here: Martingale, D'Alembert, and Oscar's Grind. Grind. Just select the strategy, enter your trade parameters, and your bot will be created for you. You can always tweak the parameters later."
                }
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)
const QuickStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4" width="65%">
            {text}
        </StyledHeader>
        <Text max-width="110%">
            {localize(
                "A quick strategy is a ready-made strategy that you can use in DBot. There are 3 quick strategies you can choose from: Martingale, D'Alembert, and Oscar's Grind.",
            )}
        </Text>
        <Text mt="4rem">
            <strong>{localize('Using a quick strategy')}</strong>
        </Text>
        <StyledList listStyle="decimal" paddingLeft="2.5rem">
            <StyledListItem marginTop="1.8rem">
                <Localize
                    translate_text={'Go to Quick strategy and select the strategy you want.'}
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                {localize('Select the asset and trade type.')}
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={'Set your trade parameters and hit <0>Create</0>.'}
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={
                        'Once the blocks are loaded onto the workspace, tweak the parameters if you want, or hit <0>Run</0> to start trading'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={
                        'Hit <0>Save</0> to download your bot. You can choose to download your bot to your device or your Google Drive.'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const SaveStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text max-width="110%">
            <Localize
                translate_text={
                    'In <0>Bot</0> Builder, hit <0>Save</0> on the toolbar at the top to download your bot. Give your bot a name, and choose to download your bot to your device or Google Drive. Your bot will be downloaded as an XML file.'
                }
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const ImportStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text max-width="88%">
            {localize(
                'Just drag the XML file from your computer onto the workspace, and your bot will be loaded accordingly. Alternatively, you can hit Import in Bot Builder, and choose to import your bot from your computer or from your Google Drive.',
            )}
        </Text>
        <Text mt="4rem">
            <strong>{localize('Importing from your computer')}</strong>
        </Text>
        <StyledList listStyle="decimal" paddingLeft="2.3rem">
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={
                        'After hitting <0>Import</0>, select <0>Local</0> and click <0>Continue</0>.'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={'Select your XML file and hit <0>Open</0>.'}
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                {localize('Your bot will be loaded accordingly.')}
            </StyledListItem>
        </StyledList>

        <Text mt="2rem">
            <strong>{localize('Import from your Google Drive')}</strong>
        </Text>

        <StyledList listStyle="decimal" paddingLeft="2.3rem">
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={
                        'After hitting <0>Import</0>, select <0>Google Drive</0> and click <0>Continue</0>.'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={'Select your XML file and hit <0>Select</0>.'}
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                {localize('Your bot will be loaded accordingly.')}
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const ResetWorkspace = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text={
                    'In <0>Bot Builder</0>, hit <0>Reset</0> on the toolbar at the top. This will clear the workspace. Please note that any unsaved changes will be lost.'
                }
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const TransactionLog = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mt="1.4rem">
            <Localize
                translate_text={'1. Hit <0>Reset</0> at the bottom of stats panel.'}
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={ClearStatImage}
                alt={localize('Clear stat')}
                loading="lazy"
                style={{ width: '60rem' }}
            />
        </ImageWrapper>
        <Text mt="1.4rem">
            <Localize
                translate_text={'2. Hit <0>OK</0> to confirm.'}
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={AreYouSureImage}
                alt={localize('Are you sure?')}
                loading="lazy"
                style={{ width: '60rem' }}
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const ControlLosses = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'There are several ways to control your losses with DBot. Here’s a simple example of how you can implement loss control in your strategy:',
            )}
        </Text>

        <ImageWrapper>
            <img
                src={LossesImage}
                alt={localize('Control loss')}
                loading="lazy"
                width="61.2rem"
                style={{ width: '100%', maxWidth: '61.2rem' }}
            />
        </ImageWrapper>
        <Text mb="2.4rem">{localize('1. Create the following variables:')}</Text>
        <StyledTable>
            <Thead>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('currentPL')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            <Localize
                                translate_text={
                                    'Use this variable to store the cumulative profit or loss while your bot is running. Set the initial value to <0>0</0>.'
                                }
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('currentStake')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            {localize(
                                'Use this variable to store the stake amount used in the last contract. You can assign any amount you want, but it must be a positive number.',
                            )}
                        </Text>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('maximumLoss')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            {localize(
                                'Use this variable to store your maximum loss limit. You can assign any amount you want, but it must be a positive number.',
                            )}
                        </Text>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('tradeAgain')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            <Localize
                                translate_text={
                                    'Use this variable to stop trading when your loss limit is reached. Set the initial value to <0>true</0>.'
                                }
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </Td>
                </Tr>
            </Thead>
        </StyledTable>
        <ImageWrapper>
            <img
                src={VariablesImage}
                alt={localize('Variables')}
                loading="lazy"
                width="32.4rem"
                style={{ width: '32.4rem' }}
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="2. Use a logic block to check if <0>currentPL</0> exceeds <0>maximumLoss</0>. If it does, set <0>tradeAgain</0> to false' to prevent the bot from running another cycle."
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={LogicBlockImage}
                alt={localize('Logic block')}
                loading="lazy"
                width="32.4rem"
                style={{ width: '32.4rem' }}
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="3. Update <0>currentPL</0> with the profit from the last contract. If the last contract was lost, the value of <0>currentPL</0> will be negative."
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={UpdateCurrentPlImage}
                alt={localize('Update currentPL')}
                width="32.4rem"
                style={{ width: '32.4rem' }}
                loading="lazy"
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const MultipleTabs = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text width="110%">
            <Localize
                translate_text={
                    'Yes, you can. However, there are limits on your account, such as maximum number of open positions and maximum aggregate payouts on open positions. So, just keep these limits in mind when opening multiple positions. You can find more info about these limits at <0>Settings > Account limits</0>.'
                }
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const Cryptocurrencies = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text width="110%">
            <Localize
                translate_text={"No, we don't offer cryptocurrencies on DBot."}
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const SellTradingBots = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text max-width="120%">
            {localize(
                "No, we don't. However, you'll find quick strategies on DBot that'll help you build your own trading bot for free.",
            )}
        </Text>
    </ArticleWrapper>
)

const DbotAvailableCountries = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="We offer our services in all countries, except for the ones <0>mentioned in our terms and conditions</0>."
                components={[
                    <StyledLink
                        to="/tnc/general-terms.pdf"
                        target="_blank"
                        external
                        style={{ fontWeight: 'Unset' }}
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const CloseBrowser = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('No, DBot will stop running when your web browser is closed.')}</Text>
    </ArticleWrapper>
)
const PopularSTrategies = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text max-width="115%">
            {localize(
                "Three of the most commonly used strategies in automated trading are Martingale, D'Alembert, and Oscar's Grind — you can find them already-made and waiting for you in DBot.",
            )}
        </Text>
    </ArticleWrapper>
)

const BuildTradingBot = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="<0>Watch this video</0> to learn how to build a trading bot on DBot. Also, <1>check out this blog post</1> on building a trading bot."
                components={[
                    <StyledLink
                        to="https://www.youtube.com/watch?v=QdI5zCkO4Gk&t=203s"
                        target="_blank"
                        external
                        style={{ fontWeight: 'Unset' }}
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to="/academy/blog/posts/how-to-build-a-basic-trading-bot-with-dbot/"
                        target="_blank"
                        external
                        style={{ fontWeight: 'Unset' }}
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DBotArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header="DBot"
                title={localize('Help centre | Frequently asked questions | DBot | Deriv')}
                description={localize('Frequently asked questions - DBot')}
                is_mounted={is_mounted}
            >
                <WhatIsDBot text={localize('What is DBot?')} label="what-is-dbot" />
                <FindBlocks
                    text={localize('How do I find the blocks I need?')}
                    label="find-blocks"
                    is_mounted={is_mounted}
                />
                <RemoveBlocks
                    text={localize('How do I remove blocks from the workspace?')}
                    label="remove-blocks"
                    is_mounted={is_mounted}
                />
                <CreateVariables
                    text={localize('How do I create variables?')}
                    label="create-variables"
                    is_mounted={is_mounted}
                />
                <PreBuilt
                    text={localize('Do you offer pre-built trading bots on DBot?')}
                    label="pre-built"
                    is_mounted={is_mounted}
                />
                <QuickStrategy
                    text={localize('What is quick strategy?')}
                    label="quick-strategy"
                    is_mounted={is_mounted}
                />
                <SaveStrategy
                    text={localize('How do I save my strategy?')}
                    label="save-strategy"
                    is_mounted={is_mounted}
                />
                <ImportStrategy
                    text={localize('How do I import my own trading bot into DBot?')}
                    label="import-strategy"
                    is_mounted={is_mounted}
                />
                <ResetWorkspace
                    text={localize('How do I reset the workspace?')}
                    label="reset-workspace"
                    is_mounted={is_mounted}
                />
                <TransactionLog
                    text={localize('How do I clear my transaction log?')}
                    label="clear-transaction-log"
                    is_mounted={is_mounted}
                />
                <ControlLosses
                    text={localize('How do I control my losses with DBot?')}
                    label="control-loss"
                    is_mounted={is_mounted}
                />
                <MultipleTabs
                    text={localize('Can I run DBot on multiple tabs in my web browser?')}
                    label="multiple-tabs"
                    is_mounted={is_mounted}
                />
                <Cryptocurrencies
                    text={localize('Can I trade cryptocurrencies on DBot?')}
                    label="cryptocurrencies"
                    is_mounted={is_mounted}
                />
                <SellTradingBots
                    text={localize('Do you sell trading bots?')}
                    label="sell_trading_bots"
                    is_mounted={is_mounted}
                />
                <DbotAvailableCountries
                    text={localize('In which countries is DBot available?')}
                    label="Countires_offering_bot"
                    is_mounted={is_mounted}
                />
                <CloseBrowser
                    text={localize('If I close my web browser, will DBot continue to run?')}
                    label="close_browser"
                    is_mounted={is_mounted}
                />
                <PopularSTrategies
                    text={localize('What are the most popular strategies for automated trading?')}
                    label="popular_strategies"
                    is_mounted={is_mounted}
                />
                <BuildTradingBot
                    text={localize('How do I build a trading bot?')}
                    label="build_trading_bot"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DBotArticle)
