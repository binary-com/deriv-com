import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { TString } from 'types/generics'

type TStepperViewItem = {
    title: () => TString
    title_components?: () => React.ReactElement[]
    image: () => JSX.Element
}

type TStepperView = {
    items: TStepperViewItem[]
    default_step?: number
    onStepChanged?: (step: number) => void
    renderFooter?: () => JSX.Element
    contentWidth?: string
    reverse?: boolean
    imageWidth?: string
    gap?: string
}

type ItemsWrapperProps = {
    width?: string
}

type ImageWrapperProps = {
    width?: string
}

const Wrapper = styled.div<{ reverse: boolean; gap: string }>`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    gap: ${(props) => props.gap};
    @media ${device.tabletL} {
        flex-direction: column;
        gap: 24px;
        padding: 40px 20px 0;
        width: 100%;
        align-items: flex-start;
    }
    @media ${device.tablet} {
        padding-inline: 0;
    }
`
const ItemsWrapper = styled.div<ItemsWrapperProps>`
    max-width: ${(props) => (props.width ? props.width : '230px')};
    width: 100%;

    @media ${device.tabletL} {
        width: 100%;
        max-width: 100%;
        padding-left: 16px;
    }
`
const ImageWrapper = styled.div`
    flex: 1;
    margin: 0 auto;
`
const UlStyle = styled.ul`
    font-size: var(--text-size-m);
    line-height: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    cursor: pointer;

    li {
        color: var(--color-black-9);
    }
    @media ${device.mobileL} {
        cursor: none;
        gap: 16px;
        font-size: 18px;
        align-items: left;
    }
`
const ImageInnerBox = styled.div<ImageWrapperProps>`
    max-width: ${(props) => (props.width ? props.width : 'inherit')};
    width: 100%;
    margin: 0 auto;
`

const StepperView = ({
    items,
    default_step = 0,
    onStepChanged,
    renderFooter,
    contentWidth,
    reverse = false,
    imageWidth,
    gap = '60px',
}: TStepperView) => {
    const [selected, setSelected] = useState<number>(default_step)

    useEffect(() => {
        onStepChanged?.(selected)
    }, [selected, onStepChanged])

    useEffect(() => {
        setSelected(default_step)
    }, [items, default_step])

    return (
        <Wrapper reverse={reverse} gap={gap}>
            <ImageWrapper>
                <ImageInnerBox width={imageWidth}>{items[selected]?.image()}</ImageInnerBox>
            </ImageWrapper>
            <ItemsWrapper width={contentWidth}>
                <UlStyle>
                    {items.map((item, index) => (
                        <li
                            key={`${item.title}-${index}`}
                            style={{ fontWeight: selected === index ? 'bold' : 'normal' }}
                            onClick={() => setSelected(index)}
                        >
                            {`${index + 1}. `}
                            <Localize
                                translate_text={item.title()}
                                components={item?.title_components?.()}
                            />
                        </li>
                    ))}
                </UlStyle>
                {renderFooter?.()}
            </ItemsWrapper>
        </Wrapper>
    )
}

export default React.memo(StepperView)
