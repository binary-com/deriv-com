import styled from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'

type PointerProps = {
    ml?: string
    is_top?: boolean
}

export const FormulaBottomWrapper = styled(Flex)`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 16px;
    height: auto;
`
export const FormulaContainer = styled(Flex)`
    width: 100%;
    height: 108px;
    margin: 16px 0 0;
    border-radius: 8px;
    border: 1.5px solid var(--color-grey-21);
    padding: 1.6rem;

    :first-child {
        margin: 0;
    }

    @media ${device.tabletL} {
        height: auto;
        margin: 8px 0 0;

        :first-child {
            margin: 8px 0 0;
        }
    }
`
export const FormulaContainerMobileOneLine = styled(Flex)`
    margin: 8px 0 0;
    border-radius: 8px;
    border: 1.5px solid var(--color-grey-21);
    padding: 1.6rem;
`
export const FormulaGreen = styled.span`
    display: inline-block;
`
export const FormulaHighlight = styled(Flex)`
    width: 100%;
    border-radius: 4px;
    background-color: var(--color-white);
    align-items: flex-start;

    @media ${device.tabletL} {
        flex-direction: column;
        max-width: 300px;
    }
`
export const FormulaResultGreen = styled.span`
    display: inline-block;
    color: var(--color-blue-5);
    margin-right: 0.8rem;
`
export const FormulaResult = styled.div`
    border-radius: 4px;
    background-color: var(--color-grey-39);
    padding: 0.8rem;
    margin-left: 2.4rem;

    @media ${device.tabletL} {
        margin-left: 0.8rem;
    }
`
export const FormulaTopWrapper = styled(Flex)`
    flex-direction: row;
    height: auto;
    margin-top: ${(props) => (props.oneLine ? '0' : '50px')};
    align-items: flex-start;
`
export const FormulaValueMobile = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 1.8rem;
    position: relative;
    font-size: 14px;
    font-weight: normal;
    color: var(--color-black-3);

    :first-child {
        margin: 0 2.4rem 0 0;
    }
    :last-child {
        margin: 0 0 0 2.4rem;
    }

    @media (max-width: 340px) {
        margin: 0 1.4rem;

        :first-child {
            margin: 0 1.6rem 0 0;
        }
        :last-child {
            margin: 0 0 0 1.6rem;
        }
    }
`
export const FormulaValueMobileOneLine = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 0.8rem;
    padding: 0.8rem 0;
    position: relative;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    color: var(--color-black-3);

    :first-child {
        margin: 0 0.8rem 0 0;
    }
    :last-child {
        margin: 0 0 0 0.8rem;
    }
`
export const FormulaValueResultSwapSynthetic = styled(Flex)`
    flex-direction: row;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
`
export const FormulaValueSwapSynthetic = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    color: var(--color-black-3);
    font-weight: normal;
    margin-top: 0.8rem;
    margin-left: 1.8rem;
    margin-right: 1.8rem;
`

export const PointerContainer = styled.div<PointerProps>`
    display: flex;
    margin-top: 8px;
    flex-direction: column;
    align-items: center;
    margin-left: ${(props) => props.ml || '0'};

    @media ${device.tabletL} {
        position: absolute;
        margin-top: ${(props) => (props.is_top ? '0' : '8px')};
        flex-direction: ${(props) => (props.is_top ? 'column-reverse' : 'column')};
        top: ${(props) => (props.is_top ? '-16px' : 'unset')};
        margin-left: ${(props) => (props.is_top ? '0' : '20px')};
        left: ${(props) => (props.is_top ? '50%' : 'unset')};
        transform: ${(props) => (props.is_top ? 'translate(-50%, -50%)' : 'unset')};
    }
`
export const PointerContainerMobile = styled.div<PointerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${(props) => props.ml || '0'};
`
export const PointerDot = styled.div`
    height: 5px;
    width: 5px;
    border: 1px solid black;
    border-radius: 50%;
    opacity: 0.1;
`
export const PointerStick = styled.div`
    position: relative;
    height: 16px;
    width: 1px;
    background-color: black;
    opacity: 0.1;
`
export const PointerText = styled.div<PointerProps>`
    font-size: 14px;
    font-weight: normal;
    color: var(--color-grey-5);
    position: absolute;
    margin-top: 20px;

    @media ${device.tabletL} {
        width: 110px;
        margin: ${(props) => (props.is_top ? '0 0 26px' : '26px 0 0')};
        right: ${(props) => (props.is_top ? '-8px' : 'unset')};
        left: ${(props) => (props.is_top ? 'unset' : '-20px')};
        text-align: ${(props) => (props.is_top ? 'right' : 'left')};
    }

    @media (max-width: 340px) {
        font-size: 12px;
    }
`
export const PointerTextMobile = styled.div`
    font-size: 14px;
    font-weight: normal;
    color: var(--color-grey-5);
    line-height: 21px;
    text-align: center;

    @media (max-width: 340px) {
        font-size: 12px;
    }
`
export const ResultStrong = styled.span`
    font-weight: bold;
    margin-right: 0.4rem;
    color: var(--color-black-3);
`
