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
import RightChevron from 'images/svg/trading-specification/right-chevron.svg'
import LeftChevron from 'images/svg/trading-specification/left-chevron.svg'
import SearchIcon from 'images/svg/help/search.svg'
import { Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'
import { sanitize } from 'common/utility'
import useRegion from 'components/hooks/use-region'
import device from 'themes/device'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
}
const StyledFlex = styled(Flex)`
    flex-direction: column;
    gap: 20px;
    padding: 5rem 0;

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
    border: 1px solid #d6dadb;
    border-radius: 12px;

    @media ${device.tabletL} {
        width: auto;
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
    padding: 0 36rem;
    @media ${device.tabletL} {
        padding: 0 16px;
    }
`
const TradingSpecificationTable = ({ market }: TLiveMarketTableProps) => {
    const { is_eu } = useRegion()
    const specification_data = is_eu ? forex_specification.eu_data : forex_specification.data
    const [markets_data, setMarketsData] = useState(specification_data)
    const [filtered_data, setFilteredData] = useState(specification_data)

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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearchValue(sanitize(e.target.value))
    }
    useEffect(() => {
        let updatedRowData = []

        if (search_value.length > 1) {
            updatedRowData = markets_data.filter((market) =>
                market.instrument.instrument.toLowerCase().match(new RegExp(search_value, 'i')),
            )
            setMarketsData(updatedRowData)
        } else {
            setMarketsData(filtered_data)
        }
    }, [search_value])

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
                            placeholder="Find Instrument"
                            autoComplete="off"
                            onChange={handleChange}
                            value={search_value}
                        />
                    </SearchForm>
                </StyledFlex>
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
                <StyledPaginationContainer>
                    <Flex>
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
            </TableContainer>

            <DisclaimerText as="p">
                {is_eu ? (
                    <Localize translate_text="The above information is updated monthly and, therefore, may not reflect current trading conditions." />
                ) : (
                    <Localize translate_text="The above information is updated monthly and, therefore, may not reflect current trading conditions. Certain offerings and specifications may vary depending on your country of residence, regulated jurisdiction, and individual trading circumstances." />
                )}
            </DisclaimerText>
        </>
    )
}

export default TradingSpecificationTable
