import styled, { css } from 'styled-components'
import { Header } from '../typography'
import { Flex } from 'components/containers'
import device from 'themes/device'

export const MarketsContainer = styled.div`
    margin: 20px auto;
    overflow-y: hidden;
    overflow-x: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 2rem;
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }
    @media ${device.tablet} {
        margin: 0;
        justify-content: flex-start;
    }
`
export const ContainerWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    margin: 0 auto;
    padding: 2rem;
    width: 60%;
    @media ${device.tablet} {
        width: 100vw;
        padding: 3rem 4.3rem 0;
    }
`
export const MarketButton = styled.button<{ selected: boolean }>`
    margin: 0;
    min-height: 48px;
    position: relative;
    border-bottom: 2px solid red;
    background: none;
    border: none;
    padding: 16px 40px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    white-space: nowrap;

    ${Header} {
        font-weight: normal;
        font-size: 2rem;
        color: var(--color-grey-5);
    }

    ${({ selected }) =>
        selected
            ? css`
                  border-bottom: 2px solid red;
                  & ${Header} {
                      color: var(--color-red);
                  }
              `
            : css`
                  border-bottom: 2px solid var(--color-grey-8);
                  & ${Header} {
                  }
              `}
    @media ${device.tablet} {
        padding: 16px 20px;
    }
`
export const SVGWrapper = styled.svg<{ selected: boolean }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-bottom: 10px;
    ${({ selected }) =>
        selected
            ? css`
                  stroke: #ff444f;
              `
            : css`
                  stroke: #414652;
              `}
`
