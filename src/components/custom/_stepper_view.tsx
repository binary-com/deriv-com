import React, { useEffect, useState } from 'react'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { QueryImage } from 'components/elements'
import device from 'themes/device'
import { localize } from 'components/localization'

type TItem = {
    title: string
    image: ImageDataLike
    alt: JSX.Element
}

type TProps = {
    items: TItem[]
    default_step?: number
    onStepChanged?: (step: number) => void
    renderFooter?: () => JSX.Element
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    gap: 60px;

    @media ${device.tabletL} {
        flex-direction: column;
        gap: 24px;
        padding: 40px 20px 0;
        width: 100%;
        align-items: flex-start;
    }
`
const ItemsWrapper = styled.div`
    max-width: 230px;
    width: 100%;

    @media ${device.tabletL} {
        width: 100%;
        max-width: 100%;
        padding-left: 16px;
    }
`

const ImageWrapper = styled.div`
    flex: 1;
`

const UlStyle = styled.ul`
    font-size: var(--text-size-m);
    line-height: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    cursor: pointer;
    font-family: Ubuntu, sans-serif;

    li {
        color: var(--color-black-3);
    }
    @media ${device.mobileL} {
        cursor: none;
        gap: 16px;
        font-size: 18px;
        align-items: left;
    }
`

const StepperView: React.FC<TProps> = ({
    items,
    default_step = 0,
    onStepChanged,
    renderFooter,
}) => {
    const [selected, setSelected] = useState<number>(default_step)

    useEffect(() => {
        onStepChanged?.(selected)
    }, [selected, onStepChanged])

    useEffect(() => setSelected(default_step), [items, default_step])

    return (
        <Wrapper>
            <ImageWrapper>
                <QueryImage data={items[selected].image} alt={items[selected].alt} />
            </ImageWrapper>
            <ItemsWrapper>
                <UlStyle>
                    {items.map((item, index) => (
                        <li
                            key={`${item.title}-${index}`}
                            style={{
                                fontWeight: selected === index ? 'bold' : 'normal',
                            }}
                            onClick={() => setSelected(index)}
                        >
                            {localize(`_t_${index + 1}. ${item.title}_t_`)}
                        </li>
                    ))}
                </UlStyle>
                {renderFooter?.()}
            </ItemsWrapper>
        </Wrapper>
    )
}

export default React.memo(StepperView)
