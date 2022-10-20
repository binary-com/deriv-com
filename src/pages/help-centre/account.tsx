import React from 'react'
import DefaultAnswer from './components/_default-answer'
import useData from './components/use-data'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'

const category = 'Account'

const Account = () => {
    const data = useData(category)

    if (data) {
        const { articles } = data
        return (
            <QuestionsTemplate category={category} data={articles}>
                {articles.map(({ label, question, answer }) => (
                    <DefaultAnswer key={label} question={question} answer={answer} label={label} />
                ))}
            </QuestionsTemplate>
        )
    }
    return <></>
}

export default WithIntl()(Account)
