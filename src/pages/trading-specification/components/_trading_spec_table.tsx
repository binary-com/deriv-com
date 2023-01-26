import React, { useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    getPaginationRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import styled from 'styled-components'
import { TAvailableLiveMarkets } from '../_types'
import useLiveColumns from '../_use-trading-spec-columns'
import forex_specification from '../data/_forex_specification'
import crypto_specification from '../data/_crypto_specification'
import derived_specification from '../data/_derived_specification'
import stocks_specification from '../data/_stocks_specification'
import commodities_specification from '../data/_commodities_specification'
import {
    Table,
    TableContainer,
    TableRow,
    StyledButton,
    StyledButtonPage,
    StyledPaginationContainer,
} from './_elements'
import AvailablePlatform from './_available-platform'
import RightChevron from 'images/svg/trading-specification/right-chevron.svg'
import LeftChevron from 'images/svg/trading-specification/left-chevron.svg'
import SearchIcon from 'images/svg/help/search.svg'
import { Flex } from 'components/containers'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}
const StyledFlex = styled(Flex)`
    padding: 20px 60px;
    justify-content: start;
`
const SearchForm = styled.form`
    position: relative;
    align-items: center;
    padding: 6px 8px;
    gap: 8px;
    width: 464px;
    height: 32px;
    border: 1px solid #d6dadb;
    border-radius: 12px;
`
const StyledSearchIcon = styled.img`
    width: 16px;
    height: 16px;
`
const StyledChevron = styled.img`
    width: 16px;
    height: 16px;
    margin: 0;
`
const SearchInput = styled.input`
    color: var(--color-black);
    background-color: var(--color-white);
    border: none;
    outline: none;
    padding: 0 14px;

    ::placeholder {
        color: var(--color-grey-17);
    }
`
const TABLE_VISIBLE_ROWS = 20

const TradingSpecificationTable = ({ market }: TLiveMarketTableProps) => {
    // console.log(market)
    const [markets_data, setMarketsData] = useState(() => [...forex_specification])
    const [globalFilter, setGlobalFilter] = useState('')

    const [sorting, setSorting] = React.useState<SortingState>([])

    const columns = useLiveColumns()

    const table = useReactTable({
        data: markets_data,
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

    const rows = table.getRowModel().rows.slice(0, TABLE_VISIBLE_ROWS)

    const handleChange = (e) => {
        e.preventDefault()
        setGlobalFilter(e.target.value)
    }

    return (
        <>
            <AvailablePlatform />
            <StyledFlex>
                <SearchForm>
                    <StyledSearchIcon src={SearchIcon} alt="search-icon" />
                    <SearchInput
                        placeholder="Find Instrument"
                        autoComplete="off"
                        value={globalFilter ?? ''}
                        onChange={handleChange}
                    />
                </SearchForm>
            </StyledFlex>
            <TableContainer>
                <Table>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} bg="var(--color-white-1)">
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
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            <StyledPaginationContainer>
                <StyledButton
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <StyledChevron src={LeftChevron} />
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
                <StyledButton onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    <StyledChevron src={RightChevron} />
                </StyledButton>
            </StyledPaginationContainer>
        </>
    )
}

export default TradingSpecificationTable
