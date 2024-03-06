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
import SearchNotFound from 'images/svg/trading-specification/search-not-found.svg'
import RightChevron from 'images/svg/trading-specification/right-chevron.svg'
import LeftChevron from 'images/svg/trading-specification/left-chevron.svg'
import SearchIcon from 'images/svg/trading-specification/search-icon.svg'
import { Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { Header } from 'components/elements'
import { sanitize } from 'common/utility'
import device from 'themes/device'
import { TString } from 'types/generics'
import { useIsRtl } from 'components/hooks/use-isrtl'
import useBuildVariant from 'features/hooks/use-build-variant'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}

const forex_note: TString =
    '_t_<0>Note:</0> There is a daily break during weekdays between 21:00-21:05 (GMT)_t_'
const row_disclaimer: TString =
    "_t_Information is updated monthly and may not represent today's trading conditions. Offerings can differ by location, jurisdiction, and trade scenario._t_"
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
    font-size: 14px;
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
    const { region } = useBuildVariant()
    const [markets_data, setMarketsData] = useState(forex_specification.data)
    const [filtered_data, setFilteredData] = useState(forex_specification.data)
    const disclaimer = region === "row" ? row_disclaimer : eu_disclaimer;
    const is_rtl = useIsRtl()

    useEffect(() => {
        if (region === "eu") {
            setMarketsData(forex_specification.eu_data)
            setFilteredData(forex_specification.eu_data)
        }
    }, [region])

    useEffect(() => {
        market_specification.map((specification) => {
            if (specification.market === market) {
                const specification_data = region === "eu" ? specification.eu_data : specification.data
                setMarketsData(specification_data)
                setFilteredData(specification_data)
            }
        })
    }, [market, region])

    const [search_value, setSearchValue] = useState('')
    const [globalFilter, setGlobalFilter] = useState('')
    const [sorting, setSorting] = useState<SortingState>([])
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
                    market.instrument.instrument.toLowerCase().match(new RegExp(search_value, 'i')),
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
            <TableContainer>
                <StyledFlex>
                    <SearchForm onSubmit={handleSubmit}>
                        <StyledSearchIcon src={SearchIcon} alt={localize('_t_search-icon_t_')} />
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
                                translate_text="_t_No results for <0>'{{search_value}}'</0>_t_"
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
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <StyledChevron src={is_rtl ? RightChevron : LeftChevron} />
                            </StyledButton>
                            {table.getPageOptions().map((page) => (
                                <StyledButtonPage
                                    selected={page === table.getState().pagination.pageIndex}
                                    key={page}
                                    onClick={() => table.setPageIndex(page)}
                                >
                                    {page + 1}
                                </StyledButtonPage>
                            ))}
                            <StyledButton
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                <StyledChevron src={is_rtl ? LeftChevron : RightChevron} />
                            </StyledButton>
                        </Flex>
                    </StyledPaginationContainer>
                )}
            </TableContainer>

            <DisclaimerText as="p">
                <Localize translate_text={disclaimer} />
            </DisclaimerText>
        </>
    )
}

export default TradingSpecificationTable
