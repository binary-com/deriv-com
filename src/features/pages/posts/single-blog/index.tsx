import React from 'react'
import moment from 'moment/moment'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import Footer from 'features/components/templates/footer'
import Calendar from 'images/svg/blog/calendar.svg'
import Tag from 'images/svg/blog/tag.svg'

const PostModule = (data: any) => {
    const { hero, blogPostMarkDown } = data?.data?.strapiPost || {}
    const momentDate = moment(hero?.date)
    const formattedDate = momentDate.format('MMMM D, YYYY')

    return (
        <Layout>
            <MainNav />

            <Flex.Box
                direction="col"
                align="center"
                style={{ fontSize: '1.6rem', margin: '100px auto', inlineSize: '128rem' }}
            >
                <Flex.Box
                    direction="row"
                    style={{
                        justifyContent: 'space-between',
                        marginBlockEnd: '50px',
                    }}
                >
                    <Flex.Box direction="col" gap="31x" justify="center">
                        <Flex.Box gap="5x" align="center">
                            <span>
                                <img src={Calendar} alt="" />
                            </span>
                            <span>{formattedDate}</span>
                        </Flex.Box>
                        <Typography.Heading as="h2" size="small">
                            {hero?.title}
                        </Typography.Heading>
                        <Flex.Box gap="5x" align="center">
                            <span>
                                <img src={Tag} alt="" />
                            </span>
                            <span>
                                <a
                                    href="https://blog.deriv.com/tag/forex/"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        color: `var(--e-global-color-secondary)`,
                                    }}
                                >
                                    {hero?.tags}
                                </a>
                            </span>
                        </Flex.Box>
                    </Flex.Box>
                    <div>
                        <img
                            src={hero?.banner?.localFile?.publicURL}
                            alt=""
                            width="800px"
                            height="auto"
                        />
                    </div>
                </Flex.Box>
                <div
                    dangerouslySetInnerHTML={{
                        __html: blogPostMarkDown?.data?.childrenMarkdownRemark[0]?.html,
                    }}
                />
            </Flex.Box>

            <Footer />
        </Layout>
    )
}

export default PostModule
