import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Card, CardProps } from './_partner-card'
import { Table, TRAP, TRAPREVERSE, TC } from './_table'
import { DMT5Props } from './_deriv-ib-programme'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import useScrollToElement from 'features/hooks/use-scroll-to-element'
import { AccordionItem, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { Button } from 'components/form'
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
        deriv_x_one: file(relativePath: { eq: "affiliate-and-ib/deriv_x_one.png" }) {
            ...fadeIn
        }
        deriv_x_two: file(relativePath: { eq: "affiliate-and-ib/deriv_x_two.png" }) {
            ...fadeIn
        }
        deriv_x_three: file(relativePath: { eq: "affiliate-and-ib/deriv_x_three.png" }) {
            ...fadeIn
        }
        deriv_x_four: file(relativePath: { eq: "affiliate-and-ib/deriv_x_four.png" }) {
            ...fadeIn
        }
        deriv_x_five: file(relativePath: { eq: "affiliate-and-ib/deriv_x_five.png" }) {
            ...fadeIn
        }
        deriv_x_commodities: file(
            relativePath: { eq: "affiliate-and-ib/deriv_x_commodities.png" }
        ) {
            ...fadeIn
        }
        deriv_x_crypto: file(relativePath: { eq: "affiliate-and-ib/deriv_x_crypto.png" }) {
            ...fadeIn
        }
        deriv_x_forex: file(relativePath: { eq: "affiliate-and-ib/deriv_x_forex.png" }) {
            ...fadeIn
        }
        deriv_x_indices: file(relativePath: { eq: "affiliate-and-ib/deriv_x_indices.png" }) {
            ...fadeIn
        }
        deriv_x_step: file(relativePath: { eq: "affiliate-and-ib/deriv_x_step.png" }) {
            ...fadeIn
        }
        deriv_x_stocks: file(relativePath: { eq: "affiliate-and-ib/deriv_x_stocks.png" }) {
            ...fadeIn
        }
        deriv_x_vol: file(relativePath: { eq: "affiliate-and-ib/deriv_x_vol.png" }) {
            ...fadeIn
        }
        mt5_forex: file(relativePath: { eq: "affiliate-and-ib/mt5_forex.png" }) {
            ...fadeIn
        }
        mt5_metal: file(relativePath: { eq: "affiliate-and-ib/mt5_metal.png" }) {
            ...fadeIn
        }
        mt5_oil: file(relativePath: { eq: "affiliate-and-ib/mt5_oil.png" }) {
            ...fadeIn
        }
        mt5_crypto: file(relativePath: { eq: "affiliate-and-ib/mt5_crypto.png" }) {
            ...fadeIn
        }
        mt5_stocks: file(relativePath: { eq: "affiliate-and-ib/mt5_stocks.png" }) {
            ...fadeIn
        }
        mt5_stock_indices: file(relativePath: { eq: "affiliate-and-ib/mt5_stock_indices.png" }) {
            ...fadeIn
        }
        mt5_volatility: file(relativePath: { eq: "affiliate-and-ib/mt5_volatility.png" }) {
            ...fadeIn
        }
        mt5_step: file(relativePath: { eq: "affiliate-and-ib/mt5_step.png" }) {
            ...fadeIn
        }
        derived_crash: file(relativePath: { eq: "affiliate-and-ib/derived_crash.png" }) {
            ...fadeIn
        }
        derived_jump: file(relativePath: { eq: "affiliate-and-ib/derived_jump.png" }) {
            ...fadeIn
        }
        derived_step: file(relativePath: { eq: "affiliate-and-ib/derived_step.png" }) {
            ...fadeIn
        }
        derived_volatility: file(relativePath: { eq: "affiliate-and-ib/derived_volatility.png" }) {
            ...fadeIn
        }
        fin_crypto: file(relativePath: { eq: "affiliate-and-ib/fin_crypto.png" }) {
            ...fadeIn
        }
        fin_forex: file(relativePath: { eq: "affiliate-and-ib/fin_forex.png" }) {
            ...fadeIn
        }
        fin_metal: file(relativePath: { eq: "affiliate-and-ib/fin_metal.png" }) {
            ...fadeIn
        }
        fin_oil: file(relativePath: { eq: "affiliate-and-ib/fin_oil.png" }) {
            ...fadeIn
        }
        fin_stock: file(relativePath: { eq: "affiliate-and-ib/fin_stock.png" }) {
            ...fadeIn
        }
        stp_forex: file(relativePath: { eq: "affiliate-and-ib/stp_forex.png" }) {
            ...fadeIn
        }
        stp_crypto: file(relativePath: { eq: "affiliate-and-ib/stp_crypto.png" }) {
            ...fadeIn
        }
        dx_dex_indices: file(relativePath: { eq: "affiliate-and-ib/dx_dex_indices.png" }) {
            ...fadeIn
        }
    }
`

const StyledCard = styled(Card)`
    min-block-size: 42.6rem;
    block-size: fit-content;
    inline-size: 38.4rem;
    position: relative;
    border-radius: 0.8rem;
    justify-content: flex-start;

    @media ${device.tabletL} {
        min-inline-size: 32.8rem;
        padding: 1.6rem 1.6rem 0;
        ${(props) => props.tabletHeight && 'height:' + props.tabletHeight};

        :first-child {
            margin: 2.4rem 0 0;
        }
    }

    @media ${device.mobileM} {
        min-inline-size: unset;
        inline-size: 100%;
        ${(props) => props.mobileHeight && 'height:' + props.mobileHeight};
    }
`

const CardWrappers = styled(Flex)`
    min-height: 33.8rem;
    flex-direction: column;
    justify-content: flex-start;
    margin-block-end: 3rem;

    @media ${device.tabletL} {
        min-height: unset;
    }
`
const CardText = styled(Text)`
    margin-bottom: 1.2rem;
`
const AccordionWrapper = styled.div`
    max-width: 99.6rem;
    width: 100%;
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

const NewTableWrapper = styled(Table)`
    margin: 0 auto 1.6rem;
    grid-auto-rows: 1fr;
    grid-template-columns: 50% 50%;
`

const StyledTrap = styled(TRAP)<CardProps>`
    height: ${(props) => (props.headerHeight ? props.headerHeight : '')};
    background-color: var(--color-grey-39);
    padding: 1.1rem 0.8rem;
    min-height: 7.2rem;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NewStyledTrap = styled(TRAP)<CardProps>`
    background-color: var(--color-grey-39);
    padding: 1.1rem 0.8rem;
    min-height: 9.6rem;
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
    margin: 0 -2.5rem;
    padding: 1.6rem 0;
    justify-content: center;

    @media ${device.tabletL} {
        margin: 0 -1.6rem;
    }
`

// calculated page
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 2.4rem 0;

    @media ${device.tabletL} {
        justify-content: center;
    }
`

const BackButton = styled(Button)`
    border: 0.2rem solid var(--color-grey-5);
    color: var(--color-black);
    height: 4rem;
    inline-size: 100%;
    padding: 0 1.6rem;
`

const parent_style = {
    marginBottom: '0',
}
const item_style = {
    padding: '0',
    background: 'var(--color-white)',
    borderRadius: '0 0 0.8rem 0.8rem',
    marginBottom: '1.6rem',
}
const header_style = {
    padding: '1.4rem 0 1.7rem',
    borderRadius: '0',
    height: 'auto',
    boxShadow: 'unset',
    borderBottom: 'unset',
}
const StyledButton = styled(Button)`
    border: none;
    color: var(--color-red);
    font-size: 1.4rem;
    background: none;

    @media ${device.tabletL} {
        font-size: 1.4rem;
    }
`

const DMT5Cards = ({ data }: DMT5Props) => {
    const dataImages = useStaticQuery(query)
    const [is_calculated, setCalculated] = React.useState(false)
    const clickToScrollHandler = useScrollToElement('affiliate-card', -100)

    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }

    const scrollToHeader = () => {
        setCalculated(!is_calculated)
        clickToScrollHandler()
    }

    return (
        <StyledCard padding="2.4rem 2.4rem 0" id="affiliate-card">
            {!is_calculated ? (
                <>
                    <CardWrappers>
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            <Localize translate_text={data.name} />
                        </Header>
                        <CardText>
                            <Localize translate_text={data.description} />
                        </CardText>

                        {data.type.map((value) => (
                            <AccordionItem
                                key={value.class_name}
                                header={value.title}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                class_name={value.class_name}
                                plus
                            >
                                {value.styles && (
                                    <TableWrapper grid_col_number={2} is_balance={true}>
                                        {value.assets.map((listedValue, indexValue) => (
                                            <TC grid_area={'area' + indexValue} key={indexValue}>
                                                <StyledTrap
                                                    isTitle="true"
                                                    headerHeight={value.headerHeight}
                                                >
                                                    <StyledText size="1.4rem" weight="bold">
                                                        <Localize
                                                            translate_text={listedValue.title}
                                                        />
                                                    </StyledText>
                                                </StyledTrap>
                                                {listedValue.list.map((info, indexData) => (
                                                    <TRAPREVERSE
                                                        style={{ minBlockSize: '6.2rem' }}
                                                        even={indexData % 2 ? 'true' : ''}
                                                        key={indexData}
                                                    >
                                                        <StyledText size="1.4rem">
                                                            <Localize translate_text={info} />
                                                        </StyledText>
                                                    </TRAPREVERSE>
                                                ))}
                                            </TC>
                                        ))}
                                    </TableWrapper>
                                )}
                                {value.styled && (
                                    <NewTableWrapper grid_col_number={2} is_balance={true}>
                                        {value.assets.map((listedValue, indexValue) => (
                                            <TC grid_area={'area' + indexValue} key={indexValue}>
                                                <NewStyledTrap
                                                    isTitle="true"
                                                    headerHeight={value.headerHeight}
                                                >
                                                    <StyledText size="1.4rem" weight="bold">
                                                        <Localize
                                                            translate_text={listedValue.title}
                                                        />
                                                    </StyledText>
                                                </NewStyledTrap>
                                                {listedValue.list.map((info, indexData) => (
                                                    <TRAPREVERSE
                                                        even={indexData % 2 ? 'true' : ''}
                                                        key={indexData}
                                                    >
                                                        <StyledText size="1.4rem">
                                                            <Localize translate_text={info} />
                                                        </StyledText>
                                                    </TRAPREVERSE>
                                                ))}
                                            </TC>
                                        ))}
                                    </NewTableWrapper>
                                )}
                                {!value.styles && !value.styled && (
                                    <TableWrapper grid_col_number={2} is_balance={true}>
                                        {value.assets.map((listedValue, indexValue) => (
                                            <TC grid_area={'area' + indexValue} key={indexValue}>
                                                <StyledTrap
                                                    isTitle="true"
                                                    headerHeight={value.headerHeight}
                                                >
                                                    <StyledText size="1.4rem" weight="bold">
                                                        <Localize
                                                            translate_text={listedValue.title}
                                                        />
                                                    </StyledText>
                                                </StyledTrap>
                                                {listedValue.list.map((info, indexData) => (
                                                    <TRAPREVERSE
                                                        even={indexData % 2 ? 'true' : ''}
                                                        key={indexData}
                                                    >
                                                        <StyledText size="1.4rem">
                                                            <Localize translate_text={info} />
                                                        </StyledText>
                                                    </TRAPREVERSE>
                                                ))}
                                            </TC>
                                        ))}
                                    </TableWrapper>
                                )}
                            </AccordionItem>
                        ))}

                        <Flex direction="column" ai="flex-start" height="auto">
                            <Header type="main-paragraph" as="p" mt="1.4rem" mb="0.8rem">
                                <Localize translate_text="_t_Disclaimer:_t_" />
                            </Header>
                            <Header type="main-paragraph" as="p" mb="0.8rem">
                                <Localize translate_text="_t_This plan is not available for IBs who promote to clients residing in the EU._t_" />
                            </Header>
                        </Flex>
                    </CardWrappers>
                </>
            ) : (
                <>
                    {data.countDetails.map((valueCalc, indexCalc) => (
                        <Flex key={indexCalc} direction="column" ai="flex-start" height="auto">
                            <Header as="h4" type="sub-section-title" mb="0.8rem">
                                <Localize translate_text={valueCalc.title} />
                            </Header>
                            {valueCalc.list.map((valueDetails, detailsIdx) => (
                                <React.Fragment key={detailsIdx}>
                                    {valueDetails.title && (
                                        <Header type="sub-paragraph" mt="0.8rem" mb="0.8rem">
                                            <Localize translate_text={valueDetails.title} />
                                        </Header>
                                    )}
                                    <Text mb="0.8rem" size="1.4rem">
                                        <Localize
                                            translate_text={valueDetails.details}
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                    <Text mb="0.8rem" size="1.4rem"></Text>
                                    {valueDetails.iconAlt && (
                                        <Flex mb="1.6rem">
                                            <QueryImage
                                                data={dataImages[valueDetails.icon]}
                                                alt={localize(valueDetails.iconAlt)}
                                                width="100%"
                                            />
                                        </Flex>
                                    )}
                                    {valueDetails.second_desc && (
                                        <Text mb="0.8rem" size="1.4rem">
                                            <Localize
                                                translate_text={valueDetails.second_desc}
                                                components={[<strong key={0} />]}
                                            />
                                        </Text>
                                    )}
                                    {valueDetails.notes &&
                                        valueDetails.notes.map((valueNotes, noteIdx) => (
                                            <React.Fragment key={noteIdx}>
                                                <Header type="sub-paragraph" mb="0.8rem">
                                                    <Localize translate_text={valueNotes.title} />
                                                </Header>

                                                <Text mb="1.6rem" size="1.4rem">
                                                    <Localize
                                                        translate_text={valueNotes.desc.firstText}
                                                    />
                                                </Text>
                                            </React.Fragment>
                                        ))}
                                </React.Fragment>
                            ))}
                            {valueCalc.notes.map((valueNotes, notesIndex) => (
                                <React.Fragment key={notesIndex}>
                                    <Header type="sub-paragraph" mb="0.8rem">
                                        <Localize translate_text={valueNotes.title} />
                                    </Header>
                                    {valueNotes.desc.secondText ? (
                                        <>
                                            <Text mb="1.6rem" size="1.4rem">
                                                <Localize
                                                    translate_text={valueNotes.desc.firstText}
                                                />
                                            </Text>
                                            <Text mb="0" size="1.4rem">
                                                <Localize
                                                    translate_text={valueNotes.desc.secondText}
                                                />
                                            </Text>
                                        </>
                                    ) : (
                                        <Text mb="0" size="1.4rem">
                                            <Localize translate_text={valueNotes.desc.firstText} />
                                        </Text>
                                    )}
                                </React.Fragment>
                            ))}
                            <ButtonWrapper>
                                <BackButton tertiary onClick={scrollToHeader} className="back">
                                    <Localize translate_text="_t_Back_t_" />
                                </BackButton>
                            </ButtonWrapper>
                        </Flex>
                    ))}
                </>
            )}
        </StyledCard>
    )
}

export default DMT5Cards
