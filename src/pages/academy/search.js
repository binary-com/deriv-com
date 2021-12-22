import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SearchBanner from './components/_search-banner'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { combined_filter_type } from 'common/constants'

const SearchPage = ({ location }) => {
    const [category_title, setCategoryTitle] = useState('')

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const category_type = params.get('category')
        filter_category_params(category_type)
    }, [location])

    const filter_category_params = (params) => {
        const all_filter_type = combined_filter_type
        all_filter_type.forEach((item) => {
            const category_arr = item.items.find((element) => element.short_title == params)
            setCategoryTitle(category_arr)
            // const category_title = category_arr.title
            /* eslint-disable */
            console.log(JSON.stringify(category_arr, null, 2))
            /* eslint-enable */
        })
    }

    return (
        <Layout type="academy">
            <SEO
                title={localize('Articles, trading guide and resources | Deriv')}
                description={localize(
                    "If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online.",
                )}
            />
            <SearchBanner />
            <Flex>
                <Container>{category_title}</Container>
            </Flex>
        </Layout>
    )
}

SearchPage.propTypes = {
    location: PropTypes.object,
}

export default WithIntl()(SearchPage)
