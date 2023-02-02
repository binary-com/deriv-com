import React from 'react'
import styled from 'styled-components'
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
    margin?: string
    title_text_color?: string
    subtitle_text_color?: string
    width?: string
    height?: string
    align_title?: string
    align_subtitle?: string
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
    font-family: Ubuntu, sans-serif;
    font-weight: 'bold';
    text-align: ${(props) => props.align_title};
    line-height: ${(props) => props.line_height};
`

const StyledSubtitle = styled.p<CommonHeaderSectionProps>`
    color: ${(props) => props.subtitle_text_color};
    font-size: ${(props) => props.subtitle_font_size};
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 'normal';
    margin: ${(props) => props.margin};
    text-align: ${(props) => props.align_subtitle};
    line-height: ${(props) => props.line_height};
`
const CommonHeaderSection = ({
    title,
    subtitle,
    padding,
    margin,
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
        <StyledCommonHeaderSection
            bgcolor={bgcolor}
            color={color}
            padding={padding}
            width={width}
            height={height}
        >
            <Flex direction="column">
                <StyledTitle
                    title_text_color={title_text_color}
                    title_font_size={title_font_size}
                    align_title={align_title}
                    line_height={line_height}
                >
                    {title}
                </StyledTitle>
                <StyledSubtitle
                    subtitle_text_color={subtitle_text_color}
                    subtitle_font_size={subtitle_font_size}
                    margin={margin}
                    align_subtitle={align_subtitle}
                    line_height={line_height}
                >
                    {subtitle}
                </StyledSubtitle>
            </Flex>
        </StyledCommonHeaderSection>
    )
}
export default CommonHeaderSection
