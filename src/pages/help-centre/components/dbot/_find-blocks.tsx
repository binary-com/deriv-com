import React from 'react'
import { ImageWrapper, Image } from './_dbot-styles'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
// Images
import GetStartedImage from 'images/common/help-centre/dbot-button-get-started.png'
import SearchBarImage from 'images/common/help-centre/dbot-search-bar.png'

const data = [
    {
        translate_text:
            "_t_1. Click 'Get started' at the top left corner to open the blocks menu._t_",
        img: {
            src: GetStartedImage,
            alt: 'Get Started',
            width: '14.2rem',
        },
    },
    {
        translate_text:
            '_t_2. The blocks are categorised accordingly. Just choose the blocks you want and drag them to the workspace._t_',
        hide_margin_top: true,
    },
    {
        translate_text:
            '_t_3. You can also search for the blocks you want using the search field on the toolbar at the top of the workspace._t_',
        img: {
            src: SearchBarImage,
            alt: 'Search',
            width: '17.9rem',
        },
    },
]

const FindBlocks = () =>
    data.map(({ translate_text, img, hide_margin_top }) => (
        <Header key={translate_text} size="16px" weight="normal" mt={!hide_margin_top && '1.7rem'}>
            <Localize translate_text={translate_text} />
            {img && (
                <ImageWrapper>
                    <Image src={img.src} alt={img.alt} width={img.width} loading="lazy" />
                </ImageWrapper>
            )}
        </Header>
    ))

export default FindBlocks
