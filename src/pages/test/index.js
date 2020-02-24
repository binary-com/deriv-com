import React, { Component } from 'react'
// import matchSorter from 'match-sorter'
import styled from 'styled-components'
import { WithIntl } from 'components/localization'
import { Text } from 'components/elements'
import Layout from 'components/layout/layout'

export const articles = [
    {
        articles: [
            {
                title: 'nooshin',
                label: 'sara',
            },
            {
                title: 'sara',
                label: 'sara',
            },
        ],
    },
    {
        articles: [
            {
                title: 'milad',
                label: 'milad',
            },
            {
                title: 'ali',
                label: 'milad',
            },
            {
                title: 'ahmad',
                label: 'milad',
            },
        ],
    },
    {
        articles: [
            {
                title: 'sdfsdf',
                label: 'sarsdfsda',
            },
            {
                title: 'sdfsdf',

                label: 'sdfsdf',
            },
        ],
    },
    {
        articles: [
            {
                title: 'ewr',

                label: 'ahmdfgad',
            },
            {
                title: 'adfgli',

                label: 'ahmdfgad',
            },
            {
                title: 'ahmdfgad',

                label: 'ahmdfgad',
            },
        ],
    },
    {
        articles: [
            {
                title: 'eee',

                label: 'eee',
            },
            {
                title: 'ttt',

                label: 'ttt',
            },
            {
                title: 'uuu',

                label: 'uuu',
            },
        ],
    },
]
// export const articles = [
//     [
//         {
//             articles: [
//                 {
//                     title: 'nooshin',
//                     label: 'sara',
//                 },
//                 {
//                     title: 'sara',

//                     label: 'sara',
//                 },
//             ],
//         },
//         {
//             articles: [
//                 {
//                     title: 'milad',

//                     label: 'milad',
//                 },
//                 {
//                     title: 'ali',

//                     label: 'milad',
//                 },
//                 {
//                     title: 'ahmad',

//                     label: 'milad',
//                 },
//             ],
//         },
//     ],

//     [
//         {
//             articles: [
//                 {
//                     title: 'sdfsdf',
//                     label: 'sarsdfsda',
//                 },
//                 {
//                     title: 'sdfsdf',

//                     label: 'sdfsdf',
//                 },
//             ],
//         },
//         {
//             articles: [
//                 {
//                     title: 'ewr',

//                     label: 'ahmdfgad',
//                 },
//                 {
//                     title: 'adfgli',

//                     label: 'ahmdfgad',
//                 },
//                 {
//                     title: 'ahmdfgad',

//                     label: 'ahmdfgad',
//                 },
//             ],
//         },
//     ],
// ]
// const getAllArticles = articles =>
//     articles
//         .map(category => category.articles)
//         // flatten the array, gatsby build does not support .flat() yet
//         .reduce((arr, article_arr) => arr.concat(article_arr), [])

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const ArticleDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    margin-bottom: 3rem;
`
// const getAllArticles = articles =>
//     articles
//         .map(category => category.articles)
//         // flatten the array, gatsby build does not support .flat() yet
//         .reduce((arr, article_arr) => arr.concat(article_arr), [])

const splitArticles = (array, length) =>
    array.reduce((result, item, index) => {
        if (index % length === 0) result.push([])
        result[Math.floor(index / length)].push(item)
        return result
    }, [])

class Test extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const splitted = splitArticles(articles, 3)
        // console.log('splitted', splitted)

        // const filtered_articles = matchSorter(getAllArticles(articles), 'sara'.trim(), {
        //     keys: ['title', 'label'],
        // })

        return (
            <Layout>
                <StyledDiv>
                    {splitted.map((article, id) => {
                        // console.log('article', article)
                        return (
                            <RowDiv key={id}>
                                {article.map((item, idx) => {
                                    {
                                        // console.log('item', item.articles)
                                        return (
                                            <ArticleDiv key={idx}>
                                                {item.articles.map((ar, d) => {
                                                    return (
                                                        <div key={d}>
                                                            <Text margin="0 3rem 0 0">
                                                                {ar.title}
                                                            </Text>
                                                        </div>
                                                    )
                                                })}
                                            </ArticleDiv>
                                        )
                                    }
                                })}
                            </RowDiv>
                        )
                    })}
                </StyledDiv>
            </Layout>
        )
    }
}

export default WithIntl()(Test)
