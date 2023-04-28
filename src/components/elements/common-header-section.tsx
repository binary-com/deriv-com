import React from 'react'
import styled from 'styled-components'
import { TString } from 'types/generics'
import { Flex } from 'components/containers'
import { Localize } from 'components/localization'

type CommonHeaderSectionProps = {
    title?: TString
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
    font_weight_title?: string
    font_weight_subtitle?: string
    font_family_title?: string
    font_family_subtitle?: string
}

const StyledCommonHeaderSection = styled.div<CommonHeaderSectionProps>`
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
`

const StyledTitle = styled.h1<CommonHeaderSectionProps>`
    color: ${(props) => props.title_text_color};
    font-size: ${(props) => props.title_font_size};
    font-family: ${(props) =>
        props.font_family_title ? props.font_family_title : 'Ubuntu, sans-serif'};
    font-weight: ${(props) => (props.font_weight_title ? props.font_weight_title : 'bold')};
    margin: ${(props) => props.margin_title};
    text-align: ${(props) => props.align_title};
    line-height: ${(props) => props.line_height};
`

const StyledSubtitle = styled.p<CommonHeaderSectionProps>`
    color: ${(props) => props.subtitle_text_color};
    font-size: ${(props) => props.subtitle_font_size};
    font-family: ${(props) =>
        props.font_family_subtitle ? props.font_family_subtitle : "'IBM Plex Sans', sans-serif"};
    font-weight: ${(props) => (props.font_weight_subtitle ? props.font_weight_subtitle : 'normal')};
    margin: ${(props) => props.margin_subtitle};
    text-align: ${(props) => props.align_subtitle};
    line-height: ${(props) => props.line_height};
`
const CommonHeaderSection = ({
    title,
    subtitle,
    padding,
    margin_subtitle,
    margin_title,
    bgcolor,
    color,
    font_weight_title,
    font_weight_subtitle,
    font_family_title,
    font_family_subtitle,
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
        <StyledCommonHeaderSection
            bgcolor={bgcolor}
            color={color}
            padding={padding}
            width={width}
            height={height}
        >
            <Flex direction="column">
                {title && (
                    <StyledTitle
                        title_text_color={title_text_color}
                        title_font_size={title_font_size}
                        align_title={align_title}
                        margin_title={margin_title}
                        line_height={line_height}
                        font_weight_title={font_weight_title}
                        font_family_title={font_family_title}
                    >
                        <Localize translate_text={title} />
                    </StyledTitle>
                )}
                {subtitle && (
                    <StyledSubtitle
                        subtitle_text_color={subtitle_text_color}
                        subtitle_font_size={subtitle_font_size}
                        margin_subtitle={margin_subtitle}
                        align_subtitle={align_subtitle}
                        line_height={line_height}
                        font_weight_subtitle={font_weight_subtitle}
                        font_family_subtitle={font_family_subtitle}
                    >
                        <Localize translate_text={subtitle} />
                    </StyledSubtitle>
                )}
            </Flex>
        </StyledCommonHeaderSection>
    )
}
export default CommonHeaderSection
