import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { matchSorter } from 'match-sorter'
import SearchBanner from './components/_search-banner'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { combined_filter_type } from 'common/constants'
import { DerivStore } from 'store'

const SearchPage = ({ location }) => {
    const [is_mounted] = usePageLoaded(false)
    const { academy_data } = useContext(DerivStore)
    const [category_title, setCategoryTitle] = useState('')
    const [category_result, setCategoryResult] = useState([])
    const [search_result, setSearchResult] = useState([])

    const filter_types = combined_filter_type
    const combined_data = [...academy_data.blog, ...academy_data.videos]

    useEffect(() => {
        if (is_mounted) {
            const params = new URLSearchParams(location.search)
            const category_type = params.get('category')
            const search_query = params.get('q')

            if (category_type) {
                setCategoryTitle(category_type)
            }

            if (search_query) {
                const result_arr = getSearchResult(search_query)

                setSearchResult(result_arr)

                /* eslint-disable */
                console.log(JSON.stringify(search_result, null, 2))
                /* eslint-enable */
            }
        }
    }, [location])

    useEffect(() => {
        if (category_title) {
            let filter_title, result

            filter_types.forEach((arr) => {
                arr.items.forEach((element) => {
                    if (element.short_title === category_title) {
                        filter_title = element.title
                    }
                })
            })

            if (filter_title !== '') {
                result = matchSorter(combined_data, category_title, {
                    keys: ['tags.0.tags_id.tag_name'],
                })
            } else {
                result = null
            }

            setCategoryResult(result)
        }
    }, [category_title])

    const getSearchResult = (q) => {
        let result
        if (q !== '') {
            result = matchSorter(combined_data, q, {
                keys: ['blog_title', 'video_title'],
            })
        } else result = null

        return result
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
                <Container fd="column">
                    <>
                        <Flex fd="column">
                            {category_result.length > 0 ? (
                                category_result.map((item, idx) => {
                                    return (
                                        <Flex key={idx}>
                                            {item.blog_title ? item.blog_title : item.video_title}
                                        </Flex>
                                    )
                                })
                            ) : (
                                <p>No data for this Category</p>
                            )}
                        </Flex>
                    </>
                </Container>
            </Flex>
            <Flex fd="column">
                <Flex>Search Result:</Flex>
                {search_result &&
                    search_result.map((search_items, index) => {
                        return (
                            <Flex key={index}>
                                {search_items.blog_title
                                    ? search_items.blog_title
                                    : search_items.video_title}
                            </Flex>
                        )
                    })}
            </Flex>
        </Layout>
    )
}

SearchPage.propTypes = {
    location: PropTypes.object,
}

export default WithIntl()(SearchPage)
