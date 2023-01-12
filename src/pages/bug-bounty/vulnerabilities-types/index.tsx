import React from 'react'
import styled from 'styled-components'
import Hero from '../_hero'
import { vulnerability_types_content } from '../static/_vulnerabilities-types-content'
import { localize, WithIntl, Localize } from 'components/localization'
import Layout from 'components/layout/layout'
import { Container, Flex, SEO } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

interface CardItemProps {
    second_item?: boolean
}

const StyledContainer = styled(Container)`
    width: 79.2rem;
    padding: 80px 0;

    @media ${device.tablet} {
        width: auto;
        padding: 40px 16px;
    }
`

const CardWrap = styled.div`
    min-width: 446px;
    border-radius: 4px;
    background-color: var(--color-grey-30);
    margin-top: 16px;
    padding: 8px 0;
    display: inline-flex;

    @media ${device.laptop} {
        min-width: unset;
    }
`

const CardItem = styled.div<CardItemProps>`
    border-left: ${({ second_item }) => (second_item ? 'solid 1px var(--color-grey-6)' : 0)};
    border-right: ${({ second_item }) => (second_item ? 'solid 1px var(--color-grey-6)' : 0)};
    padding: 0 24px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 0 8px;
    }
`

const IconWrap = styled.img`
    width: 32px;
    height: 32px;
`

const StyledUl = styled.ul`
    list-style-type: disc;
    margin-left: 15px;
`

const StyledLi = styled.li`
    margin-top: 8px;
    color: var(--color-black-3);
    line-height: 24px;
    font-size: 16px;

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 20px;
    }
`

const VulnerabilitiesTypes = () => (
    <Layout type="security">
        <SEO
            title={localize('Types of vulnerabilities')}
            description={localize('Types of vulnerabilities')}
        />
        <Hero />

        <StyledContainer direction="column" align="start">
            <Header type="heading-2" align="center">
                {localize('Types of vulnerabilities')}
            </Header>
            <div>
                {vulnerability_types_content.map(
                    ({
                        id,
                        icon,
                        title,
                        profit_condition,
                        profit_table,
                        description,
                        examples,
                        profit,
                    }) => {
                        return (
                            <React.Fragment key={id}>
                                <Flex mt="40px" ai="center">
                                    <IconWrap src={icon} />
                                    <Header as="h2" type="subtitle-1" ml="8px">
                                        <Localize translate_text={title} />
                                    </Header>
                                </Flex>
                                <CardWrap>
                                    {profit ? (
                                        <CardItem>
                                            <Header as="p" type="paragraph-1" weight="normal">
                                                <Localize
                                                    translate_text={profit.text}
                                                    components={profit.components}
                                                />
                                            </Header>
                                        </CardItem>
                                    ) : (
                                        profit_table.map(({ id, title, content }) => (
                                            <CardItem second_item={id === 1} key={id}>
                                                <Header type="small" weight="normal">
                                                    <Localize translate_text={title} />
                                                </Header>
                                                <Header type="paragraph-2" mt="4px">
                                                    {typeof content === 'object' ? (
                                                        <Localize
                                                            translate_text={content.text}
                                                            components={content.components}
                                                        />
                                                    ) : (
                                                        <Localize translate_text={content} />
                                                    )}
                                                </Header>
                                            </CardItem>
                                        ))
                                    )}
                                </CardWrap>
                                {profit_condition && (
                                    <Header as="p" type="paragraph-2" mt="8px" weight="normal">
                                        <Localize
                                            translate_text={profit_condition.text}
                                            components={profit_condition.components}
                                        />
                                    </Header>
                                )}
                                <Header as="p" type="paragraph-1" mt="16px" weight="normal">
                                    <Localize translate_text={description} />
                                </Header>
                                <StyledUl>
                                    {examples.map(({ id, text }) => (
                                        <StyledLi key={id}>
                                            <Localize translate_text={text} />
                                        </StyledLi>
                                    ))}
                                </StyledUl>
                            </React.Fragment>
                        )
                    },
                )}
            </div>
        </StyledContainer>
    </Layout>
)

export default WithIntl()(VulnerabilitiesTypes)
