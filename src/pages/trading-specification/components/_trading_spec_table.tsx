import React, { useEffect, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    getPaginationRowModel,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import styled from 'styled-components'
import { TAvailableLiveMarkets } from '../_types'
import useLiveColumns from '../_use-trading-spec-columns'
import forex_specification from '../data/_forex_specification'
import { market_specification } from './_constants'
import {
    TableData,
    TableContainer,
    TableRow,
    StyledButton,
    StyledButtonPage,
    StyledPaginationContainer,
} from './_elements'
import AvailablePlatform from './_available-platform'
import SearchNotFound from 'images/svg/trading-specification/search-not-found.svg'
import RightChevron from 'images/svg/trading-specification/right-chevron.svg'
import LeftChevron from 'images/svg/trading-specification/left-chevron.svg'
import SearchIcon from 'images/svg/trading-specification/search-icon.svg'
import { Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { Header } from 'components/elements'
import { sanitize } from 'common/utility'
import useRegion from 'components/hooks/use-region'
import device from 'themes/device'
import { TString } from 'types/generics'
import { useIsRtl } from 'components/hooks/use-isrtl'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}

const forex_note: TString =
    '_t_<0>Note:</0> There is a daily break during weekdays between 21:00-21:05 (GMT)_t_'
const row_disclaimer: TString =
    '_t_The above information is updated monthly and, therefore, may not reflect current trading conditions. Certain offerings and specifications may vary depending on your country of residence, regulated jurisdiction, and individual trading circumstances._t_'
const eu_disclaimer: TString =
    '_t_The above information is updated monthly and, therefore, may not reflect current trading conditions._t_'

const StyledFlex = styled(Flex)<{ padding?: string }>`
    flex-direction: column;
    gap: 20px;
    padding: 8rem 0;
    padding: ${(props) => (props.padding ? props.padding : '3rem 0')};

    @media ${device.tabletL} {
        width: 95%;
    }
`
const SearchForm = styled.form`
    position: relative;
    align-items: center;
    padding: 6px 8px;
    width: 464px;
    height: 32px;
    border: 1px solid var(--color-grey-7);
    border-radius: 12px;

    @media ${device.tabletL} {
        width: auto;
    }
`
const StyledHeader = styled(Header)`
    text-align: start;
    padding: 16px 0 0 16px;
    @media ${device.tabletL} {
        padding: 0 30px;
        text-align: center;
    }
`
const StyledSearchIcon = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
`
const StyledChevron = styled.img`
    width: 16px;
    height: 16px;
    margin: 0;
`
const SearchInput = styled.input`
    width: 100%;
    color: var(--color-black);
    background-color: var(--color-white);
    border: none;
    outline: none;
    padding: 0 30px;

    ::placeholder {
        color: var(--color-grey-17);
    }
`
const DisclaimerText = styled(Header)`
    color: var(--color-grey-5);
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    padding: 1.5rem 36rem 0;
    @media ${device.tabletL} {
        padding: 5rem 16px 0;
    }
`
const TradingSpecificationTable = ({ market }: TLiveMarketTableProps) => {
    const { is_eu } = useRegion()
    const specification_data = is_eu ? forex_specification.eu_data : forex_specification.data
    const [markets_data, setMarketsData] = useState(specification_data)
    const [filtered_data, setFilteredData] = useState(specification_data)
    const is_rtl = useIsRtl()

    useEffect(() => {
        market_specification.map((specification) => {
            if (specification.market === market) {
                const specification_data = is_eu ? specification.eu_data : specification.data
                setMarketsData(specification_data)
                setFilteredData(specification_data)
            }
        })
    }, [market])
    const [search_value, setSearchValue] = useState('')
    const [globalFilter, setGlobalFilter] = useState('')
    const [sorting, setSorting] = React.useState<SortingState>([])
    const columns = useLiveColumns(market)

    const table = useReactTable({
        data: filtered_data,
        columns,
        state: {
            sorting,
            globalFilter,
        },

        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearchValue(sanitize(e.target.value))
    }
    useEffect(() => {
        let updatedRowData = []
        if (search_value.length >= 1) {
            updatedRowData = [
                ...markets_data.filter((market) =>
                    market.instrument.instrument
                        .toLowerCase()
                        .match(new RegExp(search_value.trim(), 'i')),
                ),
            ]
            setFilteredData(updatedRowData)
        } else {
            setFilteredData(markets_data)
        }
    }, [search_value, markets_data])

    useEffect(() => {
        table.setPageSize(15)
    }, [table])

    return (
        <>
            <AvailablePlatform />

            <TableContainer>
                <StyledFlex>
                    <SearchForm onSubmit={handleSubmit}>
                        <StyledSearchIcon src={SearchIcon} alt="search-icon" />
                        <SearchInput
                            autoFocus
                            placeholder={localize('_t_Find Instrument_t_')}
                            autoComplete="off"
                            onChange={handleChange}
                            value={search_value}
                        />
                    </SearchForm>
                </StyledFlex>
                <TableData>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} bg="#f9f9f9">
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext(),
                                              )}
                                    </th>
                                ))}
                            </TableRow>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </TableRow>
                        ))}
                    </tbody>
                </TableData>
                {filtered_data.length < 1 && (
                    <StyledFlex ai="center" jc="center" direction="column" padding="8rem 0">
                        <img src={SearchNotFound} />
                        <Header type="paragraph-1" weight="normal" as="p" align="center">
                            <Localize
                                translate_text="No results for <0>'{{search_value}}'</0>"
                                values={{ search_value }}
                                components={[<strong key={0} />]}
                            />
                        </Header>
                    </StyledFlex>
                )}
                {filtered_data.length > 1 && (
                    <StyledPaginationContainer>
                        {market === 'forex' && (
                            <StyledHeader as="p" type="paragraph-2" weight="normal">
                                <Localize
                                    translate_text={forex_note}
                                    components={[<strong key={0} />]}
                                />
                            </StyledHeader>
                        )}

                        <Flex jc="end" tablet_jc="center">
                            <StyledButton
                                onClick={() => {
                                    table.previousPage()
                                    document.documentElement.scrollTop = 500
                                }}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <StyledChevron src={is_rtl ? RightChevron : LeftChevron} />
                            </StyledButton>
                            {table.getPageOptions().map((page) => (
                                <StyledButtonPage
                                    selected={page === table.getState().pagination.pageIndex}
                                    key={page}
                                    onClick={() => {
                                        table.setPageIndex(page)
                                        document.documentElement.scrollTop = 500
                                    }}
                                >
                                    {page + 1}
                                </StyledButtonPage>
                            ))}
                            <StyledButton
                                onClick={() => {
                                    table.nextPage()
                                    document.documentElement.scrollTop = 500
                                }}
                                disabled={!table.getCanNextPage()}
                            >
                                <StyledChevron src={is_rtl ? LeftChevron : RightChevron} />
                            </StyledButton>
                        </Flex>
                    </StyledPaginationContainer>
                )}
            </TableContainer>

            <DisclaimerText as="p">
                {is_eu ? (
                    <Localize translate_text={eu_disclaimer} />
                ) : (
                    <Localize translate_text={row_disclaimer} />
                )}
            </DisclaimerText>
        </>
    )
}

export default TradingSpecificationTable
