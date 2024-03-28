import React from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, LinkText, Text } from 'components/elements/typography'
import { LinkButton } from 'components/form'
import { useLivechat } from 'components/hooks/use-livechat'
import { Localize } from 'components/localization'
import useAffiliateSignupLink from 'features/hooks/ab-testing/use-partners-signup-link'
import device from 'themes/device'

type RedButtonProps = {
    id?: string
}
const StyledSection = styled(SectionContainer)`
    background-color: var(--color-black-3);

    ${Container} {
        @media ${device.tabletL} {
            justify-content: center;
            flex-direction: column;

            div:last-child {
                margin-top: 3.2rem;
            }
        }

        ${Flex} {
            max-width: 58.8rem;
        }
    }
`

const RedButton = styled(LinkButton)<RedButtonProps>`
    border-radius: 4px;
    padding-top: 0.5rem;
    height: 32px;
    @media ${device.tabletL} {
        padding-top: 1rem;
        width: 100%;
    }
`

const PartnerCTA = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()
    const { affiliate_signup_link } = useAffiliateSignupLink()

    return (
        <StyledSection padding="4rem 0">
            <Container>
                <Flex direction="column" ai="center" jc="space-between">
                    <Header as="h4" type="sub-section-title" align="center" color="white">
                        <Localize translate_text="_t_Got more questions?_t_" />
                    </Header>
                    <Text align="center" color="white" mt="0.8rem">
                        <Localize translate_text="_t_The Deriv affiliate management team is here to help._t_" />
                    </Text>
                    <LinkText
                        color="red"
                        weight="bold"
                        mt="1rem"
                        size="var(--text-size-s)"
                        onClick={() => {
                            is_livechat_interactive && LC_API.open_chat_window()
                        }}
                    >
                        <Localize translate_text="_t_Contact us via live chat_t_" />
                    </LinkText>
                </Flex>
                <Flex direction="column" ai="center">
                    <Header as="h4" type="sub-section-title" align="center" color="white">
                        <Localize translate_text="_t_Enjoy generous commissions and all the other benefits of being a Deriv partner_t_" />
                    </Header>
                    <RedButton
                        id="dm-cta-affiliate-signup"
                        mt="2rem"
                        to={affiliate_signup_link}
                        external
                        target="_blank"
                        // type="affiliate_sign_up"
                        secondary
                    >
                        <Localize translate_text="_t_Sign up_t_" />
                    </RedButton>
                </Flex>
            </Container>
        </StyledSection>
    )
}

export default PartnerCTA
