import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import device from 'themes/device'

type TItem = {
    title: () => JSX.Element
    image: () => JSX.Element
}

type TProps = {
    items: TItem[]
    default_step?: number
    onStepChanged?: (step: number) => void
    renderFooter?: () => JSX.Element
    contentWidth?: string
    reverse?: boolean
    imageWidth?: string
}

type ItemsWrapperProps = {
    width?: string
}
type ImageWrapperProps = {
    width?: string
}
const Wrapper = styled.div<{ reverse: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

    @media ${device.tabletL} {
        flex-direction: column;
        gap: 24px;
        padding: 40px 20px 0;
        width: 100%;
        align-items: flex-start;
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

const StepperView: React.FC<TProps> = ({
    items,
    default_step = 0,
    onStepChanged,
    renderFooter,
    contentWidth,
    reverse = false,
    imageWidth,
}) => {
    const [selected, setSelected] = useState<number>(default_step)

    useEffect(() => {
        onStepChanged?.(selected)
    }, [selected, onStepChanged])

    useEffect(() => setSelected(default_step), [items, default_step])

    return (
        <Wrapper reverse={reverse}>
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
                            {item.title()}
                        </li>
                    ))}
                </UlStyle>
                {renderFooter?.()}
            </ItemsWrapper>
        </Wrapper>
    )
}

export default React.memo(StepperView)
