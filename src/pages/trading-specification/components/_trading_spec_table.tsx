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
import PopUpMenu from './_popup_menu'
import RightChevron from 'images/svg/trading-specification/right-chevron.svg'
import LeftChevron from 'images/svg/trading-specification/left-chevron.svg'
import SearchIcon from 'images/svg/help/search.svg'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
    isShowPopUp: boolean
}
const StyledFlex = styled(Flex)`
    padding: 20px 60px;
    justify-content: start;
    flex-direction: column;
    gap: 20px;
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
const DisclaimerText = styled(Header)`
    color: var(--color-grey-5);
    font-weight: 400;
    text-align: center;
    font-size: 1.6rem;
`
const TABLE_VISIBLE_ROWS = 20

const TradingSpecificationTable = ({ market }: TLiveMarketTableProps) => {
    const [markets_data, setMarketsData] = useState(forex_specification.data)

    useEffect(() => {
        market_specification.map((specification) => {
            if (specification.market === market) {
                setMarketsData(specification.data)
            }
        })
    }, [market])
    const [search, setSearch] = useState('')
    const [globalFilter, setGlobalFilter] = useState('')

    const [showPopUp, setShowPopUp] = useState(false)

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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        // console.log('search', search)
        let updatedRowData = []

        if (search != '' || search != null) {
            updatedRowData = markets_data.filter((user) =>
                user.instrument.toLowerCase().match(new RegExp(search, 'i')),
            )
        } else {
            updatedRowData = markets_data
        }
        setMarketsData(updatedRowData)
    }

    return (
        <>
            <AvailablePlatform />
            <StyledFlex>
                <SearchForm onSubmit={handleSubmit}>
                    <StyledSearchIcon src={SearchIcon} alt="search-icon" />
                    <SearchInput
                        placeholder="Find Instrument"
                        autoComplete="off"
                        value={search ?? ''}
                        onChange={handleChange}
                    />
                </SearchForm>
            </StyledFlex>
            {showPopUp && (
                <PopUpMenu
                    market={market}
                    toggle={() => setShowPopUp(false)}
                    is_open={showPopUp}
                    closeModal={() => setShowPopUp(false)}
                />
            )}

            <TableContainer>
                <TableData>
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
                </TableData>
            </TableContainer>
            <StyledPaginationContainer>
                <Flex jc="start">
                    <Button flat onClick={() => setShowPopUp(true)}>
                        *Click here to see {market} info
                    </Button>
                </Flex>

                <Flex jc="end">
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
                    <StyledButton
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <StyledChevron src={RightChevron} />
                    </StyledButton>
                </Flex>
            </StyledPaginationContainer>
            <DisclaimerText>
                <Localize translate_text="The above information is updated monthly and, therefore, may not reflect current trading conditions." />
            </DisclaimerText>
        </>
    )
}

export default TradingSpecificationTable
