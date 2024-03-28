import { localize } from 'components/localization'

type VideoSchemaType = {
    '@context': string
    '@type': string
    name: string
    description: string
    thumbnailUrl: string[]
    uploadDate: string
    duration: string
    contentUrl: string
    embedUrl: string
    interactionStatistic: {
        '@type': string
        interactionType: { '@type': string }
        userInteractionCount: number
    }
    regionsAllowed: string
}

export const accumulator_options_video_schema: VideoSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: localize('_t_Accumulator options_t_'),
    description: '',
    thumbnailUrl: [
        'https://i.vimeocdn.com/video/1802590890-87dbeab783be62940dae5798d760708f253c9abcfe63c990fe1d6ba30745fb45-d_100x75',
        ' https://i.vimeocdn.com/video/1802590890-87dbeab783be62940dae5798d760708f253c9abcfe63c990fe1d6ba30745fb45-d_200x150',
        'https://i.vimeocdn.com/video/1802590890-87dbeab783be62940dae5798d760708f253c9abcfe63c990fe1d6ba30745fb45-d_640',
    ],
    uploadDate: '2024-02-22 03:39:43',
    duration: 'PT1M54S',
    contentUrl: 'https://vimeo.com/915479906',
    embedUrl: 'https://player.vimeo.com/video/915479906',
    interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'WatchAction' },
        userInteractionCount: 5647018,
    },
    regionsAllowed: '',
}
export const how_to_trade_video_schema: VideoSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'How to trade accumulator options on Deriv Trader',
    description: '',
    thumbnailUrl: [
        'https://i.vimeocdn.com/video/1805100037-7bedb6314f58f350105dcd055eef2c649e04a922813fb17453e8d76b0e179037-d_100x75',
        'https://i.vimeocdn.com/video/1805100037-7bedb6314f58f350105dcd055eef2c649e04a922813fb17453e8d76b0e179037-d_200x150',
        'https://i.vimeocdn.com/video/1805100037-7bedb6314f58f350105dcd055eef2c649e04a922813fb17453e8d76b0e179037-d_640',
    ],
    uploadDate: '2024-02-27T02:22:29+08:00',
    contentUrl: 'https://vimeo.com/917007011',
    embedUrl: 'https://player.vimeo.com/video/917007011',
    duration: 'PT1M54S',
    interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'WatchAction' },
        userInteractionCount: 5647018,
    },
    regionsAllowed: '',
}
