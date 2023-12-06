import React from 'react'
import { Text } from '@deriv/quill-design'
import { FAQDataType } from '../../types'
import { FaqBox, FaqLink, FaqList } from '../../components'
import { Localize } from 'components/localization'

export const FAQContent: FAQDataType = {
    header: 'Forex FAQs',
    data: [
        {
            title: 'What are the benefits of forex trading?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_Some benefits of forex trading are:_t_" />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Tighter spreads:</0> The spreads in forex trading tend to
                            be lower than other asset classes. This means you can retain more
                            potential profits on winning trades._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Accessibility:</0> The forex market is open 24 hours a day,
                            5 days a week. This gives you the flexibility to trade at your
                            convenience._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Low capital requirements:</0> At Deriv, you can trade forex
                            with a minimum deposit of 5 USD._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Leverage:</0> Deriv offers leverages of up to 1:1000 on
                            forex trading. This higher leverage allows you to control larger
                            positions with less capital. However, it also amplifies your risk._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </FaqBox>
                ),
            ],
        },

        {
            title: 'How do I read a forex quote?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize
                                translate_text="_t_Forex quotes are expressed as a pair of currencies, with the first being
                            the base currency and the second being the quote currency._t_"
                            />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_Forex brokers always show two prices for a currency pair: the bid price and the ask price. The bid price is the highest price a buyer is willing to pay for the base currency. In contrast, the asking price is the lowest price a seller is willing to accept for the base currency. The asking price will always be higher than the bid price._t_" />
                        </Text>

                        <Text>
                            <Localize translate_text="_t_For more information, read our blog article on forex pips_t_" />
                            <FaqLink href="https://app.deriv.com/account/self-exclusion">
                                <Localize translate_text="_t_forex currency pairs._t_" />
                            </FaqLink>
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'What is a pip?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_A pip is a unit of measurement used in forex trading used to represent the smallest possible change in the price of a currency pair. It is typically represented by the fourth decimal place in the currency quote. However, for forex pairs involving the Japanese yen, a pip is represented by the second decimal place. The value of a pip varies depending on the size of the trade and the currency pair being traded._t_" />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_For example, if the EUR/USD exchange rate is 1.18, a one-pip move equals 0.0001. This means that if the exchange rate increases by one pip, the new exchange rate would be 1.1801._t_" />
                        </Text>

                        <Text>
                            <Localize translate_text="_t_Most brokers quote currency pairs with 3-5 decimal places, so it is important to be aware of how many decimal places your broker uses when calculating your profits and losses._t_" />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_For more information, read our blog article on_t_" />
                            <FaqLink href="https://app.deriv.com/account/self-exclusion">
                                <Localize translate_text="_t_forex pips._t_" />
                            </FaqLink>
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'What is the difference between forex spot trading and CFD trading?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_Forex spot trading is the buying and selling of currencies at the current market price, with delivery and settlement occurring on the spot. This means that you own the currencies you are trading._t_" />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_On the other hand, CFD trading is a form of derivative trading that allows you to speculate on the price movements of an underlying asset, such as a currency pair, without owning the asset. This is done by entering into a contract with a broker to exchange the difference in the asset's price between when you open the contract and when you close it. CFDs offer more flexibility with the ability to short-sell and allow for trading with leverage, which can amplify both potential gains and losses._t_" />
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'What are the costs associated with trading CFD forex pairs?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_Forex trading costs include:_t_" />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Spread cost:</0> The spread is the difference between the bid and ask price, which is the cost of placing a trade._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Swap fees:</0> Swap fees are charged for holding positions overnight. This is to account for interest rate differentials between the two currencies and the cost of funding the position overnight._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>Commission:</0> The commission is sometimes charged separately from the spread, especially for raw spread accounts.You can find Deriv's spread cost and swap fees in the FX pairs trading conditions table above in this page._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'What is the difference between major pairs, minor pairs, and exotic pairs in forex trading?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_Major currency pairs in forex trading are the most popular and liquid pairs, involving the US dollar (USD) and other major currencies such as the euro (EUR), British pound (GBP), Japanese yen (JPY), Swiss franc (CHF), Canadian dollar (CAD), and Australian dollar (AUD)._t_" />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_Minor currency pairs, also known as cross-currency pairs, typically do not include the USD and are traded less often. Some examples of minor currency pairs include the EUR/GBP, GBP/JPY, and EUR/CHF._t_" />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_Exotic currency pairs involve the combination of a major currency with the currency of a developing or emerging economy. Some examples of exotic currency pairs include the USD/SGD (US dollar/Singapore dollar) and USD/TRY (US dollar/Turkish lira)._t_" />
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'What factors affect exchange rates?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_The major factors that impact forex rates include:_t_" />
                        </Text>
                        <FaqList
                            data={[
                                <Text key={'Interest rates'}>
                                    <Localize translate_text="_t_Interest rates_t_" />
                                </Text>,
                                <Text key={'Inflation rates'}>
                                    <Localize translate_text="_t_Inflation rates_t_" />
                                </Text>,
                                <Text key={'Geopolitical events'}>
                                    <Localize translate_text="_t_Geopolitical events_t_" />
                                </Text>,
                                <Text key={'Economic indicators'}>
                                    <Localize translate_text="_t_Economic indicators (such as GDP, employment data, and consumer sentiment)_t_" />
                                </Text>,
                                <Text key={'Political stability'}>
                                    <Localize translate_text="_t_Political stability_t_" />
                                </Text>,
                                <Text key={'Central bank actions'}>
                                    <Localize translate_text="_t_Central bank actions_t_" />
                                </Text>,
                                <Text key={'Market sentiment'}>
                                    <Localize translate_text="_t_Market sentiment_t_" />
                                </Text>,
                                <Text key={'Global trade patterns'}>
                                    <Localize translate_text="_t_Global trade patterns_t_" />
                                </Text>,
                            ]}
                        />
                        <Text>
                            <Localize translate_text="_t_The interplay of these factors can lead to exchange rates fluctuations._t_" />
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'How can I stay updated with the latest news and events that affect the forex market?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_To stay informed about the latest news and events that affect the forex market, you can use a variety of sources, including:_t_" />
                        </Text>
                        <FaqList
                            data={[
                                <Text key={'Financial news websites'}>
                                    <Localize translate_text="_t_Financial news websites_t_" />
                                </Text>,
                                <Text key={'Dedicated forex news portals'}>
                                    <Localize translate_text="_t_Dedicated forex news portals_t_" />
                                </Text>,
                                <Text key={'Forex economic calendars'}>
                                    <Localize translate_text="_t_Forex economic calendars_t_" />
                                </Text>,
                                <Text key={'Central bank announcements'}>
                                    <Localize translate_text="_t_Central bank announcements_t_" />
                                </Text>,
                                <Text key={'Government reports'}>
                                    <Localize translate_text="_t_Government reports_t_" />
                                </Text>,
                                <Text
                                    key={
                                        'Market analysis from reputable forex brokers and financial institutions'
                                    }
                                >
                                    <Localize translate_text="_t_Market analysis from reputable forex brokers and financial institutions_t_" />
                                </Text>,
                            ]}
                        />
                        <Text>
                            <Localize translate_text="_t_Social media platforms and trading forums can also provide valuable insights, but it is important to verify information from credible sources._t_" />
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'How can I stay updated with the latest news and events that affect the forex market?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_You can use fundamental analysis and technical analysis to analyse the price trends of forex pairs._t_" />
                        </Text>
                        <Text bold>
                            <Localize translate_text="_t_Fundamental analysis:_t_" />
                        </Text>
                        <FaqList
                            data={[
                                <Text key={'Track economic indicators'}>
                                    <Localize translate_text="_t_Track economic indicators and monetary policies, such as interest rates, inflation, unemployment, and GDP growth, to understand how they can affect currency prices and market trends._t_" />
                                </Text>,
                                <Text key={'Follow geopolitical developments'}>
                                    <Localize translate_text="_t_Follow geopolitical developments in key economies, such as trade wars, political instability, and natural disasters, to identify potential risks and opportunities._t_" />
                                </Text>,
                                <Text key={'Watch for news events'}>
                                    <Localize translate_text="_t_Watch for news events impacting currency volatility, such as central bank meetings, economic data releases, and major political announcements, to develop trading strategies that take into account these events._t_" />
                                </Text>,
                            ]}
                        />
                        <Text bold>
                            <Localize translate_text="_t_Technical analysis:_t_" />
                        </Text>
                        <FaqList
                            data={[
                                <Text key={'Identify support and resistance levels'}>
                                    <Localize translate_text="_t_Identify support and resistance levels on price charts, which are areas where buyers and sellers are more likely to cluster, to identify potential trading opportunities and develop trading strategies that take into account these levels._t_" />
                                </Text>,
                                <Text key={'Spot trends and pattern'}>
                                    <Localize translate_text="_t_Spot trends and pattern formations using technical indicators, such as moving averages, MACD, and RSI, to identify market trends and develop trading strategies that take advantage of these trends._t_" />
                                </Text>,
                                <Text key={'Use chart patterns'}>
                                    <Localize translate_text="_t_Use chart patterns, candlestick patterns, and other trading tools to identify potential trading opportunities and develop trading strategies that take into account these patterns._t_" />
                                </Text>,
                                <Text key={'Backtest trading'}>
                                    <Localize translate_text="_t_Backtest trading strategies using historical price data to see how they would have performed in the past, to identify trading strategies that have a good chance of success in the future._t_" />
                                </Text>,
                            ]}
                        />
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'How do I practise forex trading before going live?',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_There are several ways to practise forex trading before using with real money:_t_" />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>1. Educate yourself</0>
                            <br>Before you start trading, it's crucial to understand the forex market, trading strategies, risk management, and technical and fundamental analysis. Deriv Academy offers a comprehensive forex and MT5 course that covers a wide range of topics, starting from the fundamentals and progressing to advanced content._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_In addition to structured courses, the_t_" />
                            <FaqLink href="">
                                <Localize translate_text="_t_Deriv blog_t_" />
                            </FaqLink>

                            <Localize translate_text="_t_contains numerous articles on various topics such as risk management, technical analysis, and other essential aspects of forex trading._t_" />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>2. Test your trading strategies on a demo account</0>
                                <br>A demo account provides a risk-free environment to practise trading with virtual funds. It mirrors live market conditions, allowing you to execute trades, test strategies, and make informed decisions like live trading._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize
                                translate_text="_t_<0>3. Analyse your results</0>
                                <br>Once you have been practising on a demo account for a while, it is essential to analyse your results. This will help you to identify your strengths and weaknesses as a trader. You can also use this information to improve your trading strategies._t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text>
                            <Localize translate_text="_t_Once you are comfortable trading with a demo account, start trading with real money. But remember to start small and continue to deal with discipline._t_" />
                        </Text>
                    </FaqBox>
                ),
            ],
        },
        {
            title: 'How do I create a trade strategy and trading plan',

            answers: [
                () => (
                    <FaqBox>
                        <Text>
                            <Localize translate_text="_t_A forex trading plan is a detailed guide that helps you trade currency pairs with discipline and focus. A successful trading plan requires:_t_" />
                        </Text>
                        <FaqList
                            variant="none"
                            data={[
                                <Text key={'Set clear goals'}>
                                    <Localize translate_text="_t_1. Set clear goals that are aligned with your financial objectives, risk tolerance, and available resources._t_" />
                                </Text>,
                                <Text key={'Choose a trading style'}>
                                    <Localize translate_text="_t_2. Choose a trading style (e.g., scalping or swing trading) and timeframe that suits you best._t_" />
                                </Text>,
                                <Text key={'_t_Analyse fundamental and technical analysis'}>
                                    <Localize translate_text="_t_3. Analyse the market using fundamental and technical analysis to identify entry and exit points._t_" />
                                </Text>,
                                <Text key={'Use risk management tools'}>
                                    <Localize translate_text="_t_4. Use risk management tools such as stop losses and position sizing to protect your capital._t_" />
                                </Text>,
                                <Text key={'Review your trading plan'}>
                                    <Localize translate_text="_t_5. Review your trading plan regularly to make sure it is still effective in changing market conditions._t_" />
                                </Text>,
                            ]}
                        />
                        <Text>
                            <Localize translate_text="_t_For more information, read our Blog article on_t_" />
                            <FaqLink href="">
                                <Localize translate_text="_t_forex risk management trading strategies._t_" />
                            </FaqLink>
                        </Text>
                    </FaqBox>
                ),
            ],
        },
    ],
}
