import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Card, CardProps } from './_partner-card'
import { Table, TRAP, TRAPREVERSE, TC } from './_table'
import { DMT5Props } from './_deriv-ib-programme'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { Accordion, AccordionItem, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { Button, LinkButton } from 'components/form'
import { affiliate_signup_url } from 'common/constants'
import device from 'themes/device'

const query = graphql`
    query {
        dmt5_synthetic_calculator: file(
            relativePath: { eq: "affiliate-and-ib/dmt5-synthetic-calculator.png" }
        ) {
            ...fadeIn
        }
        dmt5_financial_calculator_one: file(
            relativePath: { eq: "affiliate-and-ib/dmt5-financial-calculator-one.png" }
        ) {
            ...fadeIn
        }
        dmt5_financial_calculator_two: file(
            relativePath: { eq: "affiliate-and-ib/dmt5-financial-calculator-two.png" }
        ) {
            ...fadeIn
        }
        dmt5_financial_calculator_three: file(
            relativePath: { eq: "affiliate-and-ib/dmt5-financial-calculator-three.png" }
        ) {
            ...fadeIn
        }
        dmt5_financial_stp_calculator_one: file(
            relativePath: { eq: "affiliate-and-ib/dmt5-financial-stp-calculator-one.png" }
        ) {
            ...fadeIn
        }
        dmt5_financial_stp_calculator_two: file(
            relativePath: { eq: "affiliate-and-ib/dmt5-financial-stp-calculator-two.png" }
        ) {
            ...fadeIn
        }
    }
`

const StyledCard = styled(Card)`
    min-height: 42.6rem;
    height: 100%;
    position: relative;
    border-radius: 8px;
    min-width: calc((100% - 4.8rem) / 3);
    width: calc((100% - 4.8rem) / 3);
    justify-content: flex-start;

    :nth-child(2) {
        margin: 1.6rem 2.4rem 0;

        @media ${device.tabletL} {
            margin: 24px 0;
        }
    }

    @media ${device.laptopM} {
        min-width: 38.4rem;
        width: 38.4rem;
    }

    @media ${device.tabletL} {
        min-width: 328px;
        padding: 16px 16px 0;
        ${(props) => props.tabletHeight && 'height:' + props.tabletHeight};

        :first-child {
            margin: 24px 0 0;
        }
    }

    @media ${device.mobileM} {
        min-width: unset;
        width: 100%;
        ${(props) => props.mobileHeight && 'height:' + props.mobileHeight};
    }
`
const CardWrappers = styled(Flex)`
    min-height: 33.8rem;
    flex-direction: column;
    justify-content: flex-start;

    @media ${device.tabletL} {
        min-height: unset;
    }
`

const CardText = styled(Text)`
    margin-bottom: 16px;
`
const AccordionWrapper = styled.div`
    max-width: 996px;
    width: fit-content;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @media ${device.tabletL} {
        div {
            margin: 0;
        }
    }
`
const TableWrapper = styled(Table)`
    margin: 0 auto 1.6rem;
    grid-auto-rows: 1fr;
    grid-template-columns: 60% 40%;
`
const StyledTrap = styled(TRAP)<CardProps>`
    height: ${(props) => (props.headerHeight ? props.headerHeight : '')};
    background-color: var(--color-grey-39);
    padding: 1.1rem 0.8rem;
    min-height: 72px;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledText = styled(Text)`
    text-align: center;
`
const HowItsCalculate = styled.div`
    display: flex;
    width: auto;
    margin: 0 -25px;
    padding: 16px 0;
    justify-content: center;
    border-top: 1px solid var(--color-grey-21);

    @media ${device.tabletL} {
        margin: 0 -16px;
    }
`

// calculated page
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 2.4rem 0;

    button:last-child {
        margin-left: 1.6rem;
    }
    @media ${device.tabletL} {
        justify-content: center;
    }
`
const StyledLinkButton = styled(LinkButton)`
    height: 40px;

    @media ${device.tabletL} {
        padding: 1.5rem 1.6rem;
        height: 40px;
        white-space: nowrap;
        font-size: 12px;
    }

    @media ${device.mobileL} {
        font-size: 10px;
    }
`
const BackButton = styled(Button)`
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
    height: 40px;
    padding: 0 1.6rem;
    margin-right: 0.8rem;
`

const DMT5Cards = ({ data }: DMT5Props) => {
    const dataImages = useStaticQuery(query)

    const parent_style = {
        marginBottom: '0',
    }
    const item_style = {
        padding: '0',
        background: 'var(--color-white)',
        borderRadius: '0 0 8px 8px',
        marginBottom: '16px',
    }
    const header_style = {
        padding: '14px 0 17px',
        borderRadius: '0',
        height: 'auto',
        boxShadow: 'unset',
        borderBottom: 'unset',
        borderTop: '1px solid var(--color-grey-21)',
    }
    const StyledButton = styled(Button)`
        border: none;
        color: var(--color-red);
        font-size: 14px;
        background: none;

        @media ${device.tabletL} {
            font-size: 14px;
        }
    `

    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }

    return (
        <StyledCard padding="2.4rem 2.4rem 0">
            {!is_calculated ? (
                <>
                    <CardWrappers>
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            {data.name}
                        </Header>
                        <CardText>{data.description}</CardText>
                        <AccordionWrapper>
                            <Accordion has_single_state>
                                {data.type.map((value, index) => (
                                    <AccordionItem
                                        key={index}
                                        header={value.title}
                                        parent_style={parent_style}
                                        style={item_style}
                                        header_style={header_style}
                                        plus
                                    >
                                        <TableWrapper grid_col_number={2} is_balance={true}>
                                            {value.assets.map((listedValue, indexValue) => (
                                                <TC
                                                    grid_area={'area' + indexValue}
                                                    key={indexValue}
                                                >
                                                    <StyledTrap
                                                        isTitle="true"
                                                        headerHeight={value.headerHeight}
                                                    >
                                                        <StyledText size="14px" weight="bold">
                                                            {listedValue.title}
                                                        </StyledText>
                                                    </StyledTrap>
                                                    {listedValue.list.map((info, indexData) => (
                                                        <TRAPREVERSE
                                                            even={indexData % 2 ? 'true' : ''}
                                                            key={indexData}
                                                        >
                                                            <StyledText size="14px">
                                                                {info}
                                                            </StyledText>
                                                        </TRAPREVERSE>
                                                    ))}
                                                </TC>
                                            ))}
                                        </TableWrapper>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </AccordionWrapper>
                    </CardWrappers>
                    <HowItsCalculate>
                        <StyledButton flat onClick={toggleCalculated}>
                            {localize("How it's calculated")}
                        </StyledButton>
                    </HowItsCalculate>
                </>
            ) : (
                <>
                    {data.countDetails.map((valueCalc, indexCalc) => (
                        <Flex key={indexCalc} direction="column" ai="flex-start" height="auto">
                            <Header as="h4" type="sub-section-title" mb="0.8rem">
                                {valueCalc.title}
                            </Header>
                            {valueCalc.list.map((valueDetails) => (
                                <>
                                    <Text mb="0.8rem" size="1.4rem">
                                        {valueDetails.details}
                                    </Text>
                                    <Flex mb="1.6rem">
                                        <QueryImage
                                            data={dataImages[valueDetails.icon]}
                                            alt={valueDetails.iconAlt}
                                            width="100%"
                                        />
                                    </Flex>
                                </>
                            ))}
                            {valueCalc.notes.map((valueNotes) => (
                                <>
                                    <Header type="sub-paragraph" mb="0.8rem">
                                        {valueNotes.title}
                                    </Header>
                                    {valueNotes.desc.secondText ? (
                                        <>
                                            <Text mb="16px" size="1.4rem">
                                                {valueNotes.desc.firstText}
                                            </Text>
                                            <Text mb="0" size="1.4rem">
                                                {valueNotes.desc.secondText}
                                            </Text>
                                        </>
                                    ) : (
                                        <Text mb="0" size="1.4rem">
                                            {valueNotes.desc.firstText}
                                        </Text>
                                    )}
                                </>
                            ))}
                            <ButtonWrapper>
                                <BackButton tertiary onClick={toggleCalculated}>
                                    {localize('Back')}
                                </BackButton>
                                <StyledLinkButton
                                    id="dm-become-affiliate-signup"
                                    secondary
                                    to={affiliate_signup_url}
                                    external
                                    target="_blank"
                                    type="affiliate_sign_up"
                                >
                                    {localize('Become an affiliate')}
                                </StyledLinkButton>
                            </ButtonWrapper>
                        </Flex>
                    ))}
                </>
            )}
        </StyledCard>
    )
}

export default DMT5Cards
