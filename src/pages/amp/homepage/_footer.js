import React from 'react'
import styled from 'styled-components'
import { Container, Box, Flex } from 'components/containers'
import { Text, LinkText, LocalizedLinkText } from 'components/elements'
import Warning from 'images/svg/warning.svg'
import { Localize, localize } from 'components/localization'

const Direction = styled(Container)`
    flex-direction: column;
`

const FooterWrapper = styled.footer`
    background: var(--color-grey-6);
    padding: 4rem 0;
    border-top: 1px solid var(--color-red);
`

const White = styled(Text)`
    color: white;
`

const Footer = () => (
    <>
        <FooterWrapper>
            <Direction jc="flex-start" ai="flex-start">
                <Text>
                    <Localize
                        translate_text="In the EU, financial products are offered by Binary Investments (Europe) Ltd, W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>view licence</0>)."
                        components={[
                            <LinkText
                                key={0}
                                href="/WS-Binary-Investments-Europe-Limited.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                weight="bold"
                            />,
                        ]}
                    />
                </Text>
                <Text>
                    <Localize
                        translate_text="Outside the EU, financial products are offered by Binary (SVG) LLC, Hinds Building, Kingstown, St Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, P.O. Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (<0>view licence</0>); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (<1>view licence</1>); and Binary (FX) Ltd, Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (<2>view licence</2>)."
                        components={[
                            <LinkText
                                key={0}
                                href="/Vanuatu-Financial-Services-Commission.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                weight="bold"
                            />,
                            <LinkText
                                key={1}
                                href="/DBVI_license.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                weight="bold"
                            />,
                            <LinkText
                                key={2}
                                href="/Labuan-license.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                weight="bold"
                            />,
                        ]}
                    />
                </Text>
                <Text mt="0.8rem">
                    {localize(
                        "This website's services are not made available in certain countries including the USA, Canada, Hong Kong, and Japan, or to persons below 18.",
                    )}
                </Text>
                <Flex mt="2.4rem" mb="0.8rem" ai="center" jc="flex-start">
                    <Warning width="14" height="14" />
                    <Text ml="0.8rem" weight="bold">
                        {localize('Risk warning')}
                    </Text>
                </Flex>
                <Text>
                    <Localize
                        translate_text="The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading.</0>"
                        components={[
                            <LocalizedLinkText
                                key={0}
                                to="/responsible-trading/"
                                target="_blank"
                                rel="noopener noreferrer"
                                weight="bold"
                            />,
                        ]}
                    />
                </Text>
            </Direction>
        </FooterWrapper>
        <Box bg="var(--color-black)">
            <Container jc="flex-start" p="1.6rem 0">
                <White>&copy; {localize('2020 Deriv | All rights reserved')}</White>
            </Container>
        </Box>
    </>
)

export default Footer
