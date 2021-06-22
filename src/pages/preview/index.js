import React, { useEffect, useState } from 'react'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'

const PreviewPage = () => {
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)
    const end_point_url = 'http://178.128.101.81:8055/items/articles/'

    useEffect(() => {
        const getPreviewId = () => {
            if (typeof window !== 'undefined') {
                const query_string = window.location.search
                const url_params = new URLSearchParams(query_string)
                const preview_id = url_params.get('article_id')
                if (preview_id) {
                    setId(preview_id)
                }
                console.log('useEffect: ', preview_id)
            }
        }
        const fetchPhotos = async () => {
            const res = await fetch(`${end_point_url}${id}`)
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
                <>
                    <Header as="h1" type="page-title" align="center">
                        {data?.data.article_title}
                    </Header>
                    <div dangerouslySetInnerHTML={{ __html: data?.data.article_body }}></div>
                </>
            )}
        </Layout>
    )
}

export default WithIntl()(PreviewPage)
