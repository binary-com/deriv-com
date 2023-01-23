import React from 'react'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'
import { Flex } from 'components/containers'

type CommonHeaderSectionProps = {
    title?: TString
    subtitle?: TString
    padding?: string
    bgcolor?: string
    title_font_size?: string
    subtitle_font_size?: string
    color?: string
    text_color?: string
    font_weight?: string
    font_style?: string
    margin?: string
    title_text_color?: string
    subtitle_text_color?: string
    width?: string
    height?: string
    align_title?: string
    align_subtitle?: string
}

const CommonHeaderSection = ({
    title,
    subtitle,
    padding,
    margin,
    bgcolor,
    color,
    title_text_color,
    subtitle_text_color,
    title_font_size,
    subtitle_font_size,
    width,
    height,
    align_title,
    align_subtitle,
}: CommonHeaderSectionProps) => {
    return (
        <div
            style={{
                backgroundColor: bgcolor,
                color: color,
                padding: padding,
                width: width,
                height: height,
            }}
        >
            <Flex direction="column">
                <h1
                    style={{
                        color: title_text_color,
                        fontSize: title_font_size,
                        fontFamily: 'Ubuntu',
                        fontWeight: 'bold',
                        margin: margin,
                        textAlign: align_title,
                    }}
                >
                    <Localize translate_text={title} />
                </h1>
                <p
                    style={{
                        color: subtitle_text_color,
                        fontSize: subtitle_font_size,
                        fontFamily: 'IBM Plex Sans',
                        fontWeight: 'normal',
                        margin: margin,
                        textAlign: align_subtitle,
                    }}
                >
                    <Localize translate_text={subtitle} />
                </p>
            </Flex>
        </div>
    )
}

export default CommonHeaderSection
