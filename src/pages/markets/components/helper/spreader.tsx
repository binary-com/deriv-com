import React, { ReactElement, useRef, useState } from 'react'
import styled from 'styled-components'
import SpreaderData from './spreader-data'
import { Header } from 'components/elements'
import { CssGrid, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
import Pagination from 'components/elements/pagination'
import {
    minor_pairs,
    major_pairs,
    crash_boom_trade_type_eu,
} from 'pages/markets/static/content/_market-symbols'
import { queryParams } from 'common/utility'

type SpreaderProps = {
    display_title: ReactElement
    is_forex?: boolean
    is_derived?: boolean
    is_stocks_and_indices?: boolean
    is_cryptocurrency?: boolean
    is_commodities?: boolean
}

const StyledHeader = styled(Header)`
    max-width: 320px;
    font-size: 24px;
    margin: 0 auto;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 0;
    width: 12rem;

    :first-child {
        flex-basis: 6%;
    }
`
const ContentWrapper = styled(Flex)`
    overflow: auto;
    flex-direction: column;
    margin: 0 auto;
    width: 85vw;
    margin-bottom: 2rem;
`
const StyledColumnTitle = styled(Header)`
    width: 94px;
    height: 18px;
    margin-bottom: 2rem;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: black;
    flex: none;
    order: 0;
    flex-grow: 1;
`
const StyledCells = styled.div`
    margin-top: 1rem;
    white-space: nowrap;
`

const StyledRow = styled.div`
    width: 20rem;
    display: flex;
    border-top: solid 1px var(--color-grey-2);
    border-bottom: solid 1px var(--color-grey-2);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 68px;

    :nth-child(even) {
        background-color: var(--color-grey-2);
    }
`
const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 24px 0 40px;
    }
`

const Spreader = ({
    display_title,
    is_forex,
    is_derived,
    is_stocks_and_indices,
    is_cryptocurrency,
    is_commodities,
}: SpreaderProps) => {
    const [current_page, setCurrentPage] = useState(1)
    const forex_pairs = [].concat(minor_pairs, major_pairs)
    const index_of_last_item = current_page * 10
    const index_of_first_item = index_of_last_item - 10
    const paginated_forex_items = forex_pairs.slice(index_of_first_item, index_of_last_item)
    const paginated_derived_items = crash_boom_trade_type_eu.slice(
        index_of_first_item,
        index_of_last_item,
    )

    const myRef = useRef(null)

    const paginate = (page_number) => {
        setCurrentPage(page_number)
    }

    const url_page_number = Number(queryParams.get('page') || 1)

    React.useEffect(() => {
        queryParams.set({ page: current_page })
    }, [current_page])

    return (
        <>
            <StyledHeader as="h2" size="var(--text-size-l)" align="center">
                {display_title}
            </StyledHeader>
            <StyledSection padding="4rem 0 8rem">
                <ContentWrapper ref={myRef}>
                    <CssGrid
                        columns="repeat(12, 15rem)"
                        row_gap="10.4rem"
                        laptop_columns="repeat(12, 20rem)"
                        tablet_columns="repeat(12, 20rem)"
                        mobile_columns="repeat(12, 20rem)"
                        mobile_row_gap="6rem"
                        margin="1rem 0 0"
                    >
                        <Column>
                            <StyledColumnTitle>Symbol</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((symbol, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                src={symbol.src}
                                                text={symbol.text}
                                                has_icon
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((symbol, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                src={symbol.src}
                                                text={symbol.text}
                                                has_icon
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Path</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((path, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData key={index} path={path.path} />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((path, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData key={index} path={path.path} />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Raw spread</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((raw_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                raw_spread={raw_spread.raw_spread}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((raw_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                raw_spread={raw_spread.raw_spread}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Markup</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((markup, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData key={index} markup={markup.markup} />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((markup, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData key={index} markup={markup.markup} />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Full spread</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((full_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                full_spread={full_spread.full_spread}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((full_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                full_spread={full_spread.full_spread}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Standard deviation</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((standard_deviation, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                standard_deviation={
                                                    standard_deviation.standard_deviation
                                                }
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((standard_deviation, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                standard_deviation={
                                                    standard_deviation.standard_deviation
                                                }
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Minimum spread</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((minimum_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                minimum_spread={minimum_spread.minimum_spread}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((minimum_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                minimum_spread={minimum_spread.minimum_spread}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Maximum spread</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((maximum_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                maximum_spread={maximum_spread.maximum_spread}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((maximum_spread, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                maximum_spread={maximum_spread.maximum_spread}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Swap type</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((swap_type, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                swap_type={swap_type.swap_type}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((swap_type, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                swap_type={swap_type.swap_type}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Swaps long</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((swaps_long, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                swaps_long={swaps_long.swaps_long}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((swaps_long, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                swaps_long={swaps_long.swaps_long}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>Swaps short</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((swaps_short, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                swaps_short={swaps_short.swaps_short}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((swaps_short, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                swaps_short={swaps_short.swaps_short}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                        <Column>
                            <StyledColumnTitle>3 day roll over</StyledColumnTitle>
                            <StyledCells>
                                {is_forex &&
                                    paginated_forex_items.map((three_day, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                three_day={three_day.three_day}
                                            />
                                        </StyledRow>
                                    ))}
                                {is_derived &&
                                    paginated_derived_items.map((three_day, index) => (
                                        <StyledRow key={index}>
                                            <SpreaderData
                                                key={index}
                                                three_day={three_day.three_day}
                                            />
                                        </StyledRow>
                                    ))}
                            </StyledCells>
                        </Column>
                    </CssGrid>
                </ContentWrapper>
                {is_forex && (
                    <Pagination
                        paginate={paginate}
                        items_per_page={10}
                        total_items={forex_pairs.length}
                        current_page={current_page}
                    />
                )}
            </StyledSection>
        </>
    )
}

export default Spreader
