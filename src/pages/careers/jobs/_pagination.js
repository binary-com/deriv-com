import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { Button } from 'components/form'

const TopText = styled(Text)`
    font-size: var(--text-size-xs);
    margin-bottom: 2.6rem;
    margin-top: 5.4rem;
`

const ButtonLeft = styled(Button)`
    margin-right: 1.6rem;
`

const Pagination = ({ children, page_limit }) => {
    const all_records = React.Children.toArray(children)
    const total_records = all_records.length
    const needs_pagination = total_records > page_limit

    const [section_selection, setSectionSelection] = React.useState(page_limit)
    const [start_index, setStartIndex] = React.useState(section_selection - page_limit)

    const has_next = section_selection < total_records
    const has_previous = section_selection > page_limit
    const end_index = needs_pagination ? section_selection : total_records

    const current_records = all_records.slice(start_index, end_index)

    const resetToFirstPage = () => {
        setSectionSelection(page_limit)
        setStartIndex(0)
    }

    React.useEffect(() => {
        resetToFirstPage()
    }, [children])

    const handleNext = () => {
        const next_selection = section_selection + page_limit
        if (has_next) {
            if (next_selection > total_records) {
                setSectionSelection(total_records)
                setStartIndex(section_selection)
            } else {
                setSectionSelection(next_selection)
                setStartIndex(next_selection - page_limit)
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const handlePrevious = () => {
        const previous_selection = section_selection - page_limit
        if (has_previous) {
            if (previous_selection < page_limit) {
                setSectionSelection(page_limit)
                setStartIndex(0)
            } else {
                setSectionSelection(previous_selection)
                setStartIndex(previous_selection - page_limit)
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <>
            <Flex jc="space-between">
                <TopText>{`Viewing ${start_index + 1}-${end_index} of ${total_records}`}</TopText>
                {/* {needs_pagination && (
                    <Flex width="auto">
                        <ButtonLeft flat onClick={handlePrevious} disabled={!has_previous}>
                            {localize('Previous')}
                        </ButtonLeft>
                        <Button flat onClick={handleNext} disabled={!has_next}>
                            {localize('Next')}
                        </Button>
                    </Flex>
                )} */}
            </Flex>
            {current_records.map(record => record)}
            {needs_pagination && (
                <Flex jc="space-between" ai="center">
                    <TopText>
                        {`Viewing ${start_index + 1}-${end_index} of ${total_records}`}
                    </TopText>
                    <Flex width="auto">
                        <ButtonLeft flat onClick={handlePrevious} disabled={!has_previous}>
                            Previous
                        </ButtonLeft>
                        <Button flat onClick={handleNext} disabled={!has_next}>
                            Next
                        </Button>
                    </Flex>
                </Flex>
            )}
        </>
    )
}

Pagination.propTypes = {
    children: PropTypes.node,
    page_limit: PropTypes.number,
}

export default Pagination
