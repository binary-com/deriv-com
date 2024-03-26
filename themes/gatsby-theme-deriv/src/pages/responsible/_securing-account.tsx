import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import InstallAntivirus from 'images/svg/responsible/install-latest-antivirus.svg'
import DifferentPassword from 'images/svg/responsible/diff-password.svg'
import PaymentMethod from 'images/svg/responsible/payment-method.svg'
import SecureBrowser from 'images/svg/responsible/secure-browser.svg'

const Ul = styled(Flex).attrs({ as: 'ul' })`
    width: 100%;
    flex-wrap: wrap;
`
const Li = styled(Flex).attrs({ as: 'li' })`
    max-width: 38.4rem;
    display: flex;
    margin: 24px;

    @media ${device.laptopM} {
        max-width: 34rem;
    }
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        margin: 0 0 16px;
        max-width: 58.8rem;

        :last-child {
            margin: 0;
        }
    }
`
const ResponsiveBox = styled(Box)`
    width: 100%;

    @media ${device.tabletL} {
        margin-left: 0;
        margin-top: 1.6rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: var(--text-size-m);
    }
`

const SecureAccount = () => {
    return (
        <Box pt="8rem" pb="15rem" bg="rgba(245, 247, 250, 0.32)" tablet={{ pt: '40px' }}>
            <Container fd="column" ai="center" tablet={{ width: '100%', p: '0 16px' }}>
                <StyledHeader
                    size="var(--text-size-xl)"
                    align="center"
                    mb="2rem"
                    tablet={{ mb: '24px' }}
                >
                    <Localize translate_text="_t_Securing your account_t_" />
                </StyledHeader>
                <Ul jc="center" ai="flex-start">
                    <Li>
                        <div>
                            <img
                                src={DifferentPassword}
                                alt={localize('_t_Strong password_t_')}
                                width="64"
                                height="64"
                            />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text max_width="28.8rem" m="auto" tabletL={{ max_width: '100%' }}>
                                <Localize translate_text="_t_Use strong and varied passwords. Make them as difficult as possible for anyone to guess._t_" />
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img
                                src={SecureBrowser}
                                alt={localize('_t_Secured login details_t_')}
                                width="64"
                                height="64"
                            />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text max_width="28.8rem" m="auto" tabletL={{ max_width: '100%' }}>
                                <Localize translate_text="_t_Use a secure web browser such as Google Chrome. Always install the latest software updates because they include security patches._t_" />
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img
                                src={PaymentMethod}
                                alt={localize('_t_Secured web browser_t_')}
                                width="64"
                                height="64"
                            />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text max_width="28.8rem" m="auto" tabletL={{ max_width: '100%' }}>
                                <Localize
                                    translate_text="_t_Keep your login details secure and <0>enable two-factor authentication</0> to prevent unauthorised usage of your account._t_"
                                    components={[
                                        <LocalizedLinkText
                                            key={0}
                                            type="deriv_app"
                                            external
                                            rel="noopener noreferrer"
                                            to="/account/two-factor-authentication"
                                            color="red"
                                            size={14}
                                            has_no_end_slash={true}
                                        />,
                                    ]}
                                />
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img
                                src={InstallAntivirus}
                                alt={localize('_t_Antivirus_t_')}
                                width="64"
                                height="64"
                            />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Text max_width="28.8rem" m="auto" tabletL={{ max_width: '100%' }}>
                                <Localize translate_text="_t_Use antivirus and firewalls to further secure your devices._t_" />
                            </Text>
                        </ResponsiveBox>
                    </Li>
                </Ul>
            </Container>
        </Box>
    )
}

export default SecureAccount
