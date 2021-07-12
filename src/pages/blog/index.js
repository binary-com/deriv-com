import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Hero from './components/_hero'
import Layout from 'components/layout/layout'
import { SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { Carousel } from 'components/elements'

const query = graphql`
    query {
        hero_image_one: file(relativePath: { eq: "blog/blog-bg1.png" }) {
            ...fadeIn
        }
        hero_image_two: file(relativePath: { eq: "blog/blog-bg2.png" }) {
            ...fadeIn
        }
        hero_image_three: file(relativePath: { eq: "blog/blog-bg3.png" }) {
            ...fadeIn
        }
    }
`
const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`

const DerivBlog = () => {
    const settings = {
        options: {
            loop: true,
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        slide_style: {
            minWidth: '100%',
            position: 'relative',
        },
        navigation_style: {
            nav_color: '--color-grey-5',
        },
    }
    const data = useStaticQuery(query)
    return (
        <Layout type="blog" is_ppc_redirect={true}>
            <SEO title={localize('Blog')} description={localize('Blog like a boss')} no_index />
            <MainWrapper>
                <Carousel has_autoplay autoplay_interval={60000000} {...settings}>
                    <Hero
                        heroImage={data['hero_image_one']}
                        title={localize('BeSquare')}
                        description={localize(
                            'Our 6-month programme aims to make fresh graduates attractive to hiring managers by providing them with square-shaped skills, mentorship, and a once-in-a-lifetime work experience.',
                        )}
                    />
                    <Hero
                        heroImage={data['hero_image_two']}
                        title={localize('This week’s market report')}
                        description={localize(
                            'We give our 2 satoshis about the crypto market outlook, and talk about the performance of other markets in the past week. ',
                        )}
                    />
                    <Hero
                        heroImage={data['hero_image_three']}
                        title={localize('Free ebook: How to trade stocks the smart way')}
                        description={localize(
                            'Today, financial markets are open to everyone, not just the financial elite. This ebook by Vince Stanzione teaches you how you can trade stocks just like the pros.',
                        )}
                    />
                </Carousel>
            </MainWrapper>
        </Layout>
    )
}

export default WithIntl()(DerivBlog)
