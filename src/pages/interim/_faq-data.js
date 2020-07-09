import React from 'react'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Text, LocalizedLinkText } from 'components/elements'

const TextPrimary = styled(Text)`
    margin-top: 1.6rem;
`

const NeedSignUp = () => (
    <>
        <Text>
            <Localize
                translate_text="As an existing <0>Binary.com</0> user, you won’t need to sign up. You’ll be able to log in to <1>Deriv.com</1> with your <0>Binary.com</0> credentials and trade with what’s in your <0>Binary.com</0> account."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to="home"
                        is_binary_link
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                    />,
                    <LocalizedLinkText key={1} to="/" weight="bold" />,
                ]}
            />
        </Text>
    </>
)
const BinaryRemoved = () => (
    <>
        <Text>
            <Localize
                translate_text="<0>Binary.com</0> will continue to operate as is. You can continue to trade on <0>Binary.com</0>, but we will eventually move our focus on innovating and developing new features on <1>Deriv.com</1>."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to="home"
                        is_binary_link
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                    />,
                    <LocalizedLinkText key={1} to="/" weight="bold" />,
                ]}
            />
        </Text>
    </>
)

const DerivSecure = () => (
    <>
        <Text>
            <Localize
                translate_text="Our commitment to security and high ethical standards remain. You can be sure that your account is as secure on <1>Deriv.com</1> as it is on <0>Binary.com</0>."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to="home"
                        is_binary_link
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                    />,
                    <LocalizedLinkText key={1} to="/" weight="bold" />,
                ]}
            />
        </Text>
    </>
)

const OtherChanges = () => (
    <>
        <Text>
            <Localize
                translate_text="You see that <1>Deriv.com</1> has everything that <0>Binary.com</0> has, and more."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to="home"
                        is_binary_link
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                    />,
                    <LocalizedLinkText key={1} to="/" weight="bold" />,
                ]}
            />
        </Text>
        <TextPrimary>
            {localize(
                'Besides a new, modern look, we’re working on adding new products like Multiplier Options and a peer-to-peer cashier. We’re creating resources that will help you build your confidence in the world of online trading.',
            )}
        </TextPrimary>
        <TextPrimary>
            {localize(
                'We’re working on rebranding our social media profiles too, so keep an eye out for @Derivdotcom on Facebook, Instagram and Twitter.',
            )}
        </TextPrimary>
    </>
)

export { NeedSignUp, BinaryRemoved, DerivSecure, OtherChanges }
