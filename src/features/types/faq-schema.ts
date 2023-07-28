type contentType = 'FAQPage' | 'Question' | 'Answer'

type AcceptedAnswerType = {
    '@type': contentType
    text: string
}

type MainEntityType = {
    '@type': contentType
    name: string
    acceptedAnswer: AcceptedAnswerType
}

export type FaqSchemaType = {
    '@context': string
    '@type': contentType
    mainEntity: MainEntityType[]
}
