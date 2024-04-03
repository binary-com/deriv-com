import React from 'react'
import styled, { css } from 'styled-components'
import { useIsRtl } from 'components/hooks/use-isrtl'
import CommonHeaderSection from 'components/elements/common-header-section'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { TString } from 'types/generics'

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
    items: {
        title?: TString
        subtitle?: TString
    }[]
} & Pick<StepperViewTickProps, 'pb' | 'pl'>

const handleLastBorder = (index, items) => {
    if (index !== items.length - 1) {
        return true
    }
    return false
}

const StepperView = ({ pb, items }: StepperViewProps) => {
    const [is_mobile] = useBrowserResize()

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
