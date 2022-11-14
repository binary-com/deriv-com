import React from 'react'
import styled from 'styled-components'
import Footer from 'components/layout/footer'
import Name1 from 'images/svg/conference/name1.svg'
import Name2 from 'images/svg/conference/name2.svg'
import Name3 from 'images/svg/conference/name3.svg'
import Name4 from 'images/svg/conference/name4.svg'
import { Localize } from 'components/localization'
import ImageContentBlock from 'components/custom/img-content-block'

const Layout = styled.div`
    background: var(--color-white);
`

const data = [
    {
        id: 'name_01',
        image: Name1,
        title: <Localize translate_text="Name" />,
        content: (
            <Localize translate_text="Who is the speaker? This is where you can write a bio to detail your speaker’s credentials and the unique perspective they will give to the conference." />
        ),
    },
    {
        id: 'name_02',
        image: Name2,
        title: <Localize translate_text="Name" />,
        content: (
            <Localize translate_text="Who is the speaker? This is where you can write a bio to detail your speaker’s credentials and the unique perspective they will give to the conference." />
        ),
    },
    {
        id: 'name_03',
        image: Name3,
        title: <Localize translate_text="Name" />,
        content: (
            <Localize translate_text="Who is the speaker? This is where you can write a bio to detail your speaker’s credentials and the unique perspective they will give to the conference." />
        ),
    },
    {
        id: 'name_04',
        image: Name4,
        title: <Localize translate_text="Name" />,
        content: (
            <Localize translate_text="Who is the speaker? This is where you can write a bio to detail your speaker’s credentials and the unique perspective they will give to the conference." />
        ),
    },
]

const Speakers = () => {
    return (
        <Layout>
            {data.map(({ image, title, content, id }) => {
                return <ImageContentBlock title={title} image={image} content={content} key={id} />
            })}
            <Footer />
        </Layout>
    )
}

export default Speakers
