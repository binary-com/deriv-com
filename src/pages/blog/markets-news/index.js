import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MarketNews from '../_markets-news'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const DerivBlog = (props) => {
    return (
        <Layout>
            <MarketNews data={props.data.directus} />
        </Layout>
    )
}

export default WithIntl()(DerivBlog)

DerivBlog.propTypes = {
    data: PropTypes.object,
}
export const query = graphql`
    {
        directus {
            blog(
                filter: { tags: { tags_id: { tag_name: { _contains: "Market News" } } } }
                limit: 6
            ) {
                id
                blog_title
                tags {
                    tags_id {
                        tag_name
                    }
                }
                read_time_in_minutes
                main_image {
                    imageFile {
                        ...fadeIn
                    }
                    id
                }
            }
        }
    }
`
