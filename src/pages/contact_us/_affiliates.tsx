import React from 'react'
import styled from 'styled-components'
import { TString } from 'types/generics'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text, LinkText } from 'components/elements'
import { Localize } from 'components/localization'
import { useLivechat } from 'components/hooks/use-livechat'
import device from 'themes/device'
// SVG

const Wrapper = styled(SectionContainer)`
    border-top: 1px solid var(--color-grey-2);
`

const CardContainer = styled(Container)`
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background: var(--color-white);
    position: relative;
    padding: 4rem 9.5rem;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 82px;
    width: 50vw;
    @media (max-width: 1444px) {
        flex-direction: column;
        padding: 4rem 2.4rem;
        width: 70vw;
    }
`

const Item = styled(Flex)`
    max-width: 38.4rem;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 1444px) {
        ${Text} {
            white-space: break-spaces;
        }
    }

    @media ${device.mobileL} {
        ${Header} {
            font-size: 24px;
        }
        ${Text} {
            font-size: 14px;
        }
        ${LinkText} {
            font-size: 14px;
        }
    }
`

const TextWrapper = styled(Text)`
    white-space: nowrap;
    text-align: left;
`
const header_text: TString = '_t_Business Partnership_t_'
const questions_text: TString =
    '_t_Questions about becoming our affiliates or other business collaboration opportunities? _t_'
const contact_us_text: TString = '_t_Contact us via live chat_t_'

export const Affiliates = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()

    return (
        <Wrapper padding="40px 0">
            <CardContainer>
                <Item>
                    <Header as="h3" type="section-title">
                        <Localize translate_text={header_text} />
                    </Header>
                    <TextWrapper>
                        <Text m="0.8rem 0">
                            <Localize translate_text={questions_text} />
                        </Text>
                        <LinkText
                            color="red"
                            size="var(--text-size-s)"
                            onClick={() => {
                                is_livechat_interactive && LC_API.open_chat_window()
                            }}
                        >
                            <Localize translate_text={contact_us_text} />
                        </LinkText>
                    </TextWrapper>
                </Item>
            </CardContainer>
        </Wrapper>
    )
}

export default Affiliates
