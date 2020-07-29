import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import InstallAntivirus from 'images/svg/install-latest-antivirus.svg'
import DifferentPassword from 'images/svg/diff-password.svg'
import PaymentMethod from 'images/svg/payment-method.svg'
import SecureBrowser from 'images/svg/secure-browser.svg'

const Ul = styled(Flex).attrs({ as: 'ul' })`
    width: 100%;
    flex-wrap: wrap;
`
const Li = styled(Flex).attrs({ as: 'li' })`
    max-width: 38.4rem;
    display: flex;
    margin: 2rem 1.2rem;

    @media ${device.mobileL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const ResponsiveBox = styled(Box)`
    ${Text} {
        max-width: 28.8rem;
        margin: auto;
    }
    @media ${device.mobileL} {
        margin-left: 0;
        margin-top: 1.6rem;

        ${Text} {
            max-width: 97%;
        }
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: var(--text-size-m);
    }
`

const SecureAccount = () => {
    return (
        <Box pt="8rem" pb="15rem" bg="rgba(245, 247, 250, 0.32)">
            <Container fd="column" ai="center">
                <StyledHeader size="var(--text-size-xl)" align="center" mb="2rem">
                    {localize('Securing your account')}
                </StyledHeader>
                <Ul jc="center" ai="center">
                    <Li>
                        <div>
                            <DifferentPassword width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text>
                                {localize(
                                    'Use strong and varied passwords for your Deriv.com account, email, online banking, e-wallets, etc. Make it as difficult as possible for anyone to guess your passwords.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <SecureBrowser width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text>
                                {localize(
                                    'Use a secure web browser such as Google Chrome and always ensure it’s up-to-date. Security patches are included in the software updates of your browser.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <PaymentMethod width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text>
                                {localize(
                                    'To prevent unauthorised usage of your account, don’t share your login details with anyone. Keep your username, passwords, and PINs secure.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <InstallAntivirus width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text>
                                {localize(
                                    'Install security apps such as antivirus and firewalls on your devices. Leading security apps are available in desktop and mobile versions.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                </Ul>
            </Container>
        </Box>
    )
}

export default SecureAccount
