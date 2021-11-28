import React from 'react'
import styled from 'styled-components'
import { scope_content } from './static/_scope_content'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'
import TickIcon from 'images/svg/security/tick.svg'
import XIcon from 'images/svg/security/x_icon.svg'
import device from 'themes/device'

const Subheadline = styled(Text)`
    @media ${device.tablet} {
        width: auto;
        font-size: 14px;
    }
`

const CardWrap = styled(Flex)`
    @media ${device.laptopM} {
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

    @media ${device.laptopM} {
        margin-left: 0;
        margin-top: 2.4rem;
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

const Scope = () => {
    return (
        <SectionContainer background="grey-30" padding="8rem 0">
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
                                <Text color="black-3">{localize(list.description)}</Text>

                                {list.check_list.map((item, idx) => {
                                    return (
                                        <ListWrap key={idx}>
                                            <IconWrap src={tick_icon ? TickIcon : XIcon} />
                                            <div>
                                                <Text size="14px">
                                                    <Localize
                                                        translate_text={item.content}
                                                        size="14px"
                                                        components={[
                                                            <Text
                                                                key={0}
                                                                as="span"
                                                                color="blue-9"
                                                            />,
                                                            <LocalizedLinkText
                                                                key={1}
                                                                to={item.link}
                                                                target="_blank"
                                                                color="blue-9"
                                                                size="14px"
                                                            />,
                                                            <LocalizedLinkText
                                                                key={2}
                                                                to={item.link_2}
                                                                target="_blank"
                                                                color="blue-9"
                                                                size="14px"
                                                            />,
                                                            <Text key={3} as="span" color="red" />,
                                                        ]}
                                                    />
                                                </Text>

                                                {item.description && (
                                                    <Text size="12px">
                                                        <Localize
                                                            translate_text={item.description}
                                                            components={[
                                                                <Text
                                                                    as="span"
                                                                    color="red"
                                                                    key={0}
                                                                />,
                                                            ]}
                                                        />
                                                    </Text>
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
