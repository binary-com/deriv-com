import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text, LinkText, LiveChatLinkText } from 'components/elements'
import { Localize } from 'components/localization'
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

export const Affiliates = () => {
    return (
        <Wrapper padding="40px 0">
            <CardContainer>
                <Item>
                    <Header as="h3" type="section-title">
                        <Localize translate_text="Business Partnership" />
                    </Header>
                    <TextWrapper>
                        <Text m="0.8rem 0">
                            <Localize translate_text="Questions about becoming our affiliates or other business collaboration opportunities? " />
                        </Text>
        <LiveChatLinkText text="_t_Contact us via live chat_t_" />
                    </TextWrapper>
                </Item>
            </CardContainer>
        </Wrapper>
    )
}

export default Affiliates
