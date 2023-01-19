import React, { useEffect, useState } from 'react'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { QueryImage } from 'components/elements'
import device from 'themes/device'

type TItem = {
    title: JSX.Element
    image: ImageDataLike
    alt: JSX.Element
}

type TProps = {
    items: TItem[]
    default_step?: number
    onStepChanged?: (step: number) => void
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    padding: 40px 120px;
    gap: 222px;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        gap: 24px;
        width: min-content;
        padding: 40px 20px;
    }
`
const ItemsWrapper = styled.div`
    flex: 2;

    @media ${device.tabletL} {
        width: 320px;
        padding-left: 16px;
    }
`

const ImageWrapper = styled.div`
    flex: 1;
    max-width: 80%;
`

const UlStyle = styled.ul`
    list-style-type: decimal;
    font-size: var(--text-size-m);
    line-height: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    cursor: pointer;

    @media ${device.mobileL} {
        cursor: none;
        gap: 16px;
        font-size: 18px;
    }
`

const StepperView: React.FC<TProps> = ({ items, default_step = 0, onStepChanged }) => {
    const [selected, setSelected] = useState<number>(default_step)

    useEffect(() => {
        onStepChanged?.(selected)
    }, [selected, onStepChanged])

    useEffect(() => setSelected(default_step), [items, default_step])

    return (
        <Wrapper>
            <ItemsWrapper>
                <UlStyle>
                    {items.map((item, index) => (
                        <li
                            key={`${item.title}-${index}`}
                            style={{
                                fontWeight: selected === index ? 'bold' : 'normal',
                                color:
                                    selected === index
                                        ? 'var(--color-black-3)'
                                        : 'var(--color-grey-5)',
                            }}
                            onClick={() => setSelected(index)}
                        >
                            {item.title}
                        </li>
                    ))}
                </UlStyle>
            </ItemsWrapper>
            <ImageWrapper>
                <QueryImage data={items[selected].image} alt={items[selected].alt} />
            </ImageWrapper>
        </Wrapper>
    )
}

export default React.memo(StepperView)
