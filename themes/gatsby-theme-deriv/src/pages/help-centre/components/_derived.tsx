import React from 'react'
import TranslationComponents from './_translation-components'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

const Derived = () => {
    const { region } = useBuildVariant()
    const first_paragraph = region === "eu"
        ? '_t_Derived in the EU consist of synthetic indices whose prices are generated using a random number generator with no influence from real-world events._t_'
        : '_t_Derived indices consist of asset prices generated from real-world and simulated markets and indices, with little to no influence from real-world events. You can trade from a variety of derived indices, including synthetic indices, derived FX indices, and baskets._t_'

    return (
        <>
            <Header size="16px" weight="normal" mt="1.7rem">
                <Localize translate_text={first_paragraph} />
            </Header>

            <Header size="16px" weight="normal" mt="1.7rem">
                {region === "eu" && (
                    <Localize translate_text="_t_Available 24/7 with varying levels of volatility, our synthetic indices are priced based on algorithms that are audited for fairness by an independent third party._t_" />
                )}
                {region === "row" && (
                    <Localize
                        translate_text="_t_Available 24/7, our synthetic indices emulate price movements of real-world markets with varying levels of volatility. As they aren't based on actual underlying assets, they are unaffected by real-world market events. The pricing of our synthetic indices is backed by algorithms that are audited for fairness by an independent third party. Read <0>this article</0> to learn more about trading synthetic indices on Deriv._t_"
                        components={TranslationComponents([
                            {
                                key: 0,
                                type: 'internal_link',
                                to: 'https://blog.deriv.com/blog/posts/an-introduction-to-synthetic-indices-trading/',
                            },
                        ])}
                    />
                )}
            </Header>
            {region === "row" && (
                <>
                    <Header size="16px" weight="normal" mt="1.7rem">
                        <Localize translate_text="_t_Derived FX indices are simulated assets with prices derived from the price movements of real major forex pairs. Our algorithms track real-world currency prices and dampen fluctuations caused by news events and market sentiment. Plus, you can choose to trade them at the volatility you prefer._t_" />
                    </Header>

                    <Header size="16px" weight="normal" mt="1.7rem">
                        <Localize translate_text="_t_With basket indices, you can trade your favourite asset against a basket of five major global currencies, each weighted by 20%._t_" />
                    </Header>

                    <Header size="16px" weight="normal" mt="1.7rem">
                        <Localize
                            translate_text="_t_Due to regulatory requirements, derived indices are unavailable in some countries. Refer to ‘Product offering’ in our <0>terms of use</0> for more info._t_"
                            components={TranslationComponents([
                                {
                                    key: 0,
                                    type: 'link',
                                    to: '/tnc/general-terms.pdf',
                                },
                            ])}
                        />
                    </Header>
                </>
            )}
        </>
    )
}

export default Derived
