import React from 'react'
import styled, { css } from 'styled-components'
import { useIsRtl } from 'components/hooks/use-isrtl'
import CommonHeaderSection from 'components/elements/common-header-section'
import { TString } from 'types/generics'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const Checkmark = styled.span<{ is_rtl: boolean }>`
    display: inline-block;
    width: 22px;
    height: 22px;
    ${({ is_rtl }) => {
        return is_rtl
            ? css`
                  transform: rotate(45deg) scaleX(-1);
              `
            : css`
                  transform: rotate(45deg) scaleX(1);
              `
    }}

    &::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 9px;
        background-color: ${(props) => (props.color ? props.color : 'var(--color-white)')};
        left: 11px;
        top: 6px;
    }
    &::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 2px;
        background-color: ${(props) => (props.color ? props.color : 'var(--color-white)')};
        left: 8px;
        top: 13px;
    }
`

const ContentWrapper = styled.div`
    margin-top: 0;
    margin-left: 6rem;
`
const OvalWrapper = styled.div`
    width: 24px;
    height: 24px;
    line-height: 2.75rem;
    background-color: ${(props) => (props.color ? props.color : 'var(--color-red)')};
    border-radius: 50%;
    text-align: center;
    margin-right: 0.8rem;
    position: absolute;
    padding-left: 1px;
    left: -13px;
`

const FlexWrapper = styled.div<StepperViewTickProps>`
    display: flex;
    border-left: ${(props) => (props.is_border ? 'var(--color-red) dashed 1px' : 'unset')};
    position: relative;
    padding-bottom: ${(props) => (props.pb ? props.pb : '4rem')};
`
const Oval = () => {
    const is_rtl = useIsRtl()

    return (
        <OvalWrapper>
            <Checkmark is_rtl={is_rtl} />
        </OvalWrapper>
    )
}

type StepperViewTickProps = {
    pb?: string
    pl?: string
    is_border?: boolean
    color?: string
}

type StepperViewProps = {
    first_step_title?: TString
    first_step_subtitle?: TString
    second_step_title?: TString
    second_step_subtitle?: TString
    third_step_title?: TString
    third_step_subtitle?: TString
    fourth_step_title?: TString
    fourth_step_subtitle?: TString
} & Pick<StepperViewTickProps, 'pb' | 'pl'>

interface Item {
    title?: TString
    subtitle?: TString
}

const handleLastBorder = (index, items) => {
    if (index !== items.length - 1) {
        return true
    }
    return false
}

const StepperView = ({
    pb,
    first_step_title,
    first_step_subtitle,
    second_step_title,
    second_step_subtitle,
    third_step_title,
    third_step_subtitle,
}: StepperViewProps) => {
    const [is_mobile] = useBrowserResize()

    const items: Item[] = [
        {
            title: first_step_title,
            subtitle: first_step_subtitle,
        },
        {
            title: second_step_title,
            subtitle: second_step_subtitle,
        },
        {
            title: third_step_title,
            subtitle: third_step_subtitle,
        },
    ]
    return (
        <>
            {items.map((item, index) => (
                <div key={item.title}>
                    <FlexWrapper is_border={handleLastBorder(index, items)} pb={pb}>
                        <ContentWrapper>
                            <Oval></Oval>
                            <CommonHeaderSection
                                title={item.title}
                                subtitle={item.subtitle}
                                title_font_size={is_mobile ? '18px ' : '24px'}
                                margin_subtitle="1.3rem 0 0 0"
                                subtitle_font_size="1.6rem"
                                line_height={is_mobile ? '20px' : '24px'}
                            />
                        </ContentWrapper>
                    </FlexWrapper>
                </div>
            ))}
        </>
    )
}

export default StepperView
