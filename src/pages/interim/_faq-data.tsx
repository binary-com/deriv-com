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
                        id="dm-binary-login-link-3"
                        key={0}
                        external
                        to="home"
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                        type="binary"
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
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                        type="binary"
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
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                        type="binary"
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
                translate_text="You’ll see that <0>Deriv.com</0> has everything you get on <1>Binary.com</1>, and more."
                components={[
                    <LocalizedLinkText key={0} to="/" weight="bold" />,
                    <LocalizedLinkText
                        key={1}
                        external
                        to="home"
                        target="_blank"
                        rel="noopener noreferrer"
                        weight="bold"
                        type="binary"
                    />,
                ]}
            />
        </Text>
        <TextPrimary>
            {localize(
                "Besides an improved, modern look, we’ve introduced a new trade type called multipliers and a peer-to-peer payment facility (DP2P) that's available on our website and as a mobile app.  We’re also creating more resources to help you improve your trading skills.",
            )}
        </TextPrimary>
        <TextPrimary>
            {localize(
                'One more thing: We’ve rebranded our social media profiles to @Derivdotcom on Facebook, Instagram, and Twitter. Like and follow us to stay updated with our latest news.',
            )}
        </TextPrimary>
    </>
)

export { NeedSignUp, BinaryRemoved, DerivSecure, OtherChanges }
