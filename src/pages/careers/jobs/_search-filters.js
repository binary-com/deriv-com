import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { team_names } from '../_controller/_teams'
// import { job_types } from '../_model/_job_types/_job_types'
import { locations } from '../_model/_locations/_locations'
import { Flex } from 'components/containers'
import { Accordion, AccordionItem, Divider, Text, Checkbox } from 'components/elements'
import { localize } from 'components/localization'

const FilterContainer = styled.div`
    min-width: 32.7rem;
`

const AccordionWrapper = styled.div`
    div:first-child {
        box-shadow: unset;
    }
`

const ClearFilter = styled(Text)`
    margin-left: 1.6rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const header_style = {
    padding: 0,
}

const item_style = {
    borderBottom: '1px solid var(--color-grey-2)',
    display: 'flex',
}

const CheckboxWrapper = styled(Flex)`
    cursor: pointer;
`

const SearchFilters = ({ filters, setFilters }) => {
    const toggleCheck = name => {
        // If the name already inside filters, remove it
        if (filters.includes(name)) {
            setFilters(filters.filter(filter => filter !== name))
        } else {
            setFilters([...filters, name])
        }
    }

    const clearFilters = () => setFilters([])

    return (
        <FilterContainer>
            <Flex jc="space-between">
                <Text size="var(--text-size-xs)">{localize('Filters')}</Text>
                <ClearFilter onClick={clearFilters} size="var(--text-size-xs)">
                    {localize('Clear filters')}
                </ClearFilter>
            </Flex>
            <Divider height="2px" />
            <AccordionWrapper>
                <Accordion has_single_state>
                    {/* <AccordionItem
                        header={localize('Job types')}
                        header_style={header_style}
                        // parent_style={parent_style}
                        style={item_style}
                        arrow_thin
                    >
                        <Flex direction="column" m="1.6rem 0 0.8rem">
                            {Object.keys(job_types).map((job_type, idx) => (
                                <CheckboxWrapper
                                    key={idx}
                                    jc="flex-start"
                                    ai="center"
                                    mb="0.8rem"
                                    onClick={() => toggleCheck(job_type)}
                                >
                                    <Checkbox checked={filters.includes(job_type)} />
                                    <Text>{job_types[job_type]}</Text>
                                </CheckboxWrapper>
                            ))}
                        </Flex>
                    </AccordionItem> */}
                    <AccordionItem
                        header={localize('Teams')}
                        header_style={header_style}
                        // parent_style={parent_style}
                        style={item_style}
                        arrow_thin
                    >
                        <Flex direction="column" m="1.6rem 0 0.8rem">
                            {Object.keys(team_names).map((team_name, idx) => (
                                <CheckboxWrapper
                                    key={idx}
                                    jc="flex-start"
                                    ai="center"
                                    mb="0.8rem"
                                    onClick={() => toggleCheck(team_name)}
                                >
                                    <Checkbox
                                        onChange={() => toggleCheck(team_name)}
                                        checked={filters.includes(team_name)}
                                        secondary
                                    />
                                    <Text>{team_names[team_name]}</Text>
                                </CheckboxWrapper>
                            ))}
                        </Flex>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Location')}
                        header_style={header_style}
                        // parent_style={parent_style}
                        style={item_style}
                        arrow_thin
                    >
                        <Flex direction="column" m="1.6rem 0 0.8rem">
                            {Object.keys(locations).map((location, idx) => (
                                <CheckboxWrapper
                                    key={idx}
                                    jc="flex-start"
                                    ai="center"
                                    mb="0.8rem"
                                    onClick={() => toggleCheck(location)}
                                >
                                    <Checkbox
                                        onChange={() => toggleCheck(location)}
                                        checked={filters.includes(location)}
                                        secondary
                                    />
                                    <Text>{locations[location]}</Text>
                                </CheckboxWrapper>
                            ))}
                        </Flex>
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
        </FilterContainer>
    )
}

SearchFilters.propTypes = {
    filters: PropTypes.array,
    setFilters: PropTypes.func,
}

export default SearchFilters
