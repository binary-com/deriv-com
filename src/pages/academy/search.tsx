import React, { useContext, useEffect, useState } from 'react'
import { matchSorter } from 'match-sorter'
import { useQueryParams, StringParam } from 'use-query-params'
import { combined_filter_type } from './common/_constants'
import { SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { DerivStore } from 'store'

const SearchPage = () => {
    const { academy_data } = useContext(DerivStore)
    const [search_result, setSearchResult] = useState([])

    const [query] = useQueryParams({
        q: StringParam,
        type: StringParam,
        category: StringParam,
    })
    const { q: search_query, type: items_type, category: category_type } = query

    const filter_types = combined_filter_type
    const combined_data = [...academy_data.blog, ...academy_data.videos]

    useEffect(() => {
        // there are 3 params type
        /* 1) q is for query - optional
               2) type (either article or video) - optional
               3) category (category to be filtered) - optional

               if q
                    - q

                if search from article page
                    - q & type = article

                if search from video page
                    - q & type = video

                if category from banner
                    - category

                if category from article
                    - category & type = article

                if category from video
                    - category & type = video

            */

        // const search_query = params.get('q')
        // const items_type = params.get('type')
        // const category_type = params.get('category')

        if (search_query && !items_type) {
            const result_arr = getSearchResult(search_query)
            setSearchResult(result_arr)
        }

        if (items_type) {
            if (search_query) {
                const result_arr = getSearchResult(search_query)
                const filter_result = getSearchResultBasedOnType(result_arr, items_type)
                setSearchResult(filter_result)
            } else if (category_type) {
                const category_result = getFilterResult(category_type)
                const filtered_category_result = getSearchResultBasedOnType(
                    category_result,
                    items_type,
                )

                setSearchResult(filtered_category_result)
            }
        }

        if (category_type && !items_type) {
            const category_result = getFilterResult(category_type)
            setSearchResult(category_result)
        }
        // }
    }, [query])

    const getSearchResult = (q: string) => {
        let result
        if (q !== '') {
            result = matchSorter(combined_data, q, {
                keys: ['blog_title', 'video_title'],
            })
        } else result = null

        return result
    }

    const getSearchResultBasedOnType = (obj, params: string) => {
        const result = []
        let key_to_find: string

        if (params == 'article') {
            key_to_find = 'blog_title'
        } else if (params == 'video') {
            key_to_find = 'video_title'
        }

        obj.forEach((items) => {
            if (key_to_find in items) {
                result.push(items)
            }
        })

        return result
    }

    const getFilterResult = (type) => {
        let filter_title, result

        filter_types.forEach((arr) => {
            arr.items.forEach((element) => {
                if (element.short_title === type) {
                    filter_title = element.title
                }
            })
        })

        if (filter_title !== '') {
            result = matchSorter(combined_data, type, {
                keys: ['tags.*.tags_id.tag_name'],
            })
        } else {
            result = null
        }

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
            <Flex fd="column">
                <Flex>Search Result:</Flex>
                {search_result &&
                    search_result.map((items, index) => {
                        return (
                            <Flex m="2rem" key={index}>
                                {items.blog_title
                                    ? 'Article -' + items.blog_title
                                    : 'Video - ' + items.video_title}
                            </Flex>
                        )
                    })}
            </Flex>
        </Layout>
    )
}

export default WithIntl()(SearchPage)
