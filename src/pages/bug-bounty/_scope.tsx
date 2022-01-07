import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { scope_content } from './static/_scope_content'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// icons
import TickIcon from 'images/svg/bug-bounty/tick.svg'
import XIcon from 'images/svg/bug-bounty/x_icon.svg'

const Subheadline = styled(Text)`
    @media ${device.tabletL} {
        width: auto;
        font-size: 14px;
    }
`

const CardWrap = styled(Flex)`
    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 0;
    }
`

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
        margin-top: 2.4rem;
    }
`

const LinkText = styled(LocalizedLinkText)`
    font-size: 14px;

    @media ${device.tabletL} {
        font-size: 12px;
    }
`

const ListWrap = styled.div`
    display: flex;
    margin-top: 1.6rem;
    align-items: flex-start;
`

const IconWrap = styled.img`
    margin-right: 0.8rem;
    margin-top: 0.5rem;
`

const Scope = (): ReactElement => {
    return (
        <SectionContainer background="grey-30">
            <Container direction="column">
                <Header as="h2" type="heading-2" align="center" mb="0.8rem">
                    {localize('Scope')}
                </Header>
                <Subheadline width="79.2rem" align="center">
                    {localize(
                        'Only Deriv assets are covered in this program. If you discover bugs on third-party apps, please report them to the respective owners. You may submit bug reports related to the following aspects of our business:',
                    )}
                </Subheadline>

                <CardWrap mt="4rem">
                    {scope_content.map((list, idx) => {
                        const tick_icon = list.list_icon === 'tick'
                        return (
                            <Card key={idx}>
                                <Header as="h3" type="subtitle-2" color="black-3">
                                    {localize(list.title)}
                                </Header>
                                <Header type="paragraph-1" color="black-3" weight="normal" as="p">
                                    {localize(list.description)}
                                </Header>

                                {list.check_list.map((item, idx) => {
                                    return (
                                        <ListWrap key={idx}>
                                            <IconWrap src={tick_icon ? TickIcon : XIcon} />
                                            <div>
                                                <Header as="p" type="paragraph-2" weight="normal">
                                                    <Localize
                                                        translate_text={item.content}
                                                        components={[
                                                            <Text key={0} as="p" size="14px" />,
                                                            <LinkText
                                                                key={1}
                                                                to={item.link}
                                                                target="_blank"
                                                                color="blue-9"
                                                            />,
                                                            <LinkText
                                                                key={2}
                                                                to={item.link_2}
                                                                target="_blank"
                                                                color="blue-9"
                                                            />,
                                                            <Text
                                                                key={3}
                                                                as="span"
                                                                color="red"
                                                                size="14px"
                                                            />,
                                                        ]}
                                                    />
                                                </Header>

                                                {item.description && (
                                                    <Header as="p" type="small" weight="normal">
                                                        <Localize
                                                            translate_text={item.description}
                                                            components={[
                                                                <Header
                                                                    as="span"
                                                                    color="red"
                                                                    type="small"
                                                                    weight="normal"
                                                                    key={0}
                                                                />,
                                                            ]}
                                                        />
                                                    </Header>
                                                )}
                                            </div>
                                        </ListWrap>
                                    )
                                })}
                            </Card>
                        )
                    })}
                </CardWrap>
            </Container>
        </SectionContainer>
    )
}

export default Scope
