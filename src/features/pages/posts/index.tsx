import React from 'react'
import moment from 'moment'
import Layout from 'features/components/templates/layout'
import * as styles from './posts.module.scss'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import dclsx from 'features/utils/dclsx'

const PostsModule = ({ data }: TBlogPosts) => {
    const posts = data?.allStrapiPost?.nodes || []
    console.log(data, 'www')
    return (
        <Layout>
            <Flex.Box margin_block="12x" direction="col" className={styles.posts_wrapper}>
                <Typography.Heading as="h2" size="small">
                    <Localize translate_text={'_t_Recent articles_t_'} />
                </Typography.Heading>

                <Flex.Box wrap="wrap" margin_block="15x" justify="around">
                    {posts?.map(({ hero }) => {
                        const { title, banner, date } = hero
                        const parsedDate = moment(date)
                        const formattedDate = parsedDate?.format('Do [of] MMMM YYYY')
                        return (
                            <Flex.Box direction="col" key={title} className={styles.image_wrapper}>
                                <Link url={{ type: 'internal', to: '/' }} no_hover>
                                    <img
                                        src={banner?.localFile?.publicURL}
                                        className={styles.post_image}
                                    />
                                </Link>
                                <div className={dclsx('margin-block-10x')}>
                                    <Link url={{ type: 'internal', to: '/' }} no_hover>
                                        <Typography.Heading as="h3" size="xxs">
                                            <Localize translate_text={`_t_${title}_t_`} />
                                        </Typography.Heading>
                                    </Link>
                                    <div
                                        className={dclsx(
                                            'text-medium',
                                            'typography-color-gray-shade',
                                        )}
                                    >
                                        {formattedDate || ''}
                                    </div>
                                </div>
                            </Flex.Box>
                        )
                    })}
                </Flex.Box>
            </Flex.Box>
        </Layout>
    )
}

export default PostsModule
