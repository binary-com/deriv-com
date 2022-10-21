import React from 'react'
import styled from 'styled-components'
import { scope_content } from './static/_scope_content'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
// icons
import TickIcon from 'images/svg/bug-bounty/tick.svg'
import XIcon from 'images/svg/bug-bounty/x_icon.svg'

const Card = styled.div`
    background-color: var(--color-white);
    width: 100%;
    box-shadow: 0 4px 8px rgba(14, 14, 14, 0.1);
    border-radius: 8px;
    margin-left: 2.4rem;
    padding: 2.4rem;

    &:first-child {
        margin-left: 0;
    }

    @media ${device.tabletL} {
        margin-left: 0;
        margin-top: 24px;
        padding: 16px 24px;
    }
`

const IconWrap = styled.img`
    margin-right: 0.8rem;
    margin-top: 0.5rem;
`

const Scope = () => {
    return (
        <SectionContainer background="grey-30">
            <Container direction="column">
                <Header as="h2" type="heading-2" align="center" mb="0.8rem">
                    {localize('Scope')}
                </Header>
                <Header weight="normal" type="paragraph-1" max_width="79.2rem" align="center">
                    {localize(
                        'Only Deriv assets are covered in this program. If you discover bugs on third-party apps, please report them to the respective owners. You may submit bug reports related to the following aspects of our business:',
                    )}
                </Header>

                <Flex tabletL={{ mt: '0', fd: 'column' }} mt="4rem">
                    {scope_content.map((list, idx) => {
                        const tick_icon = list.list_icon === 'tick'
                        return (
                            <Card key={idx}>
                                <Header as="h3" type="subtitle-2" color="black-3">
                                    {list.title}
                                </Header>
                                <Header type="paragraph-1" color="black-3" weight="normal" as="p">
                                    {list.description}
                                </Header>

                                {list.check_list.map((item, index) => {
                                    return (
                                        <Flex
                                            height="auto"
                                            mt="1.6rem"
                                            ai="flex-start"
                                            jc="flex-start"
                                            key={index}
                                        >
                                            <IconWrap src={tick_icon ? TickIcon : XIcon} />
                                            <div>
                                                <Header as="p" type="paragraph-2" weight="normal">
                                                    {item.content}
                                                </Header>

                                                {item.description && (
                                                    <Header as="p" type="small" weight="normal">
                                                        {item.description}
                                                    </Header>
                                                )}
                                            </div>
                                        </Flex>
                                    )
                                })}
                            </Card>
                        )
                    })}
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default Scope
