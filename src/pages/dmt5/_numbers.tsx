import React from 'react'
import DNumber from 'components/custom/_dnumbers'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

// TO-DO (REBRANDING) Replace this component with NumberSection.
type NumbersContentType = {
    title: React.ReactElement
    subtitle: React.ReactElement
}

const numbers_content: NumbersContentType[] = [
    {
        title: <Localize translate_text="330K+" />,
        subtitle: <Localize translate_text="clients on Deriv MT5" />,
    },
    {
        title: <Localize translate_text="200+" />,
        subtitle: <Localize translate_text="tradable assets" />,
    },
    {
        title: <Localize translate_text="24/7" />,
        subtitle: <Localize translate_text="trading" />,
    },
]
const numbers_content_eu: NumbersContentType[] = [
    {
        title: <Localize translate_text="475K+" />,
        subtitle: <Localize translate_text="active traders on Deriv MT5" />,
    },
    {
        title: <Localize translate_text="150+" />,
        subtitle: <Localize translate_text="tradable assets" />,
    },
    {
        title: <Localize translate_text="24/7" />,
        subtitle: <Localize translate_text="trading" />,
    },
]

const Numbers = () => {
    const { is_eu } = useRegion()
    const contents = is_eu ? numbers_content_eu : numbers_content

    return <DNumber items={contents} justify="space-around" />
}

export default Numbers
