import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Button } from 'components/form'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import device from 'themes/device'
import { isBrowser } from 'common/utility'
import ContactUsIcon from 'images/svg/livechat-red.svg'

const DFYAWrapper = styled.section`
    background-color: var(--color-black-3);
`
const DFYASection = styled(Container)`
    padding: 3.5rem 0;
    justify-content: center;
    align-items: center;
    @media ${device.mobileL} {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        ${Button} {
            font-size: 14px;
            padding: 10px 16px;
        }
    }

    & > * {
        width: auto;
    }
`
const StyledIcon = styled(ContactUsIcon)`
    @media ${device.tabletL} {
        width: 48px;
        height: 48px;
        margin-right: 1.6rem;
    }
`
const MiddleText = styled(Text)`
    @media ${device.mobileL} {
        margin: 1.6rem 0;
        text-align: center;
    }
`

export const DidntFindYourAnswerBanner = () => {
    const LC_API = (isBrowser() && window.LC_API) || {}
    const [is_livechat_interactive, setLiveChatInteractive] = React.useState(false)

    React.useEffect(() => {
        if (isBrowser()) {
            window.scrollTo(0, 0)
            window.LiveChatWidget.on('ready', () => {
                setLiveChatInteractive(true)
            })
        }
    }, [])
    return (
        <DFYAWrapper>
            <DFYASection>
                <StyledIcon />
                <MiddleText size="var(--text-size-l)" color="white" m="0 2.4rem">
                    {localize('Didn’t find your answer? We can help.')}
                </MiddleText>
                {is_livechat_interactive && (
                    <Button
                        secondary="true"
                        onClick={() => {
                            LC_API.open_chat_window()
                        }}
                        weight="bold"
                        color="black"
                    >
                        {localize('Chat')}
                    </Button>
                )}
            </DFYASection>
        </DFYAWrapper>
    )
}
