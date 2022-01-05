import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Button } from 'components/form'
import device from 'themes/device'

const ButtonLeft = styled(Button)`
    margin-right: 16px;
`

const Flex = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 32px;
    align-items: center;

    @media ${device.mobile} {
        ${Button} {
            font-size: 16px;
            padding: 10px 16px;
        }
        ${ButtonLeft} {
            margin-right: 16px;
        }
        ${Text} {
            font-size: 14px;
        }
    }

    ${Button} {
        font-size: 14px;
        padding: 6px 12px;
    }
    ${ButtonLeft} {
        margin-right: 8px;
    }
    ${Text} {
        font-size: 12px;
    }
`

const BottomFlex = styled(Flex)`
    margin-top: 32px;
    margin-bottom: 0;
`

const AutoFlex = styled.div`
    display: flex;
    width: auto;
`

const TopText = styled(Text)`
    font-size: 14px;
`

const MainGrid = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`

const Pagination = ({ children, page_limit }) => {
    // These items are always updated upon re-render
    const all_records = React.Children.toArray(children)
    const total_records = all_records.length
    const needs_pagination = total_records > page_limit

    const [section_selection, setSectionSelection] = React.useState(page_limit)
    // start index is the last item section - page limit
    const [start_index, setStartIndex] = React.useState(section_selection - page_limit)

    const has_next = section_selection < total_records
    const has_previous = section_selection > page_limit

    // check if the item is within page limit, if it is then it will be total records
    // if not then it will be the current last item selection
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
            <MainGrid>{current_records.map((record) => record)}</MainGrid>
            {needs_pagination && (
                <BottomFlex>
                    <TopText>{`Viewing ${
                        start_index + 1
                    }-${end_index} of ${total_records}`}</TopText>
                    {needs_pagination && (
                        <AutoFlex>
                            <ButtonLeft secondary onClick={handlePrevious} disabled={!has_previous}>
                                Previous
                            </ButtonLeft>
                            <Button secondary onClick={handleNext} disabled={!has_next}>
                                Next
                            </Button>
                        </AutoFlex>
                    )}
                </BottomFlex>
            )}
        </>
    )
}

Pagination.propTypes = {
    children: PropTypes.node,
    page_limit: PropTypes.number,
}

export default Pagination
