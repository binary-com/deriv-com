import React from 'react'
import styled from 'styled-components'
import { RoleBanner } from '../_layout-components/_banner'
import { all_positions } from '../_controller/_teams'
import SearchForm from './_search-form'
import SearchFilters from './_search-filters'
import CardList from './_card-list'
import Pagination from './_pagination'
import { SEO, Container, SectionContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements'

const StyledDivider = styled(Divider)`
    margin: 0 5rem;
`
const Jobs = () => {
    const [filters, setFilters] = React.useState([])
    const positions = all_positions

    // const open_positions = getOpenPositionsByQuery(query, [filters])

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Jobs')} />
            <SectionContainer>
                <Container align="flex-start">
                    <SearchFilters filters={filters} setFilters={setFilters} />
                    <StyledDivider height="104.6rem" width="2px" />
                    <Flex direction="column">
                        <SearchForm />
                        <Pagination page_limit={4}>
                            {positions &&
                                positions.map((position, idx) => (
                                    <CardList key={idx} position={position} />
                                ))}
                        </Pagination>
                    </Flex>
                </Container>
            </SectionContainer>
            <RoleBanner />
        </Layout>
    )
}

export default WithIntl()(Jobs)
