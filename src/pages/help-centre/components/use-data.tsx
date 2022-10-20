import { useState, useEffect } from 'react'
import articles_data, { ArticlesDataType } from './_data'

const useData = (article_category: string) => {
    const [data, setData] = useState<ArticlesDataType>()

    useEffect(() => {
        const filtered_data = articles_data.filter(
            ({ category }) => category === `_t_${article_category}_t_`,
        )
        setData(filtered_data[0])
    }, [])

    return data
}

export default useData
