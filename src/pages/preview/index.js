import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO, SectionContainer, SmallContainer } from 'components/containers'
import { Header } from 'components/elements'

const PreviewContainer = styled.div`
    font-size: 16px;

    & p {
        margin-top: 32px;
        font-weight: 400;
        line-height: 32px;
        font-size: 20px;
    }
    & blockquote {
        margin-top: 32px;
        border-left: 0.25rem solid #ff1a75;
        padding-left: 2rem;
        font-style: italic;
        line-height: 32px;
    }
    & hr {
        margin: 32px 0;
    }
    & ul {
        margin-top: 32px;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;

        > li {
            margin: 10px 0 0 24px;
            padding: 0 0 0 6px;
            line-height: 32px;
            font-size: 20px;

            :first-child {
                margin: 0 0 0 24px;
            }
        }
    }
    & a {
        font-size: 20px;
        color: var(--color-red);
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`

const PreviewPage = () => {
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)
    const end_point_url = 'https://amammustofa.com/items/articles/'

    useEffect(() => {
        const getPreviewId = () => {
            if (typeof window !== 'undefined') {
                const query_string = window.location.search
                const url_params = new URLSearchParams(query_string)
                const preview_id = url_params.get('article_id')
                if (preview_id) {
                    setId(preview_id)
                }
            }
        }
        const fetchPhotos = async () => {
            const res = await fetch(`${end_point_url}${id}`, { cache: 'no-store' })
            const data = await res.json()

            return data
        }

        getPreviewId()

        const getPreviews = async () => {
            const photosFromServer = await fetchPhotos(id)
            setData(photosFromServer)
        }
        if (id) {
            getPreviews()
        }
    }, [id])

    return (
        <Layout>
            <SEO
                description={localize(
                    'Learn about the markets that you can trade online with Deriv, including forex, commodities, synthetic indices, and stock indices.',
                )}
                title={localize('Markets | Markets to trade | Deriv')}
            />
            {id && (
                <SectionContainer>
                    <SmallContainer fd="column">
                        <Header as="h1" type="page-title">
                            {data?.data.article_title}
                        </Header>

                        <PreviewContainer
                            dangerouslySetInnerHTML={{ __html: data?.data.article_body }}
                        ></PreviewContainer>
                    </SmallContainer>
                </SectionContainer>
            )}
        </Layout>
    )
}

export default WithIntl()(PreviewPage)
