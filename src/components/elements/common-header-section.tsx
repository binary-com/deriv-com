import React from 'react'
import { TString } from 'types/generics'
import { Flex } from 'components/containers'

type CommonHeaderSectionProps = {
    title?: any
    subtitle?: TString
    padding?: string
    bgcolor?: string
    title_font_size?: string
    subtitle_font_size?: string
    color?: string
    line_height?: string
    text_color?: string
    font_weight?: string
    font_style?: string
    margin_title?: string
    margin_subtitle?: string
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
    margin_subtitle,
    margin_title,
    bgcolor,
    color,
    line_height,
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
                {title && (
                    <h1
                        style={{
                            color: title_text_color,
                            fontSize: title_font_size,
                            fontFamily: 'Ubuntu',
                            fontWeight: 'bold',
                            margin: margin_title,
                            textAlign: align_title as any,
                            lineHeight: line_height,
                        }}
                    >
                        <Localize translate_text={title} />
                    </h1>
                )}
                {subtitle && (
                    <p
                        style={{
                            color: subtitle_text_color,
                            fontSize: subtitle_font_size,
                            fontFamily: 'IBM Plex Sans',
                            fontWeight: 'normal',
                            margin: margin_subtitle,
                            textAlign: align_subtitle as any,
                            lineHeight: line_height,
                        }}
                    >
                        <Localize translate_text={subtitle} />
                    </p>
                )}
            </Flex>
        </div>
    )
}

export default CommonHeaderSection
