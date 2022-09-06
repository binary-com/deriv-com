// THIS FRAGMENT IS USED IN THE ACADEMY PAGE

import { graphql } from 'gatsby'

export const academyQuery = graphql`
    fragment AcademyIndex on Query {
        directus {
            homepage_banners(filter: { status: { _eq: "published" } }) {
                order
                id
                button_text
                link
                heading
                sub_heading
                image {
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(quality: 60, width: 1600)
                        }
                    }
                    id
                    description
                }
            }
            homepage_banners_eu: homepage_banners(
                filter: {
                    status: { _eq: "published" }
                    _or: [
                        { visibility: { _eq: "hide_for_uk" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
            ) {
                order
                id
                button_text
                link
                heading
                sub_heading
                image {
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(quality: 60, width: 1600)
                        }
                    }
                    id
                    description
                }
            }
            homepage_banners_uk: homepage_banners(
                filter: {
                    status: { _eq: "published" }
                    _or: [
                        { visibility: { _eq: "hide_for_eu" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
            ) {
                order
                id
                button_text
                link
                heading
                sub_heading
                image {
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(quality: 60, width: 1600)
                        }
                    }
                    id
                    description
                }
            }
            market_news: blog(
                filter: {
                    tags: { tags_id: { tag_name: { _contains: "Market report" } } }
                    status: { _eq: "published" }
                    test_data: { _eq: false }
                }
                limit: 6
                sort: "-published_date"
            ) {
                id
                blog_title
                slug
                tags {
                    tags_id {
                        tag_name
                    }
                }
                blog_post
                main_image {
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(width: 200)
                        }
                    }
                    description
                    id
                }
            }
            market_news_eu: blog(
                filter: {
                    tags: { tags_id: { tag_name: { _contains: "Market report" } } }
                    status: { _eq: "published" }
                    test_data: { _eq: false }
                    _or: [
                        { visibility: { _eq: "hide_for_uk" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                limit: 6
                sort: "-published_date"
            ) {
                id
                blog_title
                slug
                tags {
                    tags_id {
                        tag_name
                    }
                }
                blog_post
                main_image {
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(width: 200, aspectRatio: 1.6666666667)
                        }
                    }
                    description
                    id
                }
            }
            market_news_uk: blog(
                filter: {
                    tags: { tags_id: { tag_name: { _contains: "Market report" } } }
                    status: { _eq: "published" }
                    test_data: { _eq: false }
                    _or: [
                        { visibility: { _eq: "hide_for_eu" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                limit: 6
                sort: "-published_date"
            ) {
                id
                blog_title
                slug
                tags {
                    tags_id {
                        tag_name
                    }
                }
                blog_post
                main_image {
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(width: 200)
                        }
                    }
                    description
                    id
                }
            }
            videos(limit: 6, filter: { status: { _eq: "published" } }, sort: "-published_date") {
                video_title
                published_date
                video_description
                video_duration
                video_slug
                featured
                video_thumbnail {
                    id
                    title
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
            videos_eu: videos(
                limit: 6
                filter: {
                    status: { _eq: "published" }
                    _or: [
                        { visibility: { _eq: "hide_for_uk" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
            ) {
                video_title
                published_date
                video_description
                video_duration
                video_slug
                featured
                video_thumbnail {
                    id
                    title
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
            videos_uk: videos(
                limit: 6
                filter: {
                    status: { _eq: "published" }
                    _or: [
                        { visibility: { _eq: "hide_for_eu" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
            ) {
                video_title
                published_date
                video_description
                video_duration
                video_slug
                featured
                video_thumbnail {
                    id
                    title
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
            featured_video: videos(
                filter: { status: { _eq: "published" }, featured: { _eq: true } }
                sort: "-published_date"
                limit: 1
            ) {
                video_title
                published_date
                video_description
                video_duration
                video_slug
                featured
                video_thumbnail {
                    id
                    title
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667, quality: 60)
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
            featured_video_eu: videos(
                filter: {
                    status: { _eq: "published" }
                    featured: { _eq: true }
                    _or: [
                        { visibility: { _eq: "hide_for_uk" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
                limit: 1
            ) {
                video_title
                published_date
                video_description
                video_duration
                video_slug
                featured
                video_thumbnail {
                    id
                    title
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667, quality: 60)
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
            featured_video_uk: videos(
                filter: {
                    status: { _eq: "published" }
                    featured: { _eq: true }
                    _or: [
                        { visibility: { _eq: "hide_for_eu" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
                limit: 1
            ) {
                video_title
                published_date
                video_description
                video_duration
                video_slug
                featured
                video_thumbnail {
                    id
                    title
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667, quality: 60)
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
            recent: blog(
                filter: { status: { _eq: "published" }, test_data: { _eq: false } }
                sort: "-published_date"
                limit: 8
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                slug
                published_date
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
            }
            recent_eu: blog(
                filter: {
                    status: { _eq: "published" }
                    test_data: { _eq: false }
                    _or: [
                        { visibility: { _eq: "hide_for_uk" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
                limit: 8
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                slug
                published_date
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
            }
            recent_uk: blog(
                filter: {
                    status: { _eq: "published" }
                    test_data: { _eq: false }
                    _or: [
                        { visibility: { _eq: "hide_for_eu" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
                limit: 8
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                slug
                published_date
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
            }
            featured: blog(
                filter: {
                    status: { _eq: "published" }
                    featured: { _eq: true }
                    test_data: { _eq: false }
                }
                sort: "-published_date"
                limit: 8
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                slug
                published_date
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
            }
            featured_eu: blog(
                filter: {
                    status: { _eq: "published" }
                    featured: { _eq: true }
                    test_data: { _eq: false }
                    _or: [
                        { visibility: { _eq: "hide_for_uk" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
                limit: 8
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                slug
                published_date
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
            }
            featured_uk: blog(
                filter: {
                    status: { _eq: "published" }
                    featured: { _eq: true }
                    test_data: { _eq: false }
                    _or: [
                        { visibility: { _eq: "hide_for_eu" } }
                        { visibility: { _eq: "visible_to_all" } }
                    ]
                }
                sort: "-published_date"
                limit: 8
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.6666666667)
                        }
                    }
                }
                slug
                published_date
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
            }
        }
    }
`
