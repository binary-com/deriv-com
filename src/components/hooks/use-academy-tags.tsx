import { useStaticQuery, graphql } from 'gatsby'

type VideoTagsType = string[]
type BlogTagsType = string[]

// This hook is used to fetch tags used by the videos
export const useAcademyTags = (): [VideoTagsType, BlogTagsType] => {
    const all_tags = useStaticQuery(query)
    let video_tags = []
    let blog_tags = []
    const all_video_tags = all_tags?.directus.videos_tags
    const all_blog_tags = all_tags?.directus.blog_tags

    // loop over all objects and add the respective tag name to its list of array
    all_video_tags.forEach((obj) => {
        video_tags.push(obj?.tags_id.tag_name)
    })
    all_blog_tags.forEach((obj) => {
        blog_tags.push(obj?.tags_id.tag_name)
    })

    // remove duplicates
    video_tags = [...new Set(video_tags)]
    blog_tags = [...new Set(blog_tags)]

    return [video_tags, blog_tags]
}

const query = graphql`
    query Tags {
        directus {
            videos_tags {
                tags_id {
                    tag_name
                }
            }
            blog_tags {
                tags_id {
                    tag_name
                }
            }
        }
    }
`
